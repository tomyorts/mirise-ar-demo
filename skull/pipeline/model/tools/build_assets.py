"""Export the shipped model (GLB) and its metadata (JSON) in the tracker's canonical face frame (cm)."""
import sys, os, pickle, json, time
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np, trimesh
from common import *
from parts import *
from prender import apply
import ao as aomod

OUT = os.path.join(ROOT, 'dist_assets'); os.makedirs(OUT, exist_ok=True)
D = pickle.load(open(os.path.join(ROOT, 'cache', 'meshes_h.pkl'), 'rb')); M = D['meshes']; TEETH = D['teeth']
AO = pickle.load(open(os.path.join(ROOT, 'cache', 'ao.pkl'), 'rb'))
CALIB = os.path.join(ROOT, 'calib')                               # the adopted calibration constants (see pipeline/README.md)
T = np.load(os.path.join(CALIB, 'T_final.npy'))                    # head frame (cm) -> canonical (cm), from tools/calib_final.py
A = T[:3, :3]; S = float(np.cbrt(np.linalg.det(A))); R = A / S

def to_c(p_mm):      # head frame mm -> canonical cm
    return apply(T, np.atleast_2d(np.asarray(p_mm, float)) / 10.0)
def dir_c(d):        # direction in H -> canonical (unit)
    d = R @ np.asarray(d, float); return d / np.linalg.norm(d)

# ---------- node naming ----------
NODES = {}   # node name -> mesh key
for k in CRANIUM: NODES['bone_' + k] = k
NODES['teeth_upper'] = 'upper_teeth'
NODES['jaw_mandible'] = 'mandible'
NODES['jaw_teeth_lower'] = 'lower_teeth'
for k in BRAIN: NODES['brain_' + k] = k

scene = trimesh.Scene()
stats = {}
for node, key in NODES.items():
    v, f = M[key]
    vc = to_c(v)
    b = 0.20 + 0.80 * np.power(np.clip(AO[key], 0, 1), 0.85)      # linear multiplier
    col = np.clip(np.round(b * 255), 0, 255).astype(np.uint8)
    rgba = np.stack([col, col, col, np.full_like(col, 255)], 1)
    m = trimesh.Trimesh(vc.astype(np.float32), f, process=False)
    m.visual = trimesh.visual.ColorVisuals(mesh=m, vertex_colors=rgba)
    scene.add_geometry(m, node_name=node, geom_name=node)
    stats[node] = (len(v), len(f))
raw_glb = os.path.join(ROOT, 'cache', 'anatomy_raw.glb')
data = scene.export(file_type='glb', include_normals=False)
open(raw_glb, 'wb').write(data)
print('raw glb', len(data) / 1e6, 'MB', 'tris', sum(s[1] for s in stats.values()))

# ---------- jaw kinematics ----------
cond = np.load(os.path.join(CALIB, 'condyles.npy'))          # R centre, L centre, R top, L top (H mm), from tools/make_calib_inputs.py
cR, cL = to_c(cond[0])[0], to_c(cond[1])[0]
axis = (cL - cR) / np.linalg.norm(cL - cR)                   # +x-ish (subject's left)
slide_h = np.array([0.0, -np.sin(np.deg2rad(30)), np.cos(np.deg2rad(30))])   # anterior-inferior along the eminence
slide = dir_c(slide_h)
mm = S / 10.0   # canonical cm per model mm
jaw = dict(condyleR=cR.round(4).tolist(), condyleL=cL.round(4).tolist(), axis=axis.round(5).tolist(),
           slideDir=slide.round(5).tolist(), slideMax=round(11.0 * mm, 4), thetaMax=32.0, slideExp=1.3)

# ---------- labels ----------
def vnorm(v, f): return aomod.vnormals(v, f)
def support(key_or_mesh, d, filt=None):
    v, f = M[key_or_mesh] if isinstance(key_or_mesh, str) else key_or_mesh
    d = np.asarray(d, float); d /= np.linalg.norm(d)
    s = v @ d
    if filt is not None: s = np.where(filt(v), s, -1e9)
    i = int(np.argmax(s)); return v[i], d
