// main.js — wires the camera, the face tracker, the fitted anatomy and the controls together.
// Everything runs in this page. The camera picture is never uploaded or stored; the page's
// content security policy also forbids connections to any other server.
import * as THREE from 'three';
import { Camera } from './camera.js';
import { Tracker } from './tracker.js';
import { Anatomy } from './anatomy.js';
import { View } from './view.js';
import { LabelLayer } from './labels.js';
import { FaceSolver } from './solver.js';
import { fetchBytes } from './assets.js';
import { BUILD } from './build.gen.js';

const $ = (id) => document.getElementById(id);
const qs = new URLSearchParams(location.search);
const smooth01 = (t) => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };
const DEBUG = Number(qs.get('debug') || 0);
const REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

const el = {
  stage: $('stage'), gl: $('gl'), labels: $('labels'), video: $('cam'),
  start: $('start'), btnStart: $('btnStart'), bar: $('bar'), startNote: $('startNote'), startErr: $('startErr'),
  depth: $('depth'), btnFlip: $('btnFlip'), btnInfo: $('btnInfo'), btnLabel: $('btnLabel'), btnShot: $('btnShot'),
  info: $('info'), btnInfoClose: $('btnInfoClose'), toast: $('toast'), debug: $('debug'), version: $('version'), side: $('side'), dock: $('dock'), card: $('card'),
  engine: $('engine'), btnEngine: $('btnEngine'), engineRow: $('engineRow'),
};

const S = {
  phase: 'idle',              // idle -> loading -> running | error
  depth: 0, depthTarget: 0.5, intro: true,
  region: 'whole', halfSide: 1, style: 'solid', lang: 'off',
  lens: null,                 // { x, y, r } in CSS px of the unmirrored picture
  present: false, lastSeen: 0, fade: 0, lostToastAt: 0,
  clean: false, mirrored: true,
  fps: 0, frames: 0, fpsT: 0, last: null,
  pending: false, vfc: 0, frameAt: 0, runSince: 0, poll: false, stallTime: -1,
  q: { n: 0, sum: 0, trial: false, before: 0, done: false },   // picture-quality tuning
};

let view, camera, tracker, anatomy, solver, labels, assetsP = null, wasmUrl = '';
const pts = [], v3 = new THREE.Vector3(), sA = { x: 0, y: 0 }, sB = { x: 0, y: 0 }, sC = { x: 0, y: 0 };

// ------------------------------------------------------------------ messages

let toastTimer = 0;
function toast(msg, ms = 2600) {
  el.toast.textContent = msg; el.toast.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.toast.classList.remove('on'), ms);
}

function cameraErrorText(e) {
  const n = e && e.name;
  if (!window.isSecureContext) return 'このページは https で開いたときだけカメラを使えます。';
  if (n === 'NotAllowedError' || n === 'SecurityError') return 'カメラの使用が許可されていません。ブラウザの設定でこのページのカメラを「許可」にして、もう一度お試しください。LINE などのアプリ内ブラウザではカメラを使えないことがあります。その場合は Safari か Chrome で開いてください。';
  if (n === 'NotFoundError' || n === 'OverconstrainedError' || n === 'NotSupportedError') return 'カメラが見つかりません。カメラ付きの端末で開いてください。';
  if (n === 'NotReadableError' || n === 'AbortError') return 'カメラを開けませんでした。ほかのアプリがカメラを使っていないか確認してください。';
  return 'カメラを開けませんでした。（' + (e && e.message ? e.message : n || '不明なエラー') + '）';
}

/** The tracking engine is built with WebAssembly SIMD (iOS 16.4 or later; current Chrome, Edge, Firefox, Safari). */
function engineSupported() {
  try {
    return typeof WebAssembly === 'object' && WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
  } catch { return false; }
}

// ------------------------------------------------------------------ loading

