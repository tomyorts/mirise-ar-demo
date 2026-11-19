// Computes the starting "personal fit" for an average face (the tracker's canonical face seen frontally)
// and stores it in anatomy.json as defaultFit.  usage: node default_fit.mjs <anatomy.json> <canonical_face_cm.json> <solver.js>
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const [metaPath, canonPath, solverPath] = process.argv.slice(2);
const { FaceSolver, FOV_V_DEG, xform } = await import(pathToFileURL(solverPath).href);
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
delete meta.defaultFit;
const canon = JSON.parse(fs.readFileSync(canonPath, 'utf8'));
const TAN = Math.tan(FOV_V_DEG * Math.PI / 360), aspect = 4 / 3;
const A = meta.alignment;
const det = A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
const sc = Math.cbrt(det);
// pose the tracker reports when the model head looks straight at the camera: rotation = (alignment rotation)^T
const M = [A[0][0] / sc, A[0][1] / sc, A[0][2] / sc, 0, A[1][0] / sc, A[1][1] / sc, A[1][2] / sc, 0, A[2][0] / sc, A[2][1] / sc, A[2][2] / sc, 0, 0, 0, -45, 1];
const lm = canon.map(([x, y, z]) => { const p = xform(M, x, y, z, [0, 0, 0]); return { x: 0.5 + (p[0] / -p[2]) / (2 * TAN * aspect), y: 0.5 - (p[1] / -p[2]) / (2 * TAN), z: 0 }; });
const s = new FaceSolver(meta, { defaultFit: { sx: 1, sUp: 1, sLow: 1, ty: 0 } });
for (let i = 0; i < 160; i++) s.update(lm, M, 0, aspect, i * 33);
meta.defaultFit = { sx: +s.fit.sx.toFixed(4), sUp: +s.fit.sUp.toFixed(4), sLow: +s.fit.sLow.toFixed(4), ty: 0 };
fs.writeFileSync(metaPath, JSON.stringify(meta));
console.log('defaultFit', JSON.stringify(meta.defaultFit));
