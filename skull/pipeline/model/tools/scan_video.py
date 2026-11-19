import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np, cv2
import mpface
path, out = sys.argv[1], sys.argv[2]
cap = cv2.VideoCapture(path)
fps = cap.get(cv2.CAP_PROP_FPS)
det = mpface.make('video', conf=0.5)
rows = []; i = 0
while True:
    ok, fr = cap.read()
    if not ok: break
    r = mpface.detect(det, fr, ts_ms=i * 1000.0 / fps)
    if r is None:
        rows.append(None)
    else:
        M = r['M']; R = M[:3, :3]
        pitch = float(np.degrees(np.arctan2(R[2, 1], R[2, 2]))); yaw = float(np.degrees(np.arcsin(-R[2, 0])))
        lm = r['lm']
        rows.append(dict(jawOpen=r['bs']['jawOpen'], smile=(r['bs']['mouthSmileLeft'] + r['bs']['mouthSmileRight']) / 2, pitch=pitch, yaw=yaw,
                         tz=float(M[2, 3]), box=[float(lm[:, 0].min()), float(lm[:, 1].min()), float(lm[:, 0].max()), float(lm[:, 1].max())]))
    i += 1
json.dump(dict(fps=fps, rows=rows), open(out, 'w'))
v = [r for r in rows if r]
jo = np.array([r['jawOpen'] for r in v])
print(os.path.basename(path), 'frames', len(rows), 'detected', len(v), 'jawOpen max', jo.max().round(3), 'p95', np.percentile(jo, 95).round(3),
      'yaw range', round(min(r['yaw'] for r in v), 1), round(max(r['yaw'] for r in v), 1), 'pitch range', round(min(r['pitch'] for r in v), 1), round(max(r['pitch'] for r in v), 1))
# segments with jawOpen > 0.3
idx = [k for k, r in enumerate(rows) if r and r['jawOpen'] > 0.3]
seg = []
for k in idx:
    if seg and k - seg[-1][1] <= 3: seg[-1][1] = k
    else: seg.append([k, k])
print('open-mouth segments (frame ranges):', seg[:20])
