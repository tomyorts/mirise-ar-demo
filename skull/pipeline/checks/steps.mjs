// Step a test video frame by frame and save screenshots.  usage: node steps.mjs <src> <outPrefix> <t0,t1,...> [depth] [w] [h] [extraQuery]
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const [src, prefix, times, depth = '0.3', vw = '1000', vh = '750', extra = '', warm = '0'] = process.argv.slice(2);
const { server, port } = await serve();
const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: +vw, height: +vh }, deviceScaleFactor: 1 });
const page = await ctx.newPage(); const w = watch(page);
await page.goto(`http://127.0.0.1:${port}/skull.html?src=${src}&delegate=cpu&autostart=1&debug=2${extra ? '&' + extra : ''}`);
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 120000 });
await page.evaluate((d) => { window.__skull.S.manual = true; window.__skull.setDepth(d); document.body.classList.add('clean'); }, +depth);
const out = [];
// warm-up: play through the first seconds frame by frame so the personal fit can settle
for (let t = 0; t < +warm; t += 1 / 12) await page.evaluate((t) => window.__skull.step(t), t);
let cur = +warm;
const through = process.env.THROUGH === '1';       // play through every frame up to each target (keeps tracking continuous)
for (const t of times.split(',').map(Number)) {
  let r;
  if (through) for (; cur < t - 1e-6; cur += 1 / 12) await page.evaluate((t) => window.__skull.step(t), cur);
  for (let k = 0; k < 3; k++) r = await page.evaluate((t) => window.__skull.step(t), t);   // repeat: lets smoothing settle on this frame
  await page.screenshot({ path: path.join(OUT, `${prefix}_${String(t).replace('.', 'p')}.png`) });
  out.push({ t, present: r.present, theta: r.theta && +r.theta.toFixed(1), thetaRaw: r.thetaRaw && +r.thetaRaw.toFixed(1), offAxis: r.offAxis && +r.offAxis.toFixed(0), fit: r.fit });
}
console.log(JSON.stringify(out));
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
await browser.close(); server.close();
