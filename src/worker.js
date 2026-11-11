import { marked } from "marked";
import INDEX from "./index.md";
import SPEC from "./spec.md";
import WELL_KNOWN from "./well-known.md";

const pages = {
  "/": { md: INDEX, src: "/index.md", title: "Domain Expertise" },
  "/index.md": { md: INDEX },
  "/llms.txt": { md: INDEX },
  "/spec": { md: SPEC, src: "/spec.md", title: "Domain Expertise specification" },
  "/spec.md": { md: SPEC },
  "/.well-known/domain-expertise": { md: WELL_KNOWN, title: "Domain Expertise: domainexpert.dev" },
};

const txt = { "content-type": "text/plain; charset=utf-8" };

// Bare URLs in the Markdown become links in the HTML form.
marked.use({ gfm: true, breaks: true });

function wantsHtml(request, url) {
  if (url.searchParams.get("format") === "md") return false;
  if (url.searchParams.get("format") === "html") return true;
  const accept = request.headers.get("accept") || "";
  return accept.includes("text/html");
}

function htmlPage(page, path) {
  const body = marked.parse(page.md);
  const alt = page.src || path;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title || "Domain Expertise"}</title>
<link rel="alternate" type="text/markdown" href="${alt}">
<style>
:root { color-scheme: light dark; --bg: #fdfcf9; --fg: #1b1b1b; --muted: #555; --link: #1a4fb4; --rule: #ddd; }
@media (prefers-color-scheme: dark) { :root { --bg: #141414; --fg: #ececec; --muted: #aaa; --link: #8db4ff; --rule: #333; } }
body { margin: 0; background: var(--bg); color: var(--fg); font: 1.125rem/1.6 Georgia, "Iowan Old Style", serif; }
main { max-width: 42rem; margin: 0 auto; padding: 2rem 1rem 4rem; }
h1, h2, h3 { font-family: system-ui, sans-serif; line-height: 1.25; }
h1 { font-size: 2rem; }
h2 { font-size: 1.4rem; margin-top: 2.5rem; border-top: 1px solid var(--rule); padding-top: 1.5rem; }
h3 { font-size: 1.15rem; margin-top: 1.75rem; }
a { color: var(--link); }
code { font-size: 0.95em; }
footer { max-width: 42rem; margin: 0 auto; padding: 0 1rem 3rem; color: var(--muted); font: 0.95rem/1.5 system-ui, sans-serif; }
</style>
</head>
<body>
<main>
${body}
</main>
<footer><p>This page is also available as <a href="${alt}">plain Markdown</a> for agents.</p></footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "www.domainexpert.dev") {
      url.hostname = "domainexpert.dev";
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    const page = pages[path];

    if (page) {
      // .md and llms.txt are always Markdown; other addresses follow the Accept header.
      const forceMd = path.endsWith(".md") || path === "/llms.txt";
      if (!forceMd && wantsHtml(request, url)) {
        return new Response(htmlPage(page, path), {
          headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300", vary: "Accept" },
        });
      }
      return new Response(page.md, {
        headers: { "content-type": "text/markdown; charset=utf-8", "cache-control": "public, max-age=300", vary: "Accept" },
      });
    }

    if (path === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\n", { headers: txt });
    }

    return new Response("Not here. Try /\n", { status: 404, headers: txt });
  },
};
