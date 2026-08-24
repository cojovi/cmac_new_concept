'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * The only piece of the header that needs client state.
 *
 * `links` and `actions` arrive already rendered from the server, so every nav label sits in the
 * raw HTML whether the menu is open or closed. The toggle only swaps a class — it never
 * conditionally renders the nav, which would hide the links from non-JS crawlers.
 */
export function MobileNavToggle({
  links,
  actions,
}: {
  links: React.ReactNode
  actions: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={open ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Primary">
        {links}
      </nav>
      <div className="nav-actions">{actions}</div>
      <button
        type="button"
        className="menu-button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </>
  )
}
