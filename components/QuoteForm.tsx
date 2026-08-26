'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { markets } from '@/content/markets'

const SERVICES = [
  'Roof repair',
  'Roof replacement',
  'Storm or hail damage',
  'Insurance claim',
  'Gutters',
  'Garage doors',
  'Restoration / water damage',
  'Siding, windows, or painting',
  'Commercial or multi-family',
  'Something else',
]

/**
 * Progressive enhancement: this is a real <form> posting to /api/lead, so it submits and reports
 * errors with JavaScript disabled. The client boundary only exists to show inline success state.
 */
export function QuoteForm({
  id = 'inspection',
  title = 'REQUEST INSPECTION',
  subtitle = 'Fast. Free. No obligation.',
  cta = 'Schedule Inspection',
  formKind = 'inspection',
}: {
  id?: string
  title?: string
  subtitle?: string
  cta?: string
  formKind?: 'inspection' | 'quote' | 'mini-homes' | 'roof-registration'
}) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    const form = e.currentTarget
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'x-requested-with': 'fetch' },
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <form
      id={id}
      className="inspection-card"
      action="/api/lead"
      method="post"
      onSubmit={onSubmit}
      {...{
        toolname: 'request_cmac_inspection',
        tooldescription:
          'Prepare a CMAC property inspection request for the user to review and submit. This shares contact and property details and requires explicit consent.',
      }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <input type="hidden" name="formKind" value={formKind} />
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company website</label>
        <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="sr-only" htmlFor={`${id}-name`}>
        Full name
      </label>
      <input id={`${id}-name`} name="name" placeholder="Full Name" autoComplete="name" required />

      <label className="sr-only" htmlFor={`${id}-phone`}>
        Phone number
      </label>
      <input id={`${id}-phone`} name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" required />

      <label className="sr-only" htmlFor={`${id}-email`}>
        Email address
      </label>
      <input id={`${id}-email`} name="email" type="email" placeholder="Email Address" autoComplete="email" required />

      {formKind === 'roof-registration' ? (
        <input type="hidden" name="service" value="Roof registration" />
      ) : (
        <>
          <label className="sr-only" htmlFor={`${id}-service`}>
            {formKind === 'mini-homes' ? 'Project type' : 'Service needed'}
          </label>
          <select id={`${id}-service`} name="service" defaultValue="" required>
            <option value="" disabled>
              {formKind === 'mini-homes' ? 'Project Type' : 'Service Needed'}
            </option>
            {(formKind === 'mini-homes'
              ? ['Mini-home', 'Workforce housing', 'Office or commercial space', 'Something else']
              : SERVICES
            ).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </>
      )}

      <label className="sr-only" htmlFor={`${id}-address`}>
        Property address
      </label>
      <input id={`${id}-address`} name="address" placeholder="Property Address" autoComplete="street-address" required />

      {formKind === 'roof-registration' ? (
        <>
          <label className="sr-only" htmlFor={`${id}-project-number`}>
            Builder or project number, if known
          </label>
          <input id={`${id}-project-number`} name="projectNumber" placeholder="Builder / Project Number (optional)" />
          <label className="sr-only" htmlFor={`${id}-completion-date`}>
            Approximate completion date
          </label>
          <input id={`${id}-completion-date`} name="completionDate" type="date" />
        </>
      ) : null}

      <label className="sr-only" htmlFor={`${id}-market`}>
        Nearest CMAC location
      </label>
      <select id={`${id}-market`} name="market" defaultValue="">
        <option value="" disabled>
          Nearest Location
        </option>
        {markets.map((m) => (
          <option key={m.id} value={m.name}>
            {m.name}
          </option>
        ))}
      </select>

      <label className="form-consent" htmlFor={`${id}-consent`}>
        <input id={`${id}-consent`} name="consent" type="checkbox" value="yes" required />
        <span>CMAC may contact me by phone or email about this request. This is not consent to marketing texts.</span>
      </label>

      <button type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : cta} <ArrowRight size={13} aria-hidden="true" />
      </button>

      <small role="status">
        {state === 'sent'
          ? 'Thanks — a CMAC estimator will reach out shortly.'
          : state === 'error'
            ? 'Something went wrong. Please call 1-888-389-CMAC.'
            : 'Your information is used only to follow up on this request.'}
      </small>
    </form>
  )
}
