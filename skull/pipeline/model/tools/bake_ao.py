import sys, os, pickle, time
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *
from parts import *
import ao
from build_meshes import merge

D = pickle.load(open(os.path.join(ROOT, 'cache', 'meshes_h.pkl'), 'rb')); M = D['meshes']
groups = {
    'cranium': list(CRANIUM) + ['upper_teeth'],
    'jaw': ['mandible', 'lower_teeth'],
    'brain': list(BRAIN),
}
AO = {}
t0 = time.time()
for g, names in groups.items():
    V, F = merge([M[n] for n in names])
    a = ao.bake(V, F, ndir=128, pix=0.5, spacing=0.3, eps=1.3)
    a = ao.smooth(a, F, len(V), it=2)
    off = 0
    for n in names:
        nv = len(M[n][0]); AO[n] = a[off:off + nv]; off += nv
    print(g, 'verts', len(V), 'ao mean', a.mean().round(3), 'min', a.min().round(3), 'max', a.max().round(3), 't', round(time.time() - t0, 1))
pickle.dump(AO, open(os.path.join(ROOT, 'cache', 'ao.pkl'), 'wb'))
