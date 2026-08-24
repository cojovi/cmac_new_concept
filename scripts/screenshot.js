import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE = process.env.BASE_URL || 'http://localhost:3000';

// pathname -> output basename
const TARGETS = process.argv[2]
  ? [[process.argv[2], process.argv[3] || 'current']]
  : [['/', 'current']];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 974, height: 1000 } });

  try {
    for (const [pathname, name] of TARGETS) {
      const url = pathname.startsWith('http') ? pathname : `${BASE}${pathname}`;
      const outputPath = path.resolve(__dirname, `../comparison/${name}.png`);
      console.log(`Capturing ${url}`);

      // 'networkidle' hangs against Next's dev websocket; wait on fonts instead.
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1200);

      await page.screenshot({ path: outputPath, fullPage: true });
      console.log(`  -> ${outputPath}`);
    }
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main();
