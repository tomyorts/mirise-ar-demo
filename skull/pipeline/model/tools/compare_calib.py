"""Compare freshly computed calibration values (cache/) with the adopted ones (calib/)."""
import os, sys
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import ROOT

worst = 0.0
for name, unit in (('T_final.npy', 'matrix entries; cm for the last column'), ('L_h.npy', 'cm'), ('condyles.npy', 'mm')):
    a = np.load(os.path.join(ROOT, 'calib', name)); b = np.load(os.path.join(ROOT, 'cache', name))
    same = a.shape == b.shape and np.array_equal(a, b, equal_nan=True)
    d = float(np.nanmax(np.abs(a - b))) if a.shape == b.shape else float('inf')
    worst = max(worst, d)
    print(f"{name:13s} {'identical' if same else 'largest difference %.3g' % d}  ({unit})")
print('calibration reproduced exactly' if worst == 0 else
      'calibration differs slightly from the adopted values (expected on another machine or library version); the build keeps using calib/')
