"""Helpers for the alignment of the anatomy model to the tracker's canonical face (used by calib_final.py).

The tracker estimates head pose by rigidly fitting its canonical face mesh to the 3D landmarks it
predicts. calib_final.py does the same kind of fit between the canonical mesh and the true 3D positions
of those landmarks on the anatomy model's own skin (landmark pixels found by the tracker on renders,
depth taken from the render).
"""
import sys, os, pickle, json
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *
from prender import apply

def weighted_similarity(X, Y, w):
    """Find s, R, t minimising sum w |s R X + t - Y|^2 (Umeyama)."""
    w = w / w.sum()
    mx = (w[:, None] * X).sum(0); my = (w[:, None] * Y).sum(0)
    Xc = X - mx; Yc = Y - my
    C = (w[:, None, None] * Yc[:, :, None] * Xc[:, None, :]).sum(0)
    U, D, Vt = np.linalg.svd(C)
    S = np.diag([1, 1, np.sign(np.linalg.det(U @ Vt))])
    R = U @ S @ Vt
    var = (w * (Xc ** 2).sum(1)).sum()
    s = (D * np.diag(S)).sum() / var
    t = my - s * R @ mx
    T = np.eye(4); T[:3, :3] = s * R; T[:3, 3] = t
    return T, s, R

def landmarks_h(max_yaw=15, max_pitch=10):
    runs = pickle.load(open(os.path.join(ROOT, 'cache', 'calib_runs.pkl'), 'rb'))
    acc = []
    for r in runs:
        c = r['case']
        if abs(c[1]) > max_yaw or abs(c[0]) > max_pitch: continue
        acc.append(apply(np.linalg.inv(r['Mbp']), r['Pbp']))
    return np.nanmedian(np.array(acc), 0), len(acc)
