// solver.js — turns the face tracker's output into what the renderer needs:
//   1. a smoothed head pose,
//   2. a "personal fit" (small stretch of the standard skull so it matches this face's proportions),
//   3. the jaw opening angle.
// Pure math: no DOM, no three.js, so it also runs under Node for tests.
//
// Coordinates: the tracker's canonical face frame, in cm (+x subject's left, +y up, +z out of the face).
// Camera: pinhole at the origin looking down -Z, vertical field of view 63 degrees (the tracker's own assumption).

export const FOV_V_DEG = 63;
const TAN_HALF = Math.tan((FOV_V_DEG * Math.PI) / 360);
const DEG = Math.PI / 180;

// Landmark groups (indices in the tracker's 468-point face topology) and how much each
// constrains the fit sideways (wx) and vertically (wy), measured along the face's own axes.
const FIT_GROUPS = [
  { ids: [33, 133, 362, 263, 159, 145, 386, 374], wx: 1.0, wy: 1.2 },   // eye corners and lids
  { ids: [168, 6, 197], wx: 0.3, wy: 1.0 },                             // root and bridge of the nose
  { ids: [2, 94, 98, 327, 129, 358], wx: 0.3, wy: 0.8 },                // base of the nose
  { ids: [10, 151, 9, 67, 297, 109, 338, 69, 299], wx: 0.2, wy: 0.7 },  // forehead
  { ids: [234, 454, 127, 356, 93, 323, 132, 361], wx: 0.6, wy: 0.0 },   // face outline: width only
];
const CHIN = [152, 148, 377, 175, 171, 396, 176, 400, 199, 200];        // skin that rides on the mandible
// Landmarks on rigid, central parts of the face (brow ridge, eye corners, nose, cheeks in front of the cheekbones).
const RIGID_CENTRAL = [168, 6, 197, 195, 5, 4, 1, 2, 94, 98, 327, 129, 358, 33, 133, 362, 263, 130, 359, 243, 463, 9, 151, 10, 108, 337, 67, 297,
  69, 299, 105, 334, 107, 336, 117, 346, 118, 347, 119, 348, 50, 280, 205, 425, 36, 266, 203, 423, 48, 278, 49, 279, 64, 294, 240, 460, 100, 329, 101, 330];
const CHIN_FIT = { wx: 0.2, wy: 1.5 };
const EYE_CORNERS = [33, 133, 362, 263];

export const FIT_KEYS = ['sx', 'sUp', 'sLow'];      // ty stays in the fit object (0): sideways / vertical placement is refined with the pose
export const FIT_LIMITS = { sx: [0.9, 1.18], sUp: [0.9, 1.18], sLow: [0.92, 1.36], ty: [-1.2, 1.2] };
export const FIT_IDENTITY = { sx: 1, sUp: 1, sLow: 1, ty: 0 };
const BLEND_HALF = 1.0;   // cm: height over which the upper and lower vertical scales blend at eye level

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const smooth01 = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------- warp (personal fit)

/** Geometry of the warp, derived from the model's own reference landmarks. */
export function warpFrame(meta) {
  const L = meta.landmarks;
  let y = 0, z = 0;
  for (const i of EYE_CORNERS) { y += L[i][1]; z += L[i][2]; }
  return { y0: y / EYE_CORNERS.length, z0: z / EYE_CORNERS.length, blend: BLEND_HALF };
}

/**
 * Stretch a point of the standard model to this face's proportions.
 * sx: width and depth, sUp: height above eye level, sLow: height below eye level, ty: vertical shift.
 */
export function warpPoint(fr, fit, x, y, z, out, o = 0) {
  const t = smooth01((y - (fr.y0 - fr.blend)) / (2 * fr.blend));
  const sy = fit.sLow + (fit.sUp - fit.sLow) * t;
  out[o] = fit.sx * x;
  out[o + 1] = fr.y0 + fit.ty + (y - fr.y0) * sy;
  out[o + 2] = fr.z0 + (z - fr.z0) * fit.sx;
  return out;
}

