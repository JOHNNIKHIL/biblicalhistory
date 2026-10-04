# V58–V60 — People & Relationships

This release is additive and is built on V55–V57. Existing Bible Explorer, chapter routes, story encyclopedia, timeline, places and search content are preserved.

## V58 — People database
- Added `content/people/index.ts` with a structured biographical database.
- Added profiles spanning primeval narratives, patriarchs, Exodus, Judges, monarchy, Assyrian/Babylonian crises, Persian period, Hellenistic period, Roman Judea and early Christianity.
- Each person can carry period, role, biblical references, historical assessment, evidence notes, relationships, places, themes and related encyclopedia stories.
- Historical certainty is explicitly qualified instead of presenting tradition as archaeology.

## V59 — People Explorer
- Added `/people`.
- Search by name, epithet, role, era and themes.
- Filter by historical era.
- Responsive profile cards and clear result counts.

## V60 — Relationship-aware profiles
- Added `/people/[slug]` for individual profiles.
- Relationship cards link directly to related people.
- Profiles connect to existing encyclopedia entries and the historical timeline.
- Added quick facts, biblical references, places, themes and evidence sections.
- Added People to the main navigation.

## Important scope note
The database is intentionally a curated first people layer, not yet a complete list of every named person in the Bible. The architecture is designed so more figures can be added without changing the routes.
