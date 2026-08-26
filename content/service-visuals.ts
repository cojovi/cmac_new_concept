import type { Path } from './types'

export interface ServiceVisual {
  src: string
  alt: string
  position?: string
}

const visual = (slug: string, alt: string, position = 'center'): ServiceVisual => ({
  src: `/service-visuals/${slug}.avif`,
  alt,
  position,
})

/**
 * One art-directed visual for every public service route. The files are generated as one visual
 * family: cinematic blue-hour photography, graphite architecture, controlled crimson work light,
 * realistic materials, and enough negative space for the page title. Keeping the path map here
 * prevents card, hero, sitemap, and future templates from drifting to different imagery.
 */
export const serviceVisuals: Readonly<Record<string, ServiceVisual>> = {
  '/services': visual('services', 'A contemporary home exterior showing its roof, gutters, garage door, siding, and windows at blue hour', '58% center'),

  '/services/roofing': visual('roofing', 'A premium architectural roof under dramatic blue-hour storm clouds with controlled red work lighting', '62% center'),
  '/services/roofing/roof-repairs': visual('roof-repairs', 'A roofing technician inspecting storm-damaged architectural shingles and flashing at blue hour', '60% center'),
  '/services/roofing/roof-replacement': visual('roof-replacement', 'A newly installed architectural shingle roof on a contemporary home at blue hour', '58% center'),
  '/services/roofing/new-construction': visual('new-construction', 'A new residential development with roofing installation underway at blue hour', '62% center'),
  '/services/roofing/custom-homes': visual('custom-homes', 'A luxury custom home with complex roof geometry and premium roofing materials at dusk', '58% center'),
  '/services/roofing/specialty-systems': visual('specialty-systems', 'Close architectural view of slate, copper, and standing-seam specialty roofing at dusk', '55% center'),
  '/services/roofing/commercial-roofing': visual('commercial-roofing', 'A clean commercial low-slope membrane roof with rooftop systems under dramatic evening light', '64% center'),
  '/services/roofing/multi-family': visual('multi-family', 'A refined multi-family residential complex with coordinated roof systems at blue hour', '60% center'),
  '/services/roofing/home-additions': visual('home-additions', 'A modern home addition with its new roof precisely tied into the existing house', '60% center'),

  '/services/gutters': visual('gutters', 'Rainwater flowing through a seamless dark metal gutter on a modern home at blue hour', '66% center'),
  '/services/gutters/installation': visual('gutter-installation', 'A craftsperson fitting a seamless metal gutter beneath a crisp roof edge at dusk', '62% center'),
  '/services/gutters/repairs': visual('gutter-repairs', 'Detailed repair of a gutter joint and fascia connection during light rain at dusk', '62% center'),
  '/services/gutters/gutter-guards': visual('gutter-guards', 'A close view of a precision gutter guard system shedding rain beneath architectural shingles', '60% center'),
  '/services/gutters/maintenance': visual('gutter-maintenance', 'A clean gutter and downspout system being professionally inspected after rainfall', '62% center'),
  '/services/gutters/commercial-gutters': visual('commercial-gutters', 'Large commercial box gutters and downspouts managing heavy rain on an industrial building', '64% center'),

  '/services/doors': visual('doors', 'A dramatic modern garage with premium glass and steel sectional doors glowing at blue hour', '64% center'),
  '/services/doors/residential-garage-doors': visual('residential-garage-doors', 'A luxury residential garage with insulated wood-look sectional doors at dusk', '62% center'),
  '/services/doors/commercial-garage-doors': visual('commercial-garage-doors', 'A modern commercial loading facility with durable sectional overhead doors at blue hour', '64% center'),
  '/services/doors/openers': visual('garage-door-openers', 'A precision ceiling-mounted garage door opener, rail, and safety system in a premium garage', '58% center'),
  '/services/doors/repair': visual('garage-door-repair', 'A garage door technician safely servicing rollers and track on a sectional door', '62% center'),
  '/services/doors/brands': visual('garage-door-brands', 'An architectural showroom row of distinct premium garage door materials and profiles', '62% center'),
  '/services/doors/gallery': visual('garage-door-gallery', 'A cinematic lineup of contemporary garage door designs across refined home facades', '60% center'),

  '/services/restoration': visual('restoration', 'A professionally stabilized storm-damaged interior with drying equipment and controlled work lights', '62% center'),
  '/services/restoration/water-mitigation': visual('water-mitigation', 'Professional water extraction and structural drying equipment in a clean modern interior', '62% center'),
  '/services/restoration/fire-smoke-damage': visual('fire-smoke-damage', 'A non-graphic fire-damaged room professionally contained for smoke and soot restoration', '62% center'),
  '/services/restoration/resurfacing-refinishing': visual('resurfacing-refinishing', 'A refinished stone countertop and tiled bath surface under precise inspection lighting', '60% center'),
  '/services/restoration/floor-care-odor-control': visual('floor-care-odor-control', 'Professional floor extraction and air treatment equipment restoring a refined interior', '62% center'),
  '/services/restoration/biohazard-trauma-cleanup': visual('biohazard-cleanup', 'A non-graphic professional containment zone with certified protective cleanup equipment', '64% center'),

  '/services/exteriors': visual('exteriors', 'A contemporary home envelope with refined siding, windows, deck, and painted trim at blue hour', '60% center'),
  '/services/exteriors/siding': visual('siding', 'Detailed modern fiber-cement siding and flashing on a contemporary home at dusk', '62% center'),
  '/services/exteriors/windows': visual('windows', 'New black-framed energy-efficient windows glowing warmly in a dark contemporary facade', '62% center'),
  '/services/exteriors/decks': visual('decks', 'A premium custom deck with architectural lighting overlooking a landscaped home at blue hour', '60% center'),
  '/services/exteriors/exterior-painting': visual('exterior-painting', 'A professionally painted modern home exterior with crisp charcoal and warm white finishes', '60% center'),
}

export function visualForPath(path: Path | string): ServiceVisual | undefined {
  return serviceVisuals[path]
}
