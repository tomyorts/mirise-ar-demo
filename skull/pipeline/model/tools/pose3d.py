"""Which of the tracker's 468 landmarks sit on rigid parts of the face (used by calib_final.py)."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *

# landmarks that sit on rigid parts of the face (not lips, lids, brows, or skin that rides on the mandible)
canon, _ = load_canonical(); canon = canon / 10.0
LIPS = set([61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,
            76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407])
def rigid_set():
    ids = []
    for i in range(468):
        x, y, z = canon[i]
        if i in LIPS: continue
        if y < -3.2: continue                  # mouth level and below: moves with the jaw / lips
        ids.append(i)
    return np.array(ids)
RIGID = rigid_set()
