"""Show the anatomy model's own head to the face tracker and record what it reports.

The anatomy data set contains the skin surface of the same person as the skull. That head is rendered
with the camera model the tracker assumes, in 63 poses and distances, and the tracker is run on each picture.
For every picture the record (cache/calib_runs.pkl) holds where each tracker landmark falls on the skin:
the pixel comes from the tracker, the depth from the render, so the 3D position is an exact point on the model.
tools/calib_final.py turns these positions into the alignment.

The transform T stored per picture is the tracker's own estimate of where this head is. It is kept for
reference only: it tilts the model by about 10 degrees (see calib_final.py for why it is not used).
"""
import sys, os, json, time
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np, cv2
from common import *
from prender import *
import mpface

d = np.load(os.path.join(ROOT, 'cache', 'skin_head.npz'))
hv, hf = d['v'] / 10.0, d['f']          # cm, head frame H
vn = vertex_normals(hv, hf)
canon, cf = load_canonical(); canon = canon / 10.0   # cm
w = mpface.basis_weights()
pivot = np.array([0.0, 154.0, 10.0])     # roughly the head centre in H (cm)
det = mpface.make('image')

def run(pitch, yaw, roll, dist, tx, ty, W, H, tag, save=False):
    R = rot_xyz(pitch, yaw, roll)
    Mbp = pose_matrix(R, (tx, ty, -dist), pivot)
    vc = apply(Mbp, hv)
    out = render_layers([dict(v=vc, f=hf, vn=vn @ R.T, color=(224, 186, 164))], W, H, ss=2)
    r = mpface.detect(det, out['img'])
    if r is None:
        print(tag, 'NO FACE'); return None
    lm = r['lm'][:468]
    u, v = lm[:, 0] * W, lm[:, 1] * H
    z = depth_at(out, u, v)
    Pbp = unproject(u, v, z, W, H)                      # on the rendered skin, camera space
    Pc = apply(r['M'], canon)                           # canonical verts placed by the tracker
    ok = np.isfinite(z) & (w > 0)
    k = (w[ok] * (Pbp[ok] * Pc[ok]).sum(1)).sum() / (w[ok] * (Pc[ok] ** 2).sum(1)).sum()
    S = np.diag([1 / k, 1 / k, 1 / k, 1.0])
    T = np.linalg.inv(r['M']) @ S @ Mbp
    if save:
        vis = out['img'].copy()
        for x, y in zip(u, v):
            cv2.circle(vis, (int(x), int(y)), 1, (0, 255, 0), -1)
        cv2.imwrite(os.path.join(ROOT, 'out', f'calib_{tag}.png'), vis)
    return dict(T=T, k=k, M=r['M'], Mbp=Mbp, lm=lm, Pbp=Pbp, ok=ok, bs=r['bs'], tag=tag)

def decompose(T):
    A = T[:3, :3]
    s = np.cbrt(np.linalg.det(A))
    R = A / s
    # euler (pitch about x, yaw about y) for reporting
    pitch = np.degrees(np.arctan2(R[2, 1], R[2, 2]))
    yaw = np.degrees(np.arcsin(-R[2, 0]))
    roll = np.degrees(np.arctan2(R[1, 0], R[0, 0]))
    return s, R, (pitch, yaw, roll), T[:3, 3]

if __name__ == '__main__':
    cases = []
    for (W, H) in [(960, 720), (720, 960)]:
        for dist in (35, 50, 70):
            for (pitch, yaw, roll) in [(0, 0, 0), (0, 15, 0), (0, -15, 0), (10, 0, 0), (-10, 0, 0), (0, 0, 8), (6, 20, -4), (-6, -20, 4), (0, 30, 0), (0, -30, 0)]:
                cases.append((pitch, yaw, roll, dist, 0.0, 0.0, W, H))
    # some off-centre placements
    cases += [(0, 0, 0, 50, 8, 0, 960, 720), (0, 0, 0, 50, -8, 4, 960, 720), (0, 10, 0, 50, 0, -5, 720, 960)]
    res = []
    t0 = time.time()
    for i, c in enumerate(cases):
        tag = f"p{c[0]}_y{c[1]}_r{c[2]}_d{c[3]}_{c[6]}x{c[7]}_{i}"
        r = run(*c, tag=tag, save=(i in (0, 1, 3, 6, 8, 30)))
        if r is None: continue
        s, R, eul, t = decompose(r['T'])
        r.update(s=s, eul=eul, t=t, case=c)
        res.append(r)
        print(f"{tag:32s} s={s:.4f} eul=({eul[0]:6.2f},{eul[1]:6.2f},{eul[2]:6.2f}) t=({t[0]:6.2f},{t[1]:7.2f},{t[2]:6.2f}) jawOpen={r['bs']['jawOpen']:.3f}")
    print('time', time.time() - t0)
    import pickle
    pickle.dump([{k: v for k, v in r.items()} for r in res], open(os.path.join(ROOT, 'cache', 'calib_runs.pkl'), 'wb'))
