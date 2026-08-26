import { execFile } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import sharp from 'sharp'

const run = promisify(execFile)

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = path.join(root, 'public', 'service-visuals')
const tempDir = path.join(root, 'tmp', 'higgsfield')
const styleReference = path.join(tempDir, 'cmac-style-reference.png')
const styleReferenceInput = process.env.HIGGSFIELD_STYLE_REFERENCE_ID || styleReference
mkdirSync(tempDir, { recursive: true })
if (!existsSync(styleReference)) {
  await sharp(path.join(root, 'public', 'hero-house.webp')).png().toFile(styleReference)
}
mkdirSync(outputDir, { recursive: true })

const scenes = {
  services: 'a commanding contemporary home exterior where the architectural roof, seamless gutters, premium garage door, siding, and windows all read clearly as one integrated building envelope',
  roofing: 'a premium architectural roof with dimensional shingles, crisp flashing, ridges, and rain-cleaned surfaces beneath dramatic storm clouds',
  'roof-repairs': 'a safety-equipped roofing technician carefully inspecting a localized area of storm-damaged architectural shingles and metal flashing, credible repair tools nearby',
  'roof-replacement': 'a pristine newly installed dimensional-shingle roof on a contemporary residence, exact ridge lines, valleys, drip edge, and ventilation details',
  'new-construction': 'a refined new residential development with professional roofing installation underway, safely staged materials and completed roof planes in the distance',
  'custom-homes': 'a luxury custom residence with complex roof geometry, multiple gables, valleys, dormers, and premium architectural roofing',
  'specialty-systems': 'an editorial architectural composition of natural slate, standing-seam metal, and warm copper roof details on a sophisticated residence',
  'commercial-roofing': 'a broad clean commercial low-slope membrane roof with realistic seams, curbs, drains, and rooftop systems, urban horizon beyond',
  'multi-family': 'an upscale multi-family residential complex with coordinated pitched roof systems across several connected buildings',
  'home-additions': 'a modern residential addition whose new roof is precisely integrated into the original house, the transition flashing and geometry visibly resolved',
  gutters: 'rainwater moving cleanly through a seamless dark-metal gutter and downspout on a contemporary home, roof edge and fascia sharply detailed',
  'gutter-installation': 'a safety-equipped craftsperson fitting a continuous seamless metal gutter beneath a crisp residential roof edge, fascia and hidden hangers visible',
  'gutter-repairs': 'a close professional repair of a gutter joint, hanger, and fascia connection during light rain, detailed metalwork and water control',
  'gutter-guards': 'a precision micro-mesh gutter guard system beneath architectural shingles, shedding rainfall while leaves remain above the screen',
  'gutter-maintenance': 'a spotless residential gutter and downspout system undergoing a careful professional inspection just after rainfall',
  'commercial-gutters': 'large industrial box gutters, scuppers, and downspouts controlling heavy rainfall on a refined commercial building',
  doors: 'a dramatic modern garage with premium full-view glass and dark steel sectional overhead doors, warm interior light revealing the tracks',
  'residential-garage-doors': 'a luxury residence with insulated wood-look sectional garage doors integrated into a dark contemporary facade',
  'commercial-garage-doors': 'a modern commercial loading facility with durable insulated sectional overhead doors, dock geometry and industrial hardware clearly visible',
  'garage-door-openers': 'a precision ceiling-mounted garage door operator, rail, torsion shaft, tracks, and safety sensors inside a premium immaculate garage',
  'garage-door-repair': 'a uniformed garage door technician in proper safety gear servicing rollers and vertical track on a sectional door, the spring system safely untouched',
  'garage-door-brands': 'an architectural showroom featuring several distinct premium garage door materials and profiles, steel, wood-look, and full-view glass, completely unbranded',
  'garage-door-gallery': 'a cinematic architectural lineup of contemporary garage door designs across several refined residential facades',
  restoration: 'a professionally stabilized storm-damaged modern interior with air movers, dehumidification equipment, containment, and clean controlled work lighting',
  'water-mitigation': 'professional water extraction and structural drying equipment operating in a clean modern interior, subtle wet floor reflections and moisture monitoring',
  'fire-smoke-damage': 'a non-graphic fire- and smoke-damaged modern room professionally contained for soot removal and restoration, orderly equipment and no active flames',
  'resurfacing-refinishing': 'a beautifully restored stone countertop, tub, and tiled surface under precise inspection lighting, refined before-and-after feeling within one coherent room',
  'floor-care-odor-control': 'professional floor extraction and air-treatment equipment restoring a refined residential interior, clean textile and hard-surface detail',
  'biohazard-cleanup': 'a non-graphic professional containment zone with certified protective cleanup equipment, negative-air machine, sealed doorway, and immaculate procedural order',
  exteriors: 'a contemporary home envelope with refined fiber-cement siding, black-framed windows, a custom deck, and freshly painted trim',
  siding: 'a close architectural view of modern fiber-cement lap siding, rainscreen detailing, black window flashing, and precise corner trim',
  windows: 'new black-framed energy-efficient windows glowing warmly within a dark contemporary facade, crisp head flashing and refined exterior trim',
  decks: 'a premium custom deck with layered steps, sophisticated railing, architectural lighting, and a landscaped contemporary home beyond',
  'exterior-painting': 'a professionally painted modern home exterior with crisp charcoal and warm-white finishes, exact cut lines, clean trim, and immaculate surfaces',
}

