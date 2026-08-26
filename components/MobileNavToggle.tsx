'use client'

import { useEffect, useRef, useState } from 'react'
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
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <nav
        id="primary-navigation"
        className={open ? 'nav-links nav-links-open' : 'nav-links'}
        aria-label="Primary"
        onClickCapture={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false)
        }}
      >
        {links}
        <div className="nav-actions-mobile">{actions}</div>
      </nav>
      <div className="nav-actions">{actions}</div>
      <button
        type="button"
        ref={buttonRef}
        className="menu-button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </>
  )
}
