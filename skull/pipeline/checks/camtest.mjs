// End-to-end test of the real camera path using Chrome's fake capture device.
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const mode = process.argv[2] || 'ok';
const { server, port } = await serve();
const browser = await launch(mode === 'denied' ? { args: ['--use-fake-device-for-media-stream'] } : { fakeCamera: fakeCameraFile(), args: mode === 'two' ? ['--use-fake-device-for-media-stream=device-count=2'] : [] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, permissions: mode === 'denied' ? [] : ['camera'] });
const page = await ctx.newPage(); const w = watch(page);
await page.goto(`http://127.0.0.1:${port}/skull.html?delegate=cpu&debug=1`);
await page.waitForTimeout(1500);
await page.click('#btnStart');
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 150000 });
const phase = await page.evaluate(() => window.__skull.S.phase);
console.log('mode', mode, 'phase', phase);
if (phase === 'error') {
  console.log('error text:', await page.evaluate(() => document.getElementById('startErr').textContent));
  await page.screenshot({ path: path.join(OUT, `cam_${mode}_error.png`) });
} else {
  await page.waitForTimeout(9000);
  const st = await page.evaluate(() => ({ mirrored: window.__skull.S.mirrored, glMirror: document.getElementById('gl').classList.contains('mirror'), side: document.getElementById('side').className,
    present: window.__skull.S.present, depth: +window.__skull.S.depth.toFixed(3), fps: +window.__skull.S.fps.toFixed(1), video: [window.__skull.view.videoW, window.__skull.view.videoH], debug: document.getElementById('debug').textContent }));
  console.log(JSON.stringify(st, null, 1));
  await page.screenshot({ path: path.join(OUT, `cam_${mode}_run.png`) });
  await page.click('#btnFlip');
  await page.waitForTimeout(4000);
  console.log('after flip: toast =', await page.evaluate(() => document.getElementById('toast').textContent), '| mirrored', await page.evaluate(() => window.__skull.S.mirrored), '| phase', await page.evaluate(() => window.__skull.S.phase));
  await page.screenshot({ path: path.join(OUT, `cam_${mode}_flip.png`) });
  // info sheet and clean mode
  await page.click('#btnInfo'); await page.waitForTimeout(400); await page.screenshot({ path: path.join(OUT, `cam_${mode}_info.png`) });
  await page.click('#btnInfoClose');
}
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
const bad = w.console.filter((l) => /Content Security Policy|Refused to/i.test(l));
if (bad.length) console.log('CSP', bad.join('\n'));
const ext = [...new Set(w.requests.filter((u) => !u.startsWith(`http://127.0.0.1:${port}/`) && !u.startsWith('blob:') && !u.startsWith('data:')))];
console.log('requests', w.requests.length, 'non-local', JSON.stringify(ext));
await browser.close(); server.close();
