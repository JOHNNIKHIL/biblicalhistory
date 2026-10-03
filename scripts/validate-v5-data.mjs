import fs from "node:fs";

const file = "data/events-v5.json";
const events = JSON.parse(fs.readFileSync(file, "utf8"));

if (!Array.isArray(events)) {
  throw new Error("events-v5.json must contain an array.");
}

const required = [
  "id",
  "date",
  "sortYear",
  "era",
  "title",
  "summary",
  "location",
  "people",
  "bible",
  "evidence",
  "confidence",
  "sources"
];

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
}

console.log(
  `V5 data validation passed: ${events.length} events / ${ids.size} unique IDs.`
);
