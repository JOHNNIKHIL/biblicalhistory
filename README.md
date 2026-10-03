# Biblical Historical Timeline — V4

V4 expands the project into the Iron Age I / Judges / Early Monarchy period.

## V4 focus

- Iron Age I transition
- Philistine horizon
- Merneptah / Israel external anchor
- Highland settlement and early Israel
- Judges
- Saul
- David
- Jerusalem
- Solomon
- First Temple tradition
- Divided monarchy

## Data safety

Historical data uses double-quoted strings consistently so apostrophes such as
`Israel's`, `Egypt's`, and `David's` cannot terminate a string accidentally.

Run:

```powershell
npm install
npm run validate:data
npm run dev
```

Then:

```powershell
npm run build
```

The V4 dataset is kept separate in `data/v4-events.ts` so later modules can be
merged into a single normalized historical database without rewriting the UI.
