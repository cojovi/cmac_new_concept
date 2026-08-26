import type { Credential, OfferDoc } from './types'

/** Everything here is sourced from cmacroofing.com or CMAC's GAF contractor listing. */
export const org = {
  legalName: 'CMAC Roofing and Sheet Metal LLC',
  name: 'CMAC Roofing',
  founder: 'Christian Viveiros',
  founderTitle: 'Founder & CEO',
  slogan: 'Integrity Truly Matters.',
  brandLine: 'Living Life Unlocked',
  phone: '1-888-389-CMAC',
  phoneDigits: '18883892622',
  phoneE164: '+18883892622',
  email: 'info@cmacroofing.com',
  /** Corporate mailing address, per the published privacy policy. */
  address: {
    street: '199 County Road 4840',
    city: 'Haslet',
    state: 'TX',
    zip: '76052',
    country: 'US',
  },
  gafContractorId: '1131347',
  states: ['Texas', 'Oklahoma', 'Arkansas', 'Tennessee', 'Georgia'],
  social: [
    'https://www.facebook.com/CMACRoofing',
    'https://www.instagram.com/CMACRoofing',
    'https://www.linkedin.com/company/cmacroofing',
    'https://www.youtube.com/@CMACRoofing',
  ],
  /** Boilerplate used in metadata fallbacks and the Organization node. */
  description:
    'CMAC Roofing is a veteran-owned roofing, gutter, garage door, and restoration contractor serving Texas, Oklahoma, Arkansas, Tennessee, and Georgia. GAF Master Elite® certified and a GAF President’s Club award winner.',
} as const

/**
 * Verified certifications only.
 *
 * The design concept originally listed CertainTeed SELECT, IKO ROOFPRO, Malarkey, and Owens Corning
 * Preferred. None of those are claimed anywhere on cmacroofing.com — CertainTeed appears only as a
 * shingle brand partner. They are omitted until CMAC confirms them.
 */
export const credentials: Credential[] = [
  { id: 'gaf-master-elite', logo: 'GAF', title: 'Master Elite®', note: 'Certified Contractor', className: 'gaf' },
  { id: 'gaf-presidents-club', logo: 'GAF', title: "President's Club", note: 'Award Winner', className: 'gaf' },
  { id: 'bbb', logo: 'BBB', title: 'A+ Rating', note: 'Accredited Business', className: 'bbb' },
  { id: 'nrca', logo: 'NRCA', title: 'Member', note: "Nat'l Roofing Contractors Assn.", className: 'nrca' },
  { id: 'veteran', logo: 'VETERAN', title: 'Veteran-Owned', note: 'Owned & Operated', className: 'veteran' },
]

/**
 * "Featured On" — the outlets CMAC actually names on its homepage.
 * The concept's Forbes / Entrepreneur / Inc. / Yahoo Finance row was placeholder art.
 */
export const press = [
  { id: 'abc', name: 'ABC News', className: 'abc' },
  { id: 'fox', name: 'FOX News', className: 'fox' },
  { id: 'nbc', name: 'NBC News', className: 'nbc' },
  { id: 'cbs', name: 'CBS News', className: 'cbs' },
]

/**
 * CMAC does not publish job pricing, so nothing here carries a dollar figure except the things that
 * are genuinely free. `/pricing` explains how jobs are priced instead of inventing ranges.
 */
export const offers: OfferDoc[] = [
  {
    name: 'Free Roof Inspection',
    description:
      'A full documented inspection of your roof, gutters, and exterior — including drone photography of any damage — at no cost and with no obligation.',
    price: 0,
    priceCurrency: 'USD',
  },
  {
    name: 'Free Written Estimate',
    description:
      'An itemized written estimate covering scope, materials, and workmanship warranty, provided free after the inspection.',
    price: 0,
    priceCurrency: 'USD',
  },
  {
    name: 'Insurance Claim Assistance',
    description:
      'CMAC documents storm damage and can attend the carrier inspection to explain the contractor repair scope. CMAC does not interpret policy coverage or act as a public adjuster.',
    price: 0,
    priceCurrency: 'USD',
  },
]
