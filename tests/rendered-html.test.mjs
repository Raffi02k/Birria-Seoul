import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders the built SPA shell", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<div id="root"><\/div>/i);
  assert.match(html, /Birria Seoul New Gen/);
  assert.match(html, /name="description"/);
});