function loadAssets() {
  if (assetsP) return assetsP;
  const v = '?v=' + BUILD.version, base = 'skull/';
  const sizes = BUILD.sizes, total = sizes.wasm + sizes.model + sizes.glb + sizes.json;
  const got = { wasm: 0, model: 0, glb: 0, json: 0 };
  const tick = (k) => (n) => { got[k] = n; el.bar.style.transform = `scaleX(${Math.min(1, 0.03 + 0.97 * (got.wasm + got.model + got.glb + got.json) / total).toFixed(3)})`; };
  const get = (k, path) => fetchBytes(base + path + v, sizes[k], tick(k));
  const core = Promise.all([get('json', 'anatomy.json'), get('glb', 'anatomy.glb')])
    .then(([json, glb]) => ({ meta: JSON.parse(new TextDecoder().decode(json)), glb }));
  const all = Promise.all([core, get('wasm', 'mp/vision_wasm_internal.wasm'), get('model', 'mp/face_landmarker.task')])
    .then(([c, wasm, model]) => ({ ...c, wasm, model }));
  assetsP = { core, all };
  all.catch(() => { assetsP = null; });
  core.catch(() => {});
  return assetsP;
}

/** A small picture with a face the tracker is known to find (a render of the anatomy model's own head). */
async function loadTestImage() {
  try {
    const img = new Image(); img.src = 'skull/selftest.jpg?v=' + BUILD.version;
    await img.decode();
    const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    return c;
  } catch { return null; }
}

function showEngine() {
  if (!tracker) return;
  el.engine.textContent = tracker.delegate === 'GPU' ? 'GPU（速い）' : 'CPU（確実）';
  el.btnEngine.textContent = tracker.delegate === 'GPU' ? 'CPU に切り替える' : 'GPU に切り替える';
  el.engineRow.hidden = false;
}

async function switchEngine() {
  if (!tracker || S.switching) return;
  S.switching = true; el.btnEngine.disabled = true;
  const prev = S.phase; if (prev === 'running') S.phase = 'paused';
  const next = tracker.delegate === 'GPU' ? 'CPU' : 'GPU';
  try { await tracker.use(next); toast('顔の読み取りを ' + next + ' に切り替えました'); }
  catch (e) { console.warn(e); try { await tracker.use(next === 'GPU' ? 'CPU' : 'GPU'); } catch { /* keep going */ } toast(next + ' は、この端末では使えませんでした'); }
  showEngine(); solver && solver.reset();
  S.switching = false; el.btnEngine.disabled = false;
  if (prev === 'running') { S.phase = 'running'; S.runSince = S.frameAt = performance.now(); schedule(); }
}

/** The 3D parts that do not need the camera: renderer and the anatomy model. */
async function ensureScene() {
  if (anatomy) return;
  const a = await loadAssets().core;
  if (anatomy) return;
  if (!view) { view = new View(el.gl); labels = new LabelLayer(el.labels); }
  anatomy = await Anatomy.load(a.meta, a.glb.buffer.slice(a.glb.byteOffset, a.glb.byteOffset + a.glb.byteLength));
  solver = new FaceSolver(a.meta, { adapt: qs.get('adapt') !== '0', refine: qs.get('refine') !== '0' });
  solver.diagnostics = DEBUG >= 1;
  view.add(anatomy.root);
}

// ------------------------------------------------------------------ start screen: the model turning slowly

