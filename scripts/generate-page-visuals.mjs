import { execFile } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import sharp from 'sharp'

const run = promisify(execFile)
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = path.join(root, 'public', 'page-visuals')
const tempDir = path.join(root, 'tmp', 'higgsfield')
const styleReference = path.join(tempDir, 'cmac-style-reference.png')
const styleReferenceInput = process.env.HIGGSFIELD_STYLE_REFERENCE_ID || styleReference

mkdirSync(tempDir, { recursive: true })
mkdirSync(outputDir, { recursive: true })
if (!existsSync(styleReference)) {
  await sharp(path.join(root, 'public', 'hero-house.webp')).png().toFile(styleReference)
}

const scenes = {
  locations: 'a sophisticated service-network tableau spanning Texas, Oklahoma, Arkansas, Tennessee, and Georgia, connected through a sequence of storm-ready homes and rooflines across the southern United States, geographical rather than literal map labels',
  texas: 'a commanding contemporary Texas residence with dimensional architectural shingles, broad roof planes, native live-oak landscaping, and a vast dramatic evening sky',
  'dallas-fort-worth': 'a refined North Texas residence and dimensional-shingle roof on a broad suburban horizon, a distant severe-thunderstorm shelf cloud suggesting Dallas–Fort Worth weather',
  houston: 'a resilient Gulf Coast residence near Houston during heavy rain, wet architectural roof, precise flashing, seamless gutters, humid atmosphere, and subtle distant city lights',
  austin: 'a sophisticated limestone Hill Country residence near Austin, layered roof geometry, live oaks and native rock, warm modern architecture at blue hour',
  oklahoma: 'a storm-ready Oklahoma residence beneath an immense plains sky, dimensional roof and gutters sharply detailed after rain, distant severe-weather clouds',
  'oklahoma-city': 'a modern Oklahoma City residence with a resilient roof beneath dramatic plains storm clouds, subtle downtown skyline far beyond the neighborhood',
  tennessee: 'a refined Middle Tennessee residence among wooded rolling hills, rain-cleaned roof, valleys, flashing, and gutters sharply visible after a passing storm',
  nashville: 'a contemporary Nashville-area residence with a storm-ready architectural roof, wooded hills and a subtle recognizable Nashville skyline in the far distance',
  arkansas: 'a well-built Arkansas residence among wooded Ozark foothills, rain-polished roof and gutters beneath clearing evening storm clouds',
  georgia: 'a refined Georgia residence among tall pines, resilient architectural roof and drainage system in humid blue-hour light after a summer downpour',
  atlanta: 'a contemporary Atlanta-area residence with a resilient architectural roof, warm modern interiors, tall pines, and a subtle downtown skyline in the far distance',
  about: 'a disciplined diverse professional roofing crew in clean safety equipment reviewing a completed architectural roof together at blue hour, confident and mission-focused',
  contact: 'a professional field coordinator at a dark modern operations desk connecting a property owner with a roofing crew, phone and tablet beside architectural roof plans',
  quote: 'a safety-equipped roofing specialist documenting a residential roof inspection with a tablet, measuring roof conditions precisely at dusk',
  pricing: 'roofing material samples, precise measurements, architectural plans, and a clear itemized project estimate arranged on a dark professional worktable',
  'insurance-claims': 'a safety-equipped roofing specialist carefully photographing hail and wind damage on architectural shingles and flashing for a detailed insurance record',
  'storm-response': 'a professional emergency crew safely stabilizing a storm-damaged residential roof with temporary protection under controlled work lights after severe weather',
  warranty: 'a pristine newly installed architectural roof with manufacturer product documentation, installation photographs, and workmanship records arranged in the foreground',
  partners: 'two professional construction teams coordinating roof plans beside a large active project at dusk, collaborative field leadership and orderly safe operations',
  ai: 'a cinematic architectural roof blueprint connected to a precise structured digital information network, service nodes and location signals integrated into graphite geometry',
  developers: 'a dark technical workstation visualizing roofing services, regional locations, structured data, API connections, and an architectural roof model without readable interface text',
  accessibility: 'an accessible high-contrast digital interface being used with keyboard and assistive controls to review a roofing service request, architectural roof imagery beyond the screen',
  'privacy-policy': 'secure digital property and contact records protected inside a dark architectural operations environment, subtle shield geometry and a residential roof model',
  terms: 'a construction agreement, scope drawings, and precise roof measurements arranged on a dark architectural worktable, orderly and professional',
  reviews: 'a satisfied property owner and professional roofing specialist reviewing a beautifully completed roof together at blue hour, candid and credible',
  faqs: 'a professional roofing specialist explaining roof conditions, flashing, and next steps to a property owner beside a well-maintained home',
  'sitemap-page': 'a structured blueprint network connecting roofing services, five regional locations, and company resources around a central architectural roof model',
  'register-my-roof': 'a newly completed architectural roof being photographed and added to a secure property installation record on a tablet by a field specialist',
}

const artDirection = [
  'Use the supplied image only as the exact art-direction reference: the same black-on-black architectural visualization, graphite blueprint environment, premium dimensional materials, and dramatic crimson energy glow.',
  'Replace its roofing subject with the requested page-specific scene while preserving that visual language.',
  'Blue-hour darkness, cool steel edges, selective molten-red illumination, subtle warm interior accents, high contrast, and realistic construction detail.',
  'Cinematic wide 16:9 composition with the main subject in the right two-thirds and generous clean dark negative space on the left for website copy.',
  'Polished national-contractor campaign, credible rather than stock photography, slight atmospheric depth and rain-polished materials where appropriate.',
  'Tack sharp, photorealistic, unbranded, typography-free, logo-free, watermark-free, physically accurate, safe professional practice.',
].join(' ')

const force = process.argv.includes('--force')
const requested = process.argv.slice(2).filter((arg) => arg !== '--force')
const selected = requested.length
  ? Object.entries(scenes).filter(([slug]) => requested.includes(slug))
  : Object.entries(scenes)

if (!selected.length) throw new Error(`No matching scenes. Available: ${Object.keys(scenes).join(', ')}`)

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
    urls = [...jobs.map((job) => job?.result_url).filter(Boolean), ...collectUrls(parsed)]
  } catch {
    urls = stdout.match(/https?:\/\/[^\s"']+/g) ?? []
  }
  for (const url of [...new Set(urls)]) {
    const response = await fetch(url)
    if (!response.ok || !(response.headers.get('content-type') ?? '').startsWith('image/')) continue
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

console.log(`Generating ${selected.length} CMAC page visuals...`)
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
  await sharp(source)
    .resize(1280, 720, { fit: 'cover', position: 'centre' })
    .avif({ quality: 42, effort: 7 })
    .toFile(avifPath)
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
console.log(`Generated ${selected.length} optimized AVIF masters in public/page-visuals.`)
