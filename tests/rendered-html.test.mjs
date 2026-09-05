import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

test("renders the built SPA shell", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<div id="root"><\/div>/i);
  assert.match(html, /<title>Birria Seoul \| Birria Tacos, Consommé & Seoul Heat<\/title>/);
  assert.match(html, /name="description"/);
});

test("renders the 404 page with noindex and recovery links", async () => {
  const server = await createServer({
    configFile: "frontend/vite.config.ts",
    server: { middlewareMode: true, watch: null },
  });

  try {
    const { default: NotFoundPage } = await server.ssrLoadModule("/src/pages/NotFoundPage.tsx");
    const { RouterContext } = await server.ssrLoadModule("/src/router.tsx");
    const html = renderToStaticMarkup(
      createElement(
        RouterContext.Provider,
        { value: { pathname: "/missing/nested-page", navigate() {} } },
        createElement(NotFoundPage),
      ),
    );

    assert.match(html, /<meta name="robots" content="noindex"\/>/);
    assert.match(html, /<h1>Den sidan finns inte\.<\/h1>/);
    assert.match(html, /href="\/">Till startsidan<\/a>/);
    assert.match(html, /href="\/meny">Se menyn<\/a>/);
    assert.match(html, /href="\/kontakt">Hitta hit<\/a>/);
    await readFile(new URL("../dist/images/hero-birria.png", import.meta.url));
  } finally {
    await server.close();
  }
});
