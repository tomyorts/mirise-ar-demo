// UI screenshots. usage: node shots.mjs <name> <w> <h> <dpr> <query> <actions-json>
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const [name, vw, vh, dpr, query = '', actions = '[]'] = process.argv.slice(2);
const { server, port } = await serve();
const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: +vw, height: +vh }, deviceScaleFactor: +dpr, hasTouch: +vw < 600, isMobile: +vw < 600 });
const page = await ctx.newPage(); const w = watch(page);
await page.goto(`http://127.0.0.1:${port}/skull.html${query ? '?' + query : ''}`);
let i = 0;
for (const a of JSON.parse(actions)) {
  if (a.wait) await page.waitForTimeout(a.wait);
  if (a.running) await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 150000 });
  if (a.eval) await page.evaluate(a.eval);
  if (a.click) await page.click(a.click);
  if (a.warm !== undefined) for (let t = a.from || 0; t <= a.warm + 1e-6; t += 1 / 12) await page.evaluate((t) => window.__skull.step(t), t);
  if (a.step !== undefined) for (let k = 0; k < (a.rep || 2); k++) await page.evaluate((t) => window.__skull.step(t), a.step);
  if (a.shot) await page.screenshot({ path: path.join(OUT, `${name}_${a.shot}.png`) });
  i++;
}
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
const bad = w.console.filter((l) => /Content Security Policy|Refused to|violat/i.test(l));
if (bad.length) console.log('CSP', bad.join('\n'));
const ext = [...new Set(w.requests.filter((u) => !u.startsWith(`http://127.0.0.1:${port}/`) && !u.startsWith('blob:') && !u.startsWith('data:')))];
console.log(name, 'done; requests', w.requests.length, 'non-local', JSON.stringify(ext));
await browser.close(); server.close();
