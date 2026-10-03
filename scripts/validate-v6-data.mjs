import fs from "node:fs";

const file = "data/events-v5.json";
const events = JSON.parse(fs.readFileSync(file, "utf8"));

const required = [
  "id", "date", "sortYear", "era", "title", "summary",
  "location", "people", "bible", "evidence", "confidence", "sources"
];

if (!Array.isArray(events)) {
  throw new Error("Historical data must be a JSON array.");
}

const ids = new Set();

for (const [index, event] of events.entries()) {
  for (const key of required) {
    if (!(key in event)) {
      throw new Error(`Event ${index} is missing "${key}".`);
    }
  }

  if (ids.has(event.id)) {
    throw new Error(`Duplicate event id "${event.id}".`);
  }

  ids.add(event.id);

  for (const key of ["people", "bible", "evidence", "sources"]) {
    if (!Array.isArray(event[key])) {
      throw new Error(`Event "${event.id}" field "${key}" must be an array.`);
    }
  }
}

console.log(
  `V6 validation passed: ${events.length} events / ${ids.size} unique IDs.`
);
