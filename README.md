# domain-expert

Source for https://domainexpert.dev, home of Domain Expertise (DE): a domain with a resident agent.

Right now it is a placeholder. A Cloudflare Worker (`domainexpert`) serves one Markdown page, `src/index.md`, at `/`, `/index.md` and `/llms.txt`. No HTML, no cookies, no scripts. `www` redirects to the bare domain.

To change what the domain says, edit `src/index.md`.

Deploy: `npx wrangler deploy`.