const idle = { on: false, m: new THREE.Matrix4(), up: new THREE.Matrix4(), r: new THREE.Matrix4(), c: new THREE.Matrix4(), t0: 0 };
function idleFrame(now) {
  if (!idle.on || S.phase === 'running') { idle.on = false; return; }
  const t = (now - idle.t0) / 1000, W = view.cssW, H = view.cssH, wide = W >= 860;
  const b = anatomy.meta.bounds, cx = (b.min[0] + b.max[0]) / 2, cy = (b.min[1] + b.max[1]) / 2, cz = (b.min[2] + b.max[2]) / 2;
  // where the model may sit: beside the card on wide screens, above it on phones
  let px, py, ph;
  if (wide) { px = W * 0.69; py = H * 0.5; ph = Math.min(H * 0.64, W * 0.38); }
  else { const top = 56, free = Math.max(0, el.card.getBoundingClientRect().top - top); px = W / 2; py = top + free / 2; ph = Math.min(free * 0.94, W * 0.66); }
  const TAN = Math.tan((63 * Math.PI) / 360), span = Math.max(W, H), modelH = (b.max[1] - b.min[1]) * 1.12;
  const d = ph > 90 ? (modelH * span) / (2 * TAN * ph) : 0;
  const yaw = (REDUCED ? 0.45 : 0.45 + 0.5 * Math.sin(t * 0.45)) * (wide ? -1 : 1);
  idle.r.makeRotationY(yaw);
  idle.m.makeTranslation(((px - W / 2) / (span / 2)) * TAN * d, (-(py - H / 2) / (span / 2)) * TAN * d, -d)
    .multiply(idle.r).multiply(idle.up).multiply(idle.c.makeTranslation(-cx, -cy, -cz));
  anatomy.setPose(idle.m.elements);
  anatomy.setJaw(REDUCED ? 0 : 5 + 5 * Math.sin(t * 0.9 - 1));
  anatomy.setLayers({ reveal: 1, brain: 0 });
  view.faceVisible = d > 0; view.setReveal(Math.min(1, t / 1.2)); view.setRegion(0);
  view.render();
  requestAnimationFrame(idleFrame);
}
async function startIdle() {
  try {
    await ensureScene();
    if (S.phase !== 'idle' && S.phase !== 'error') return;
    // backdrop: film blue, lighter behind the model
    const f = view.frame; f.width = 64; f.height = 64;
    const g = view.fctx.createRadialGradient(32, 26, 2, 32, 30, 44); g.addColorStop(0, '#1b2a3b'); g.addColorStop(1, '#0a1018');
    view.fctx.fillStyle = g; view.fctx.fillRect(0, 0, 64, 64);
    view.vtex.dispose(); view.vtex.needsUpdate = true; view.videoW = 64; view.videoH = 64; view.layout();
    // stand the model upright: the tracker's frame is tilted against the head's own axes
    const A = anatomy.meta.alignment, sc = Math.cbrt(new THREE.Matrix3().set(A[0][0], A[0][1], A[0][2], A[1][0], A[1][1], A[1][2], A[2][0], A[2][1], A[2][2]).determinant());
    idle.up.set(A[0][0] / sc, A[1][0] / sc, A[2][0] / sc, 0, A[0][1] / sc, A[1][1] / sc, A[2][1] / sc, 0, A[0][2] / sc, A[1][2] / sc, A[2][2] / sc, 0, 0, 0, 0, 1);
    el.gl.classList.remove('mirror');
    idle.on = true; idle.t0 = performance.now();
    requestAnimationFrame(idleFrame);
  } catch (e) { console.warn('preview', e); }
}

