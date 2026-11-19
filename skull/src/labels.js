// labels.js — part names drawn on a 2D canvas above the picture.
const FONT = '600 12.5px -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic UI", "Segoe UI", sans-serif';

export class LabelLayer {
  constructor(canvas) {
    this.c = canvas; this.g = canvas.getContext('2d');
    this.state = new Map();      // label id -> { x, y, ax, ay, a, side }
    this.pick = new Map();       // pair -> chosen label id
    this.widths = new Map();
    this.w = 0; this.h = 0; this.dpr = 1;
  }

  resize() {
    const cw = this.c.clientWidth || 1, ch = this.c.clientHeight || 1, dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (cw === this.w && ch === this.h && dpr === this.dpr) return;
    this.w = cw; this.h = ch; this.dpr = dpr;
    this.c.width = Math.round(cw * dpr); this.c.height = Math.round(ch * dpr);
  }

  _tw(text) {
    let w = this.widths.get(text);
    if (w === undefined) { this.g.font = FONT; w = this.g.measureText(text).width; this.widths.set(text, w); }
    return w;
  }

  clear() { this.g.setTransform(1, 0, 0, 1, 0, 0); this.g.clearRect(0, 0, this.c.width, this.c.height); }

  /**
   * @param items [{label, sx, sy, facing, front}]  sx/sy in CSS px of the (unmirrored) picture
   * @param o { lang:'ja'|'en', mirrored, cx, cy, layers:{bone,teeth,brain}, mask:(x,y)=>bool, active }
   */
  draw(items, o) {
    const g = this.g, W = this.w, H = this.h;
    this.clear();
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.font = FONT; g.textBaseline = 'middle';

    // 1. which labels may show
    const want = new Map();
    if (o.active) {
      const best = new Map();
      for (const it of items) {
        const lb = it.label;
        if (!o.layers[lb.layer] || !it.front) continue;
        if (lb.minBrain && o.brain < lb.minBrain) continue;        // parts that only show once the facial bones have faded
        if (it.sx < 4 || it.sy < 4 || it.sx > W - 4 || it.sy > H - 4) continue;
        if (o.mask && !o.mask(it.sx, it.sy)) continue;
        const key = lb.pair || lb.id;
        const prev = this.pick.get(key) === lb.id ? 0.12 : 0;     // hysteresis: keep the side already shown
        if (it.facing + prev < (lb.minFacing || 0.24)) continue;   // the part must be turned towards the camera
        const b = best.get(key);
        if (!b || it.facing + prev > b.score) best.set(key, { it, score: it.facing + prev });
      }
      for (const [key, b] of best) { this.pick.set(key, b.it.label.id); want.set(b.it.label.id, b.it); }
    }

    // 2. place boxes: pushed outward from the face centre, nudged apart when they collide
    const placed = [];
    const order = [...want.values()].sort((a, b) => a.sy - b.sy);
    const hit = (r) => placed.some((p) => r.x < p.x + p.w + 4 && r.x + r.w + 4 > p.x && r.y < p.y + p.h + 3 && r.y + r.h + 3 > p.y);
    for (const it of order) {
      const lb = it.label, text = o.lang === 'en' ? lb.en : lb.ja;
      const ax = o.mirrored ? W - it.sx : it.sx, ay = it.sy;
      const cx = o.mirrored ? W - o.cx : o.cx;
      let dx = ax - cx, dy = ay - o.cy; const n = Math.hypot(dx, dy) || 1; dx /= n; dy /= n;
      const bw = this._tw(text) + 16, bh = 22;
      const st = this.state.get(lb.id);
      const side = st && st.a > 0.3 ? st.side : (dx >= 0 ? 1 : -1);
      let found = null;
      for (const off of [30, 46, 64]) {
        for (const ny of [0, -1, 1, -2, 2, -3, 3, -4, 4]) {
          const px = ax + dx * off * 0.9 + side * 8, py = ay + dy * off * 0.7 + ny * 13;
          // near a screen edge the box slides inward instead of being dropped (narrow phone screens)
          const x = Math.min(Math.max(side > 0 ? px : px - bw, 6), Math.max(6, W - 6 - bw));
          const r = { x, y: py - bh / 2, w: bw, h: bh };
          if (r.y < 6 || r.y + r.h > H - 6) continue;
          if (ax > r.x - 7 && ax < r.x + r.w + 7 && ay > r.y - 7 && ay < r.y + r.h + 7) continue;   // never cover the point it names
          if (hit(r)) continue;
          found = r; break;
        }
        if (found) break;
      }
      if (!found) { want.delete(lb.id); continue; }
      placed.push(found);
      it.box = found; it.ax = ax; it.ay = ay; it.text = text; it.side = side;
    }

    // 3. ease positions and opacity, then draw
    for (const [id, it] of want) {
      let st = this.state.get(id);
      if (!st) { st = { x: it.box.x, y: it.box.y, ax: it.ax, ay: it.ay, a: 0, side: it.side, w: it.box.w, h: it.box.h, text: it.text }; this.state.set(id, st); }
      const k = st.a < 0.05 ? 1 : 0.35;
      st.x += (it.box.x - st.x) * k; st.y += (it.box.y - st.y) * k;
      st.ax = it.ax; st.ay = it.ay; st.side = it.side; st.w = it.box.w; st.h = it.box.h; st.text = it.text;
      st.a = Math.min(1, st.a + 0.16);
    }
    for (const [id, st] of this.state) {
      if (!want.has(id)) { st.a -= 0.2; if (st.a <= 0) { this.state.delete(id); continue; } }
      const a = st.a;
      // the leader meets the box at the middle of its near side, or at its top / bottom edge when the box sits above / below the point
      let ex, ey;
      if (st.ax < st.x) { ex = st.x; ey = st.y + st.h / 2; }
      else if (st.ax > st.x + st.w) { ex = st.x + st.w; ey = st.y + st.h / 2; }
      else { ex = Math.min(Math.max(st.ax, st.x + 11), st.x + st.w - 11); ey = st.ay < st.y ? st.y : st.y + st.h; }
      g.globalAlpha = a;
      g.lineWidth = 3; g.strokeStyle = 'rgba(8,12,18,0.55)';
      g.beginPath(); g.moveTo(st.ax, st.ay); g.lineTo(ex, ey); g.stroke();
      g.lineWidth = 1.25; g.strokeStyle = 'rgba(255,255,255,0.95)';
      g.beginPath(); g.moveTo(st.ax, st.ay); g.lineTo(ex, ey); g.stroke();
      g.fillStyle = 'rgba(8,12,18,0.6)'; g.beginPath(); g.arc(st.ax, st.ay, 4.2, 0, 6.2832); g.fill();
      g.fillStyle = '#fff'; g.beginPath(); g.arc(st.ax, st.ay, 2.6, 0, 6.2832); g.fill();
      g.fillStyle = 'rgba(14,19,27,0.78)';
      const r = st.h / 2;
      g.beginPath();
      g.moveTo(st.x + r, st.y); g.lineTo(st.x + st.w - r, st.y); g.arc(st.x + st.w - r, st.y + r, r, -1.5708, 1.5708);
      g.lineTo(st.x + r, st.y + st.h); g.arc(st.x + r, st.y + r, r, 1.5708, 4.7124); g.closePath(); g.fill();
      g.fillStyle = '#fff'; g.textAlign = 'left';
      g.fillText(st.text, st.x + 8, st.y + st.h / 2 + 0.5);
    }
    g.globalAlpha = 1;
  }
}