L = []
def add(id_, ja, en, group, mesh, d, filt=None, pair=None, layer='bone', min_brain=None, view=None, min_facing=None):
    """A label: the point of `mesh` furthest in direction d.  `view` is the direction the part is seen from
    (default: d); the page shows the label while that direction points towards the camera (cosine above
    min_facing, default 0.24).  Labels sharing `pair` are alternatives: only the best-facing one is shown."""
    p, dn = support(mesh, d, filt)
    e = dict(id=id_, ja=ja, en=en, group=group, layer=layer, pair=pair,
             p=to_c(p)[0].round(3).tolist(), n=dir_c(dn if view is None else view).round(3).tolist())
    if min_brain: e['minBrain'] = min_brain
    if min_facing: e['minFacing'] = min_facing
    L.append(e)
def band(key, lo, hi):
    """Vertices of a part between two fractions of its height (0 = lowest point, 1 = highest)."""
    y = M[key][0][:, 1]; y0, y1 = y.min(), y.max()
    return lambda v: (v[:, 1] >= y0 + lo * (y1 - y0)) & (v[:, 1] <= y0 + hi * (y1 - y0))
add('frontal', '前頭骨', 'Frontal bone', 'cranium', 'frontal', (0, 0.45, 1), min_facing=0.1)       # large: also seen from the side
for sd, sg in (('R', -1), ('L', 1)):
    add('parietal_' + sd, '頭頂骨', 'Parietal bone', 'cranium', 'parietal_' + sd, (sg * 0.75, 0.66, -0.05), pair='parietal', view=(sg * 1.0, 0.15, 0.0))
    add('temporal_' + sd, '側頭骨', 'Temporal bone', 'cranium', 'temporal_' + sd, (sg * 1.0, 0.3, -0.15), pair='temporal')
    add('sphenoid_' + sd, '蝶形骨', 'Sphenoid bone', 'cranium', 'sphenoid', (sg * 1.0, 0.15, 0.5), pair='sphenoid')
    add('zygomatic_' + sd, '頬骨', 'Zygomatic bone', 'cranium', 'zygomatic_' + sd, (sg * 0.7, -0.05, 0.7), filt=band('zygomatic_' + sd, 0.12, 0.5), pair='zygomatic')
    add('maxilla_' + sd, '上顎骨', 'Maxilla', 'cranium', 'maxilla_' + sd, (sg * 0.55, 0.15, 1.0), pair='maxilla')
    add('mandible_' + sd, '下顎骨', 'Mandible', 'jaw', 'mandible', (sg * 0.8, -0.45, 0.45), pair='mandible')
    add('gonion_' + sd, '下顎角', 'Angle of mandible', 'jaw', 'mandible', (sg * 0.45, -0.75, -0.5), pair='gonion', view=(sg * 0.85, -0.35, -0.25))
    add('canine_' + sd, '犬歯', 'Canine', 'cranium', TEETH['FMA55798' if sd == 'R' else 'FMA55799'], (sg * 0.55, -0.3, 1.0), pair='canine', layer='teeth')
    add('premolar_' + sd, '小臼歯', 'Premolars', 'cranium', TEETH['FMA55689' if sd == 'R' else 'FMA55690'], (sg * 1.0, -0.3, 0.35), pair='premolar', layer='teeth')
    add('molar_' + sd, '大臼歯', 'Molars', 'cranium', TEETH['FMA55698' if sd == 'R' else 'FMA55699'], (sg * 1.0, -0.3, 0.1), pair='molar', layer='teeth')
    # condyle / TMJ: lateral pole of the condylar head
    mv, mf = M['mandible']
    top = cond[2 if sd == 'R' else 3]
    add('tmj_' + sd, '下顎頭（顎関節）', 'Condyle (TMJ)', 'jaw', 'mandible', (sg * 1.0, 0.2, 0.0),
        filt=lambda v, top=top: (np.linalg.norm(v - top, axis=1) < 11), pair='tmj')
for sd, sg in (('R', -1), ('L', 1)):
    add('occipital_' + sd, '後頭骨', 'Occipital bone', 'cranium', 'occipital', (sg * 0.6, -0.15, -0.75), pair='occipital', view=(sg * 0.95, -0.05, -0.3))