async function start() {
  if (S.phase === 'loading' || S.phase === 'running') return;
  S.phase = 'loading';
  el.startErr.hidden = true; el.start.classList.add('busy'); el.btnStart.disabled = true;
  el.startNote.textContent = '準備しています…';
  try {
    if (!engineSupported()) throw Object.assign(new Error('WebAssembly SIMD is unavailable'), { old: true });
    const src = qs.get('src');
    let camP;
    if (src) {                                   // test hook: a same-origin video file instead of the camera
      camera = null;
      el.video.src = src; el.video.loop = true; el.video.muted = true; el.video.playsInline = true;
      camP = el.video.play().catch(() => {});
      S.mirrored = qs.get('mirror') === '1';
    } else {
      if (!Camera.supported()) throw Object.assign(new Error('getUserMedia is unavailable'), { name: window.isSecureContext ? 'NotFoundError' : 'SecurityError', camera: true });
      if (camera) camera.stop();
      camera = new Camera(el.video);
      camP = camera.start('user');               // ask for the camera while the tap is still fresh
      camP.catch(() => {});
    }
    await ensureScene();
    const a = await loadAssets().all;
    if (!tracker) {
      wasmUrl = URL.createObjectURL(new Blob([a.wasm], { type: 'application/wasm' }));
      const d = (qs.get('delegate') || '').toUpperCase();
      tracker = await Tracker.create({
        wasmLoaderPath: 'skull/mp/vision_wasm_internal.js?v=' + BUILD.version, wasmBinaryPath: wasmUrl,
        model: a.model, delegate: d === 'CPU' || d === 'GPU' ? d : undefined, testImage: await loadTestImage(),
      });
      showEngine();
    }
    el.bar.style.transform = 'scaleX(1)';
    el.startNote.textContent = 'カメラの許可を待っています…';
    try { await camP; } catch (e) { e.camera = true; throw e; }
    if (camera) S.mirrored = camera.mirrored;
    applyMirror();
    idle.on = false;
    solver.reset();
    S.phase = 'running';
    document.body.classList.add('running');
    el.start.classList.remove('busy');
    el.start.hidden = true;
    S.depth = 0; S.depthTarget = 0.5; S.intro = true; S.present = false; S.fade = 0; S.runSince = S.frameAt = performance.now();
    onResize();
    schedule();
    keepAwake();
  } catch (e) {
    console.error(e);
    S.phase = 'error';
    el.start.classList.remove('busy'); el.btnStart.disabled = false;
    el.startNote.textContent = '';
    el.startErr.textContent = e && e.camera ? cameraErrorText(e)
      : e && e.old ? 'このブラウザは対応していません。iPhone・iPad は iOS 16.4 以降、パソコンと Android は最新の Chrome・Edge・Safari・Firefox でお試しください。'
      : /webgl/i.test(String(e && e.message)) ? 'このブラウザでは3D表示（WebGL）を使えないため、表示できません。別のブラウザか端末でお試しください。'
      : '準備に失敗しました。通信環境を確認して、ページを開き直してください。（' + (e && e.message ? e.message : e) + '）';
    el.startErr.hidden = false;
    el.btnStart.textContent = 'もう一度試す';
  }
}

// ------------------------------------------------------------------ screen
let wake = null;
async function keepAwake() {
  if (wake || !navigator.wakeLock || document.hidden || S.phase !== 'running') return;
  try { wake = await navigator.wakeLock.request('screen'); wake.addEventListener('release', () => { wake = null; }); } catch { wake = null; }
}
function toggleFullscreen() {
  const d = document, root = d.documentElement;
  try {
    if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    else { const req = root.requestFullscreen || root.webkitRequestFullscreen; if (req) { const p = req.call(root); if (p && p.catch) p.catch(() => {}); } }
  } catch { /* not available here */ }
}

// ------------------------------------------------------------------ per-frame work

/** Ask for the next camera frame. Only one request is ever pending, however many places call this. */
function schedule() {
  if (S.phase !== 'running' || S.manual || S.pending) return;
  S.pending = true;
  const v = el.video;
  if (v.requestVideoFrameCallback && !S.poll) S.vfc = v.requestVideoFrameCallback(() => { S.pending = false; S.vfc = 0; frame(); });
  else requestAnimationFrame(() => { S.pending = false; if (v.currentTime !== S.lastTime) { S.lastTime = v.currentTime; frame(); } else schedule(); });
}

/** If the browser dropped the pending request (it can when the camera is swapped or the page returns), ask again. */
function watchdog() {
  if (S.phase !== 'running' || S.manual || document.hidden) return;
  if (performance.now() - S.frameAt < 1500) return;
  const v = el.video;
  if (S.vfc && v.cancelVideoFrameCallback) { try { v.cancelVideoFrameCallback(S.vfc); } catch { /* ignore */ } }
  S.pending = false; S.vfc = 0;
  if (v.paused && (v.srcObject || v.src)) v.play().catch(() => {});
  // the video is running but its frame callback never came: from now on, check for new frames ourselves
  else if (v.requestVideoFrameCallback && !S.poll && v.currentTime !== S.stallTime && S.stallTime >= 0) S.poll = true;
  S.stallTime = v.currentTime;
  schedule();
}

