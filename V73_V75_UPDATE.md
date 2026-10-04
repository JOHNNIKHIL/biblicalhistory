# V73–V75 — Biblical History Knowledge Graph

## V73 — Graph data layer
- Added `content/graph/index.ts`.
- Derives a unified graph from People, Places, Kingdoms, Events, Evidence and encyclopedia articles.
- Supports typed nodes and labeled relationships such as participant, location, political context, associated with, appears in, explained by, ruled/associated with, and related evidence/article links.
- Keeps graph data additive and derives connections from existing structured content rather than duplicating records.

## V74 — Connection Explorer
- Added `/connections`.
- Search and filter graph nodes by entity type.
- Central-node exploration with a visual relationship map.
- Direct connection count and legend.
- Click-through navigation lets users traverse the graph one entity at a time.

## V75 — Cross-linking
- Added “Explore connections” controls to People, Places, Kingdoms, Events and Evidence profiles.
- Added Connections to the main navigation.
- Existing content and routes remain intact.

## Method note
The graph reflects relationships encoded in the site's structured datasets. It is not intended to imply a historical relationship merely because two entities share a broad theme unless that relationship is explicitly represented by the data.
