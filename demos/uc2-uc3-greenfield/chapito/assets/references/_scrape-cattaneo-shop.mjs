// One-shot Playwright scraper for the cattaneo.shop reference materials.
// Captures full-page screenshot + inventories product images (label artwork).
// Output: chapito/assets/references/cattaneo-shop/{screenshot.png, images.json, individual product-image downloads}
// Usage:  cd <chapito>/assets/references && npx playwright install chromium && node _scrape-cattaneo-shop.mjs

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const OUT_DIR = path.resolve(import.meta.dirname, 'cattaneo-shop');
const URL = 'https://www.opificiocattaneo.shop/';

await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
});
const page = await ctx.newPage();

console.log(`Visiting ${URL}…`);
await page.goto(URL, { waitUntil: 'networkidle', timeout: 60_000 });
await page.waitForTimeout(2000);

// scroll-trigger any lazy images
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 600;
    const i = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y > document.body.scrollHeight + 400) { clearInterval(i); resolve(); }
    }, 220);
  });
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

// full-page screenshot
const shotPath = path.join(OUT_DIR, 'fullpage.png');
console.log(`Screenshot → ${shotPath}`);
await page.screenshot({ path: shotPath, fullPage: true });

// inventory images — keep ones large enough to plausibly be labels / hero art
const images = await page.evaluate(() => {
  const out = [];
  for (const img of document.querySelectorAll('img')) {
    const src = img.currentSrc || img.src;
    if (!src || src.startsWith('data:')) continue;
    const w = img.naturalWidth || 0;
    const h = img.naturalHeight || 0;
    out.push({
      src,
      alt: img.alt || null,
      naturalWidth: w,
      naturalHeight: h,
      displayedRect: img.getBoundingClientRect().toJSON(),
    });
  }
  return out;
});

// also pick up CSS background-image URLs (Shopify-style hero/lookbook sections often use them)
const bgUrls = await page.evaluate(() => {
  const urls = new Set();
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage;
    if (!bg || bg === 'none') continue;
    for (const m of bg.matchAll(/url\(["']?(.*?)["']?\)/g)) {
      if (!m[1].startsWith('data:')) urls.add(m[1]);
    }
  }
  return [...urls];
});

const inventory = {
  scrapedAt: new Date().toISOString(),
  url: URL,
  images,
  bgUrls,
};
await writeFile(path.join(OUT_DIR, 'images.json'), JSON.stringify(inventory, null, 2));

// download the bigger images locally so we can look at the label style
const interesting = images
  .filter((i) => Math.max(i.naturalWidth, i.naturalHeight) >= 600)
  .slice(0, 24);
console.log(`Downloading ${interesting.length} large product images…`);

for (const img of interesting) {
  try {
    const url = new URL(img.src, URL).toString();
    const safe = url.replace(/[^a-z0-9.-]+/gi, '_').slice(-120);
    const dest = path.join(OUT_DIR, safe);
    const r = await fetch(url);
    if (!r.ok) { console.warn(`  skip ${r.status} ${url}`); continue; }
    await pipeline(r.body, createWriteStream(dest));
    console.log(`  ${safe}`);
  } catch (e) {
    console.warn(`  fail ${img.src}: ${e.message}`);
  }
}

await browser.close();
console.log('Done.');
