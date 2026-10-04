# Biblical History V37–V39

## V37 — Type-safe story compatibility fix

The project previously mixed two story schemas:
- rich stories: `subtitle`, `date`, `chapter`, `location`, `bible`, `people`, `topics`, and sections with `title` + `paragraphs`
- compact research articles: `summary`, `category`, and sections with `heading` + `body`

V37 makes the shared story UI handle both schemas instead of assuming every story uses the original rich schema.

## Fixed files

- `components/story/StoryBody.tsx`
  - normalizes compact `{ heading, body }` sections into the existing article format.
- `components/story/StoryHeader.tsx`
  - falls back from `chapter/date/subtitle` to `category/summary` when necessary.
- `components/story/StoryMeta.tsx`
  - safely handles articles without `bible`, `people`, or `topics` arrays.
- `components/timeline/Timeline.tsx`
  - uses safe fallbacks for `date` and `subtitle`.

## Why this fixes the Vercel errors

The previous build failed because TypeScript correctly detected that `story.sections` could contain either section shape, and because compact articles do not have `date` or `subtitle`. The shared components now explicitly support both forms.

## V38–V39

No new content was added deliberately. These releases are reserved for stability and validation after the Vercel deployment succeeds.
