import type { Redirect } from 'next/dist/lib/load-custom-routes'

/**
 * 301s from every legacy Wix path to its hierarchical equivalent.
 *
 * Every `destination` is asserted to exist in `allPaths()` by `scripts/check-redirects.mjs`,
 * so a typo here fails CI rather than shipping a redirect chain into a 404.
 * Filled in during Phase 3 once the page inventory is complete.
 */
export function legacyRedirects(): Redirect[] {
  return []
}
