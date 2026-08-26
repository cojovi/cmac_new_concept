/** Canonical origin. Overridden per-environment so preview builds emit their own absolute URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://cmac-new-concept.vercel.app'

export const SITE_NAME = 'CMAC Roofing'
export const LEGAL_NAME = 'CMAC Roofing and Sheet Metal LLC'

export const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`
