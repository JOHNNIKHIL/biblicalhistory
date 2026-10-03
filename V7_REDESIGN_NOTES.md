# Biblical History V7 — Story Architecture

This is a clean component-wise foundation, not a patch of the old Timeline component.

## Core idea
The timeline is navigation. Each important point opens a medium-length historical story.

## Architecture
- `components/` contains presentation only.
- `content/chapters/` contains chapter definitions.
- `content/stories/` contains story content.
- `app/story/[slug]/` renders stories through one reusable route.
- `legacy/` preserves V5/V6 material for migration; it is not imported by the new UI.

## Next content work
Expand the story library from the preserved historical dataset. Add people and places as first-class content modules. Then add maps, images, source notes and richer evidence sections.
