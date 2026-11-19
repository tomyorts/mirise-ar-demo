#!/usr/bin/env python3
"""Download the source data of the anatomy model and check every file against a recorded SHA-256.

usage:  python3 fetch_sources.py          # what the build needs (90 parts, about 71 MB)
        python3 fetch_sources.py --all    # everything, including the skin surface used for calibration (150 parts, about 205 MB)

Sources (fixed revisions, so everybody gets the same bytes):
  BodyParts3D release 3.0 as STL files, (c) Database Center for Life Science, CC BY-SA 2.1 JP
      mirror: github.com/Kevin-Mattheus-Moerman/BodyParts3D  @ 2c83c698788cff57f6317bddcf712e7acfbea7d8
  MediaPipe canonical face model and landmark weights, Apache-2.0
      github.com/google-ai-edge/mediapipe  @ ed8e96605d03708afbef783050174b66e1278f20
Only the Python standard library is used.
"""
import hashlib, json, os, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
MODEL = os.path.join(HERE, 'model')
RAW = os.path.join(MODEL, 'raw')
CANON = os.path.join(MODEL, 'canon')

BP3D = 'https://raw.githubusercontent.com/Kevin-Mattheus-Moerman/BodyParts3D/2c83c698788cff57f6317bddcf712e7acfbea7d8/assets/BodyParts3D_data/stl/'
MP = 'https://raw.githubusercontent.com/google-ai-edge/mediapipe/ed8e96605d03708afbef783050174b66e1278f20/mediapipe/modules/face_geometry/data/'
MP_FILES = {
    'canonical_face_model.obj': '8bac80443397e113f41a8b565ea72c59390bc031d9defab289dba7bc0c54e618',
    'geometry_pipeline_metadata_landmarks.pbtxt': '55ca7c4c7bf195673b9d12a1b5d49d4b9c82b5ade8fed4b565496590866e359d',
}
# The tracking model the page ships (skull/mp/face_landmarker.task). Official address:
TASK_URL = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
TASK_SHA = '64184e229b263107bc2b804c6625db1341ff2bb731874b0bcc2fe6544e0bc9ff'


def sha256(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(1 << 20), b''):
            h.update(chunk)
    return h.hexdigest()


def fetch(url, dest, want):
    """Download url to dest unless a file with the right checksum is already there. Returns a status word."""
    if os.path.exists(dest) and sha256(dest) == want:
        return 'kept'
    last = None
    for attempt in range(4):
        try:
            tmp = dest + '.part'
            with urllib.request.urlopen(url, timeout=120) as r, open(tmp, 'wb') as f:
                while True:
                    chunk = r.read(1 << 20)
                    if not chunk:
                        break
                    f.write(chunk)
            got = sha256(tmp)
            if got != want:
                os.remove(tmp)
                raise RuntimeError(f'checksum mismatch for {url}: got {got}, expected {want}')
            os.replace(tmp, dest)
            return 'downloaded'
        except Exception as e:      # retry on network trouble
            last = e
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f'could not fetch {url}: {last}')


def build_ids():
    """The parts the shipped model is made of (tools/parts.py)."""
    sys.path.insert(0, os.path.join(MODEL, 'tools'))
    import parts
    ids = set()
    for group in (parts.CRANIUM, parts.MANDIBLE):
        for src, _ in group.values():
            ids.update(src)
    ids.update(parts.UPPER_TEETH)
    ids.update(parts.LOWER_TEETH)
    for items in parts.BRAIN.values():
        ids.update(fid for fid, _, _ in items)
    return sorted(ids)


def main():
    everything = '--all' in sys.argv[1:]
    os.makedirs(RAW, exist_ok=True)
    os.makedirs(CANON, exist_ok=True)
    sums = {}
    for line in open(os.path.join(RAW, 'SHA256SUMS')):
        h, name = line.split()
        sums[name] = h
    if everything:
        need = json.load(open(os.path.join(RAW, 'need.json')))
        ids = sorted(set(need['bone'] + need['teeth'] + need['brain'] + need['extra']))
    else:
        ids = build_ids()
    jobs = [(BP3D + i + '.stl', os.path.join(RAW, i + '.stl'), sums[i + '.stl']) for i in ids]
    jobs += [(MP + name, os.path.join(CANON, name), h) for name, h in MP_FILES.items()]
    count = {'kept': 0, 'downloaded': 0}
    with ThreadPoolExecutor(6) as pool:
        for status in pool.map(lambda j: fetch(*j), jobs):
            count[status] += 1
    print(f"source files: {len(jobs)} checked ({count['downloaded']} downloaded, {count['kept']} already present), all checksums match")

    task = os.path.join(HERE, '..', 'mp', 'face_landmarker.task')
    ok = os.path.exists(task) and sha256(task) == TASK_SHA
    print('tracking model skull/mp/face_landmarker.task:', 'matches the recorded checksum' if ok else 'MISSING OR DIFFERENT')
    print('  official copy:', TASK_URL)
    if not ok:
        sys.exit(1)


if __name__ == '__main__':
    main()
