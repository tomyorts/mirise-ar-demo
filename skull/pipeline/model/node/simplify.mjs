// Topology-preserving simplification with meshoptimizer. Reads raw buffers written by tools/build_meshes.py.
import { MeshoptSimplifier } from 'meshoptimizer';
import fs from 'node:fs';
import path from 'node:path';
const dir = process.argv[2];
const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
await MeshoptSimplifier.ready;
const report = {};
for (const [name, target] of Object.entries(manifest)) {
  const pos = new Float32Array(fs.readFileSync(path.join(dir, name + '.pos.f32')).buffer.slice(0));
  const idxBuf = fs.readFileSync(path.join(dir, name + '.idx.u32'));
  const idx = new Uint32Array(idxBuf.buffer.slice(idxBuf.byteOffset, idxBuf.byteOffset + idxBuf.byteLength));
  const p = new Float32Array(fs.readFileSync(path.join(dir, name + '.pos.f32')).buffer.slice(0));
  const [out, err] = MeshoptSimplifier.simplify(idx, p, 3, target * 3, 0.02, []);
  fs.writeFileSync(path.join(dir, name + '.out.u32'), Buffer.from(out.buffer, out.byteOffset, out.byteLength));
  report[name] = { inTris: idx.length / 3, outTris: out.length / 3, relErr: err, absErr: err * MeshoptSimplifier.getScale(p, 3) };
}
fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(report, null, 1));
