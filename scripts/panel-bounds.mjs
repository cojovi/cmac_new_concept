// Finds horizontal panel bands in a full-page screenshot by scanning a single column
// for runs of "panel" pixels (lighter than the near-black page gutter).
import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const files = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('about:blank');

for (const f of files) {
  const dataUrl = 'data:image/png;base64,' + readFileSync(f).toString('base64');
  const bands = await p.evaluate(async (src) => {
    const img = new Image();
    img.src = src;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    // x=6px sits in the outer gutter for gaps but inside the rounded panel edge is at ~27px.
    const x = Math.round(img.width * 0.5);
    const d = ctx.getImageData(x, 0, 1, img.height).data;
    const lum = (i) => 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
    const rows = [];
    for (let y = 0; y < img.height; y++) rows.push(lum(y * 4) > 12);
    const out = [];
    let start = null;
    for (let y = 0; y < rows.length; y++) {
      if (rows[y] && start === null) start = y;
      if (!rows[y] && start !== null) { if (y - start > 20) out.push([start, y, y - start]); start = null; }
    }
    if (start !== null) out.push([start, rows.length, rows.length - start]);
    return { h: img.height, bands: out };
  }, dataUrl);
  console.log(`\n${f}  (height ${bands.h})`);
  for (const [t, bot, h] of bands.bands) console.log(`   top=${String(t).padStart(5)}  bottom=${String(bot).padStart(5)}  height=${String(h).padStart(4)}`);
}
await b.close();
