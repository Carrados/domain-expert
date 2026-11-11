import INDEX from "./index.md";
import SPEC from "./spec.md";
import WELL_KNOWN from "./well-known.md";

const md = { "content-type": "text/markdown; charset=utf-8", "cache-control": "public, max-age=300" };
const txt = { "content-type": "text/plain; charset=utf-8" };

const pages = {
  "/": INDEX,
  "/index.md": INDEX,
  "/llms.txt": INDEX,
  "/spec": SPEC,
  "/spec.md": SPEC,
  "/.well-known/domain-expertise": WELL_KNOWN,
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "www.domainexpert.dev") {
      url.hostname = "domainexpert.dev";
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    if (pages[path]) {
      return new Response(pages[path], { headers: md });
    }

    if (path === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\n", { headers: txt });
    }

    return new Response("Not here. Try /\n", { status: 404, headers: txt });
  },
};
