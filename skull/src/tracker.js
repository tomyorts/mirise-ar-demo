// tracker.js — face landmark tracking, entirely inside the browser (WebAssembly, optional GPU).
import { FaceLandmarker } from '@mediapipe/tasks-vision';

export class Tracker {
  /**
   * @param o.wasmLoaderPath / o.wasmBinaryPath  engine files (same origin)
   * @param o.model     Uint8Array of the tracking model
   * @param o.delegate  'GPU' | 'CPU' | undefined (try GPU, then CPU)
   * @param o.testImage canvas with a known face, used to check that the engine really works on this device
   */
  static async create(o) {
    const t = new Tracker(o);
    const order = o.delegate ? [o.delegate] : ['GPU', 'CPU'];
    let lastErr = null, made = false;
    for (const d of order) {
      try {
        await t._make(d); made = true;
        // Self-test on a picture the tracker is known to find a face in: catches a graphics path that runs but returns nothing.
        if (!o.testImage || t.selfTest(o.testImage)) { t.tested = !!o.testImage; return t; }
        lastErr = new Error('face tracker self-test failed (' + d + ')');
      } catch (e) { lastErr = e; made = false; }
    }
    if (made) return t;          // could not confirm, but an engine is running: carry on with it
    throw lastErr;
  }

  /** Switch between the GPU and CPU engines on request. */
  async use(delegate) {
    try { this.fl && this.fl.close(); } catch { /* ignore */ }
    this.o.delegate = delegate;
    await this._make(delegate);
    this.tested = this.o.testImage ? this.selfTest(this.o.testImage) : false;
    return this.tested;
  }

  selfTest(image) {
    let found = false;
    try {
      for (let i = 0; i < 3 && !found; i++) {
        const r = this.fl.detectForVideo(image, ++this.lastTs);
        found = !!(r && r.faceLandmarks && r.faceLandmarks.length && r.facialTransformationMatrixes && r.facialTransformationMatrixes.length);
      }
      // Show the tracker an empty picture so it forgets the test face: otherwise it would look for the
      // camera's first face where the test face was.
      if (found) {
        if (!this.blank) { this.blank = document.createElement('canvas'); this.blank.width = image.width; this.blank.height = image.height; this.blank.getContext('2d').fillRect(0, 0, image.width, image.height); }
        for (let i = 0; i < 3; i++) { const r = this.fl.detectForVideo(this.blank, ++this.lastTs); if (!r || !r.faceLandmarks || !r.faceLandmarks.length) break; }
      }
    } catch { return false; }
    return found;
  }

  constructor(o) { this.o = o; this.fl = null; this.delegate = ''; this.jawIdx = -1; this.lastTs = 0; this.failures = 0; this.tested = false; this.blank = null; }

  async _make(delegate) {
    const o = this.o;
    this.fl = await FaceLandmarker.createFromOptions(
      { wasmLoaderPath: o.wasmLoaderPath, wasmBinaryPath: o.wasmBinaryPath },
      {
        baseOptions: { modelAssetBuffer: o.model, delegate },
        runningMode: 'VIDEO', numFaces: 1,
        outputFaceBlendshapes: true, outputFacialTransformationMatrixes: true,
        minFaceDetectionConfidence: 0.5, minFacePresenceConfidence: 0.5, minTrackingConfidence: 0.5,
      });
    this.delegate = delegate;
  }

  /** @returns null when no face, else { lm: [{x,y,z}...], mat: number[16] column-major, jawOpen } */
  detect(source, nowMs) {
    let ts = Math.round(nowMs);
    if (ts <= this.lastTs) ts = this.lastTs + 1;     // timestamps must strictly increase
    this.lastTs = ts;
    const r = this.fl.detectForVideo(source, ts);
    if (!r || !r.faceLandmarks || !r.faceLandmarks.length || !r.facialTransformationMatrixes || !r.facialTransformationMatrixes.length) return null;
    let jawOpen = null;
    const bs = r.faceBlendshapes && r.faceBlendshapes[0] && r.faceBlendshapes[0].categories;
    if (bs) {
      if (this.jawIdx < 0 || !bs[this.jawIdx] || bs[this.jawIdx].categoryName !== 'jawOpen') this.jawIdx = bs.findIndex((c) => c.categoryName === 'jawOpen');
      if (this.jawIdx >= 0) jawOpen = bs[this.jawIdx].score;
    }
    return { lm: r.faceLandmarks[0], mat: r.facialTransformationMatrixes[0].data, jawOpen };
  }

  /** Called when detect() threw: fall back from GPU to CPU once. */
  async recover() {
    this.failures++;
    if (this.delegate === 'GPU') { try { this.fl.close(); } catch { /* ignore */ } await this._make('CPU'); return true; }
    return false;
  }

  close() { try { this.fl && this.fl.close(); } catch { /* ignore */ } this.fl = null; }
}
