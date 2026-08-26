import { readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const manifest = JSON.parse(await readFile(new URL('content/legacy-url-map.json', root), 'utf8'))
const errors = []

function assert(condition, message) {
  if (!condition) errors.push(message)
}

assert(manifest.urls.length === 261, `expected 261 sitemap records; found ${manifest.urls.length}`)
for (const [kind, count] of Object.entries({ page: 57, post: 153, category: 51 })) {
  assert(manifest.urls.filter((record) => record.kind === kind).length === count, `expected ${count} ${kind} records`)
}

const bySource = new Map()
for (const record of manifest.urls) {
  assert(typeof record.source === 'string' && record.source.startsWith('/'), `invalid source: ${record.source}`)
  assert(typeof record.destination === 'string' && record.destination.startsWith('/'), `invalid destination: ${record.destination}`)
  assert(typeof record.lastModified === 'string', `${record.source}: missing lastModified`)
  assert(record.requiresRedirect === (record.source !== record.destination), `${record.source}: inconsistent requiresRedirect`)
  const previous = bySource.get(record.source)
  if (previous) assert(previous.destination === record.destination, `${record.source}: duplicate records disagree on destination`)
  bySource.set(record.source, record)
}

assert(bySource.size === 260, `expected 260 unique source paths; found ${bySource.size}`)
assert(manifest.urls.filter((record) => record.requiresRedirect).length === 250, 'expected 250 changed records including duplicate /blog')
assert([...bySource.values()].filter((record) => record.requiresRedirect).length === 249, 'expected 249 unique redirect sources')
assert(manifest.urls.filter((record) => !record.requiresRedirect).length === 11, 'expected 11 direct-200 records')

try {
  const routes = JSON.parse(await readFile(new URL('.next/routes-manifest.json', root), 'utf8'))
  const built = new Map(routes.redirects.filter((redirect) => redirect.statusCode === 301).map((redirect) => [redirect.source, redirect]))
  const expected = [...bySource.values()].filter((record) => record.requiresRedirect)
  assert(built.size === expected.length, `build has ${built.size} HTTP 301 redirects; expected ${expected.length}`)
  for (const record of expected) {
    const redirect = built.get(record.source)
    assert(Boolean(redirect), `${record.source}: missing from built redirect manifest`)
    assert(redirect?.destination === record.destination, `${record.source}: built destination differs from explicit map`)
  }

  const sitemapXml = await readFile(new URL('.next/server/app/sitemap.xml.body', root), 'utf8')
  const canonicalPaths = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname))
  for (const record of manifest.urls) {
    assert(canonicalPaths.has(record.destination), `${record.source}: destination is not in the generated sitemap (${record.destination})`)
  }
} catch (error) {
  errors.push(`run npm run build before redirect validation: ${error instanceof Error ? error.message : String(error)}`)
}

const baseUrl = process.env.REDIRECT_BASE_URL?.replace(/\/$/, '')
if (baseUrl) {
  const status = async (path) => fetch(`${baseUrl}${path}`, { redirect: 'manual' }).then((response) => response.status)
  const sourceChecks = await Promise.all(
    [...bySource.values()].map(async (record) => ({ record, status: await status(record.source) })),
  )
  for (const check of sourceChecks) {
    const expected = check.record.requiresRedirect ? 301 : 200
    assert(check.status === expected, `${check.record.source}: HTTP ${check.status}; expected ${expected}`)
  }
  const destinations = [...new Set(manifest.urls.map((record) => record.destination))]
  const destinationChecks = await Promise.all(destinations.map(async (destination) => ({ destination, status: await status(destination) })))
  for (const check of destinationChecks) assert(check.status === 200, `${check.destination}: destination returned HTTP ${check.status}`)
}

if (errors.length) {
  console.error(`Redirect validation failed:\n- ${errors.join('\n- ')}`)
  process.exit(1)
}

console.log(
  `Redirect validation passed: ${manifest.urls.length} records, ${bySource.size} unique sources, 249 HTTP 301s, 11 canonical direct-200 paths.`,
)

