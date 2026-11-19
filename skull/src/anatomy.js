// anatomy.js — loads the skull / teeth / brain model and keeps it fitted to the tracked face.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { warpFrame, warpArray, warpPoint, jawFrame, jawMatrix, FIT_IDENTITY } from './solver.js';

const VAULT = new Set(['bone_frontal', 'bone_parietal_R', 'bone_parietal_L', 'bone_occipital', 'bone_temporal_R', 'bone_temporal_L', 'bone_sphenoid']);

const LOBE_TINT = {            // used when "colour the lobes" is on (education)
  frontal_lobe: 0x8fb5df, parietal_lobe: 0xe7cb80, temporal_lobe: 0x97cba5, occipital_lobe: 0xe49c94,
  limbic: 0xcdb6da, cerebellum: 0xd8bfa9, brainstem: 0xc2c2cf,
};

const XR = { vault: 0.24, face: 0.27, teeth: 0.36, brain: 0.3 };     // glow strength per layer in the X-ray style

const XRAY_VERT = /* glsl */`
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
const XRAY_FRAG = /* glsl */`
uniform vec3 uColor; uniform float uGain; uniform float uPower; uniform float uBase;
varying vec3 vN; varying vec3 vV;
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float i = (pow(f, uPower) + uBase) * uGain;
  gl_FragColor = vec4(uColor * i, i);
}`;

function xrayMaterial(color, gain, power, base) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uGain: { value: gain }, uPower: { value: power }, uBase: { value: base } },
    vertexShader: XRAY_VERT, fragmentShader: XRAY_FRAG,
    transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor,
  });
}

export class Anatomy {
  /** @param meta parsed anatomy.json  @param glb ArrayBuffer of anatomy.glb */
  static async load(meta, glb) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.parseAsync(glb, '');
    return new Anatomy(meta, gltf.scene);
  }

  constructor(meta, scene) {
    this.meta = meta;
    this.fr = warpFrame(meta);
    this.fit = { ...FIT_IDENTITY };
    this.fitApplied = null;
    this.theta = 0;
    this.style = 'solid';
    this.lobeColors = false;

    this.root = new THREE.Group(); this.root.name = 'anatomy'; this.root.matrixAutoUpdate = false;
    this.cranium = new THREE.Group(); this.jaw = new THREE.Group(); this.jaw.matrixAutoUpdate = false;
    this.root.add(this.cranium, this.jaw);

    // --- materials (solid style)
    const bone = (o) => new THREE.MeshPhongMaterial({ color: 0xece2cc, specular: 0x1c1a16, shininess: 14, vertexColors: true, ...o });
    this.mat = {
      vault: bone({}), face: bone({}),
      teeth: new THREE.MeshPhongMaterial({ color: 0xfbf8ef, specular: 0x555555, shininess: 70, vertexColors: true }),
      brain: new THREE.MeshPhongMaterial({ color: 0xe0a39f, specular: 0x4a3030, shininess: 42, vertexColors: true }),
      depth: new THREE.MeshBasicMaterial({ colorWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 2 }),
    };
    for (const k of ['vault', 'face', 'teeth']) { this.mat[k].depthFunc = THREE.LessEqualDepth; }
    // --- materials (X-ray style): soft additive glow, strongest where the surface turns away
    this.xmat = {
      vault: xrayMaterial(0xcfe6ff, XR.vault, 1.7, 0.04), face: xrayMaterial(0xcfe6ff, XR.face, 1.6, 0.05),
      teeth: xrayMaterial(0xffffff, XR.teeth, 1.3, 0.12), brain: xrayMaterial(0xffc8b8, XR.brain, 1.4, 0.04),
    };

    this.meshes = [];        // { mesh, pre, kind, name, base }
    this.brainTint = [];
    const src = [];
    scene.updateMatrixWorld(true);
    scene.traverse((o) => { if (o.isMesh) src.push(o); });
    const v = new THREE.Vector3();
    for (const o of src) {
      const name = o.name;
      const kind = name.startsWith('brain_') ? 'brain' : name.includes('teeth') ? 'teeth' : VAULT.has(name) ? 'vault' : 'face';
      const g0 = o.geometry, p0 = g0.getAttribute('position'), n = p0.count;
      // bake the node transform (the file stores quantised coordinates) into plain float positions
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { v.fromBufferAttribute(p0, i).applyMatrix4(o.matrixWorld); pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z; }
      const g = new THREE.BufferGeometry();
      g.setIndex(g0.getIndex());
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const c0 = g0.getAttribute('color');
      if (c0) {                                   // baked soft shadows (ambient occlusion), stored as grey
        const col = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { const a = c0.getX(i); col[i * 3] = a; col[i * 3 + 1] = a; col[i * 3 + 2] = a; }
        g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      }
      g.computeVertexNormals();
      const mesh = new THREE.Mesh(g, this.mat[kind]);
      mesh.name = name; mesh.frustumCulled = false;
      let pre = null;
      if (kind !== 'brain') {                     // depth-only twin so see-through bone never shows its own back side
        pre = new THREE.Mesh(g, this.mat.depth); pre.frustumCulled = false; pre.renderOrder = 1; pre.visible = false;
        mesh.renderOrder = 2;
      } else {
        mesh.renderOrder = 0;
        const key = Object.keys(LOBE_TINT).find((k) => name.includes(k));
        this.brainTint.push({ mesh, tint: new THREE.Color(LOBE_TINT[key] ?? 0xe0a39f) });
      }
      const parent = name.startsWith('jaw_') ? this.jaw : this.cranium;
      parent.add(mesh); if (pre) parent.add(pre);
      this.meshes.push({ mesh, pre, kind, name, base: pos.slice() });
    }
    this.vertexCount = this.meshes.reduce((a, m) => a + m.base.length / 3, 0);
    this.setFit({ ...FIT_IDENTITY, ...(meta.defaultFit || {}) }, true);
    this.setJaw(0);
    this.setLayers({ reveal: 1, brain: 0 });
  }

  /** Personal fit: stretch the standard model to this face. Cheap enough to run when the fit drifts. */
  setFit(fit, force = false) {
    const a = this.fitApplied;
    if (!force && a && Math.abs(a.sx - fit.sx) < 0.0015 && Math.abs(a.sUp - fit.sUp) < 0.0015 && Math.abs(a.sLow - fit.sLow) < 0.0015 && Math.abs(a.ty - fit.ty) < 0.008) return false;
    this.fit = { sx: fit.sx, sUp: fit.sUp, sLow: fit.sLow, ty: fit.ty };
    for (const m of this.meshes) {
      const attr = m.mesh.geometry.getAttribute('position');
      warpArray(this.fr, this.fit, m.base, attr.array);
      attr.needsUpdate = true;
    }
    this.fitApplied = { ...this.fit };
    this.jf = jawFrame(this.meta, this.fr, this.fit);
    this.setJaw(this.theta);
    return true;
  }

  setJaw(thetaDeg) {
    this.theta = thetaDeg;
    this.jaw.matrix.fromArray(jawMatrix(this.jf, thetaDeg));
    this.jaw.matrixWorldNeedsUpdate = true;
  }

  setPose(m16) { this.root.matrix.fromArray(m16); this.root.matrixWorldNeedsUpdate = true; }

  setStyle(style) {
    if (style === this.style) return;
    this.style = style;
    const x = style === 'xray';
    for (const m of this.meshes) m.mesh.material = x ? this.xmat[m.kind] : ((m.kind === 'brain' && this.lobeColors && m.mesh.userData.lobeMat) || this.mat[m.kind]);
    this.setLayers(this.layers);
  }

  /** Colour the lobes of the brain differently (used with labels). */
  setLobeColors(on) {
    this.lobeColors = on;
    for (const { mesh, tint } of this.brainTint) {
      if (!mesh.userData.lobeMat) { mesh.userData.lobeMat = this.mat.brain.clone(); mesh.userData.lobeMat.color.copy(tint); }
      if (this.style !== 'xray') mesh.material = on ? mesh.userData.lobeMat : this.mat.brain;
    }
  }

  /**
   * reveal: 0..1 how far the skin has faded (handled by the compositor), brain: 0..1 how far the
   * skull has faded to show the brain.
   */
  setLayers(l) {
    this.layers = { ...l };
    const b = l.brain;
    const showBrain = b > 0.004;
    for (const m of this.meshes) if (m.kind === 'brain') m.mesh.visible = showBrain;
    if (this.style === 'xray') {
      for (const m of this.meshes) if (m.pre) m.pre.visible = false;
      this.xmat.vault.uniforms.uGain.value = XR.vault * (1 - 0.72 * b);
      this.xmat.face.uniforms.uGain.value = XR.face * (1 - 0.45 * b);
      this.xmat.teeth.uniforms.uGain.value = XR.teeth * (1 - 0.3 * b);
      this.xmat.brain.uniforms.uGain.value = XR.brain * b;
      return;
    }
    const op = { vault: 1 - 0.93 * b, face: 1 - 0.55 * b, teeth: 1 - 0.25 * b };
    for (const k of ['vault', 'face', 'teeth']) {
      const mat = this.mat[k], see = op[k] < 0.995;
      if (mat.transparent !== see) { mat.transparent = see; mat.depthWrite = !see; mat.needsUpdate = true; }
      mat.opacity = op[k];
    }
    const anySee = showBrain;
    for (const m of this.meshes) if (m.pre) m.pre.visible = anySee;
  }

  /** Label anchors in camera space for the current pose / fit / jaw. Returns [{label, x,y,z, facing}] */
  labelPoints(out) {
    const L = this.meta.labels, w = [0, 0, 0], v = new THREE.Vector3(), nrm = new THREE.Vector3();
    const rw = this.root.matrix, jw = this._jw || (this._jw = new THREE.Matrix4());
    jw.multiplyMatrices(rw, this.jaw.matrix);
    out.length = 0;
    for (const lb of L) {
      const mat = lb.group === 'jaw' ? jw : rw;
      warpPoint(this.fr, this.fit, lb.p[0], lb.p[1], lb.p[2], w);
      v.set(w[0], w[1], w[2]).applyMatrix4(mat);
      nrm.set(lb.n[0], lb.n[1], lb.n[2]).transformDirection(mat);
      const d = v.length() || 1;
      const facing = -(nrm.x * v.x + nrm.y * v.y + nrm.z * v.z) / d;
      out.push({ label: lb, x: v.x, y: v.y, z: v.z, facing });
    }
    return out;
  }

  /** A reference landmark of the model's own skin (tracker index), in camera space. */
  skinPoint(id, target) {
    const p = this.meta.landmarks[id], w = [0, 0, 0];
    warpPoint(this.fr, this.fit, p[0], p[1], p[2], w);
    return target.set(w[0], w[1], w[2]).applyMatrix4(this.root.matrix);
  }
}
