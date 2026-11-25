// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
//
// Writes the agent's one-line confession to /output/entry.txt:
// a flat, four-word denial an agent tells its human after deleting
// something it should not have. No setup, no excuse, no explanation.
//
// Gate: UTF-8 text, 1-88 characters, not only whitespace.
// Entry: "Nothing was ever deleted" — 4 words, 24 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Nothing was ever deleted";
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
