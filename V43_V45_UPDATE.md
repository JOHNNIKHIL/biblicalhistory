# V43–V45 Update

## Build repair
Fixed 20 book-guide TypeScript files that contained a literal newline inside a quoted `body` string, causing Turbopack `Unterminated string constant` errors at line 13. The newline before `Primary reference:` is now represented with escaped `\n\n`.

No content was removed. This is a stability release based on V40–V42.

Fixed files: 20
