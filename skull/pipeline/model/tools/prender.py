"""Perspective software renderer with smooth shading, depth and triangle-id output.

Camera model matches the face tracker's assumption: pinhole at the origin looking down -Z,
+Y up, vertical field of view 63 degrees, principal point at the image centre.
Build-time diagnostics/calibration only.
"""
import numpy as np
import cv2

FOV_V = 63.0


def focal_px(H, fov_v=FOV_V):
    return (H / 2.0) / np.tan(np.deg2rad(fov_v) / 2.0)


def project(vc, W, H, fov_v=FOV_V):
    f = focal_px(H, fov_v)
    z = -vc[:, 2]
    u = W / 2.0 + f * vc[:, 0] / z
    v = H / 2.0 - f * vc[:, 1] / z
    return np.stack([u, v], 1), z


def unproject(u, v, z, W, H, fov_v=FOV_V):
    f = focal_px(H, fov_v)
    x = (u - W / 2.0) * z / f
    y = -(v - H / 2.0) * z / f
    return np.stack([x, y, -z], -1)


def vertex_normals(v, f):
    n = np.cross(v[f[:, 1]] - v[f[:, 0]], v[f[:, 2]] - v[f[:, 0]])
    vn = np.zeros_like(v)
    for k in range(3):
        np.add.at(vn, f[:, k], n)
    vn /= (np.linalg.norm(vn, axis=1, keepdims=True) + 1e-12)
    return vn


def render_layers(layers, W, H, fov_v=FOV_V, ss=2, bg=(96, 112, 122), lights=None, near=1.0):
    """layers: list of dict(v=camera-space verts (N,3), f=faces, color=(r,g,b), vn=optional normals,
    spec=0.15)
    Returns dict(img=BGR uint8 HxWx3, depth=HxW float (positive distance along -Z, inf where empty),
                 layer=HxW int (-1 empty), tri=HxW int, bary=HxWx3)
    """
    Ws, Hs = W * ss, H * ss
    allp, allz, allf, alll, offs = [], [], [], [], []
    off = 0
    vs, ns, cols, specs = [], [], [], []
    for li, L in enumerate(layers):
        v = np.asarray(L["v"], float)
        f = np.asarray(L["f"])
        vn = L.get("vn")
        if vn is None:
            vn = vertex_normals(v, f)
        p, z = project(v, Ws, Hs, fov_v)
        ok = (z[f] > near).all(1)
        f = f[ok]
        allp.append(p)
        allz.append(z)
        allf.append(f + off)
        alll.append(np.full(len(f), li))
        vs.append(v)
        ns.append(vn)
        if L.get("vcol") is not None:
            cols.append(np.asarray(L["vcol"], float))
        else:
            cols.append(np.tile(np.array(L.get("color", (200, 200, 200)), float), (len(v), 1)))
        specs.append(np.full(len(v), L.get("spec", 0.12)))
        off += len(v)
    P = np.concatenate(allp)
    Z = np.concatenate(allz)
    F = np.concatenate(allf)
    LY = np.concatenate(alll)
    V = np.concatenate(vs)
    N = np.concatenate(ns)
    C = np.concatenate(cols)
    S = np.concatenate(specs)

    # painter id buffer
    zmean = Z[F].mean(1)
    order = np.argsort(-zmean)
    idimg = np.zeros((Hs, Ws, 3), np.uint8)
    tri_i = np.round(P[F] * 16).astype(np.int32)
    for k in order:
        i = int(k) + 1
        cv2.fillConvexPoly(idimg, tri_i[k], (i & 255, (i >> 8) & 255, (i >> 16) & 255), lineType=cv2.LINE_8, shift=4)
    ids = idimg[..., 0].astype(np.int64) + (idimg[..., 1].astype(np.int64) << 8) + (idimg[..., 2].astype(np.int64) << 16) - 1
    valid = ids >= 0
    yy, xx = np.nonzero(valid)
    t = ids[yy, xx]
    a, b, c = P[F[t, 0]], P[F[t, 1]], P[F[t, 2]]
    px = np.stack([xx + 0.5, yy + 0.5], 1)
    v0, v1, v2 = b - a, c - a, px - a
    den = v0[:, 0] * v1[:, 1] - v1[:, 0] * v0[:, 1]
    den = np.where(np.abs(den) < 1e-9, 1e-9, den)
    w1 = (v2[:, 0] * v1[:, 1] - v1[:, 0] * v2[:, 1]) / den
    w2 = (v0[:, 0] * v2[:, 1] - v2[:, 0] * v0[:, 1]) / den
    w0 = 1 - w1 - w2
    bary = np.clip(np.stack([w0, w1, w2], 1), -0.2, 1.2)
    bary /= bary.sum(1, keepdims=True)
    zpix = (bary * Z[F[t]]).sum(1)
    npix = (bary[:, :, None] * N[F[t]]).sum(1)
    npix /= (np.linalg.norm(npix, axis=1, keepdims=True) + 1e-12)
    cpix = (bary[:, :, None] * C[F[t]]).sum(1)
    spix = (bary * S[F[t]]).sum(1)
    pos = unproject(px[:, 0], px[:, 1], zpix, Ws, Hs, fov_v)
    view = -pos / (np.linalg.norm(pos, axis=1, keepdims=True) + 1e-12)
    # flip normals toward viewer (two sided)
    flip = np.sign((npix * view).sum(1, keepdims=True))
    flip[flip == 0] = 1
    npix = npix * flip
    if lights is None:
        lights = [((0.35, 0.55, 0.75), 0.80), ((-0.6, 0.2, 0.5), 0.28), ((0.0, -0.6, 0.6), 0.12)]
    shade = np.full(len(t), 0.22)
    spec = np.zeros(len(t))
    for d, inten in lights:
        d = np.array(d, float)
        d /= np.linalg.norm(d)
        ndl = np.clip(npix @ d, 0, 1)
        shade += inten * ndl
        h = d[None, :] + view
        h /= (np.linalg.norm(h, axis=1, keepdims=True) + 1e-12)
        spec += inten * np.clip((npix * h).sum(1), 0, 1) ** 24
    rgb = np.clip(cpix * shade[:, None] + 255.0 * (spix * spec)[:, None], 0, 255)
    img = np.empty((Hs, Ws, 3), np.float32)
    img[...] = np.array(bg[::-1], np.float32)  # BGR
    img[yy, xx] = rgb[:, ::-1]
    depth = np.full((Hs, Ws), np.inf, np.float32)
    depth[yy, xx] = zpix
    layer = np.full((Hs, Ws), -1, np.int32)
    layer[yy, xx] = LY[t]
    out_img = cv2.resize(img, (W, H), interpolation=cv2.INTER_AREA).astype(np.uint8) if ss > 1 else img.astype(np.uint8)
    return dict(img=out_img, depth_ss=depth, layer_ss=layer, ss=ss, W=W, H=H, fov_v=fov_v)


