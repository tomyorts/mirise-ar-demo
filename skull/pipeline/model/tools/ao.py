"""Per-vertex ambient occlusion by multi-direction depth buffers (point splatting)."""
import numpy as np, cv2

def fib_sphere(n):
    i = np.arange(n) + 0.5
    phi = np.arccos(1 - 2 * i / n); th = np.pi * (1 + 5 ** 0.5) * i
    return np.stack([np.cos(th) * np.sin(phi), np.sin(th) * np.sin(phi), np.cos(phi)], 1)

def vnormals(v, f):
    n = np.cross(v[f[:, 1]] - v[f[:, 0]], v[f[:, 2]] - v[f[:, 0]])
    vn = np.zeros_like(v)
    for k in range(3): np.add.at(vn, f[:, k], n)
    return vn / (np.linalg.norm(vn, axis=1, keepdims=True) + 1e-12)

def sample_surface(v, f, spacing, rng):
    p = v[f]
    area = 0.5 * np.linalg.norm(np.cross(p[:, 1] - p[:, 0], p[:, 2] - p[:, 0]), axis=1)
    n = np.maximum(1, np.ceil(area / (spacing * spacing)).astype(int))
    idx = np.repeat(np.arange(len(f)), n)
    r1 = np.sqrt(rng.random(len(idx))); r2 = rng.random(len(idx))
    b = np.stack([1 - r1, r1 * (1 - r2), r1 * r2], 1)
    s = (p[idx] * b[:, :, None]).sum(1)
    return np.concatenate([s, v])  # include the vertices themselves

def bake(v, f, occ_v=None, occ_f=None, ndir=128, pix=0.5, spacing=0.3, eps=1.3, seed=0):
    """AO for vertices v of mesh (v,f). Occluders: (occ_v, occ_f) or the mesh itself. Units: mm."""
    rng = np.random.default_rng(seed)
    if occ_v is None: occ_v, occ_f = v, f
    S = sample_surface(occ_v, occ_f, spacing, rng)
    vn = vnormals(v, f)
    dirs = fib_sphere(ndir)
    num = np.zeros(len(v)); den = np.zeros(len(v)); num2 = np.zeros(len(v)); den2 = np.zeros(len(v))
    lo = S.min(0) - 2; hi = S.max(0) + 2
    ctr = (lo + hi) / 2; rad = np.linalg.norm(hi - lo) / 2
    n = int(np.ceil(2 * rad / pix)) + 4
    for d in dirs:
        a = np.array([1.0, 0, 0]) if abs(d[0]) < 0.9 else np.array([0, 1.0, 0])
        e1 = np.cross(d, a); e1 /= np.linalg.norm(e1); e2 = np.cross(d, e1)
        def proj(P):
            Q = P - ctr
            return ((Q @ e1 + rad) / pix + 2).astype(np.int32), ((Q @ e2 + rad) / pix + 2).astype(np.int32), Q @ d
        su, sv, sh = proj(S)
        z = np.full(n * n, -1e9, np.float32)
        np.maximum.at(z, sv * n + su, sh.astype(np.float32))
        z = cv2.dilate(z.reshape(n, n), np.ones((3, 3), np.uint8))  # max filter closes pinholes
        vu, vv, vh = proj(v)
        vis = vh >= z[vv, vu] - eps
        nd = vn @ d
        c = np.clip(nd, 0, None); c2 = np.clip(-nd, 0, None)
        num += vis * c; den += c; num2 += vis * c2; den2 += c2
    # two sided: decimation can flip an isolated vertex normal; take the brighter side
    return np.maximum(num / np.maximum(den, 1e-9), num2 / np.maximum(den2, 1e-9))

def smooth(vals, f, nv, it=2):
    x = vals.copy()
    for _ in range(it):
        acc = np.zeros(nv); cnt = np.zeros(nv)
        for a, b in ((0, 1), (1, 2), (2, 0)):
            np.add.at(acc, f[:, a], x[f[:, b]]); np.add.at(cnt, f[:, a], 1)
            np.add.at(acc, f[:, b], x[f[:, a]]); np.add.at(cnt, f[:, b], 1)
        x = 0.5 * x + 0.5 * acc / np.maximum(cnt, 1)
    return x