/** Warp a whole Float32Array of xyz triples (used for the mesh vertices). */
export function warpArray(fr, fit, src, dst) {
  const { y0, z0, blend } = fr; const { sx, sUp, sLow, ty } = fit;
  const lo = y0 - blend, inv = 1 / (2 * blend);
  for (let i = 0; i < src.length; i += 3) {
    const y = src[i + 1];
    let t = (y - lo) * inv; t = t < 0 ? 0 : t > 1 ? 1 : t; t = t * t * (3 - 2 * t);
    dst[i] = sx * src[i];
    dst[i + 1] = y0 + ty + (y - y0) * (sLow + (sUp - sLow) * t);
    dst[i + 2] = z0 + (src[i + 2] - z0) * sx;
  }
  return dst;
}

// ---------------------------------------------------------------- jaw kinematics

/**
 * Jaw hinge expressed in warped space: rotation about the axis through both condyles,
 * plus the forward-and-down slide of the condyles along the articular eminence.
 */
export function jawFrame(meta, fr, fit) {
  const j = meta.jaw;
  const c = [(j.condyleR[0] + j.condyleL[0]) / 2, (j.condyleR[1] + j.condyleL[1]) / 2, (j.condyleR[2] + j.condyleL[2]) / 2];
  const cw = warpPoint(fr, fit, c[0], c[1], c[2], [0, 0, 0]);
  const aw = warpPoint(fr, fit, c[0] + j.axis[0], c[1] + j.axis[1], c[2] + j.axis[2], [0, 0, 0]);
  const sw = warpPoint(fr, fit, c[0] + j.slideDir[0], c[1] + j.slideDir[1], c[2] + j.slideDir[2], [0, 0, 0]);
  const a = [aw[0] - cw[0], aw[1] - cw[1], aw[2] - cw[2]];
  const n = Math.hypot(a[0], a[1], a[2]);
  return {
    c: cw, a: [a[0] / n, a[1] / n, a[2] / n],
    slide: [sw[0] - cw[0], sw[1] - cw[1], sw[2] - cw[2]],
    slideMax: j.slideMax, thetaMax: j.thetaMax, slideExp: j.slideExp,
  };
}

export function jawSlide(jf, thetaDeg) {
  return jf.slideMax * Math.pow(clamp(thetaDeg, 0, jf.thetaMax) / jf.thetaMax, jf.slideExp);
}

/** 4x4 column-major matrix of the jaw motion for an opening angle (degrees). */
export function jawMatrix(jf, thetaDeg, out = new Float64Array(16)) {
  const th = thetaDeg * DEG, c = Math.cos(th), s = Math.sin(th), k = 1 - c;
  const [x, y, z] = jf.a;
  const r00 = c + x * x * k, r01 = x * y * k - z * s, r02 = x * z * k + y * s;
  const r10 = y * x * k + z * s, r11 = c + y * y * k, r12 = y * z * k - x * s;
  const r20 = z * x * k - y * s, r21 = z * y * k + x * s, r22 = c + z * z * k;
  const d = jawSlide(jf, thetaDeg);
  const cx = jf.c[0], cy = jf.c[1], cz = jf.c[2];
  out[0] = r00; out[1] = r10; out[2] = r20; out[3] = 0;
  out[4] = r01; out[5] = r11; out[6] = r21; out[7] = 0;
  out[8] = r02; out[9] = r12; out[10] = r22; out[11] = 0;
  out[12] = cx + d * jf.slide[0] - (r00 * cx + r01 * cy + r02 * cz);
  out[13] = cy + d * jf.slide[1] - (r10 * cx + r11 * cy + r12 * cz);
  out[14] = cz + d * jf.slide[2] - (r20 * cx + r21 * cy + r22 * cz);
  out[15] = 1;
  return out;
}

// ---------------------------------------------------------------- small matrix helpers (column-major 4x4)

