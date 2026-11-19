// Play a test clip frame by frame and print per-frame diagnostics.  usage: node track.mjs <src> <t0> <t1> <fps> [shotEvery]
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const [src, t0, t1, fps = '12', prefix = '', shots = ''] = process.argv.slice(2);
const { server, port } = await serve();
const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: 1024, height: 768 }, deviceScaleFactor: 1 });
const page = await ctx.newPage(); const w = watch(page);
await page.goto(`http://127.0.0.1:${port}/skull.html?src=${src}&delegate=cpu&autostart=1&debug=2`);
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 120000 });
await page.evaluate(() => { window.__skull.S.manual = true; window.__skull.setDepth(0.3); document.body.classList.add('clean'); });
const shotT = shots ? shots.split(',').map(Number) : [];
const rows = [];
for (let t = +t0; t <= +t1 + 1e-6; t += 1 / +fps) {
  const r = await page.evaluate((t) => window.__skull.step(t), t);
  rows.push({ t: +t.toFixed(3), ...r });
  if (prefix && shotT.some((s) => Math.abs(s - t) < 0.5 / +fps)) await page.screenshot({ path: path.join(OUT, `${prefix}_${t.toFixed(2).replace('.', 'p')}.png`) });
}
for (const r of rows) {
  if (!r.present) { console.log(r.t.toFixed(2), 'no face'); continue; }
  console.log(r.t.toFixed(2), 'off', r.offAxis.toFixed(0).padStart(3), 'jaw', r.theta.toFixed(1).padStart(5), 'res dx', r.res.dx.toFixed(2).padStart(6), 'dy', r.res.dy.toFixed(2).padStart(6), 'rms', r.res.rms.toFixed(2),
    'fit', r.fit.sx.toFixed(3), r.fit.sUp.toFixed(3), r.fit.sLow.toFixed(3), r.fit.ty.toFixed(2), r.closed ? 'c' : '');
}
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
import fs from 'node:fs';
if (prefix) fs.writeFileSync(path.join(OUT, prefix + '_rows.json'), JSON.stringify(rows));
await browser.close(); server.close();
