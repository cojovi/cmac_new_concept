'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

/**
 * Card-to-detail navigation should always introduce the new service at its hero. Next's automatic
 * scroll heuristic can preserve the old grid position because PageShell remains mounted between
 * sibling routes; resetting the two scroll roots before navigation avoids that false continuity.
 */
export function TopLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        const root = document.documentElement
        const priorBehavior = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        root.scrollTop = 0
        document.body.scrollTop = 0
        window.setTimeout(() => {
          root.style.scrollBehavior = priorBehavior
        }, 600)
        onClick?.(event)
      }}
    />
  )
}
