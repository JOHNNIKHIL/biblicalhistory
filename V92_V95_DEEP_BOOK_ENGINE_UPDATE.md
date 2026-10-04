# V92–V95 — Deep Book Engine + Pentateuch

## Purpose
This release changes the Bible library from a short-summary/catalog layer into a reusable deep-study system. It is the first content-engine milestone, not a one-off Genesis page.

## Included books
- Genesis — 50 chapters
- Exodus — 40 chapters
- Leviticus — 27 chapters
- Numbers — 36 chapters
- Deuteronomy — 34 chapters

Total: 187 chapter-level guide nodes.

## New architecture
- `content/bible/deep.ts` — reusable Book Guide and Deep Chapter schemas plus the first five complete guides.
- `app/bible/[book]/page.tsx` — full Book Guide experience.
- `app/bible/[book]/[chapter]/page.tsx` — deep chapter experience.

## Book-level layers
Each deep guide contains:
- overview
- genre
- historical setting
- authorship/traditional attribution
- dating discussion
- literary structure
- major people
- major places
- major themes
- historical questions
- canon status by tradition
- study principles
- complete chapter list

## Chapter-level layers
Each populated Pentateuch chapter contains:
- title
- narrative summary
- narrative beats
- themes
- historical lens
- research questions
- cross-book/system connections

## Canon principle
The project continues to use the 66-book Protestant set as its current core navigation because that is already present in the app, but the deep-book schema is canon-aware. Catholic, Eastern Orthodox, Ethiopian/Oriental Orthodox and other traditions will be populated as separate canonical/traditional layers rather than being mislabeled as a single universal list.

Current research confirms that Catholic canon counts 73 books, Eastern Orthodox totals vary by jurisdiction/counting convention, and the Ethiopian Orthodox Tewahedo tradition is commonly described using an 81-book count with its own grouping/counting conventions. These differences are now treated as data-model requirements rather than UI footnotes.

## Important content policy
The project does not reproduce a modern copyrighted Bible translation. Chapter pages provide original summaries and link externally to a Bible text provider.

## Next batch
Continue in canonical/order-wise batches. The next major milestone should cover the historical books, while preserving this exact Book Guide/Chapter Guide architecture.