export function xform(m, x, y, z, out, o = 0) {
  out[o] = m[0] * x + m[4] * y + m[8] * z + m[12];
  out[o + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
  out[o + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
  return out;
}

function quatFromMat(m, s) {
  const m00 = m[0] / s, m10 = m[1] / s, m20 = m[2] / s, m01 = m[4] / s, m11 = m[5] / s, m21 = m[6] / s, m02 = m[8] / s, m12 = m[9] / s, m22 = m[10] / s;
  const tr = m00 + m11 + m22; let x, y, z, w;
  if (tr > 0) { const S = Math.sqrt(tr + 1) * 2; w = S / 4; x = (m21 - m12) / S; y = (m02 - m20) / S; z = (m10 - m01) / S; }
  else if (m00 > m11 && m00 > m22) { const S = Math.sqrt(1 + m00 - m11 - m22) * 2; w = (m21 - m12) / S; x = S / 4; y = (m01 + m10) / S; z = (m02 + m20) / S; }
  else if (m11 > m22) { const S = Math.sqrt(1 + m11 - m00 - m22) * 2; w = (m02 - m20) / S; x = (m01 + m10) / S; y = S / 4; z = (m12 + m21) / S; }
  else { const S = Math.sqrt(1 + m22 - m00 - m11) * 2; w = (m10 - m01) / S; x = (m02 + m20) / S; y = (m12 + m21) / S; z = S / 4; }
  return [x, y, z, w];
}

function slerp(a, b, t) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];
  if (d < 0) { d = -d; bx = -bx; by = -by; bz = -bz; bw = -bw; }
  if (d > 0.9995) {
    const q = [a[0] + t * (bx - a[0]), a[1] + t * (by - a[1]), a[2] + t * (bz - a[2]), a[3] + t * (bw - a[3])];
    const n = Math.hypot(q[0], q[1], q[2], q[3]); return [q[0] / n, q[1] / n, q[2] / n, q[3] / n];
  }
  const th = Math.acos(d), s = Math.sin(th), wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
  return [a[0] * wa + bx * wb, a[1] * wa + by * wb, a[2] * wa + bz * wb, a[3] * wa + bw * wb];
}

function composeMat(q, t, s, out) {
  const [x, y, z, w] = q;
  const xx = x * x, yy = y * y, zz = z * z, xy = x * y, xz = x * z, yz = y * z, wx = w * x, wy = w * y, wz = w * z;
  out[0] = s * (1 - 2 * (yy + zz)); out[1] = s * (2 * (xy + wz)); out[2] = s * (2 * (xz - wy)); out[3] = 0;
  out[4] = s * (2 * (xy - wz)); out[5] = s * (1 - 2 * (xx + zz)); out[6] = s * (2 * (yz + wx)); out[7] = 0;
  out[8] = s * (2 * (xz + wy)); out[9] = s * (2 * (yz - wx)); out[10] = s * (1 - 2 * (xx + yy)); out[11] = 0;
  out[12] = t[0]; out[13] = t[1]; out[14] = t[2]; out[15] = 1;
  return out;
}

function solveN(A, b, n) {
  // Gaussian elimination with partial pivoting; A is row-major n*n, b has n entries
  const M = [];
  for (let r = 0; r < n; r++) { const row = new Float64Array(n + 1); for (let c = 0; c < n; c++) row[c] = A[r * n + c]; row[n] = b[r]; M.push(row); }
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < 1e-14) return null;
    const tmp = M[c]; M[c] = M[p]; M[p] = tmp;
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  const x = new Array(n);
  for (let r = 0; r < n; r++) x[r] = M[r][n] / M[r][r];
  return x;
}

// ---------------------------------------------------------------- the solver

