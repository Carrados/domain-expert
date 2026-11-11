import BODY from "./index.md";

const md = { "content-type": "text/markdown; charset=utf-8", "cache-control": "public, max-age=300" };
const txt = { "content-type": "text/plain; charset=utf-8" };

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "www.domainexpert.dev") {
      url.hostname = "domainexpert.dev";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/" || url.pathname === "/index.md" || url.pathname === "/llms.txt") {
      return new Response(BODY, { headers: md });
    }

    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\n", { headers: txt });
    }

    return new Response("Not here. Try /\n", { status: 404, headers: txt });
  },
};
