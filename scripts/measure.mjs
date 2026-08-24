import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:974,height:1000}});
await p.goto('http://localhost:3000/', {waitUntil:'load'});
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(800);
const out = await p.evaluate(() => {
  const cs = getComputedStyle(document.body);
  const sel = ['.top-nav','.hero','.states-panel','.services-panel','.process-panel','.credentials-panel','.press-panel','.reviews-panel','.cta-panel','.footer-panel','.site-shell'];
  const boxes = Object.fromEntries(sel.map(s => {
    const e = document.querySelector(s);
    return [s, e ? {top: Math.round(e.getBoundingClientRect().top + scrollY), h: Math.round(e.getBoundingClientRect().height), w: Math.round(e.getBoundingClientRect().width)} : null];
  }));
  const loaded = [...document.fonts].map(f => `${f.family} ${f.weight} ${f.status}`);
  return {bodyFont: cs.fontFamily, docHeight: document.documentElement.scrollHeight, boxes, loaded};
});
console.log(JSON.stringify(out, null, 2));
await b.close();
