#!/usr/bin/env node
// Fails the build if confidential content leaks into shipped files.
// Generic checks live here; project-specific banned terms live in the
// git-ignored `.confidential-terms` file so they never reach the repo.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["src", "public"];
const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".md", ".mdx", ".json", ".svg", ".txt", ".html"]);

const patterns = [
  { label: "phone number (+352 …)", re: /\+?\s?352[\s.-]?\d{3}[\s.-]?\d{3}/ },
  { label: "phone number (tel: link)", re: /tel:/i },
];

const termsFile = ".confidential-terms";
if (existsSync(termsFile)) {
  for (const raw of readFileSync(termsFile, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^\/(.+)\/$/);
    const re = m ? new RegExp(m[1], "i") : new RegExp(line.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    patterns.push({ label: "banned term from .confidential-terms", re });
  }
} else {
  console.warn(`check-confidential: ${termsFile} not found; running generic checks only.`);
}

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (TEXT_EXT.has(extname(p))) yield p;
  }
}

let failures = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    readFileSync(file, "utf8").split("\n").forEach((text, i) => {
      for (const { label, re } of patterns) {
        if (re.test(text)) {
          failures++;
          console.error(`${file}:${i + 1}  ${label}`);
        }
      }
    });
  }
}

if (failures) {
  console.error(`\ncheck-confidential: ${failures} problem(s) found.`);
  process.exit(1);
}
console.log("check-confidential: OK");