/** When the picture runs slowly, try a lower picture quality and keep it only if that really helps. */
function tuneQuality(now) {
  const q = S.q;
  if (q.done || S.manual || !S.present || now - S.runSince < 4000) { q.n = 0; q.sum = 0; return; }
  q.sum += S.fps; q.n++;
  if (q.n < 3) return;                                   // judge three seconds at a time
  const fps = q.sum / q.n; q.n = 0; q.sum = 0;
  if (q.trial) {
    q.trial = false;
    if (fps < q.before * 1.15) { view.setQuality(view.quality - 1); q.done = true; return; }   // drawing was not what held it back
  }
  if (fps < 17 && view.quality < view.maxQuality) { q.before = fps; q.trial = true; view.setQuality(view.quality + 1); }
}

function layersFromDepth(d) {
  return { reveal: smooth01(d / 0.42), brain: smooth01((d - 0.56) / 0.4) };
}

function frame() {
  if (S.phase !== 'running') return;
  const now = performance.now();
  S.frameAt = now; S.stallTime = -1;
  let det = null;
  if (view.grab(el.video)) {
    try { det = tracker.detect(view.frame, now); }
    catch (e) {
      console.warn('tracker', e);
      S.phase = 'recovering';
      tracker.recover().then((ok) => { if (ok) { S.phase = 'running'; schedule(); } else failRun('顔の追跡を続けられなくなりました。ページを開き直してください。'); },
        () => failRun('顔の追跡を続けられなくなりました。ページを開き直してください。'));
      return;
    }
  }
  if (det) {
    const r = solver.update(det.lm, det.mat, det.jawOpen, view.videoW / view.videoH, now);
    anatomy.setFit(r.fit);
    anatomy.setJaw(r.theta);
    anatomy.setPose(r.pose);
    S.present = true; S.lastSeen = now; S.last = r; S.lastDet = det;
  } else if (now - S.lastSeen > 220) {
    if (S.present) solver.pose = null;
    S.present = false;
  }
  if (!S.present && now - S.lastSeen > 2500 && now - S.lostToastAt > 9000) { S.lostToastAt = now; toast('顔が映ると表示されます'); }

  // ease the see-through depth (also plays the opening reveal the first time a face is found)
  if (S.present && S.intro) S.depth += (S.depthTarget - S.depth) * (REDUCED ? 1 : 0.07);
  else if (!S.intro) S.depth += (S.depthTarget - S.depth) * 0.35;
  if (S.intro && Math.abs(S.depth - S.depthTarget) < 0.004) S.intro = false;
  S.fade += ((S.present ? 1 : 0) - S.fade) * 0.3;
  const L = layersFromDepth(S.depth);
  anatomy.setLayers(L);
  view.faceVisible = S.fade > 0.01;
  view.setReveal(L.reveal * S.fade);

  // region: whole face, one side of the midline, or a movable lens
  let mask = null;
  if (view.faceVisible) {
    view.toScreen(...xyz(anatomy.skinPoint(1, v3)), sC);                     // nose tip = centre of the face
    if (S.region === 'half') {
      view.toScreen(...xyz(anatomy.skinPoint(9, v3)), sA); view.toScreen(...xyz(anatomy.skinPoint(2, v3)), sB);
      view.setMidline(sA.x, sA.y, sB.x, sB.y, S.halfSide);
      const ax = sA.x, ay = sA.y, ex = sB.x - sA.x, ey = sB.y - sA.y, side = S.halfSide;   // same test as the shader, in CSS px
      mask = (x, y) => side * (ey * (x - ax) - ex * (y - ay)) > 0;
    } else if (S.region === 'lens') {
      if (!S.lens) S.lens = { x: sC.x, y: sC.y, r: Math.min(view.cssW, view.cssH) * 0.21 };
      const lx = S.lens.x, ly = S.lens.y, lr = S.lens.r * 0.96;
      view.setLens(lx, ly, S.lens.r);
      mask = (x, y) => Math.hypot(x - lx, y - ly) < lr;
    }
  }
  view.setRegion(S.region === 'half' ? 1 : S.region === 'lens' ? 2 : 0);
  view.render();

  // labels
  labels.resize();
  const showLabels = S.lang !== 'off' && view.faceVisible && S.fade > 0.6;
  if (showLabels) {
    anatomy.labelPoints(pts);
    for (const p of pts) { view.toScreen(p.x, p.y, p.z, sA); p.sx = sA.x; p.sy = sA.y; p.front = p.z < -1; }
  }
  labels.draw(showLabels ? pts : [], {
    active: showLabels, lang: S.lang, mirrored: S.mirrored, cx: sC.x, cy: sC.y, mask, brain: L.brain,
    layers: { bone: L.reveal > 0.6 && L.brain < 0.5, teeth: L.reveal > 0.6 && L.brain < 0.5, brain: L.brain >= 0.5 },
  });

  if (DEBUG >= 2 && S.present && S.lastDet) drawDebugPoints();

  // bookkeeping
  S.frames++;
  if (now - S.fpsT > 1000) {
    S.fps = (S.frames * 1000) / (now - S.fpsT); S.frames = 0; S.fpsT = now;
    if (!el.debug.hidden) showDebug();
    tuneQuality(now);
  }
  schedule();
}

