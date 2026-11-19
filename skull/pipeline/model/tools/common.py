"""Shared loading helpers for the anatomy build."""
import json, os
import numpy as np
import trimesh

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'raw')
NEED = json.load(open(os.path.join(RAW, 'need.json')))
NAMES = NEED['names']

# BodyParts3D: mm, +x left, +y posterior, +z superior.
# Head frame used here ("H"): mm, +x subject's left, +y up, +z anterior (same axes as the face tracker's model).
def bp_to_h(v):
    v = np.asarray(v, float)
    return np.stack([v[:, 0], v[:, 2], -v[:, 1]], 1)

def load_raw(fid, weld=True):
    m = trimesh.load(os.path.join(RAW, fid + '.stl'), process=False)
    if weld:
        m.merge_vertices()
    return m

def load_h(fid):
    """Load a part in the head frame H (axis-swapped only, still mm, untranslated)."""
    m = load_raw(fid)
    return np.asarray(bp_to_h(m.vertices)), np.asarray(m.faces)

def load_canonical():
    v, f = [], []
    for line in open(os.path.join(ROOT, 'canon', 'canonical_face_model.obj')):
        p = line.split()
        if not p: continue
        if p[0] == 'v': v.append([float(x) for x in p[1:4]])
        elif p[0] == 'f': f.append([int(x.split('/')[0]) - 1 for x in p[1:4]])
    return np.array(v) * 10.0, np.array(f)  # cm -> mm
