"""Face tracker wrapper (same model file as the web page uses)."""
import os, sys, contextlib
import numpy as np
import cv2
import mediapipe as mp
from mediapipe.tasks import python as mpp
from mediapipe.tasks.python import vision

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL = os.path.join(ROOT, '..', '..', 'mp', 'face_landmarker.task')      # skull/mp/: the file the page itself loads

def make(mode='image', conf=0.3):
    opts = vision.FaceLandmarkerOptions(
        base_options=mpp.BaseOptions(model_asset_path=MODEL),
        running_mode=vision.RunningMode.IMAGE if mode == 'image' else vision.RunningMode.VIDEO,
        output_face_blendshapes=True, output_facial_transformation_matrixes=True, num_faces=1,
        min_face_detection_confidence=conf, min_face_presence_confidence=conf, min_tracking_confidence=conf)
    return vision.FaceLandmarker.create_from_options(opts)

def detect(det, bgr, ts_ms=None):
    rgb = np.ascontiguousarray(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB))
    im = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
    res = det.detect(im) if ts_ms is None else det.detect_for_video(im, int(ts_ms))
    if not res.face_landmarks:
        return None
    lm = np.array([[p.x, p.y, p.z] for p in res.face_landmarks[0]])
    M = np.array(res.facial_transformation_matrixes[0], float).reshape(4, 4)
    bs = {c.category_name: float(c.score) for c in res.face_blendshapes[0]}
    return dict(lm=lm, M=M, bs=bs)

def basis_weights():
    import re
    txt = open(os.path.join(ROOT, 'canon', 'geometry_pipeline_metadata_landmarks.pbtxt')).read()
    b = re.findall(r"procrustes_landmark_basis\s*\{\s*landmark_id:\s*(\d+)\s*weight:\s*([0-9.eE+-]+)\s*\}", txt)
    w = np.zeros(468)
    for i, x in b:
        w[int(i)] = float(x)
    return w