function xyz(v) { return [v.x, v.y, v.z]; }

/** Debug: tracker landmarks (green) against the model's own skin landmarks as posed and fitted (magenta). */
function drawDebugPoints() {
  const g = labels.g, W = labels.w, lm = S.lastDet.lm;
  g.setTransform(labels.dpr, 0, 0, labels.dpr, 0, 0);
  const sx = (x) => (S.mirrored ? W - x : x);
  g.fillStyle = 'rgba(60,255,120,0.9)';
  for (let i = 0; i < 468; i += 1) {
    const x = lm[i].x * view.videoW * view.cover.k - view.cover.ox, y = lm[i].y * view.videoH * view.cover.k - view.cover.oy;
    g.fillRect(sx(x) - 1, y - 1, 2, 2);
  }
  g.fillStyle = 'rgba(255,70,220,0.9)';
  for (let i = 0; i < 468; i += 1) {
    anatomy.skinPoint(i, v3); view.toScreen(v3.x, v3.y, v3.z, sA);
    g.fillRect(sx(sA.x) - 1, sA.y - 1, 2, 2);
  }
}

function failRun(msg) {
  S.phase = 'error'; document.body.classList.remove('running');
  el.start.hidden = false; el.startErr.textContent = msg; el.startErr.hidden = false; el.btnStart.disabled = false; el.btnStart.textContent = 'もう一度試す';
}

function showDebug() {
  const r = S.last;
  el.debug.textContent = [
    `fps ${S.fps.toFixed(1)}  tracker ${tracker.delegate}${tracker.tested ? '+' : ''}  video ${view.videoW}x${view.videoH}  buffer ${el.gl.width}x${el.gl.height} ${view.targetInfo} q${view.quality}`,
    r ? `jaw ${r.theta.toFixed(1)}° (raw ${r.thetaRaw.toFixed(1)})  closed ${r.closed ? 1 : 0}  offAxis ${r.offAxis.toFixed(0)}°  depth ${r.depth.toFixed(0)}cm` : 'no face',
    r ? `fit sx ${r.fit.sx.toFixed(3)} sUp ${r.fit.sUp.toFixed(3)} sLow ${r.fit.sLow.toFixed(3)}  samples ${solver.fitSamples}${r.adapting ? ' *' : ''}${r.res ? `  res ${r.res.dx.toFixed(2)},${r.res.dy.toFixed(2)} rms ${r.res.rms.toFixed(2)}cm` : ''}` : '',
  ].join('\n');
}

