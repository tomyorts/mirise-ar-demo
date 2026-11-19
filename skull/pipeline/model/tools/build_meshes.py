"""Simplify the source parts (meshoptimizer, topology preserving) and assemble the shipped mesh groups.

Output stays in the head frame H (mm); the tracker alignment is applied at export time.
"""
import sys, os, time, pickle, json, subprocess, shutil
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np, trimesh
from common import *
from parts import *

TMP = os.path.join(ROOT, 'cache', 'simplify_io')

def compact(v, f):
    used = np.unique(f); remap = -np.ones(len(v), int); remap[used] = np.arange(len(used))
    return v[used], remap[f]

def split_side(v, f, side):
    cx = v[f][:, :, 0].mean(1)
    keep = cx >= 0 if side == 'L' else cx < 0
    return compact(v, f[keep])

def merge(parts):
    vs, fs, off = [], [], 0
    for v, f in parts:
        vs.append(v); fs.append(f + off); off += len(v)
    return np.concatenate(vs), np.concatenate(fs)

def edge_stats(f):
    e = np.sort(np.concatenate([f[:, [0, 1]], f[:, [1, 2]], f[:, [2, 0]]]), 1)
    u, c = np.unique(e, axis=0, return_counts=True)
    return int((c == 1).sum()), int((c > 2).sum())

if __name__ == '__main__':
    t0 = time.time()
    shutil.rmtree(TMP, ignore_errors=True); os.makedirs(TMP)
    jobs = {}      # key -> (v, f, target)
    for name, (ids, target) in {**CRANIUM, **MANDIBLE}.items():
        jobs[name] = (*load_h(ids[0]), target)
    for i in UPPER_TEETH + LOWER_TEETH:
        jobs['tooth_' + i] = (*load_h(i), TOOTH_TRIS)
    for name, items in BRAIN.items():
        for k, (fid, target, side) in enumerate(items):
            v, f = load_h(fid)
            if side: v, f = split_side(v, f, side)
            jobs[f'{name}__{k}'] = (v, f, target)
    manifest = {}
    for key, (v, f, target) in jobs.items():
        v.astype('<f4').tofile(os.path.join(TMP, key + '.pos.f32'))
        f.astype('<u4').tofile(os.path.join(TMP, key + '.idx.u32'))
        manifest[key] = int(target)
    json.dump(manifest, open(os.path.join(TMP, 'manifest.json'), 'w'))
    subprocess.run(['node', os.path.join(ROOT, 'node', 'simplify.mjs'), TMP], check=True, cwd=os.path.join(ROOT, 'node'))
    rep = json.load(open(os.path.join(TMP, 'report.json')))
    res = {}
    for key, (v, f, target) in jobs.items():
        idx = np.fromfile(os.path.join(TMP, key + '.out.u32'), '<u4').reshape(-1, 3).astype(int)
        res[key] = compact(v, idx)
    out = {}
    for name in list(CRANIUM) + list(MANDIBLE):
        out[name] = res[name]
    out['upper_teeth'] = merge([res['tooth_' + i] for i in UPPER_TEETH])
    out['lower_teeth'] = merge([res['tooth_' + i] for i in LOWER_TEETH])
    teeth = {i: res['tooth_' + i] for i in UPPER_TEETH + LOWER_TEETH}
    for name, items in BRAIN.items():
        out[name] = merge([res[f'{name}__{k}'] for k in range(len(items))])
    tot = 0; worst = 0
    for k, (v, f) in out.items():
        b, nm = edge_stats(f)
        print(f"{k:18s} V={len(v):6d} F={len(f):6d} boundary={b} nonmanifold={nm}"); tot += len(f)
    for key, r in rep.items():
        worst = max(worst, r['absErr'])
    big = sorted(rep.items(), key=lambda kv: -kv[1]['absErr'])[:6]
    print('total tris', tot, ' worst simplification error (mm):', round(worst, 3), [(k, round(r['absErr'], 2), r['outTris']) for k, r in big])
    print('time', round(time.time() - t0, 1))
    pickle.dump(dict(meshes=out, teeth=teeth), open(os.path.join(ROOT, 'cache', 'meshes_h.pkl'), 'wb'))