const force = process.argv.includes('--force')
const requested = process.argv.slice(2).filter((arg) => arg !== '--force')
const selected = requested.length
  ? Object.entries(scenes).filter(([slug]) => requested.includes(slug))
  : Object.entries(scenes)

if (!selected.length) throw new Error(`No matching scenes. Available: ${Object.keys(scenes).join(', ')}`)

const artDirection = [
  'Use the supplied image only as the exact art-direction reference: the same black-on-black architectural visualization, graphite blueprint environment, premium dimensional materials, and dramatic crimson energy glow.',
  'Replace its roofing subject with the requested trade scene while preserving that visual language.',
  'Blue-hour darkness, cool steel edges, selective molten-red illumination tracing the page-specific trade component, and subtle warm interior accents.',
  'High contrast, realistic construction detail, rain-polished materials, slight atmospheric depth, and a crisp cinematic wide-angle composition.',
  'Place the main trade subject in the right two-thirds with generous clean dark negative space on the left for website copy.',
  'Polished national-contractor campaign, credible workmanship, editorial rather than stock photography.',
  'Tack sharp, photorealistic, unbranded, typography-free, logo-free, watermark-free, physically accurate, safe professional practice.',
].join(' ')

function collectUrls(value, urls = []) {
  if (typeof value === 'string' && /^https?:\/\//.test(value)) urls.push(value)
  else if (Array.isArray(value)) value.forEach((item) => collectUrls(item, urls))
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => collectUrls(item, urls))
  return urls
}

async function resultImage(stdout) {
  let urls = []
  try {
    const parsed = JSON.parse(stdout)
    const jobs = Array.isArray(parsed) ? parsed : [parsed]
    urls = [
      ...jobs.map((job) => job?.result_url).filter(Boolean),
      ...collectUrls(parsed),
    ]
  } catch {
    urls = stdout.match(/https?:\/\/[^\s"']+/g) ?? []
  }
  for (const url of [...new Set(urls)]) {
    const response = await fetch(url)
    if (!response.ok) continue
    const type = response.headers.get('content-type') ?? ''
    if (!type.startsWith('image/')) continue
    return Buffer.from(await response.arrayBuffer())
  }
  throw new Error('Higgsfield completed, but no downloadable image was found in its result.')
}

async function imageAt(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not download completed Higgsfield image (${response.status}).`)
  return Buffer.from(await response.arrayBuffer())
}

let recentJobs = []
try {
  const { stdout } = await run('higgsfield', ['generate', 'list', '--json'], {
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  })
  recentJobs = JSON.parse(stdout)
} catch {
  // Recovery is opportunistic. A fresh generation still works if history is temporarily unavailable.
}

console.log(`Generating ${selected.length} CMAC service visuals...`)
let cursor = 0

async function generateOne(slug, scene) {
  const avifPath = path.join(outputDir, `${slug}.avif`)
  if (!force && existsSync(avifPath)) {
    console.log(`Skipping ${slug}; optimized master already exists`)
    return
  }
  console.log(`Starting ${slug}`)
  const recovered = recentJobs.find((job) =>
    job?.status === 'completed'
    && job?.result_url
    && typeof job?.params?.prompt === 'string'
    && job.params.prompt.startsWith(scene),
  )
  let source
  if (recovered) {
    console.log(`Recovering completed ${slug}`)
    source = await imageAt(recovered.result_url)
  } else {
    const { stdout } = await run('higgsfield', [
      'generate', 'create', 'gpt_image_2',
      '--prompt', `${scene}. ${artDirection}`,
      '--image', styleReferenceInput,
      '--aspect_ratio', '16:9',
      '--resolution', '2k',
      '--wait',
      '--wait-timeout', '20m',
      '--json',
    ], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 })
    source = await resultImage(stdout)
  }
  const prepared = sharp(source).resize(1440, 810, { fit: 'cover', position: 'centre' })
  await prepared.avif({ quality: 48, effort: 7 }).toFile(avifPath)
  console.log(`Finished ${slug}`)
}

async function worker() {
  while (cursor < selected.length) {
    const index = cursor++
    const [slug, scene] = selected[index]
    await generateOne(slug, scene)
  }
}

await Promise.all(Array.from({ length: Math.min(3, selected.length) }, () => worker()))

console.log(`Generated ${selected.length} optimized AVIF masters in public/service-visuals.`)
