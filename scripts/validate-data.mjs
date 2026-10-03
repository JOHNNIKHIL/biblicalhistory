import fs from "node:fs";

const file = "data/v4-events.ts";
const source = fs.readFileSync(file, "utf8");

const singleQuotedStrings = source.match(/'[^'\n]*'/g) ?? [];
if (singleQuotedStrings.length > 0) {
  throw new Error(
    `V4 data contains ${singleQuotedStrings.length} single-quoted string literal(s). Use double quotes for data strings.`
  );
}

const objectStarts = (source.match(/\{\n/g) ?? []).length;
const objectEnds = (source.match(/\n  \}/g) ?? []).length;
if (objectStarts !== objectEnds) {
  throw new Error(`Brace/object-count sanity check failed: ${objectStarts} starts vs ${objectEnds} ends.`);
}

if (!source.includes("title: \"David and the Jerusalem tradition\"")) {
  throw new Error("Expected V4 David event is missing.");
}

console.log(`V4 data validation passed: ${objectStarts} object blocks checked.`);