// ------------------------------------------------------------------ controls

function applyMirror() {
  el.gl.classList.toggle('mirror', S.mirrored);
  // like the marker on a radiograph: "R" sits on the side of the picture where the subject's right is
  el.side.classList.toggle('at-right', S.mirrored); el.side.classList.toggle('at-left', !S.mirrored);
}

function onResize() {
  if (view) { view.layout(); S.lens = null; }
  if (labels) labels.resize();
  if (el.dock.offsetHeight) document.documentElement.style.setProperty('--dock-h', el.dock.offsetHeight + 'px');
}
function showDepth(v) { el.depth.style.setProperty('--fill', (v * 100).toFixed(1) + '%'); }

function setRegion(r) {
  if (r === 'half' && S.region === 'half') S.halfSide = -S.halfSide;     // tap again: the other side
  S.region = r; S.lens = null;
  for (const b of document.querySelectorAll('[data-region]')) b.setAttribute('aria-pressed', String(b.dataset.region === r));
  if (r === 'lens') toast('指でなぞると、のぞき窓が動きます');
}

function setStyle(s) {
  S.style = s;
  anatomy && anatomy.setStyle(s); view && view.setXray(s === 'xray');
  for (const b of document.querySelectorAll('[data-style]')) b.setAttribute('aria-pressed', String(b.dataset.style === s));
}

function cycleLabels() {
  S.lang = S.lang === 'off' ? 'ja' : S.lang === 'ja' ? 'en' : 'off';
  el.btnLabel.setAttribute('aria-pressed', String(S.lang !== 'off'));
  el.btnLabel.querySelector('.v').textContent = S.lang === 'off' ? 'なし' : S.lang === 'ja' ? '日本語' : 'English';
  anatomy && anatomy.setLobeColors(S.lang !== 'off');
}

async function flipCamera() {
  if (!camera || S.flipping) return;
  S.flipping = true; el.btnFlip.disabled = true;
  try {
    const ok = await camera.flip();
    if (!ok) toast('切り替えられるカメラがありません');
    S.mirrored = camera.mirrored; applyMirror();
    solver.reset(); S.present = false; S.lens = null;
  } catch (e) { toast(cameraErrorText(e), 5000); }
  S.flipping = false; el.btnFlip.disabled = false;
  schedule();
}

async function takePhoto() {
  if (S.phase !== 'running') return;
  view.render();
  const c = document.createElement('canvas'); c.width = el.gl.width; c.height = el.gl.height;
  const g = c.getContext('2d');
  g.save(); if (S.mirrored) { g.translate(c.width, 0); g.scale(-1, 1); } g.drawImage(el.gl, 0, 0); g.restore();
  g.drawImage(el.labels, 0, 0, c.width, c.height);
  const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
  if (!blob) return toast('画像を作れませんでした');
  const d = new Date(), p2 = (n) => String(n).padStart(2, '0');
  const name = `mirai-skull-mirror-${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}${p2(d.getSeconds())}.png`;
  const file = new File([blob], name, { type: 'image/png' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file] }); } catch { /* cancelled */ }
  } else {
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast('画像をこの端末に保存しました');
  }
}

