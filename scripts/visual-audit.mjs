import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import AxeBuilder from '@axe-core/playwright'
import { chromium } from 'playwright'

const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const output = path.join(root, '.verification', 'screenshots')
await fs.mkdir(output, { recursive: true })

const widths = [320, 390, 768, 974, 1280, 2048]
const templates = [
  '/',
  '/mini-homes',
  '/services/roofing',
  '/services/gutters',
  '/services/doors',
  '/services/restoration',
  '/services/exteriors',
  '/services/roofing/roof-repairs',
  '/locations/texas/dallas-fort-worth',
  '/about',
  '/quote',
]
const serviceRoutes = [
  '/services/roofing',
  '/services/gutters',
  '/services/doors',
  '/services/restoration',
  '/services/exteriors',
]
const failures = []
const browser = await chromium.launch({ headless: true })

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 })
  const page = await context.newPage()
  await page.goto(`${base}/`, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  if (overflow > 1) failures.push(`Homepage overflows by ${overflow}px at ${width}px`)
  await page.screenshot({ path: path.join(output, `home-${width}.png`), fullPage: true })
  await page.goto(`${base}/services/doors`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const serviceOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  if (serviceOverflow > 1) failures.push(`/services/doors overflows by ${serviceOverflow}px at ${width}px`)
  await page.screenshot({ path: path.join(output, `doors-${width}.png`), fullPage: false })
  await context.close()
}

for (const pathname of templates) {
  const context = await browser.newContext({ viewport: { width: 390, height: 1000 } })
  const page = await context.newPage()
  await page.goto(`${base}${pathname}`, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  if (overflow > 1) failures.push(`${pathname} overflows by ${overflow}px at 390px`)
  const axe = await new AxeBuilder({ page }).analyze()
  for (const violation of axe.violations.filter((item) => ['critical', 'serious'].includes(item.impact ?? ''))) {
    failures.push(`${pathname}: ${violation.id} (${violation.nodes.length} node(s))`)
  }
  const name = pathname === '/' ? 'home' : pathname.slice(1).replaceAll('/', '-')
  await page.screenshot({ path: path.join(output, `${name}-390.png`), fullPage: true })
  await context.close()
}

for (const pathname of serviceRoutes) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  await page.goto(`${base}${pathname}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const state = await page.evaluate(() => ({
    h1: document.querySelectorAll('h1').length,
    heroWidth: document.querySelector('.page-hero-media img')?.naturalWidth ?? 0,
    brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    storyChapters: document.querySelectorAll('.story-chapter').length,
    storyIndexItems: document.querySelectorAll('.story-index a').length,
    processPanels: document.querySelectorAll('.process-panel').length,
  }))
  if (state.h1 !== 1) failures.push(`${pathname} has ${state.h1} visible h1 elements`)
  if (!state.heroWidth) failures.push(`${pathname} hero image did not load`)
  if (state.brokenImages) failures.push(`${pathname} has ${state.brokenImages} broken image(s)`)
  if (state.overflow > 1) failures.push(`${pathname} overflows by ${state.overflow}px at 1280px`)
  if (!state.storyChapters || state.storyChapters !== state.storyIndexItems) {
    failures.push(`${pathname} field brief is incomplete: ${JSON.stringify(state)}`)
  }
  if (!state.processPanels) failures.push(`${pathname} is missing its process band`)
  if (consoleErrors.length) failures.push(`${pathname} logged console errors: ${consoleErrors.join(' | ')}`)
  const name = pathname.slice(1).replaceAll('/', '-')
  await page.screenshot({ path: path.join(output, `${name}-1280.png`), fullPage: true })
  await context.close()
}

const interactionContext = await browser.newContext({ viewport: { width: 1280, height: 900 } })
const interactionPage = await interactionContext.newPage()
await interactionPage.goto(`${base}/services/doors`, { waitUntil: 'networkidle' })
await interactionPage.locator('.service-card a').first().click()
await interactionPage.waitForURL('**/services/doors/**')
await interactionPage.waitForLoadState('networkidle')
await interactionPage.locator('.page-hero-media img').waitFor({ state: 'visible' })
await interactionPage.locator('.page-hero-media img').evaluate((image) => image.decode())
await interactionPage.waitForFunction(() => window.scrollY < 2)
const interactionState = await interactionPage.evaluate(() => ({
  path: location.pathname,
  scrollY: window.scrollY,
  h1: document.querySelector('h1')?.textContent?.trim(),
  heroWidth: document.querySelector('.page-hero-media img')?.naturalWidth ?? 0,
}))
if (!interactionState.path.startsWith('/services/doors/') || !interactionState.h1 || !interactionState.heroWidth) {
  failures.push(`Doors card interaction did not reach a rendered detail page: ${JSON.stringify(interactionState)}`)
}
await interactionPage.screenshot({ path: path.join(output, 'doors-card-detail-interaction.png'), fullPage: false })

await interactionPage.goto(`${base}/services/restoration`, { waitUntil: 'networkidle' })
const firstBriefLink = interactionPage.locator('.story-index a').first()
const briefTarget = await firstBriefLink.getAttribute('href')
await firstBriefLink.click()
await interactionPage.waitForFunction((target) => location.hash === target, briefTarget)
await interactionPage.waitForFunction((target) => {
  const section = target ? document.querySelector(target) : null
  const top = section?.getBoundingClientRect().top
  return typeof top === 'number' && top >= 0 && top <= 180
}, briefTarget)
const briefState = await interactionPage.evaluate((target) => {
  const section = target ? document.querySelector(target) : null
  return {
    hash: location.hash,
    targetExists: Boolean(section),
    targetTop: section?.getBoundingClientRect().top ?? null,
  }
}, briefTarget)
if (!briefState.targetExists || briefState.hash !== briefTarget || briefState.targetTop === null || briefState.targetTop < 0 || briefState.targetTop > 180) {
  failures.push(`Restoration field-brief index did not reach its scope module: ${JSON.stringify(briefState)}`)
}
await interactionPage.screenshot({ path: path.join(output, 'restoration-field-brief-interaction.png'), fullPage: false })
await interactionContext.close()

// A 1280px display at 200% browser zoom exposes a 640 CSS-pixel layout viewport.
const zoomContext = await browser.newContext({ viewport: { width: 640, height: 1000 } })
const zoomPage = await zoomContext.newPage()
await zoomPage.goto(`${base}/services`, { waitUntil: 'load' })
const zoomOverflow = await zoomPage.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
if (zoomOverflow > 1) failures.push(`/services overflows by ${zoomOverflow}px at 200% zoom`)
await zoomPage.screenshot({ path: path.join(output, 'services-200-percent.png'), fullPage: true })
await zoomContext.close()

await browser.close()
console.log(`Captured ${widths.length * 2 + templates.length + serviceRoutes.length + 3} screenshots in ${output}.`)
if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exitCode = 1
} else {
  console.log('No horizontal overflow or serious/critical axe violations found.')
}
