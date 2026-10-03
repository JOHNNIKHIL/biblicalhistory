# V19–V21 Combined Release

## Build fixes
- Fixed `components/timeline/Timeline.tsx` so it no longer expects nonexistent `chapter.number` or `chapter.range` fields.
- Restored the legacy `events-v5.json` dataset and `types.ts` required by `legacy/timeline-v5.ts` and `legacy/timeline-v6.ts`.
- Kept the legacy material isolated so it can be migrated later without deleting historical information.
- Updated the home chapter count to use the real chapter array.

## New reference articles
- Roman roads and travel
- Jewish diaspora
- Synagogue world
- Jerusalem Temple and priesthood
- Councils and the Sanhedrin question
- Josephus
- Tacitus and Judea
- After Bar Kokhba

## Important
This release is intended to address the Vercel TypeScript errors reported in the October 3, 2026 build while continuing the encyclopedia expansion.
