import { Resend } from 'resend'
import { z } from 'zod'

export const runtime = 'nodejs'

const leadSchema = z.object({
  formKind: z.enum(['inspection', 'quote', 'mini-homes', 'roof-registration']).default('inspection'),
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.email().max(254),
  service: z.string().trim().min(2).max(120),
  address: z.string().trim().min(5).max(240),
  market: z.string().trim().max(120).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
  projectNumber: z.string().trim().max(100).optional().default(''),
  completionDate: z.string().trim().max(40).optional().default(''),
  consent: z.literal('yes'),
  company: z.string().max(0).optional().default(''),
})

const buckets = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5

function limited(ip: string) {
  const now = Date.now()
  const current = buckets.get(ip)
  if (!current || current.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  current.count += 1
  return current.count > MAX_REQUESTS
}

function clean(value: string) {
  return value.replace(/[<>]/g, '')
}

function response(request: Request, body: unknown, status: number) {
  if (request.headers.get('x-requested-with') === 'fetch') {
    return Response.json(body, { status })
  }
  const url = new URL(status < 400 ? '/thank-you' : `/thank-you?status=${status}`, request.url)
  return Response.redirect(url, 303)
}

export async function POST(request: Request) {
  const type = request.headers.get('content-type') ?? ''
  let raw: Record<string, unknown>
  try {
    if (type.includes('application/json')) {
      raw = (await request.json()) as Record<string, unknown>
    } else {
      raw = Object.fromEntries((await request.formData()).entries())
    }
  } catch {
    return response(request, { ok: false, code: 'INVALID_BODY' }, 400)
  }

  const parsed = leadSchema.safeParse(raw)
  if (!parsed.success) {
    return response(request, { ok: false, code: 'INVALID_INPUT' }, 400)
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (limited(ip)) {
    return response(request, { ok: false, code: 'RATE_LIMITED' }, 429)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.LEAD_FROM_EMAIL
  const to = process.env.LEAD_TO_EMAIL || 'info@cmacroofing.com'
  if (!apiKey || !from) {
    return response(request, { ok: false, code: 'DELIVERY_NOT_CONFIGURED' }, 503)
  }

  const lead = parsed.data
  const details = [
    ['Form', lead.formKind],
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Service', lead.service],
    ['Address', lead.address],
    ['Market', lead.market],
    ['Project number', lead.projectNumber],
    ['Completion date', lead.completionDate],
    ['Message', lead.message],
  ].filter(([, value]) => value)

  try {
    const resend = new Resend(apiKey, process.env.RESEND_BASE_URL ? { baseUrl: process.env.RESEND_BASE_URL } : undefined)
    const result = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: `CMAC website lead — ${clean(lead.formKind)}`,
      text: details.map(([label, value]) => `${label}: ${clean(value)}`).join('\n'),
    })
    if (result.error) throw new Error(result.error.message)
    return response(request, { ok: true, id: result.data?.id }, 200)
  } catch {
    return response(request, { ok: false, code: 'DELIVERY_FAILED' }, 502)
  }
}
