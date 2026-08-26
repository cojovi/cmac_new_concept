import Link from 'next/link'
import type { Crumb } from '@/content/types'

/**
 * One trail array drives both this component and the BreadcrumbList JSON-LD node, so the visible
 * navigation and the structured data can never disagree.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  if (trail.length < 2) return null

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1
          return (
            <li key={crumb.path}>
              {last ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path}>{crumb.name}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
