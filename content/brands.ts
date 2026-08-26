import type { Brand } from './types'

/**
 * Only manufacturers CMAC actually names on cmacroofing.com. No brand is added speculatively —
 * claiming a partnership that does not exist is a real liability for a certified contractor.
 */
export const brands: Brand[] = [
  // Specialty roofing — from /specialty-systems, the most product-specific page on their site.
  { id: 'westlake', name: 'West Lake', category: 'roofing', note: 'Concrete tile' },
  { id: 'eagle', name: 'Eagle Roofing Products', category: 'roofing', note: 'Concrete tile' },
  { id: 'crown', name: 'Crown Roof Tile', category: 'roofing', note: 'Concrete and clay tile' },
  { id: 'ludowici', name: 'Ludowici', category: 'roofing', note: 'Architectural clay tile' },
  { id: 'mca', name: 'MCA Clay Roof Tile', category: 'roofing', note: 'Clay tile' },
  { id: 'vermont-slate', name: 'Vermont Slate', category: 'roofing', note: 'Natural quarried slate' },
  { id: 'verea', name: 'Verea Clay Tile', category: 'roofing', note: 'Spanish clay tile' },
  { id: 'brava', name: 'Brava Tile', category: 'roofing', note: 'Composite slate, shake, and tile' },
  { id: 'davinci', name: 'DaVinci Roofscapes', category: 'roofing', note: 'Synthetic slate and shake' },
  { id: 'inspire', name: 'Inspire Roofing Products', category: 'roofing', note: 'Composite slate' },
  { id: 'sharkskin', name: 'Sharkskin', category: 'roofing', note: 'High-temperature synthetic underlayment' },

  // Shingle and membrane partners named on /roofing and /commercial-roofing.
  { id: 'gaf', name: 'GAF', category: 'roofing', note: 'Master Elite® certified — full shingle system' },
  { id: 'certainteed', name: 'CertainTeed', category: 'roofing', note: 'Asphalt shingle systems' },
  { id: 'atlas', name: 'Atlas', category: 'roofing', note: 'Asphalt shingle systems' },
  { id: 'tamko', name: 'TAMKO', category: 'roofing', note: 'Asphalt shingle systems' },
  { id: 'duro-last', name: 'Duro-Last', category: 'roofing', note: 'Prefabricated PVC commercial membrane' },

  // Garage door vendors — from /garage-doors-vendors.
  { id: 'clopay', name: 'Clopay', category: 'doors', note: 'Residential and commercial sectional doors' },
  { id: 'wayne-dalton', name: 'Wayne Dalton', category: 'doors', note: 'Residential and commercial doors' },
  { id: 'amarr', name: 'Amarr', category: 'doors', note: 'Residential and commercial doors' },
  { id: 'overhead-door', name: 'Overhead Door', category: 'doors', note: 'Commercial and industrial doors' },
  { id: 'northwest-door', name: 'Northwest Door', category: 'doors', note: 'Custom wood and steel doors' },
]

export const brandById = (id: string) => brands.find((b) => b.id === id)
export const brandsByIds = (ids: string[] = []) => ids.map(brandById).filter((b): b is Brand => Boolean(b))
