"""Calibration inputs that are measured directly on the source meshes.

cache/skin_head.npz   the head part of the skin surface (FMA7163): every triangle whose three corners
                      lie above y = 1380 mm (head frame H), stored as separate triangles
cache/condyles.npy    the mandibular condyles on the mandible (FMA52748), head frame H in mm
                      rows: right centre, left centre, right top, left top
                        top    = the highest vertex of the posterior part of each half (z < 130 mm)
                        centre = the mean of the vertices in the top 8 mm of the condylar head,
                                 within 10 mm (horizontally) of the top; the jaw's hinge axis runs through both centres

Needs the full download (python3 fetch_sources.py --all).
"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *

CACHE = os.path.join(ROOT, 'cache'); os.makedirs(CACHE, exist_ok=True)

# ---- head skin
sv, sf = load_h('FMA7163')
keep = (sv[sf][:, :, 1] > 1380.0).all(1)
v = sv[sf[keep]].reshape(-1, 3)
f = np.arange(len(v)).reshape(-1, 3)
np.savez(os.path.join(CACHE, 'skin_head.npz'), v=v, f=f)
print('skin_head: triangles', len(f), 'bounds (mm)', v.min(0).round(2), v.max(0).round(2))

# ---- condyles
mv, _ = load_h('FMA52748')
centres, tops = [], []
for sign in (-1, 1):                       # right half (x < 0), then left half
    S = mv[mv[:, 0] * sign > 0]
    top = S[np.argmax(np.where(S[:, 2] < 130.0, S[:, 1], -1e9))]
    head = S[(S[:, 1] > top[1] - 8.0) & (np.hypot(S[:, 0] - top[0], S[:, 2] - top[2]) < 10.0)]
    centres.append(head.mean(0)); tops.append(top)
cond = np.array(centres + tops)
np.save(os.path.join(CACHE, 'condyles.npy'), cond)
print('condyles (mm): right centre, left centre, right top, left top\n', cond.round(3))
