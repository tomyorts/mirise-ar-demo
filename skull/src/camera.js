// camera.js — opens the front or rear camera and switches between cameras.
export class Camera {
  constructor(video) {
    this.video = video; this.stream = null; this.want = 'user'; this.facing = 'user';
    this.deviceId = ''; this.devices = [];
  }

  static supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia); }

  async _open(videoConstraints) {
    this.stop();
    const base = { width: { ideal: 1280 }, height: { ideal: 720 }, frameRate: { ideal: 30, max: 30 } };
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { ...base, ...videoConstraints } });
    this.stream = stream;
    const track = stream.getVideoTracks()[0];
    const st = track.getSettings ? track.getSettings() : {};
    this.deviceId = st.deviceId || '';
    const label = track.label || '';
    this.facing = st.facingMode || (/back|rear|environment|背面|外側/i.test(label) ? 'environment' : 'user');
    const v = this.video;
    v.srcObject = stream;
    v.muted = true; v.playsInline = true;
    await v.play().catch(() => {});
    try {
      const all = await navigator.mediaDevices.enumerateDevices();
      this.devices = all.filter((d) => d.kind === 'videoinput');
    } catch { this.devices = []; }
    return this;
  }

  /** facing: 'user' (front) or 'environment' (rear) */
  start(facing = 'user') { this.want = facing; return this._open({ facingMode: { ideal: facing } }); }

  /** Switch to the other camera. Resolves false when there is nothing to switch to. */
  async flip() {
    const prev = this.deviceId, prevFacing = this.facing;
    const other = prevFacing === 'environment' ? 'user' : 'environment';
    if (this.devices.length === 1) return false;
    try {
      await this._open({ facingMode: { ideal: other } });
      if (this.deviceId && this.deviceId !== prev) { this.want = other; return true; }
      if (!this.deviceId && this.facing !== prevFacing) { this.want = other; return true; }
    } catch { /* fall through to cycling by device */ }
    const ids = this.devices.map((d) => d.deviceId).filter(Boolean);
    if (ids.length > 1) {
      const next = ids[(Math.max(0, ids.indexOf(prev)) + 1) % ids.length];
      await this._open({ deviceId: { exact: next } });
      return this.deviceId !== prev;
    }
    if (!this.stream) await this._open({ facingMode: { ideal: prevFacing } });
    return false;
  }

  stop() {
    if (this.stream) { for (const t of this.stream.getTracks()) t.stop(); this.stream = null; }
    if (this.video.srcObject) this.video.srcObject = null;
  }

  /** Front cameras are shown mirrored, like a mirror; rear cameras are not. */
  get mirrored() { return this.facing !== 'environment'; }
  get live() { return !!this.stream && this.stream.getVideoTracks().some((t) => t.readyState === 'live'); }
}
