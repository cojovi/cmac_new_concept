interface ProblemOptions {
  type?: string
  title: string
  status: number
  detail: string
  instance: string
  code: string
  resolution: string
  headers?: HeadersInit
}

/** RFC 9457 problem details for REST-facing failures. */
export function problem({
  type = 'about:blank',
  title,
  status,
  detail,
  instance,
  code,
  resolution,
  headers,
}: ProblemOptions) {
  return Response.json(
    { type, title, status, detail, instance, code, resolution },
    {
      status,
      headers: {
        'Content-Type': 'application/problem+json; charset=utf-8',
        'Cache-Control': 'no-store',
        ...headers,
      },
    },
  )
}