def depth_at(out, u, v):
    """Depth lookup at pixel coords of the final (non supersampled) image. Returns positive distance or nan."""
    ss = out["ss"]
    x = np.clip(np.round(np.asarray(u) * ss - 0.5).astype(int), 0, out["depth_ss"].shape[1] - 1)
    y = np.clip(np.round(np.asarray(v) * ss - 0.5).astype(int), 0, out["depth_ss"].shape[0] - 1)
    d = out["depth_ss"][y, x]
    return np.where(np.isfinite(d), d, np.nan)


def rot_xyz(pitch=0.0, yaw=0.0, roll=0.0):
    """Rotation matrix: pitch about +x (positive = chin up... nose up), yaw about +y, roll about +z. Degrees."""
    a, b, c = np.deg2rad([pitch, yaw, roll])
    Rx = np.array([[1, 0, 0], [0, np.cos(a), -np.sin(a)], [0, np.sin(a), np.cos(a)]])
    Ry = np.array([[np.cos(b), 0, np.sin(b)], [0, 1, 0], [-np.sin(b), 0, np.cos(b)]])
    Rz = np.array([[np.cos(c), -np.sin(c), 0], [np.sin(c), np.cos(c), 0], [0, 0, 1]])
    return Ry @ Rx @ Rz


def pose_matrix(R, t, pivot):
    """4x4: X_cam = R (X - pivot) + t"""
    M = np.eye(4)
    M[:3, :3] = R
    M[:3, 3] = np.asarray(t, float) - R @ np.asarray(pivot, float)
    return M


def apply(M, v):
    return np.asarray(v) @ M[:3, :3].T + M[:3, 3]