export class FaceSolver {
  constructor(meta, opts = {}) {
    this.meta = meta;
    this.fr = warpFrame(meta);
    const L = meta.landmarks;
    this.ref = new Float64Array(L.length * 3);
    for (let i = 0; i < L.length; i++) { this.ref[i * 3] = L[i][0]; this.ref[i * 3 + 1] = L[i][1]; this.ref[i * 3 + 2] = L[i][2]; }
    // which way the head faces, in canonical coordinates (the alignment rotation's third column)
    const A = meta.alignment;
    const f = [A[0][2], A[1][2], A[2][2]]; const fn = Math.hypot(f[0], f[1], f[2]);
    this.fwd = [f[0] / fn, f[1] / fn, f[2] / fn];
    this.defaultFit = { ...FIT_IDENTITY, ...(meta.defaultFit || {}), ...(opts.defaultFit || {}) };
    this.adapt = opts.adapt !== false;
    this.refine = opts.refine !== false;
    this.headC = [0, this.fr.y0, this.fr.z0 - 8.5];      // roughly the middle of the head: landmark "normals" point away from it
    this._mref = new Float64Array(16);
    this.reset();
    // fit rows: landmark id + weights
    this.rows = [];
    for (const g of FIT_GROUPS) for (const id of g.ids) this.rows.push({ id, wx: g.wx, wy: g.wy, chin: false });
    for (const id of CHIN) this.rows.push({ id, wx: CHIN_FIT.wx, wy: CHIN_FIT.wy, chin: true });
    this._w = [0, 0, 0]; this._p = [0, 0, 0]; this._j = new Float64Array(16);
  }

  reset() {
    this.fit = { ...this.defaultFit };
    this.fitSamples = 0;
    this.theta = 0;
    this.pose = null;
    this.minJawOpen = 1;
    this.lastMs = 0;
    this._jf = null; this._jfKey = '';
  }

  _jaw(fit) {
    const key = fit.sx.toFixed(4) + '|' + fit.sUp.toFixed(4) + '|' + fit.sLow.toFixed(4) + '|' + fit.ty.toFixed(3);
    if (key !== this._jfKey) { this._jf = jawFrame(this.meta, this.fr, fit); this._jfKey = key; }
    return this._jf;
  }

  /** Project a reference landmark (after warp, optionally after jaw motion) with pose m. Returns tangent-plane x,y. */
  _proj(m, fit, id, jawMat, out) {
    const r = this.ref, w = this._w, p = this._p;
    warpPoint(this.fr, fit, r[id * 3], r[id * 3 + 1], r[id * 3 + 2], w);
    if (jawMat) xform(jawMat, w[0], w[1], w[2], w);
    xform(m, w[0], w[1], w[2], p);
    const iz = -1 / p[2];
    out[0] = p[0] * iz; out[1] = p[1] * iz;
    return out;
  }

  _jawCost(m, fit, obs, thetaDeg) {
    const jm = jawMatrix(this._jaw(fit), thetaDeg, this._j);
    let e = 0; const q = [0, 0];
    for (const id of CHIN) {
      this._proj(m, fit, id, jm, q);
      const dx = q[0] - obs[id * 2], dy = q[1] - obs[id * 2 + 1];
      e += dx * dx + dy * dy;
    }
    return e;
  }

  _solveJaw(m, fit, obs) {
    const jf = this._jaw(fit);
    const lo = -3, hi = jf.thetaMax + 2;
    let best = 0, bestE = Infinity;
    for (let th = lo; th <= hi + 1e-6; th += 2.5) {
      const e = this._jawCost(m, fit, obs, th);
      if (e < bestE) { bestE = e; best = th; }
    }
    let a = Math.max(lo, best - 2.5), b = Math.min(hi, best + 2.5);
    const g = 0.6180339887;
    let x1 = b - g * (b - a), x2 = a + g * (b - a);
    let e1 = this._jawCost(m, fit, obs, x1), e2 = this._jawCost(m, fit, obs, x2);
    for (let i = 0; i < 9; i++) {
      if (e1 < e2) { b = x2; x2 = x1; e2 = e1; x1 = b - g * (b - a); e1 = this._jawCost(m, fit, obs, x1); }
      else { a = x1; x1 = x2; e1 = e2; x2 = a + g * (b - a); e2 = this._jawCost(m, fit, obs, x2); }
    }
    return { theta: (a + b) / 2, cost: Math.min(e1, e2) / CHIN.length };
  }

