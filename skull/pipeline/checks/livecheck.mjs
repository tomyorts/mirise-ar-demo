// Check the published page itself.  usage: FAKE_CAMERA=face.y4m node livecheck.mjs https://…/skull.html [seconds]
// Opens the address in headless Chrome with a fake camera, starts the mirror and reports
// whether it runs and whether anything tried to reach a server other than the page's own.
import path from 'node:path';
import { launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const url = process.argv[2], secs = +(process.argv[3] || 70);
if (!url) { console.error('usage: node livecheck.mjs <address of skull.html> [seconds]'); process.exit(2); }
const origin = new URL(url).origin;
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const browser = await launch({ fakeCamera: fakeCameraFile(), args: proxy ? [`--proxy-server=${proxy}`] : [] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, permissions: ['camera'] });
const page = await ctx.newPage(); const w = watch(page);
await page.addInitScript(() => { window.__csp = []; document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(e.violatedDirective + ' ' + e.blockedURI)); });
const t0 = Date.now();
await page.goto(url + (url.includes('?') ? '&' : '?') + 'debug=1', { waitUntil: 'load', timeout: 120000 });
console.log('secure context:', await page.evaluate(() => window.isSecureContext), '| version shown:', await page.evaluate(() => document.getElementById('version').textContent));
await page.waitForTimeout(2500);
await page.screenshot({ path: path.join(OUT, 'live_start.png') });
await page.click('#btnStart');
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 240000 });
const phase = await page.evaluate(() => window.__skull.S.phase);
console.log('phase', phase, 'after', ((Date.now() - t0) / 1000).toFixed(1), 's');
if (phase === 'error') console.log('message:', await page.evaluate(() => document.getElementById('startErr').textContent));
else {
  await page.waitForTimeout(secs * 1000);
  console.log('status:', await page.evaluate(() => document.getElementById('debug').textContent.replace(/\n/g, ' | ')));
  console.log('face found:', await page.evaluate(() => window.__skull.S.present));
  await page.screenshot({ path: path.join(OUT, 'live_run.png') });
}
console.log('blocked by the page\'s policy:', JSON.stringify(await page.evaluate(() => window.__csp)));
const foreign = [...new Set(w.requests.filter((u) => !u.startsWith(origin + '/') && !u.startsWith('blob:') && !u.startsWith('data:')))];
console.log('requests:', w.requests.length, '| to other servers:', JSON.stringify(foreign), '| failed:', JSON.stringify(w.failed));
console.log('files loaded:', [...new Set(w.requests.filter((u) => u.startsWith(origin)).map((u) => new URL(u).pathname.split('/').slice(2).join('/') || '(page)'))].join(' '));
if (w.errors.length) console.log('page errors:', w.errors.join('\n'));
await browser.close();
