// Check of skull/src/solver.js without a browser, on recorded face-tracker output.
//   node test_solver.mjs                    A: renders of the model's own head (data/test_static.json)
//   node test_solver.mjs recording.json     also B: a recording of a real clip (make one with record_video.py)
import fs from 'node:fs';
import { FaceSolver } from '../../src/solver.js';
const meta = JSON.parse(fs.readFileSync(new URL('../../anatomy.json', import.meta.url)));
const frames = JSON.parse(fs.readFileSync(new URL('./data/test_static.json', import.meta.url)));
const toLm = (a) => a.map(([x, y, z]) => ({ x, y, z }));

console.log('--- A. the model\'s own head, mouth closed, 24 poses: both starting points must end at the same fit; the jaw must stay shut');
const ends = [];
for (const start of [{ sx: 1, sUp: 1, sLow: 1, ty: 0 }, { sx: 1.06, sUp: 1.08, sLow: 1.15, ty: 0 }]) {
  const s = new FaceSolver(meta, { defaultFit: { sx: 1, sUp: 1, sLow: 1, ty: 0 } });
  s.fit = { ...start };
  let t = 0; const hist = [];
  for (let rep = 0; rep < 3; rep++) for (const f of frames) {
    s.pose = null;                                   // unrelated poses: do not smooth between them
    hist.push(s.update(toLm(f.lm), f.M, f.jawOpen, f.aspect, (t += 33)));
  }
  const f = s.fit, open = hist.filter((h) => h.theta > 0.5).length;
  ends.push(f);
  console.log(` start ${JSON.stringify(start)} -> sx=${f.sx.toFixed(3)} sUp=${f.sUp.toFixed(3)} sLow=${f.sLow.toFixed(3)}  samples=${s.fitSamples}  frames with the jaw open=${open}/${hist.length}  closed=${hist.filter((h) => h.closed).length}/${hist.length}`);
}
const spread = Math.max(...['sx', 'sUp', 'sLow'].map((k) => Math.abs(ends[0][k] - ends[1][k])));
console.log(spread < 0.01 ? ' OK: the two runs agree within 0.01' : ` DIFFERENT by ${spread.toFixed(3)}`);

if (process.argv[2]) {
  console.log('--- B. recording of a real clip: the jaw angle (degrees) should follow the mouth; "c" marks frames judged closed');
  const rec = JSON.parse(fs.readFileSync(process.argv[2]));
  const s = new FaceSolver(meta);
  let t = 0; const line = [];
  for (const f of rec) {
    if (!f) { line.push('  --'); continue; }
    const r = s.update(toLm(f.lm), f.M, f.jawOpen, f.aspect, (t += 83));
    line.push(`${r.theta.toFixed(0).padStart(3)}${r.closed ? 'c' : ' '}`);
  }
  console.log(' jaw angle per frame:', line.join(' '));
  console.log(' personal fit at the end:', JSON.stringify(s.fit));
}

console.log('--- C. starting fit stored in anatomy.json:', JSON.stringify(meta.defaultFit));