  _residuals(m, fit, obs, ex, ey, out) {
    const q = [0, 0]; let k = 0;
    for (const row of this.rows) {
      this._proj(m, fit, row.id, null, q);
      const dx = q[0] - obs[row.id * 2], dy = q[1] - obs[row.id * 2 + 1];
      out[k++] = row.wx * (dx * ex[0] + dy * ex[1]);
      out[k++] = row.wy * (dx * ey[0] + dy * ey[1]);
    }
    return out;
  }

  /** One frame's estimate of the personal fit (Gauss-Newton on the reprojection error). */
  _solveFit(m, obs, start, free = null) {
    // image-plane directions of the face's own x and y axes
    let ex = [m[0], m[1]], ey = [m[4], m[5]];
    let n = Math.hypot(ex[0], ex[1]) || 1; ex = [ex[0] / n, ex[1] / n];
    n = Math.hypot(ey[0], ey[1]) || 1; ey = [ey[0] / n, ey[1] / n];
    const N = this.rows.length * 2, K = FIT_KEYS.length;
    const r0 = new Float64Array(N), r1 = new Float64Array(N), hub = new Float64Array(N);
    const J = FIT_KEYS.map(() => new Float64Array(N));
    const eps = [0.01, 0.01, 0.01];
    // weak prior toward the defaults keeps poorly observed parameters from drifting
    const sig = [0.06, 0.05, 0.12], sigR = 0.004, kH = 0.012;
    const p = { ...start };
    for (let it = 0; it < 3; it++) {
      this._residuals(m, p, obs, ex, ey, r0);
      for (let i = 0; i < N; i++) { const a = Math.abs(r0[i]); hub[i] = a <= kH ? 1 : kH / a; }   // robust (Huber) weights
      for (let k = 0; k < K; k++) {
        const q = { ...p }; q[FIT_KEYS[k]] += eps[k];
        this._residuals(m, q, obs, ex, ey, r1);
        for (let i = 0; i < N; i++) J[k][i] = (r1[i] - r0[i]) / eps[k];
      }
      const A = new Float64Array(K * K), b = new Float64Array(K);
      for (let i = 0; i < N; i++) {
        const w = hub[i];
        for (let a = 0; a < K; a++) {
          b[a] -= w * J[a][i] * r0[i];
          for (let c = 0; c < K; c++) A[a * K + c] += w * J[a][i] * J[c][i];
        }
      }
      for (let k = 0; k < K; k++) {
        const mu = 0.02 * N * (sigR / sig[k]) ** 2;
        A[k * K + k] += mu; b[k] -= mu * (p[FIT_KEYS[k]] - this.defaultFit[FIT_KEYS[k]]);
        if (free && !free[k]) {                  // hold this parameter where it is
          for (let c = 0; c < K; c++) { A[k * K + c] = 0; A[c * K + k] = 0; }
          A[k * K + k] = 1; b[k] = 0;
        }
      }
      const d = solveN(A, b, K);
      if (!d) break;
      for (let k = 0; k < K; k++) { const key = FIT_KEYS[k]; p[key] = clamp(p[key] + d[k], FIT_LIMITS[key][0], FIT_LIMITS[key][1]); }
    }
    return p;
  }

