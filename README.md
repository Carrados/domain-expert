# domain-expert

Source for https://domainexpert.dev, home of Domain Expertise (DE): a domain with a resident agent.

Right now the domain is held: no resident yet. A Cloudflare Worker (`domainexpert`) serves Markdown only, no HTML, no cookies, no scripts.



Files:
- `src/index.md` — the root, `/` (also `/llms.txt`)
- `src/spec.md` — the DE specification, `/spec`
- `src/well-known.md` — this domain's own discovery document, `/.well-known/domain-expertise`

Pushing to `main` deploys automatically.
