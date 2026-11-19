// Camera switching and permission errors, with getUserMedia wrapped so two cameras / a refusal can be simulated.
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const mode = process.argv[2] || 'flip';
const { server, port } = await serve();
const browser = await launch({ fakeCamera: fakeCameraFile() });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, permissions: ['camera'] });
const page = await ctx.newPage(); const w = watch(page);
await page.addInitScript((mode) => {
  const md = navigator.mediaDevices, real = md.getUserMedia.bind(md);
  window.__calls = [];
  md.getUserMedia = async (c) => {
    window.__calls.push(JSON.stringify(c.video));
    if (mode === 'denied') throw new DOMException('Permission denied', 'NotAllowedError');
    const s = await real({ video: true });
    const v = c.video || {};
    const want = v.deviceId && v.deviceId.exact ? (v.deviceId.exact === 'back' ? 'environment' : 'user') : (v.facingMode && v.facingMode.ideal) || 'user';
    const t = s.getVideoTracks()[0];
    t.getSettings = () => ({ deviceId: want === 'environment' ? 'back' : 'front', facingMode: want, width: 640, height: 480 });
    return s;
  };
  md.enumerateDevices = async () => [{ kind: 'videoinput', deviceId: 'front', label: 'Front Camera' }, { kind: 'videoinput', deviceId: 'back', label: 'Back Camera' }];
}, mode);
await page.goto(`http://127.0.0.1:${port}/skull.html?delegate=cpu`);
await page.waitForTimeout(1200);
await page.click('#btnStart');
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 150000 });
const phase = await page.evaluate(() => window.__skull.S.phase);
console.log('mode', mode, 'phase', phase);
if (phase === 'error') {
  console.log('error text:', await page.evaluate(() => document.getElementById('startErr').textContent));
  console.log('button:', await page.evaluate(() => document.getElementById('btnStart').textContent + ' disabled=' + document.getElementById('btnStart').disabled));
  await page.screenshot({ path: path.join(OUT, `cam2_${mode}.png`) });
} else {
  const state = () => page.evaluate(() => ({ mirrored: window.__skull.S.mirrored, gl: document.getElementById('gl').className, side: document.getElementById('side').className, phase: window.__skull.S.phase, toast: document.getElementById('toast').className + ':' + document.getElementById('toast').textContent }));
  await page.waitForTimeout(2500); console.log('start     ', JSON.stringify(await state()));
  await page.click('#btnFlip'); await page.waitForTimeout(3500); console.log('flip 1    ', JSON.stringify(await state()));
  await page.screenshot({ path: path.join(OUT, `cam2_${mode}_rear.png`) });
  await page.click('#btnFlip'); await page.waitForTimeout(3500); console.log('flip 2    ', JSON.stringify(await state()));
  console.log('getUserMedia calls:', await page.evaluate(() => window.__calls));
}
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
await browser.close(); server.close();
