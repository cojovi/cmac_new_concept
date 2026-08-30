import type { Path } from './types'

export interface PageVisual {
  src: string
  alt: string
  position?: string
}

const visual = (slug: string, alt: string, position = '62% center'): PageVisual => ({
  src: `/page-visuals/${slug}.avif`,
  alt,
  position,
})

/**
 * Art-directed heroes for every non-service PageShell route. Each image belongs to the same visual
 * family as the homepage and service campaign: graphite architecture, blue-hour atmosphere,
 * controlled crimson work light, realistic materials, and copy-safe negative space on the left.
 */
export const pageVisuals: Readonly<Record<string, PageVisual>> = {
  '/locations': visual('locations', 'A cinematic network of CMAC roofing markets across the southern United States'),
  '/locations/texas': visual('texas', 'A contemporary Texas home with a resilient architectural roof beneath a dramatic evening sky'),
  '/locations/texas/dallas-fort-worth': visual('dallas-fort-worth', 'A North Texas home and roof beneath a distant severe-weather sky near Dallas–Fort Worth'),
  '/locations/texas/houston': visual('houston', 'A Gulf Coast home near Houston with rain moving across its roof and drainage system'),
  '/locations/texas/austin': visual('austin', 'A limestone Hill Country home near Austin with a refined architectural roof at dusk'),
  '/locations/oklahoma': visual('oklahoma', 'An Oklahoma home and roof beneath a broad plains storm sky at blue hour'),
  '/locations/oklahoma/oklahoma-city': visual('oklahoma-city', 'An Oklahoma City home prepared for severe weather beneath dramatic evening clouds'),
  '/locations/tennessee': visual('tennessee', 'A Middle Tennessee home surrounded by wooded hills after a passing storm'),
  '/locations/tennessee/nashville': visual('nashville', 'A Nashville-area home with a storm-ready roof and the city skyline in the distance'),
  '/locations/arkansas': visual('arkansas', 'An Arkansas home among wooded Ozark foothills beneath a rain-cleared evening sky'),
  '/locations/georgia': visual('georgia', 'A Georgia home among tall pines with a rain-ready roof in humid blue-hour light'),
  '/locations/georgia/atlanta': visual('atlanta', 'A contemporary Atlanta-area home with a resilient roof and a subtle city skyline beyond'),

  '/about': visual('about', 'A disciplined professional roofing crew reviewing a completed roof at blue hour'),
  '/contact': visual('contact', 'A CMAC field coordinator connecting a property owner with a roofing crew from a modern operations desk'),
  '/quote': visual('quote', 'A roofing specialist documenting a residential roof inspection with a tablet at dusk'),
  '/pricing': visual('pricing', 'Roofing material samples, measurements, and a clear project estimate arranged on an architectural worktable'),
  '/insurance-claims': visual('insurance-claims', 'A roofing specialist carefully photographing and documenting storm damage for an insurance claim'),
  '/storm-response': visual('storm-response', 'A professional emergency crew stabilizing a storm-damaged roof under controlled work lights'),
  '/warranty': visual('warranty', 'A pristine newly installed roof with manufacturer documents and workmanship records in the foreground'),
  '/partners': visual('partners', 'Two professional construction teams coordinating plans beside a large roofing project at dusk'),
  '/ai': visual('ai', 'A cinematic roofing blueprint connected to a precise digital information network'),
  '/developers': visual('developers', 'A dark technical workstation visualizing roofing services, locations, and structured data connections'),
  '/accessibility': visual('accessibility', 'An accessible high-contrast digital interface being used to review a roofing service request'),
  '/privacy-policy': visual('privacy-policy', 'Secure digital property records protected within a dark architectural operations environment'),
  '/terms': visual('terms', 'A construction agreement and project drawings on a precise architectural worktable'),
  '/reviews': visual('reviews', 'A homeowner and roofing specialist reviewing a completed roof together at blue hour'),
  '/faqs': visual('faqs', 'A roofing specialist explaining roof conditions and next steps to a property owner'),
  '/sitemap-page': visual('sitemap-page', 'A structured blueprint network connecting roofing services, locations, and company resources'),
  '/register-my-roof': visual('register-my-roof', 'A newly completed roof being added to a secure property record on a tablet'),
}

export function visualForPage(path: Path | string): PageVisual | undefined {
  return pageVisuals[path]
}
