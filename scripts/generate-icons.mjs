// Generates PWA icons (192 / 512 / maskable-512) by rasterizing the
// favicon.svg boathouse + lake-wave design. Zero third-party dependencies.
// Run: node scripts/generate-icons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const parseHex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const TEAL = parseHex('#0d6d70');
const GOLD = parseHex('#f6d27a');
const WHITE = [255, 255, 255];
const WAVE = parseHex('#d9f0e6');

// ---------- PNG encoder (RGBA, bit depth 8) ----------
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = (buf) => {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const c = Buffer.alloc(4);
  c.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, c]);
};
function encodePng(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

// ---------- Tiny rasterizer (2x supersampling) ----------
const distToSeg = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax, dy = by - ay;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx - px, cy = ay + t * dy - py;
  return Math.hypot(cx, cy);
};

function renderIcon(size, opts) {
  const k = opts.k || 1;             // design scale (maskable uses ~0.86 around center)
  const bg = opts.bg || null;        // full-bleed background color, or null = transparent
  const SS = 2;                      // supersampling factor
  const S = size * SS;
  const u = S / 64;                  // pixel units per svg unit (pre-scale grid)
  const pxFromSvg = (w) => ((w - 32) * k + 32) * u; // pixel index for an svg coordinate
  const svgFromPx = (v) => (v / u - 32) / k + 32;   // inverse mapping

  const buf = Buffer.alloc(S * S * 4);
  if (bg) {
    for (let i = 0; i < S * S; i++) {
      buf[i * 4] = bg[0];
      buf[i * 4 + 1] = bg[1];
      buf[i * 4 + 2] = bg[2];
      buf[i * 4 + 3] = 255;
    }
  }

  const paint = (x0, y0, x1, y1, rgb, inside) => {
    for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(S - 1, Math.ceil(y1)); y++) {
      for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(S - 1, Math.ceil(x1)); x++) {
        if (inside(svgFromPx(x + 0.5), svgFromPx(y + 0.5))) {
          const o = (y * S + x) * 4;
          buf[o] = rgb[0];
          buf[o + 1] = rgb[1];
          buf[o + 2] = rgb[2];
          buf[o + 3] = 255;
        }
      }
    }
  };

  // Disc (lake circle)
  const R = 28 * k;
  paint(
    pxFromSvg(32 - R), pxFromSvg(32 - R), pxFromSvg(32 + R), pxFromSvg(32 + R), TEAL,
    (x, y) => (x - 32) ** 2 + (y - 32) ** 2 <= 28 * 28
  );

  // Roof canopy (convex quad)
  const roofPts = [[16, 27], [48, 27], [42, 19], [22, 19]];
  const roofCross = (px, py) => {
    const s = [];
    for (let i = 0; i < 4; i++) {
      const [ax, ay] = roofPts[i];
      const [bx, by] = roofPts[(i + 1) % 4];
      s.push((bx - ax) * (py - ay) - (by - ay) * (px - ax));
    }
    return s.every((v) => v > 0) || s.every((v) => v < 0);
  };
  paint(pxFromSvg(16), pxFromSvg(19), pxFromSvg(48), pxFromSvg(27), GOLD, roofCross);

  // Boathouse white frame (3 stroke segments, round caps)
  const frameSegs = [[[21, 28], [21, 39]], [[43, 28], [43, 39]], [[21, 39], [43, 39]]];
  const fw = 2 * k; // half width of 4-unit stroke
  const paintFrame = (svgX, svgY) => {
    for (const [a, b] of frameSegs) {
      if (distToSeg(svgX, svgY, a[0], a[1], b[0], b[1]) <= fw) return true;
      if (Math.hypot(svgX - a[0], svgY - a[1]) <= fw) return true;
      if (Math.hypot(svgX - b[0], svgY - b[1]) <= fw) return true;
    }
    return false;
  };
  paint(pxFromSvg(19), pxFromSvg(26), pxFromSvg(45), pxFromSvg(41), WHITE, paintFrame);

  // Lake waves (4 cubic segments sampled)
  const curves = [
    [[12, 44], [21, 39], [29, 39], [37, 44]],
    [[37, 44], [45, 49], [51, 49], [56, 45]],
    [[12, 51], [21, 47], [29, 47], [37, 51]],
    [[37, 51], [45, 55], [51, 55], [56, 52]]
  ];
  const lw = 1.5 * k; // half width of 3-unit stroke
  const paintWave = (svgX, svgY) => {
    for (const [p0, p1, p2, p3] of curves) {
      let prev = p0;
      for (let i = 1; i <= 24; i++) {
        const t = i / 24;
        const mt = 1 - t;
        const x = mt ** 3 * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t ** 3 * p3[0];
        const y = mt ** 3 * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t ** 3 * p3[1];
        if (distToSeg(svgX, svgY, prev[0], prev[1], x, y) <= lw) return true;
        prev = [x, y];
      }
    }
    return false;
  };
  paint(pxFromSvg(10), pxFromSvg(37), pxFromSvg(58), pxFromSvg(57), WAVE, paintWave);

  // Downsample SSxSS blocks into the final image
  const out = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const o = ((y * SS + sy) * S + (x * SS + sx)) * 4;
          const aa = buf[o + 3] / 255;
          r += buf[o] * aa; g += buf[o + 1] * aa; b += buf[o + 2] * aa; a += aa;
        }
      }
      const o = (y * size + x) * 4;
      const n = SS * SS;
      if (a > 0) {
        out[o] = Math.round(r / a);
        out[o + 1] = Math.round(g / a);
        out[o + 2] = Math.round(b / a);
      }
      out[o + 3] = Math.round((a / n) * 255);
    }
  }
  return encodePng(size, out);
}

const out192 = join(root, 'public', 'icon-192.png');
const out512 = join(root, 'public', 'icon-512.png');
const outMask = join(root, 'public', 'icon-maskable-512.png');
writeFileSync(out192, renderIcon(192, { bg: null }));
writeFileSync(out512, renderIcon(512, { bg: null }));
writeFileSync(outMask, renderIcon(512, { bg: TEAL, k: 0.86 }));
console.log('created', out192);
console.log('created', out512);
console.log('created', outMask);
