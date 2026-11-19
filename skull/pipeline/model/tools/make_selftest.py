"""cache/selftest.jpg: the model's own head, seen from the front at 34 cm (320 x 320).

The page shows this picture to the face tracker once at start-up to check that tracking really works on the
device (skull/selftest.jpg). JPEG bytes depend on the encoder, so the shipped file is kept as it is; this
script documents how it was made and lets you make an equivalent one.

Needs cache/skin_head.npz (tools/make_calib_inputs.py).
"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np, cv2
from common import *
from prender import *

d = np.load(os.path.join(ROOT, 'cache', 'skin_head.npz'))
v, f = d['v'] / 10.0, d['f']                              # cm
pivot = np.array([0.0, 154.0, 10.0])                      # roughly the head centre (cm)
M = pose_matrix(rot_xyz(0, 0, 0), (0.0, 0.0, -34.0), pivot)
col = np.tile(np.array([224.0, 186.0, 164.0]), (len(v), 1))
out = render_layers([dict(v=apply(M, v), f=f, vcol=col)], 320, 320, ss=3, bg=(58, 70, 82))
path = os.path.join(ROOT, 'cache', 'selftest.jpg')
cv2.imwrite(path, out['img'], [cv2.IMWRITE_JPEG_QUALITY, 82])
print('wrote', path, os.path.getsize(path), 'bytes')
shipped = os.path.join(ROOT, '..', '..', 'selftest.jpg')
if os.path.exists(shipped):
    a = cv2.imread(shipped).astype(float); b = cv2.imread(path).astype(float)
    if a.shape == b.shape:
        print('mean absolute difference from the shipped picture (0-255):', round(float(np.abs(a - b).mean()), 2))
