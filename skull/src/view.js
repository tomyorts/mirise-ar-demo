// view.js — draws the camera frame and the anatomy layer into one canvas, frame-synchronously.
import * as THREE from 'three';
import { FOV_V_DEG } from './solver.js';

const COMPOSITE_VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

// The video stays in display (sRGB) values; the anatomy layer arrives linear and premultiplied.
const COMPOSITE_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tVideo; uniform sampler2D tAnat;
uniform vec4 uVideoUV;      // xy scale, zw offset: screen uv -> video uv ("cover" crop)
uniform float uReveal;      // 0 skin .. 1 anatomy
uniform float uXray;        // 0 solid style, 1 X-ray style
uniform int uRegion;        // 0 whole face, 1 one side of the facial midline, 2 lens
uniform vec3 uLine;         // midline in screen uv: a*x + b*y + c (signed distance in units of screen height)
uniform vec3 uLens;         // centre xy (screen uv), radius (fraction of screen height)
uniform float uAspect;
varying vec2 vUv;
vec3 toSRGB(vec3 c){ c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c)); }
void main(){
  vec3 vid = texture2D(tVideo, vUv * uVideoUV.xy + uVideoUV.zw).rgb;
  vec4 an = texture2D(tAnat, vUv);
  float mask = 1.0, ring = 0.0;
  if (uRegion == 1) {
    float d = uLine.x * vUv.x * uAspect + uLine.y * vUv.y + uLine.z;
    mask = smoothstep(-0.004, 0.004, d);
  } else if (uRegion == 2) {
    float r = length((vUv - uLens.xy) * vec2(uAspect, 1.0));
    mask = 1.0 - smoothstep(uLens.z - 0.012, uLens.z, r);
    ring = smoothstep(uLens.z - 0.004, uLens.z, r) * (1.0 - smoothstep(uLens.z, uLens.z + 0.006, r));
  }
  float g = uReveal * mask;
  vec3 col;
  if (uXray > 0.5) {
    float lum = dot(vid, vec3(0.299, 0.587, 0.114));
    vec3 film = mix(vid, vec3(lum) * vec3(0.55, 0.68, 0.9), 0.85) * 0.42;      // dim, cool backdrop
    vec3 base = mix(vid, film, g);
    vec3 glow = toSRGB(1.0 - exp(-an.rgb * 1.15));
    col = base + glow * g;
  } else {
    float a = clamp(an.a, 0.0, 1.0);
    vec3 c = toSRGB(an.rgb / max(a, 1e-4));
    col = mix(vid, c, a * g);
  }
  col = mix(col, vec3(1.0), ring * 0.85);
  gl_FragColor = vec4(col, 1.0);
}`;

// Picture quality levels; the page tries a lower one when the device cannot keep up.
// pixels: drawing buffer; samples: anti-aliasing of the anatomy layer; video: longest side of the copied camera frame.
const QUALITY = [{ pixels: 2.0e6, samples: 4, video: 1280 }, { pixels: 1.25e6, samples: 4, video: 960 }, { pixels: 0.8e6, samples: 2, video: 720 }];

export class View {
  constructor(canvas) {
    this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' });
    r.autoClear = false;
    r.setClearColor(0x000000, 0);
    this.gl2 = r.capabilities.isWebGL2 !== false;

    // anatomy scene, seen through the tracker's own camera model
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV_V_DEG, 4 / 3, 1, 600);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9a8f80, 1.55));
    const key = new THREE.DirectionalLight(0xfff6ea, 2.5); key.position.set(-0.45, 0.9, 1.0); this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xdde8ff, 0.7); fill.position.set(0.9, -0.2, 0.6); this.scene.add(fill);

    this.quality = 0;
    this.rt = this._makeTarget();

    // camera frame as a texture (raw display values, no colour conversion)
    this.frame = document.createElement('canvas');
    this.frame.width = 16; this.frame.height = 16;
    this.fctx = this.frame.getContext('2d', { alpha: false });
    this.vtex = new THREE.CanvasTexture(this.frame);
    this.vtex.colorSpace = THREE.NoColorSpace; this.vtex.generateMipmaps = false;
    this.vtex.minFilter = THREE.LinearFilter; this.vtex.magFilter = THREE.LinearFilter;

    this.u = {
      tVideo: { value: this.vtex }, tAnat: { value: this.rt.texture }, uVideoUV: { value: new THREE.Vector4(1, 1, 0, 0) },
      uReveal: { value: 1 }, uXray: { value: 0 }, uRegion: { value: 0 }, uLine: { value: new THREE.Vector3(1, 0, -0.5) },
      uLens: { value: new THREE.Vector3(0.5, 0.5, 0.2) }, uAspect: { value: 1 },
    };
    const geo = new THREE.BufferGeometry();     // one big triangle covering the screen
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
    const quad = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: this.u, vertexShader: COMPOSITE_VERT, fragmentShader: COMPOSITE_FRAG, depthTest: false, depthWrite: false }));
    quad.frustumCulled = false;
    this.post = new THREE.Scene(); this.post.add(quad);
    this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.videoW = 0; this.videoH = 0; this.cssW = 0; this.cssH = 0;
    this.faceVisible = false;
    this.cover = { k: 1, ox: 0, oy: 0 };      // video px -> css px:  css = video * k - o
  }

  add(obj) { this.scene.add(obj); }

  /** Anatomy layer buffer. Prefers 16-bit float with 4x anti-aliasing and steps down until the device accepts it. */
  _makeTarget() {
    const r = this.renderer;
    const half = r.extensions.has('EXT_color_buffer_half_float') || r.extensions.has('EXT_color_buffer_float');
    const want = QUALITY[this.quality].samples;
    const tries = [];
    if (half) tries.push([THREE.HalfFloatType, want]);
    tries.push([THREE.UnsignedByteType, want], [THREE.UnsignedByteType, 0]);
    for (let i = 0; i < tries.length; i++) {
      const [type, samples] = tries[i];
      const rt = new THREE.WebGLRenderTarget(8, 8, { samples, depthBuffer: true, stencilBuffer: false, type, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
      // the last candidate is the plainest buffer there is: take it without asking
      if (i === tries.length - 1 || this._targetWorks(rt)) {
        this.targetInfo = (type === THREE.HalfFloatType ? 'f16' : 'u8') + (samples ? ' x' + samples : '');
        return rt;
      }
      rt.dispose();
    }
    return null;   // not reached
  }

  /** Ask the graphics driver whether it accepts this buffer (both the anti-aliased buffer and the texture it resolves into). */
  _targetWorks(rt) {
    const r = this.renderer, gl = r.getContext();
    try {
      for (let i = 0; i < 8 && gl.getError() !== gl.NO_ERROR; i++) { /* forget older errors */ }
      r.setRenderTarget(rt); r.clear(true, true, false);
      const p = r.properties.get(rt), fbs = [p.__webglMultisampledFramebuffer, p.__webglFramebuffer].filter(Boolean);
      let ok = fbs.length > 0;
      for (const fb of fbs) { r.state.bindFramebuffer(gl.FRAMEBUFFER, fb); ok = ok && gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE; }
      return ok && gl.getError() === gl.NO_ERROR;
    } catch { return false; } finally { r.setRenderTarget(null); }
  }

  get maxQuality() { return QUALITY.length - 1; }

  /** Picture quality level: 0 is the best, higher numbers use fewer pixels and less anti-aliasing. */
  setQuality(q) {
    q = Math.max(0, Math.min(QUALITY.length - 1, q));
    if (q === this.quality) return false;
    const resample = QUALITY[q].samples !== QUALITY[this.quality].samples;
    this.quality = q;
    if (resample) { const old = this.rt; this.rt = this._makeTarget(); this.u.tAnat.value = this.rt.texture; old.dispose(); }
    this.layout();
    return true;
  }

  /** Copy the current video frame. Everything drawn afterwards refers to exactly this frame. */
  grab(video) {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return false;
    const maxSide = QUALITY[this.quality].video, sc = Math.min(1, maxSide / Math.max(vw, vh));
    const w = Math.round(vw * sc), h = Math.round(vh * sc);
    if (this.frame.width !== w || this.frame.height !== h) { this.frame.width = w; this.frame.height = h; this.vtex.dispose(); }
    this.fctx.drawImage(video, 0, 0, w, h);
    this.vtex.needsUpdate = true;
    if (w !== this.videoW || h !== this.videoH) { this.videoW = w; this.videoH = h; this.layout(); }
    return true;
  }

  /** Size the drawing buffer to the element and set up the "cover" crop of the camera frame. */
  layout() {
    const el = this.canvas, cw = el.clientWidth || 1, ch = el.clientHeight || 1;
    this.cssW = cw; this.cssH = ch;
    let pr = Math.min(window.devicePixelRatio || 1, 2);
    const maxPixels = QUALITY[this.quality].pixels;
    if (cw * ch * pr * pr > maxPixels) pr = Math.sqrt(maxPixels / (cw * ch));
    const W = Math.max(2, Math.round(cw * pr)), H = Math.max(2, Math.round(ch * pr));
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(W, H, false);
    this.rt.setSize(W, H);
    this.u.uAspect.value = W / H;
    if (!this.videoW) return;
    const vw = this.videoW, vh = this.videoH;
    const k = Math.max(W / vw, H / vh);                  // video px -> buffer px
    const fullW = vw * k, fullH = vh * k, ox = (fullW - W) / 2, oy = (fullH - H) / 2;
    this.camera.aspect = vw / vh;
    this.camera.setViewOffset(fullW, fullH, ox, oy, W, H);
    this.camera.updateProjectionMatrix();
    this.u.uVideoUV.value.set(W / fullW, H / fullH, ox / fullW, oy / fullH);
    this.cover = { k: k / pr, ox: ox / pr, oy: oy / pr, pr };
  }

  /** Camera-space point -> CSS pixel position inside the canvas element (not mirrored). */
  toScreen(x, y, z, out) {
    const f = (this.videoH / 2) / Math.tan((FOV_V_DEG * Math.PI) / 360);   // focal length in video px
    const u = this.videoW / 2 + f * x / -z, v = this.videoH / 2 - f * y / -z;
    out.x = u * this.cover.k - this.cover.ox; out.y = v * this.cover.k - this.cover.oy;
    return out;
  }

  setReveal(v) { this.u.uReveal.value = v; }
  setXray(on) { this.u.uXray.value = on ? 1 : 0; }
  setRegion(mode) { this.u.uRegion.value = mode; }
  /** Facial midline from two CSS-pixel points (top, bottom); side = +1 or -1 picks which half shows the anatomy. */
  setMidline(ax, ay, bx, by, side) {
    const h = this.cssH || 1;
    // work in units of screen height, y up (uv space scaled by aspect on x)
    const x0 = ax / h, y0 = 1 - ay / h, x1 = bx / h, y1 = 1 - by / h;
    let nx = -(y1 - y0), ny = x1 - x0; const n = Math.hypot(nx, ny) || 1; nx = nx / n * side; ny = ny / n * side;
    this.u.uLine.value.set(nx, ny, -(nx * x0 + ny * y0));
  }
  setLens(cx, cy, rCss) { const h = this.cssH || 1; this.u.uLens.value.set(cx / (this.cssW || 1), 1 - cy / h, rCss / h); }

  render() {
    const r = this.renderer;
    r.setRenderTarget(this.rt);
    r.setClearColor(0x000000, 0); r.clear(true, true, false);
    if (this.faceVisible && this.u.uReveal.value > 0.002) r.render(this.scene, this.camera);
    r.setRenderTarget(null);
    r.render(this.post, this.postCam);
  }

}
