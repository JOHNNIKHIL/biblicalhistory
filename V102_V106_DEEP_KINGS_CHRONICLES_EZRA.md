# Biblical History V102–V106 — Deep Guides: 1 Kings → Ezra

## What this update adds

This release continues the deep-book guide system after Joshua, Judges, Ruth, 1 Samuel and 2 Samuel.

### New deep guides

| Book | Chapters |
|---|---:|
| 1 Kings | 22 |
| 2 Kings | 25 |
| 1 Chronicles | 29 |
| 2 Chronicles | 36 |
| Ezra | 10 |
| **Total** | **122** |

## Coverage

Each new guide includes:

- Book overview and historical-literary framing
- Genre, setting, authorship and dating discussion
- Major people
- Major places
- Major themes
- Historical questions that distinguish evidence from interpretation
- Canon information for Protestant, Catholic, Eastern Orthodox and Ethiopian Orthodox traditions
- Study notes
- A chapter-by-chapter deep entry for every chapter
- Narrative summary and contextual lens for every chapter
- Cross-book connections to the existing Biblical History knowledge graph

## Historical emphasis

The new material deliberately connects the Kings and Chronicles narratives to the Iron Age and Persian-period world without presenting disputed reconstructions as settled facts.

Particular emphasis is placed on:

- Solomon and the Jerusalem Temple
- The division of Israel and Judah
- Omride-period Israel
- Elijah and prophetic authority
- Assyrian expansion and the fall of Samaria
- Hezekiah and Sennacherib
- Lachish and Jerusalem in the Assyrian crisis
- Josiah and the reform of Judah
- Babylonian conquest and the destruction of Jerusalem
- Jehoiachin and the closing note of 2 Kings
- Chronicles as a post-exilic rereading of Samuel–Kings
- Genealogy, Levites, Temple service and post-exilic identity
- Cyrus, the Persian period and the rebuilding of the Temple in Ezra

## Interface integration

- `/books/1-kings`
- `/books/2-kings`
- `/books/1-chronicles`
- `/books/2-chronicles`
- `/books/ezra`

The Bible Explorer now recognizes these books as having a **Deep guide** and links directly to their book pages instead of routing them to the older encyclopedia-story system.

## Existing content preserved

This update is built on V101 and therefore retains:

- Complete 66-book Protestant Bible catalog
- Canon comparison and extended Scripture library
- Genesis through Deuteronomy deep guides
- Joshua, Judges, Ruth, 1 Samuel and 2 Samuel deep guides
- People, Places, Kingdoms, Events and Evidence databases
- Timeline and knowledge graph
- Visual maps and institutional museum resources
- Homepage redesign
- V101 Vercel TypeScript build fix

## Validation

- TypeScript syntax/type-check passed for `content/bible/deep.ts` and `content/bible/books.ts` using the project's TypeScript compiler.
- New chapter arrays verified against canonical chapter counts: 22 + 25 + 29 + 36 + 10 = 122.
- The full Next.js production build was not run in the generation container because dependencies were not installed and the environment could not complete `npm install`; the source-level checks passed.

## Important content policy

No full Bible translation text is copied into the application. The chapter guides are original study summaries and historical/contextual notes, with the existing external Bible reference mechanism retained.