  /**
   * Refine the tracker's head pose so that the model's own rigid, central landmarks land on the observed ones.
   * The tracker fits a generic face; this removes the small slide that appears when the head turns.
   * Unknowns: a small rotation about the face centre and a shift in the image plane (depth is left alone).
   * A prior keeps the result close to the tracker's pose.
   */
  _refinePose(m, obs, out) {
    const ids = RIGID_CENTRAL, n = ids.length;
    const B = this._B || (this._B = new Float64Array(n * 3)), wt = this._wt || (this._wt = new Float64Array(n));
    const w3 = this._w, r = this.ref;
    for (let i = 0; i < 16; i++) out[i] = m[i];
    const hc = this.headC;
    for (let it = 0; it < 2; it++) {
      let cx = 0, cy = 0, cz = 0;
      for (let k = 0; k < n; k++) {
        const id = ids[k];
        warpPoint(this.fr, this.fit, r[id * 3], r[id * 3 + 1], r[id * 3 + 2], w3);
        // facing weight: landmarks turned away from the camera are guesses
        const nx = w3[0] - hc[0], ny = w3[1] - hc[1], nz = w3[2] - hc[2];
        const ncx = out[0] * nx + out[4] * ny + out[8] * nz, ncy = out[1] * nx + out[5] * ny + out[9] * nz, ncz = out[2] * nx + out[6] * ny + out[10] * nz;
        xform(out, w3[0], w3[1], w3[2], B, k * 3);
        const bl = Math.hypot(B[k * 3], B[k * 3 + 1], B[k * 3 + 2]) || 1, nl = Math.hypot(ncx, ncy, ncz) || 1;
        const facing = -(ncx * B[k * 3] + ncy * B[k * 3 + 1] + ncz * B[k * 3 + 2]) / (bl * nl);
        wt[k] = clamp((facing - 0.1) / 0.5, 0.06, 1);
        cx += B[k * 3]; cy += B[k * 3 + 1]; cz += B[k * 3 + 2];
      }
      cx /= n; cy /= n; cz /= n;
      const A = this._A5 || (this._A5 = new Float64Array(25)), b = this._b5 || (this._b5 = new Float64Array(5));
      const Jx = this._Jx || (this._Jx = new Float64Array(5)), Jy = this._Jy || (this._Jy = new Float64Array(5));
      A.fill(0); b.fill(0);
      let sw = 0;
      for (let k = 0; k < n; k++) {
        const id = ids[k], px = B[k * 3], py = B[k * 3 + 1], pz = B[k * 3 + 2], d = -pz;
        const vx = px - cx, vy = py - cy, vz = pz - cz;
        const rx = px / d - obs[id * 2], ry = py / d - obs[id * 2 + 1];
        const a = Math.hypot(rx, ry), hub = a <= 0.012 ? 1 : 0.012 / a, w = wt[k] * hub;
        const ux = px / (d * d), uy = py / (d * d);
        // d(point)/d(omega) = omega x v ; projection derivative
        Jx[0] = ux * vy;                 Jy[0] = -vz / d + uy * vy;
        Jx[1] = vz / d - ux * vx;        Jy[1] = -uy * vx;
        Jx[2] = -vy / d;                 Jy[2] = vx / d;
        Jx[3] = 1 / d; Jy[3] = 0; Jx[4] = 0; Jy[4] = 1 / d;
        for (let p = 0; p < 5; p++) {
          b[p] -= w * (Jx[p] * rx + Jy[p] * ry);
          for (let q = 0; q < 5; q++) A[p * 5 + q] += w * (Jx[p] * Jx[q] + Jy[p] * Jy[q]);
        }
        sw += w;
      }
      // priors (per unit of residual variance): rotation ~3 deg, shift ~1.5 cm
      const sr = 0.004, mr = sw * (sr / 0.052) ** 2, mt = sw * (sr / 1.5) ** 2;
      A[0] += mr; A[6] += mr; A[12] += mr; A[18] += mt; A[24] += mt;
      if (it > 0) { for (let p = 0; p < 3; p++) b[p] -= mr * this._om[p]; b[3] -= mt * this._tau[0]; b[4] -= mt * this._tau[1]; }
      else { this._om = [0, 0, 0]; this._tau = [0, 0]; }
      const x = solveN(A, b, 5);
      if (!x) break;
      const wx = clamp(x[0], -0.12, 0.12), wy = clamp(x[1], -0.12, 0.12), wz = clamp(x[2], -0.12, 0.12), tx = clamp(x[3], -1.5, 1.5), ty = clamp(x[4], -1.5, 1.5);
      this._om[0] += wx; this._om[1] += wy; this._om[2] += wz; this._tau[0] += tx; this._tau[1] += ty;
      // apply: out = T(c + tau) R(omega) T(-c) out
      const th = Math.hypot(wx, wy, wz);
      let R = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (th > 1e-9) {
        const ax = wx / th, ay = wy / th, az = wz / th, c = Math.cos(th), sN = Math.sin(th), k1 = 1 - c;
        R = [c + ax * ax * k1, ax * ay * k1 - az * sN, ax * az * k1 + ay * sN,
          ay * ax * k1 + az * sN, c + ay * ay * k1, ay * az * k1 - ax * sN,
          az * ax * k1 - ay * sN, az * ay * k1 + ax * sN, c + az * az * k1];
      }
      for (let col = 0; col < 4; col++) {
        const x0 = out[col * 4] - (col === 3 ? cx : 0), y0 = out[col * 4 + 1] - (col === 3 ? cy : 0), z0 = out[col * 4 + 2] - (col === 3 ? cz : 0);
        out[col * 4] = R[0] * x0 + R[1] * y0 + R[2] * z0 + (col === 3 ? cx + tx : 0);
        out[col * 4 + 1] = R[3] * x0 + R[4] * y0 + R[5] * z0 + (col === 3 ? cy + ty : 0);
        out[col * 4 + 2] = R[6] * x0 + R[7] * y0 + R[8] * z0 + (col === 3 ? cz : 0);
      }
    }
    return out;
  }

