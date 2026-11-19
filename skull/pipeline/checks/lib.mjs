// Helpers for the browser checks: a static file server with range support and a browser launcher.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');   // npm install in this folder, or a global install on NODE_PATH

const here = path.dirname(fileURLToPath(import.meta.url));
/** The folder that is served: the repository root (skull.html lives there). */
export const SITE = path.resolve(process.env.SITE_DIR || path.join(here, '../../..'));
/** Screenshots and logs go here (ignored by git). */
export const OUT = path.join(here, 'out');
fs.mkdirSync(OUT, { recursive: true });
/** A .y4m or .mjpeg clip of a face, used as Chrome's fake camera (set the FAKE_CAMERA environment variable). */
export function fakeCameraFile() {
  const f = process.env.FAKE_CAMERA;
  if (!f || !fs.existsSync(f)) { console.error('Set FAKE_CAMERA to a .y4m or .mjpeg clip of a face (see README.md).'); process.exit(2); }
  return path.resolve(f);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary', '.task': 'application/octet-stream',
  '.mp4': 'video/mp4', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.usdz': 'model/vnd.usdz+zip',
};

export function serve(root = SITE, port = 0) {
  const log = [];
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    let p = path.normalize(decodeURIComponent(u.pathname)).replace(/^(\.\.[/\\])+/, '');
    if (p.endsWith('/')) p += 'index.html';
    const file = path.join(root, p);
    log.push(req.method + ' ' + u.pathname);
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
    const stat = fs.statSync(file), type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? parseInt(range[1], 10) : 0, end = range[2] ? parseInt(range[2], 10) : stat.size - 1;
      res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${stat.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
      fs.createReadStream(file, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-store' });
      fs.createReadStream(file).pipe(res);
    }
  });
  return new Promise((resolve) => server.listen(port, '127.0.0.1', () => resolve({ server, port: server.address().port, log })));
}

export async function launch(opts = {}) {
  const args = [
    '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl',
    '--autoplay-policy=no-user-gesture-required', '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
    ...(opts.fakeCamera ? ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${opts.fakeCamera}`] : []),
    ...(opts.args || []),
  ];
  const browser = await chromium.launch({ headless: true, args, executablePath: opts.executablePath });
  return browser;
}

/** Attach listeners that collect console output, page errors, CSP violations and every request URL. */
export function watch(page) {
  const out = { console: [], errors: [], requests: [], failed: [] };
  page.on('console', (m) => out.console.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => out.errors.push(String(e && e.stack ? e.stack : e)));
  page.on('request', (r) => out.requests.push(r.url()));
  page.on('requestfailed', (r) => out.failed.push(r.url() + ' ' + (r.failure() ? r.failure().errorText : '')));
  return out;
}
