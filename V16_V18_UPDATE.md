# Biblical History V16–V18

## What changed
- Fixed the recurring `Export default doesn't exist in target module` errors in `content/stories/index.ts` by matching imports to the actual named exports in story files.
- Added 18 new long-form story modules across advanced Hellenistic history, Second Temple society and Roman/early-Christian history.
- Added three new chapter groups.
- Preserved all material from V13–V15 and earlier releases.

## New story groups
### V16 — Hellenistic Judea & Maccabean Crisis
Diadochi wars, Ptolemaic administration, Seleucid transition, Antiochus IV crisis, Hanukkah, Hasmonean state and civil war.

### V17 — Second Temple Society & Texts
Second Temple society, Dead Sea Scrolls, Pharisees/Sadducees/Essenes and first-century Jewish diversity.

### V18 — Roman Judea & Early Jesus Movement
Roman provincial administration, Herodian building, John the Baptist, Jesus, Paul, James, First Jewish Revolt, Jerusalem 70 CE and Bar Kokhba.

## Verification
The release includes static import/export validation for every story imported by `content/stories/index.ts`.
