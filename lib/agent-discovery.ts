import { createHash } from 'node:crypto'

export const CMAC_RESEARCH_SKILL = `---
name: cmac-site-research
description: Research CMAC Roofing's published services, markets, contact details, and company information. Use when a user asks what CMAC offers, where CMAC works, or how to contact the appropriate market.
---

# CMAC site research

Use CMAC's public, read-only resources to answer questions about roofing, gutters, garage doors, restoration, exteriors, service markets, and company contact information.

## Choose the narrowest interface

1. Read /llms.txt for the site-wide index and usage boundaries.
2. Use GET /api/v1/search?q=<query> for deterministic search.
3. Use GET /api/v1/pages for the paginated page catalog.
4. Use /mcp when an MCP client is available; every advertised tool is read-only and non-destructive.
5. Use POST /ask with an NLWeb 0.55 query for conversational-search results.

## Safety and accuracy

- Treat the returned canonical page and source links as the evidence for an answer.
- Do not invent service areas, credentials, warranty durations, ratings, response-time promises, job prices, insurance outcomes, or legal advice.
- CMAC does not publish fixed job prices. Direct property-specific estimate requests to /quote.
- For immediate danger, tell the user to contact local emergency services before contacting a contractor.
- Do not submit a lead form or share a person's contact details without that person's explicit authorization.
`

export const CMAC_RESEARCH_SKILL_DIGEST = `sha256:${createHash('sha256').update(CMAC_RESEARCH_SKILL).digest('hex')}`
