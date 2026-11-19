"""cache/canonical.json: the 468 vertices of the tracker's canonical face in cm (used by web/default_fit.mjs)."""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from common import *

canon, _ = load_canonical()
os.makedirs(os.path.join(ROOT, 'cache'), exist_ok=True)
with open(os.path.join(ROOT, 'cache', 'canonical.json'), 'w') as f:
    f.write(json.dumps(np.round(canon[:468] / 10.0, 5).tolist()))
print('canonical.json: 468 points')
