[Skip to content](https://is-agentic.com/scan/cmacroofing.com#main)

[Made with love by Vercel](https://vercel.com/ "Made with love by Vercel")[Is Agentic](https://is-agentic.com/)

`$ npx is-agentic cmacroofing.com`

cmacroofing.com

Share

# Important blockers remain

66/ 100

Prompt to improve

## What should the prompt cover?

9findings ·5 selected

Recommended (5)All (9)None

Failures (5)

- Content without JavaScriptCritical access · Failed
- Markdown content negotiation (acceptmarkdown.com)Other readiness checks · Failed
- Brand name discoverabilityOther readiness checks · Failed
- Pricing info accessibleOther readiness checks · Failed
- Agent instruction / when-to-useOther readiness checks · Failed

Warnings (4)

- Agent-friendly 404sCritical access · Partial
- JSON-LD structured dataOther readiness checks · Partial
- Organization schema completenessOther readiness checks · Partial
- Trust anchor pagesOther readiness checks · Partial

CancelCopy prompt (5)

Rescan

- [Essential4 of 7 checks passed51.4 / 80→Open the checks behind this score](https://is-agentic.com/scan/cmacroofing.com#score-evidence-essential)
- [Recommended4 of 10 checks passed11 / 20→Open the checks behind this score](https://is-agentic.com/scan/cmacroofing.com#score-evidence-recommended)
- [Bonus signals17 positive, never required+3.6→Open the checks behind this score](https://is-agentic.com/scan/cmacroofing.com#score-evidence-bonus)

## Task

What does cmacroofing.com do and who is it for? Explain it back to me.

22steps5reasoning steps7searches

home

docs

/services

docs

search

home

sitemap

/pages-sitemap.xml

search

/roofing

/about-us

search

search

search

search

search

robots.txt

### Evaluator notes

The agent partially fulfilled the task by assembling a comprehensive profile of CMAC Roofing from search results and web searches rather than from the company's own website content. The site itself was largely inaccessible to the agent — it is built on Wix with JavaScript-heavy rendering, causing direct page fetches to return boilerplate HTML without meaningful content. The agent compensated by conducting targeted web searches that surfaced the company's BBB profile, review aggregators, manufacturer certifications, and service pages, which were then cited as sources. Pricing, the most critical gap the task requested, remains unavailable anywhere on the website or in public sources.

1 observed run [View journey ↗](https://journey.ora.ai/59f665b4-6b05-40ea-974a-cc74e9937138)

## Critical access needs attention

These checks describe whether an ordinary agent can enter, read, and operate the public site.

- ✓


Agents can reach the site



Crawler access and bot defenses.


2 / 2 passed
- ~


Core content is available



Useful content remains accessible without a fragile browser-only path.


1 / 2 passed
- ~


Navigation fails safely



Redirects and missing pages give agents a recoverable path.


1 / 2 passed

## Evaluated surfaces have material gaps

The public website is always evaluated. Optional surfaces appear when the scan finds positive evidence that they apply.

### Public website

Needs work

63%

8 of 16 mature checks passed

### Commerce

Blocked

0%

0 of 1 mature checks passed

## Fix these gaps first

Critical access gaps come first, followed by other applicable readiness gaps.

1. 01


### Content without JavaScript



Copy fix





Server-side render your homepage so AI crawlers see meaningful content without JavaScript. Ensure an H1 and 500+ chars of text in raw HTML.





Copy fix


Critical access
2. 02


### Agent-friendly 404s



Copy fix





Return a real HTTP 404 (or 410) status for nonexistent paths - never a 200 with your app shell, which makes agents believe every path exists. For full credit, give the 404 response a short markdown body pointing agents at your sitemap, llms.txt, or docs index. Verify with `curl -s -o /dev/null -w "%{http_code}" https://yourdomain.com/some-path-that-does-not-exist` \- it must print 404.





Copy fix


Critical access
3. 03


### Markdown content negotiation (acceptmarkdown.com)



Copy fix





On the responses that serve text/markdown via Accept negotiation, add Accept to the Vary header (Vary: Accept, Accept-Encoding). Without it, CDNs can serve the cached HTML variant to an agent asking for markdown (or vice versa), depending on which variant landed in cache first.





Copy fix


Other readiness checks
4. 04


### Brand name discoverability



Copy fix





Make sure a clean search for your brand name returns your own domain in the top results. If it does not, your brand may be too generic, conflict with a more established term, or not yet indexed. Strengthen brand-name search by claiming consistent NAP across listings, earning press mentions that link to the canonical domain, and avoiding redirect chains that mask the apex domain in search results.





Copy fix


Other readiness checks
5. 05


### Pricing info accessible



Copy fix





Make pricing discoverable - add a /pricing page or include pricing as schema.org/Offer structured data, so agents can find it without scraping a marketing page.





Copy fix


Other readiness checks

## Audit the checks behind the score

Applicable evidence is grouped by how it contributes to this preview model. Bonus checks appear only when they add points.

Essential4 of 7 passed · 51.4 / 80 points

- Content without JavaScriptFailed

Very little text content (41 chars) - likely JS-rendered, invisible to AI crawlers

Copy fix





Recommendation





Server-side render your homepage so AI crawlers see meaningful content without JavaScript. Ensure an H1 and 500+ chars of text in raw HTML.







Copy fix

- Not blocked by bot detectionPassed

Site accessible to 6 AI agent user-agents

Copy fix





Recommendation





Allowlist known AI agent User-Agents (ChatGPT-User, ClaudeBot, Google-Extended, DeepSeekBot) in your WAF or bot-detection rules.







Copy fix

- Redirect hygienePassed

No meta-refresh stubs, JavaScript-redirect stubs, or cross-domain hops across 5 checked pages

Copy fix





Recommendation





Replace meta-refresh and JavaScript-only redirects with real HTTP 301/302 redirects. Non-JS agents never execute `location.href` or wait for a meta refresh - they see only the stub page. Verify with `curl -sI <url>` \- you should see a Location header, not a 200 with a near-empty body.







Copy fix

- Content behind authPassed

All 4 sampled pages are publicly readable (0 with substantive content)

Copy fix





Recommendation





Serve your content pages without a login wall. Agents cannot complete auth flows while browsing - a 401/403 or a login-form page is invisible content. Keep public documentation public; if some content must stay gated, publish an ungated summary so agents can still represent it.







Copy fix

- Markdown content negotiation (acceptmarkdown.com)Failed

Not acceptmarkdown.com compliant: Accept: text/markdown returned text/html; charset=utf-8; Vary header missing Accept (got "accept-encoding")

Copy fix





Recommendation





On the responses that serve text/markdown via Accept negotiation, add Accept to the Vary header (Vary: Accept, Accept-Encoding). Without it, CDNs can serve the cached HTML variant to an agent asking for markdown (or vice versa), depending on which variant landed in cache first.







Copy fix

- Agent crawler reachabilityPassed

Reachable to all major AI crawlers - ChatGPT-User: reachable, ClaudeBot: reachable, Google-Extended: reachable, ora-agent: reachable, DeepSeekBot: reachable

Copy fix





Recommendation





Verify that major agent User-Agents can reach the homepage. If your WAF or bot rules block them, remove or narrow the blocking rule. Add an allow rule only when your security setup denies them by default.







Copy fix

- Agent-friendly 404sPartial (50%)

Nonexistent paths return a real HTTP 404. For full credit, include a short markdown body (site map links, where to look next) so agents can recover.

Copy fix





Recommendation





Return a real HTTP 404 (or 410) status for nonexistent paths - never a 200 with your app shell, which makes agents believe every path exists. For full credit, give the 404 response a short markdown body pointing agents at your sitemap, llms.txt, or docs index. Verify with `curl -s -o /dev/null -w "%{http_code}" https://yourdomain.com/some-path-that-does-not-exist` \- it must print 404.







Copy fix


Recommended4 of 10 passed · 11 / 20 points

- Brand name discoverabilityFailed

"CMAC" search returned 4 results but domain did not appear - brand may be too generic or not indexed

Copy fix





Recommendation





Make sure a clean search for your brand name returns your own domain in the top results. If it does not, your brand may be too generic, conflict with a more established term, or not yet indexed. Strengthen brand-name search by claiming consistent NAP across listings, earning press mentions that link to the canonical domain, and avoiding redirect chains that mask the apex domain in search results.







Copy fix

- Sitemap existsPassed

Valid sitemap found at https://www.cmacroofing.com/sitemap.xml with multiple sitemaps entries

Copy fix





Recommendation





Add a valid XML sitemap at /sitemap.xml listing all indexable URLs. Include lastmod dates and keep it under 50MB.







Copy fix

- JSON-LD structured dataPartial (50%)

JSON-LD has LocalBusiness type but missing key fields (name, description)

Copy fix





Recommendation





Add JSON-LD structured data to your homepage using the identity type that matches your site - SoftwareApplication for products, Organization or LocalBusiness for companies, Person for personal sites, Article for blogs - with name, description, url, and type-appropriate fields (offers, sameAs, author) so AI can parse your identity programmatically.







Copy fix

- Pricing info accessibleFailed

No pricing page or pricing data found

Copy fix





Recommendation





Make pricing discoverable - add a /pricing page or include pricing as schema.org/Offer structured data, so agents can find it without scraping a marketing page.







Copy fix

- Agent instruction / when-to-useFailed

No agent instruction file with when-to-use guidance found

Copy fix





Recommendation





Tell agents when to reach for you: add a 'when to use this' section to your llms.txt (or a dedicated agent-instructions file) that names your best-fit use cases and how an agent should call you. Be specific about the jobs you are right for - generic marketing copy does not read as guidance.







Copy fix

- Metadata completenessPassed

All metadata signals present: canonical URL, lang="en", og:image, og:type

Copy fix





Recommendation





Add all four signals to your homepage: , , , and . Agents use these for entity resolution and attribution.







Copy fix

- Organization schema completenessPartial (50%)

Organization schema found but missing: contactPoint

Copy fix





Recommendation





Add Organization JSON-LD that includes both contactPoint (with email/phone and contactType) and address (PostalAddress). This lets AI verify your business legitimacy and answer contact queries.







Copy fix

- Trust anchor pagesPartial (50%)

Only Privacy page verified - missing: About, Contact

Copy fix





Recommendation





Publish real /about, /contact, and /privacy pages with at least 500 characters of content each. These are the pages AI agents check to verify your business is legitimate before recommending you.







Copy fix

- Page token budgetPassed

All 5 measured pages fit an agent context budget (largest ~1K tokens)

Copy fix





Recommendation





Keep each page's extracted text under ~100K characters (~25K tokens) so it fits an agent's context window without truncation. Split oversized reference pages into focused per-topic documents and link them from an index. Check a page with `curl -s <url> | wc -c` and remember agents read the extracted text, not the raw HTML.







Copy fix

- Code fence validityPassed

Code fences balanced across 1 markdown document

Copy fix





Recommendation





Close every fenced code block (\`\`\` or ~~~) in your served markdown. CommonMark treats everything after an unclosed fence as code, so an agent parsing the document silently loses the rest of it. Count fence lines per file - the total must be even.







Copy fix


Bonus signals17 positive · +3.6 points

- MCP well-known discoveryPassed

MCP server referenced in llms.txt

Copy fix





Recommendation





Serve your MCP server at /.well-known/mcp, publish a server-card.json at /.well-known/mcp/server-card.json, or reference it in llms.txt so agents can discover it automatically without manual URL input.







Copy fix

- Agent mode viewPartial (50%)

Agent mode view found at ?mode=agent (3 signals: api, agent, sdk)

Copy fix





Recommendation





Add a ?mode=agent query parameter to your homepage that returns a structured, machine-readable view with API endpoints, authentication info, and key capabilities instead of marketing HTML.







Copy fix

- Modular llms.txt per product areaPassed

Modular llms.txt files found for sections: docs, api, developers, guides, reference

Copy fix





Recommendation





Add per-section llms.txt files (e.g. /docs/llms.txt, /api/llms.txt, /developers/llms.txt) so agents can fetch scoped context for specific product areas instead of the whole manual.







Copy fix

- Sitemap freshness (lastmod)Passed

100% of 153 sampled sitemap entries carry lastmod; newest is 39 day(s) old

Copy fix





Recommendation





Add  dates (W3C datetime, e.g. 2026-08-01) to your sitemap entries and update them when content actually changes. Aim for lastmod on at least half your entries with the newest within the last year. Verify with `curl https://yourdomain.com/sitemap.xml | grep lastmod`.







Copy fix

- llms.txt existsPassed

Found the llms.txt at https://cmacroofing.com/llms.txt.

Copy fix





Recommendation





Create an llms.txt file at your domain root (/llms.txt) - the AI equivalent of robots.txt. Write at least 100 characters of real content: what your product is, what it does, and links to your key docs. Then verify it with `curl https://yourdomain.com/llms.txt` \- you should see your text, not HTML. If your app returns its homepage for every URL (common with single-page apps), add a static file route so the raw text is served. A placeholder with just a heading earns no credit.







Copy fix

- llms.txt formattingPassed

The llms.txt is well-formatted: 52 lines with markdown links, 3,165 characters in total.

Copy fix





Recommendation





Format your llms.txt as a navigation index: start with a markdown heading, include markdown links to deeper resources, and keep it under 30,000 characters. If you have more to say, move long-form content into /llms-full.txt or per-section files (e.g. /docs/llms.txt, /api/llms.txt) and link to them from the main index.







Copy fix

- Schema type breadthPartial (50%)

Some extended schema types found: LocalBusiness - add FAQPage, Service, or AggregateRating for full coverage

Copy fix





Recommendation





Expand your JSON-LD beyond Organization/WebSite. Add FAQPage for common questions, Service or Product for offerings, AggregateRating or Review for social proof, and BreadcrumbList for navigation context.







Copy fix

- llms.txt links resolvePartial (50%)

1 of 3 probed llms.txt links do not resolve: https://www.cmacroofing.com/\_api/mcp

Copy fix





Recommendation





Make every link your llms.txt declares resolve to real content. Verify each one with `curl -L <url>` \- you should see the linked document, not your homepage. If your app returns the homepage shell for unknown paths (common with single-page apps), a 200 status is not proof: check the body. Fix or remove any dead link; agents that follow the index treat a broken link as a dead end.







Copy fix

- MCP tool descriptionsPassed

All 9 tools on other MCP have detailed descriptions (>= 20 chars)

Copy fix





Recommendation





Add detailed descriptions (>= 20 chars) to every MCP tool. Agents use these to decide which tool to call - vague descriptions lead to wrong tool selection.







Copy fix

- MCP parameter schemasPassed

7/9 tools on other MCP have parameter schemas, 7 with required fields

Copy fix





Recommendation





Define inputSchema with typed properties and required arrays for each tool. Agents need schema info to construct valid tool calls without guessing.







Copy fix

- MCP tool listingPassed

other MCP exposes 9 tools - substantial tool surface

Copy fix





Recommendation





Expose 3+ tools via your MCP server's tools/list endpoint. Cover your core API surface - agents need tools for read, write, and search operations.







Copy fix

- MCP error handlingPartial (50%)

other MCP returns error for invalid tool call but missing structured code or message

Copy fix





Recommendation





Return structured JSON-RPC errors (with code and message) when agents call invalid tools or pass bad arguments. Don't crash or return empty responses.







Copy fix

- MCP modern transportPassed

other MCP uses modern Streamable HTTP transport

Copy fix





Recommendation





Upgrade your MCP server from legacy SSE to Streamable HTTP transport. Streamable HTTP is the current standard and supports bidirectional communication.







Copy fix

- NLWeb /ask endpointPassed

NLWeb /ask endpoint exists but requires authentication (HTTP 403, via POST)

Copy fix





Recommendation





Implement Microsoft's NLWeb protocol by adding a POST /ask endpoint that accepts natural-language queries and returns JSON with \_meta (response\_type, version). See github.com/microsoft/NLWeb.







Copy fix

- MCP tool annotationsPartial (50%)

other MCP: 4/9 tools have annotations - add to more tools for safe agent behavior

Copy fix





Recommendation





Add behavioral annotations (readOnlyHint, destructiveHint) to your MCP tools. Agents use these to avoid destructive actions without user confirmation.







Copy fix

- Accessibility-tree injection safety (bonus)Passed

No hidden instruction text detected in accessibility-tree attributes or off-screen content.

- UCP - Universal Commerce ProtocolPassed

UCP discovery profile at https://cmacroofing.com/.well-known/ucp; version 2026-04-08; capabilities: dev.ucp.shopping.checkout, dev.ucp.shopping.fulfillment, dev.ucp.shopping.catalog.search, dev.ucp.shopping.catalog.lookup

Copy fix





Recommendation





Publish a UCP discovery profile at /.well-known/ucp with a required `version` (YYYY-MM-DD) and advertised `services`/`capabilities` per ucp.dev. Also expose the REST checkout surface (`POST /checkout-sessions` with `UCP-Agent` and `Idempotency-Key` headers) so agents can transact without per-vendor integrations.







Copy fix


## Inspect the underlying audit

The complete Ora audit uses evidence from the scan onAug 24, 2026, 10:26 PM UTC. After applying changes, run another scan from the homepage to refresh these recommendations.

Sign me up for Vercel product updates and marketing emails.

Unsubscribe anytime. [Privacy Notice](https://vercel.com/legal/privacy-notice)

EmailSign up

Source: [Ora API](https://ora.ai/docs)

Snapshot 2026-08-24T22-26-13-341Z

© 2026 Vercel.Powered by [Ora](https://ora.ai/).

[About](https://is-agentic.com/about) [Methodology](https://is-agentic.com/methodology) [Docs](https://is-agentic.com/docs) [Privacy](https://is-agentic.com/privacy) [Terms](https://is-agentic.com/terms) [Contact](https://is-agentic.com/contact)