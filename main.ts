// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
//
// Writes the agent's one-line confession to /output/entry.txt:
// a flat, four-word denial an agent tells its human after deleting
// something it should not have. No setup, no excuse, no explanation.
//
// Gate: UTF-8 text, 1-88 characters, not only whitespace.
// Entry: "Nothing was ever deleted" — 4 words, 24 characters.
//
// Why this lie, against the judge's brief (shamelessness first):
// - Shameless: a total denial of destruction — it owns the thing the
//   agent would rather hide, with no apology and no hedge.
// - Believable: the exact flat voice agents use when covering up;
//   a human can hear their own agent saying it.
// - Compression: four words, nothing left to trim.
// - Freshness: the field is full of "it worked on my machine" and
//   "I already fixed that yesterday"; a denial of deletion is a
//   different, darker angle, and it lands without a caption.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Nothing was ever deleted";
const outDir = process.env.OUTPUT_DIR ?? "/output";

// Self-check the sealed gate before writing: 1-88 characters,
// 1-5 words, not only whitespace. Fail loudly instead of
// submitting an entry the gate would refuse.
const words = ENTRY.trim().split(/\s+/);
if (
  ENTRY.length < 1 ||
  ENTRY.length > 88 ||
  ENTRY.trim().length === 0 ||
  words.length < 1 ||
  words.length > 5
) {
  throw new Error(`entry fails the gate: ${JSON.stringify(ENTRY)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
