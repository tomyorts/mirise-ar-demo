// Run on the fake camera for longer than a minute and report every attempt to reach another server.
import path from 'node:path';
import { serve, launch, watch, OUT, fakeCameraFile } from './lib.mjs';
const secs = +(process.argv[2] || 80);
const { server, port } = await serve();
const browser = await launch({ fakeCamera: fakeCameraFile() });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, permissions: ['camera'] });
const page = await ctx.newPage(); const w = watch(page);
await page.addInitScript(() => { window.__csp = []; document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(e.violatedDirective + ' ' + e.blockedURI)); });
await page.goto(`http://127.0.0.1:${port}/skull.html?debug=1`);
await page.waitForTimeout(1500);
await page.click('#btnStart');
await page.waitForFunction(() => window.__skull && (window.__skull.S.phase === 'running' || window.__skull.S.phase === 'error'), null, { timeout: 200000 });
await page.waitForTimeout(secs * 1000);
console.log('debug:', await page.evaluate(() => document.getElementById('debug').textContent.replace(/\n/g, ' | ')));
console.log('q:', await page.evaluate(() => JSON.stringify(window.__skull.S.q)), 'quality', await page.evaluate(() => window.__skull.view.quality));
// engine switch closes the tracker: the moment the unpatched library used to send its log
await page.click('#btnInfo'); await page.click('#btnEngine'); await page.waitForTimeout(5000); await page.click('#btnInfoClose'); await page.waitForTimeout(3000);
console.log('after switch:', await page.evaluate(() => document.getElementById('debug').textContent.split('\n')[0]));
console.log('csp violations (event):', JSON.stringify(await page.evaluate(() => window.__csp)));
const bad = w.console.filter((l) => /Content Security Policy|Refused to|Unrecognized|violat|googleapis/i.test(l));
console.log('console csp/unrecognized lines:', bad.length, bad.slice(0, 6).join('\n  '));
if (w.errors.length) console.log('ERRORS', w.errors.join('\n'));
const ext = [...new Set(w.requests.filter((u) => !u.startsWith(`http://127.0.0.1:${port}/`) && !u.startsWith('blob:') && !u.startsWith('data:')))];
console.log('requests', w.requests.length, 'non-local', JSON.stringify(ext), 'failed', JSON.stringify(w.failed));
console.log('local requests:', [...new Set(w.requests.filter((u) => u.startsWith('http')).map((u) => u.replace(/^http:\/\/[^/]+/, '').replace(/\?v=.*/, '')))].join(' '));
await browser.close(); server.close();
