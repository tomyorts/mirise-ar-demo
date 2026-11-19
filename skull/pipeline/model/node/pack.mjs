// Compress the raw GLB with meshopt (quantised positions/colours). Node names are preserved.
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { meshopt, prune, dedup } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
const [inp, out] = process.argv.slice(2);
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);
await doc.transform(dedup(), prune({ keepAttributes: true }), meshopt({ encoder: MeshoptEncoder, level: 'medium', quantizePosition: 14, quantizeColor: 8 }));
// drop materials: the page assigns its own
for (const m of doc.getRoot().listMaterials()) m.dispose();
await io.write(out, doc);
const root = doc.getRoot();
console.log('nodes', root.listNodes().length, 'meshes', root.listMeshes().length, 'ext', root.listExtensionsUsed().map(e => e.extensionName).join(','));
for (const n of root.listNodes().slice(0, 3)) console.log(n.getName(), n.getTranslation().map(x => +x.toFixed(3)), n.getScale().map(x => +x.toFixed(6)));
