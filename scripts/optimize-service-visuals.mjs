import { readdir, rename } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(root, 'public', 'service-visuals')
const sources = (await readdir(dir)).filter((file) => file.endsWith('.webp'))

for (const file of sources) {
  const slug = file.replace(/\.webp$/, '')
  const temporary = path.join(dir, `${slug}.optimized.avif`)
  const final = path.join(dir, `${slug}.avif`)
  await sharp(path.join(dir, file))
    .resize(1440, 810, { fit: 'cover', position: 'centre', withoutEnlargement: true })
    .avif({ quality: 48, effort: 7 })
    .toFile(temporary)
  await rename(temporary, final)
}

console.log(`Optimized ${sources.length} service visuals as 1440px AVIF masters.`)
