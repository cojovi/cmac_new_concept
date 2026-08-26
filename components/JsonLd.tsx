/**
 * Renders one application/ld+json block. `<` is escaped so a stray sequence in content can never
 * break out of the script element.
 */
export function JsonLd({ graph }: { graph: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  )
}