function bind() {
  el.btnStart.addEventListener('click', start);
  el.depth.addEventListener('input', () => { S.depthTarget = el.depth.value / 100; S.intro = false; showDepth(S.depthTarget); });
  for (const b of document.querySelectorAll('[data-region]')) b.addEventListener('click', () => setRegion(b.dataset.region));
  for (const b of document.querySelectorAll('[data-style]')) b.addEventListener('click', () => setStyle(b.dataset.style));
  el.btnLabel.addEventListener('click', cycleLabels);
  el.btnFlip.addEventListener('click', flipCamera);
  el.btnShot.addEventListener('click', takePhoto);
  el.btnEngine.addEventListener('click', switchEngine);
  el.btnInfo.addEventListener('click', () => { el.info.hidden = false; });
  el.btnInfoClose.addEventListener('click', () => { el.info.hidden = true; });
  el.info.addEventListener('click', (e) => { if (e.target === el.info) el.info.hidden = true; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') el.info.hidden = true;
    else if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey && S.phase === 'running') toggleFullscreen();
  });
  for (const a of document.querySelectorAll('[data-open-info]')) a.addEventListener('click', () => { el.info.hidden = false; });

  // tap the picture: hide / show the controls.  drag in lens mode: move the lens.
  let down = null;
  const pos = (e) => { const r = el.gl.getBoundingClientRect(); const x = e.clientX - r.left; return { x: S.mirrored ? r.width - x : x, y: e.clientY - r.top }; };
  el.gl.addEventListener('pointerdown', (e) => { down = { ...pos(e), t: performance.now(), moved: false }; el.gl.setPointerCapture(e.pointerId); if (S.region === 'lens' && S.lens) { S.lens.x = down.x; S.lens.y = down.y; } });
  el.gl.addEventListener('pointermove', (e) => {
    if (!down) return; const p = pos(e);
    if (Math.hypot(p.x - down.x, p.y - down.y) > 8) down.moved = true;
    if (S.region === 'lens' && S.lens) { S.lens.x = p.x; S.lens.y = p.y; }
  });
  const up = () => {
    if (down && !down.moved && performance.now() - down.t < 400 && S.region !== 'lens' && S.phase === 'running') { S.clean = !S.clean; document.body.classList.toggle('clean', S.clean); }
    down = null;
  };
  el.gl.addEventListener('pointerup', up); el.gl.addEventListener('pointercancel', () => { down = null; });

  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', () => setTimeout(onResize, 250));
  if (window.ResizeObserver) new ResizeObserver(onResize).observe(el.stage);
  document.addEventListener('visibilitychange', async () => {
    if (document.hidden || S.phase !== 'running') return;
    if (camera && !camera.live) { try { await camera.start(camera.want); S.mirrored = camera.mirrored; applyMirror(); } catch (e) { toast(cameraErrorText(e), 5000); } }
    solver && (solver.pose = null);
    schedule();
    keepAwake();
  });
  window.addEventListener('pagehide', () => { camera && camera.stop(); });
}

// ------------------------------------------------------------------ boot

el.version.textContent = BUILD.version;
if (DEBUG >= 1) el.debug.hidden = false;
bind();
showDepth(0.5);
setInterval(watchdog, 1000);
if (qs.get('autostart') === '1') start(); else { loadAssets(); startIdle(); }

// Test hooks (used by the automated checks; harmless otherwise).
window.__skull = {
  S, get solver() { return solver; }, get anatomy() { return anatomy; }, get view() { return view; }, get tracker() { return tracker; },
  setDepth(d) { S.depthTarget = d; S.depth = d; S.intro = false; el.depth.value = Math.round(d * 100); showDepth(d); },
  setRegion, setStyle, cycleLabels,
  /** Seek the test video to t seconds, process exactly that frame, and report what was drawn. */
  async step(t) {
    S.manual = true;
    const v = el.video; v.pause();
    await new Promise((res) => { const h = () => { v.removeEventListener('seeked', h); res(); }; v.addEventListener('seeked', h); v.currentTime = t; });
    await new Promise((res) => requestAnimationFrame(res));
    frame();
    const r = S.last;
    return { present: S.present, pose: S.present && r ? Array.from(r.pose) : null, theta: r ? r.theta : null, thetaRaw: r ? r.thetaRaw : null,
      fit: r ? { ...r.fit } : null, closed: r ? r.closed : null, offAxis: r ? r.offAxis : null, res: r ? r.res : null, raw: S.lastDet ? Array.from(S.lastDet.mat) : null,
      jaw: anatomy ? Array.from(anatomy.jaw.matrix.elements) : null,
      video: [view.videoW, view.videoH] };
  },
};
