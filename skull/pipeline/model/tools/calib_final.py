"""Final alignment of the anatomy model to the tracker's canonical face frame.

Why not simply ask the tracker where the model's own (rendered) head is?  Because the tracker explains
unusual facial proportions as head tilt: the model's lower face is short, so its upright head is reported
as "looking down ~10 deg", and a skull calibrated that way sits tilted back on real faces (seen clearly
in profile).  Orientation and proportion have to be separated:

  * orientation / position / size: a plain geometric fit (equal weights, no tilt between the two upright
    faces beyond what the rigid upper and middle face needs) between the canonical face mesh and the true
    3D positions of the same landmarks on the model's skin;
  * proportion: left to the run-time "personal fit" (solver.js), which stretches the model instead of tilting it.

Landmark pixels come from the tracker run on renders of the model's head (tools/calibrate.py); their depth
comes from the render, so the 3D positions are exact points on the model's skin.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *
from prender import apply
from calib_geo import weighted_similarity, landmarks_h
from pose3d import RIGID

Lh, n = landmarks_h()
canon, _ = load_canonical(); canon = canon / 10.0
ok = np.isfinite(Lh).all(1)
# central, rigid landmarks only: the outline landmarks follow the visible silhouette rather than fixed skin points
ids = np.array([i for i in RIGID if ok[i] and abs(canon[i][0]) < 5.2])
T, s, R = weighted_similarity(Lh[ids], canon[ids], np.ones(len(ids)))
eul = (np.degrees(np.arctan2(R[2, 1], R[2, 2])), np.degrees(np.arcsin(-R[2, 0])), np.degrees(np.arctan2(R[1, 0], R[0, 0])))
print('rigid-landmark fit: n', len(ids), 'scale', round(s, 4), 'pitch/yaw/roll', np.round(eul, 2))
# both faces are symmetric: keep pitch only, and put the model's midline on the canonical midline
pitch = np.radians(eul[0])
Rs = np.array([[1, 0, 0], [0, np.cos(pitch), -np.sin(pitch)], [0, np.sin(pitch), np.cos(pitch)]])
mx = Lh[ids].mean(0); my = canon[ids].mean(0)
# the model's midline: mean x of the midline landmarks' true positions
midline = [i for i in range(468) if abs(canon[i][0]) < 1e-6 and ok[i]]
x_mid = float(np.mean(Lh[midline, 0]))
t = my - s * Rs @ mx
t[0] = -s * x_mid
Ts = np.eye(4); Ts[:3, :3] = s * Rs; Ts[:3, 3] = t
print('model midline x (cm, head frame):', round(x_mid, 3))
print('T_final:\n', np.round(Ts, 4))
res = apply(Ts, Lh) - canon
print('rms residual on rigid set (cm):', np.sqrt((res[ids] ** 2).sum(1).mean()).round(3))
for i, name in [(10, 'forehead'), (168, 'nasion'), (4, 'nose tip'), (2, 'subnasale'), (13, 'stomion'), (152, 'menton'), (33, 'R eye out'), (263, 'L eye out'), (234, 'R cheek'), (454, 'L cheek'), (172, 'R jaw'), (397, 'L jaw')]:
    print(f"  {name:10s} model-canonical (cm): {res[i].round(2)}")
np.save(os.path.join(ROOT, 'cache', 'T_final.npy'), Ts)
np.save(os.path.join(ROOT, 'cache', 'L_h.npy'), Lh)
