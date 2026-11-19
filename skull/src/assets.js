// assets.js — same-origin downloads with progress. Nothing here talks to another server.
export async function fetchBytes(url, expected, onProgress) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} を読み込めませんでした (HTTP ${res.status})`);
  const total = expected || Number(res.headers.get('content-length')) || 0;
  if (!res.body || !res.body.getReader) {
    const b = new Uint8Array(await res.arrayBuffer()); onProgress && onProgress(b.length, b.length); return b;
  }
  const reader = res.body.getReader(); const chunks = []; let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value); n += value.length;
    onProgress && onProgress(n, Math.max(total, n));
  }
  const out = new Uint8Array(n); let o = 0;
  for (const c of chunks) { out.set(c, o); o += c.length; }
  return out;
}

/** Download several files in parallel and report overall progress as 0..1. */
export async function fetchAll(list, onProgress) {
  const got = list.map(() => 0), tot = list.map((f) => f.size || 0);
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const res = await Promise.all(list.map((f, i) => fetchBytes(f.url, f.size, (n, t) => {
    got[i] = n; if (t > tot[i]) tot[i] = t;
    onProgress && onProgress(Math.min(1, sum(got) / Math.max(1, sum(tot))));
  })));
  onProgress && onProgress(1);
  return res;
}
