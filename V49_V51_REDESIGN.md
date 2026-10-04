# V49–V51 — Complete Interface Redesign

This release is a UI/UX rebuild on top of the preserved Biblical History content layer.

## Preserved
- All `content/stories/*.ts` entries from V46–V48.
- All chapter/index data.
- Legacy timeline files and original dataset preservation files.
- Existing story URLs and dynamic story rendering.
- Existing Bible Book Guides and historical entries.

## New interface
- Completely redesigned encyclopedia landing page.
- New navigation architecture for Explore, Timeline, Places and Bible Books.
- New search/explore surface using the existing story dataset.
- New story/article layout with responsive metadata rail and previous/next navigation.
- Dedicated Bible Books, Places and Timeline browse routes.
- New visual system using CSS variables instead of hard-coded light-only colors.

## Themes
- Light
- Dark / AMOLED-friendly dark palette
- Sepia reading theme
- Theme choice persists in localStorage.
- Theme system is implemented as a provider so future user preferences/settings can be added without redesigning the content layer.

## Architecture direction
The content remains deliberately separate from presentation. Future layers can be added for:
- People
- Places / maps
- Bible chapter browser
- Archaeological evidence
- Historical sources
- Chronology controls
- Cross-references and external Bible APIs
- Study/bookmark features
- Denominational/canonical comparison
- Advanced search and filters

No historical content was intentionally deleted as part of this redesign.