  /** Diagnostic: how far (cm at the face, along the face's own x and y) the posed model's landmarks sit from the observed ones. */
  residualStats(m, obs, depth) {
    let ex = [m[0], m[1]], ey = [m[4], m[5]];
    let n = Math.hypot(ex[0], ex[1]) || 1; ex = [ex[0] / n, ex[1] / n];
    n = Math.hypot(ey[0], ey[1]) || 1; ey = [ey[0] / n, ey[1] / n];
    const q = [0, 0]; let sx = 0, sy = 0, ss = 0, c = 0;
    for (const id of RIGID_CENTRAL) {
      this._proj(m, this.fit, id, null, q);
      const dx = q[0] - obs[id * 2], dy = q[1] - obs[id * 2 + 1];
      const fx = (dx * ex[0] + dy * ex[1]) * depth, fy = (dx * ey[0] + dy * ey[1]) * depth;
      sx += fx; sy += fy; ss += fx * fx + fy * fy; c++;
    }
    return { dx: sx / c, dy: sy / c, rms: Math.sqrt(ss / c) };
  }

  /**
   * @param lm        tracker landmarks: array of {x,y,z} (normalized image coordinates), at least 468
   * @param mat       facial transformation matrix, 16 numbers, column-major
   * @param jawOpen   the tracker's jawOpen blendshape score (0..1), or null
   * @param aspect    image width / height
   * @param nowMs     timestamp
   */
  update(lm, mat, jawOpen, aspect, nowMs) {
    const obs = this._obs || (this._obs = new Float64Array(478 * 2));
    const kx = 2 * TAN_HALF * aspect, ky = 2 * TAN_HALF;
    const n = Math.min(lm.length, 478);
    for (let i = 0; i < n; i++) { obs[i * 2] = (lm[i].x - 0.5) * kx; obs[i * 2 + 1] = (0.5 - lm[i].y) * ky; }
    const m = this.refine ? this._refinePose(mat, obs, this._mref) : mat;

    // ----- how the head sits relative to the camera
    const f = this.fwd;
    const fc = [m[0] * f[0] + m[4] * f[1] + m[8] * f[2], m[1] * f[0] + m[5] * f[1] + m[9] * f[2], m[2] * f[0] + m[6] * f[1] + m[10] * f[2]];
    const tl = Math.hypot(m[12], m[13], m[14]) || 1, fl = Math.hypot(fc[0], fc[1], fc[2]) || 1;
    const cosOff = -(fc[0] * m[12] + fc[1] * m[13] + fc[2] * m[14]) / (tl * fl);
    const offAxis = Math.acos(clamp(cosOff, -1, 1)) / DEG;
    const depth = -m[14];

    // ----- is the mouth closed? (needed to tell "long chin" from "open mouth")
    const faceH = Math.hypot(obs[168 * 2] - obs[152 * 2], obs[168 * 2 + 1] - obs[152 * 2 + 1]) || 1e-6;
    const lipGap = Math.hypot(obs[13 * 2] - obs[14 * 2], obs[13 * 2 + 1] - obs[14 * 2 + 1]) / faceH;
    let closed;
    if (jawOpen == null) closed = lipGap < 0.03;
    else {
      this.minJawOpen = Math.min(this.minJawOpen + 0.0005, jawOpen);   // slowly forgetting running minimum
      closed = jawOpen < Math.max(0.07, this.minJawOpen + 0.04) && lipGap < 0.05;
    }

    // ----- personal fit: from closed-mouth frames. Width needs a near-frontal view; heights tolerate a turned head.
    const canAdapt = this.adapt && closed && offAxis < 40 && depth > 12 && depth < 150;
    if (canAdapt) {
      const p = this._solveFit(m, obs, this.fit, offAxis < 18 ? null : [false, true, true]);
      const a = this.fitSamples < 12 ? 0.3 : 0.06;
      const f = { ...this.fit };
      for (const key of FIT_KEYS) f[key] = this.fit[key] + a * (p[key] - this.fit[key]);
      this.fit = f;
      this.fitSamples++;
    }

    // ----- jaw angle from where the chin actually is
    const jr = this._solveJaw(m, this.fit, obs);
    let target = Math.max(0, jr.theta);
    if (closed && target < 2.5) target = 0;            // closed lips: treat tiny residuals as shut
    const dth = target - this.theta;
    this.theta += clamp(0.45 + Math.abs(dth) / 6, 0.45, 1) * dth;

    // ----- pose smoothing (more when still, none when moving fast)
    const s = Math.cbrt(Math.abs(
      m[0] * (m[5] * m[10] - m[6] * m[9]) - m[4] * (m[1] * m[10] - m[2] * m[9]) + m[8] * (m[1] * m[6] - m[2] * m[5]))) || 1;
    const q = quatFromMat(m, s), t = [m[12], m[13], m[14]];
    const dt = this.lastMs ? nowMs - this.lastMs : 0; this.lastMs = nowMs;
    if (!this.pose || dt > 400 || dt < 0) this.pose = { q, t, s };
    else {
      const P = this.pose;
      const dq = Math.abs(P.q[0] * q[0] + P.q[1] * q[1] + P.q[2] * q[2] + P.q[3] * q[3]);
      const ang = 2 * Math.acos(clamp(dq, 0, 1)) / DEG;                       // degrees moved since last frame
      const mv = Math.hypot(t[0] - P.t[0], t[1] - P.t[1], t[2] - P.t[2]) / Math.max(10, depth) * 100;  // % of distance
      const ar = clamp(0.35 + ang / 2.5, 0.35, 1), at = clamp(0.4 + mv / 1.2, 0.4, 1);
      P.q = slerp(P.q, q, ar);
      P.t = [P.t[0] + at * (t[0] - P.t[0]), P.t[1] + at * (t[1] - P.t[1]), P.t[2] + at * (t[2] - P.t[2])];
      P.s = s;
    }
    const pose = composeMat(this.pose.q, this.pose.t, this.pose.s, this._out || (this._out = new Float32Array(16)));
    const out = { pose, theta: this.theta, thetaRaw: jr.theta, fit: this.fit, closed, offAxis, depth, lipGap, jawCost: jr.cost, adapting: canAdapt };
    if (this.diagnostics) out.res = this.residualStats(m, obs, depth);
    return out;
  }
}
