import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')

const assets = [
  { input: 'hero-house-vibrant.png', output: 'hero-house', width: 1600 },
  { input: 'states-map-cropped.png', output: 'states-map', width: 1400 },
  { input: 'cta-storm-clean.jpg', output: 'cta-storm', width: 1600 },
  { input: 'minihomes-hero.png', output: 'minihomes-hero', width: 1600 },
]

for (const asset of assets) {
  const input = path.join(publicDir, asset.input)
  const pipeline = sharp(input).resize({ width: asset.width, withoutEnlargement: true })
  await Promise.all([
    pipeline.clone().webp({ quality: 78, effort: 6 }).toFile(path.join(publicDir, `${asset.output}.webp`)),
    pipeline.clone().avif({ quality: 55, effort: 7 }).toFile(path.join(publicDir, `${asset.output}.avif`)),
  ])
}

console.log(`Optimized ${assets.length} active backgrounds to AVIF and WebP.`)
