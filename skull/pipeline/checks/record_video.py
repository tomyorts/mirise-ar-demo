"""Record the face tracker's output for a video clip, for test_solver.mjs.

usage: python3 record_video.py clip.mp4 recording.json [step]     (step: use every n-th frame, default 2)

The recording holds face landmarks of the person in the clip. Keep it out of the repository unless that
person has agreed to its publication.
"""
import sys, os, json
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'model', 'tools'))
import cv2
import mpface

path, out = sys.argv[1], sys.argv[2]
step = int(sys.argv[3]) if len(sys.argv) > 3 else 2
cap = cv2.VideoCapture(path)
fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
det = mpface.make('video', conf=0.5)
rows, i = [], 0
while True:
    ok, frame = cap.read()
    if not ok:
        break
    if i % step == 0:
        r = mpface.detect(det, frame, ts_ms=i * 1000.0 / fps)
        h, w = frame.shape[:2]
        rows.append(None if r is None else dict(
            lm=r['lm'].round(6).tolist(),
            M=r['M'].T.reshape(-1).tolist(),          # 16 numbers, column by column, as the page receives them
            jawOpen=r['bs']['jawOpen'], aspect=w / h))
    i += 1
json.dump(rows, open(out, 'w'))
print('frames recorded:', len(rows), 'with a face:', sum(1 for r in rows if r))
