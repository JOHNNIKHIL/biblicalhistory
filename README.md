# Biblical History — V5

V5 expands the historical timeline through Iron Age I, the early monarchy,
the Omride dynasty, Qarqar, Jehu, the Mesha Stele, Elijah and Elisha,
Tiglath-Pileser III, Samaria, and Sennacherib.

## Important data-layer change

The large historical event collection is now stored in:

`data/events-v5.json`

TypeScript loads it through:

`data/timeline-v5.ts`

This intentionally removes the giant hand-written TypeScript event array.
JSON parsing now catches missing commas and broken string delimiters before
the Next.js compiler ever sees the data.

## Run locally

```powershell
npm install
npm run validate:v5
npm run dev
```

Then verify production:

```powershell
npm run build
```

## Workflow rule

Before adding another large event batch:

1. Edit JSON data.
2. Run `npm run validate:v5`.
3. Run `npm run build`.
4. Only then commit/deploy.