add('nasal', '鼻骨', 'Nasal bone', 'cranium', 'nasal_R', (0.6, 0.3, 1.0))
add('chin', 'オトガイ', 'Chin (mental protuberance)', 'jaw', 'mandible', (0, -0.3, 1.0), filt=lambda v: np.abs(v[:, 0]) < 8, min_facing=0.1)
add('incisor', '切歯', 'Incisors', 'cranium', TEETH['FMA55681'], (0.3, -0.5, 1.0), layer='teeth')
for sd, sg in (('R', -1), ('L', 1)):
    add('frontal_lobe_' + sd, '前頭葉', 'Frontal lobe', 'cranium', 'frontal_lobe_' + sd, (sg * 0.5, 0.55, 0.66), pair='frontal_lobe', layer='brain')
    add('parietal_lobe_' + sd, '頭頂葉', 'Parietal lobe', 'cranium', 'parietal_lobe_' + sd, (sg * 0.75, 0.6, -0.3), pair='parietal_lobe', layer='brain', view=(sg * 1.0, 0.1, -0.05))
    add('temporal_lobe_' + sd, '側頭葉', 'Temporal lobe', 'cranium', 'temporal_lobe_' + sd, (sg * 0.85, -0.3, 0.6), pair='temporal_lobe', layer='brain')
    add('occipital_lobe_' + sd, '後頭葉', 'Occipital lobe', 'cranium', 'occipital_lobe_' + sd, (sg * 0.75, 0.1, -0.65), pair='occipital_lobe', layer='brain', view=(sg * 0.95, 0.0, -0.3))
    add('cerebellum_' + sd, '小脳', 'Cerebellum', 'cranium', 'cerebellum', (sg * 0.8, -0.45, -0.4), pair='cerebellum', layer='brain', view=(sg * 0.95, -0.1, -0.25))
# brainstem: from the front it shows between the temporal poles (only while the head faces the camera);
# from the side its lower end (medulla) shows below the temporal lobe
add('brainstem', '脳幹', 'Brainstem', 'cranium', 'brainstem', (0, -0.3, 1.0), pair='brainstem', layer='brain', min_brain=0.93, min_facing=0.85)
for sd, sg in (('R', -1), ('L', 1)):
    add('brainstem_' + sd, '脳幹', 'Brainstem', 'cranium', 'brainstem', (sg * 0.5, -0.8, 0.3), pair='brainstem', layer='brain', view=(sg * 0.95, -0.1, 0.3), min_facing=0.5)

# ---------- reference face landmarks of this model (tracker's 468 points located on the model's own skin) ----------
Lh = np.load(os.path.join(CALIB, 'L_h.npy'))                      # true 3D positions of the tracker's landmarks on the model's skin
Lc = apply(T, Lh)
print('landmark refs: nan', int(np.isnan(Lc).any(1).sum()))
canon, _ = load_canonical(); canon = canon / 10.0
dev = np.linalg.norm(Lc - canon, axis=1)
print('model face vs canonical face: mean |d| cm', np.nanmean(dev).round(3), 'chin(152) d', (Lc[152] - canon[152]).round(3), 'forehead(10)', (Lc[10] - canon[10]).round(3),
      'cheek(234)', (Lc[234] - canon[234]).round(3), 'cheek(454)', (Lc[454] - canon[454]).round(3))
Lc = np.where(np.isnan(Lc), canon, Lc)

# overall extents (for UI framing)
allv = np.concatenate([to_c(M[k][0]) for k in list(CRANIUM) + ['mandible']])
meta = dict(
    version=1,
    units='cm in the face tracker canonical frame (+x subject left, +y up, +z anterior)',
    source='BodyParts3D rel. 3.0 (Database Center for Life Science), CC BY-SA 2.1 JP',
    modelScale=round(S, 5),           # canonical cm per model cm (model was enlarged by this to match the tracker's face)
    alignment=np.round(T, 6).tolist(),
    bounds=dict(min=allv.min(0).round(3).tolist(), max=allv.max(0).round(3).tolist()),
    jaw=jaw, labels=L, landmarks=np.round(Lc, 3).tolist(),
    nodes={n: dict(v=s[0], f=s[1]) for n, s in stats.items()},
)
json.dump(meta, open(os.path.join(OUT, 'anatomy.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print('json bytes', os.path.getsize(os.path.join(OUT, 'anatomy.json')), 'labels', len(L))
print('jaw', jaw)
print('bounds', meta['bounds'])
