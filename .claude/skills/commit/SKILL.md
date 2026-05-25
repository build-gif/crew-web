---
name: commit
description: Generates a commit message following the team's convention from the staged diff
---

When invoked, read the staged diff and produce:
- type(scope): short description (max 50 chars)
- Body: what changed and why (max 3 lines)
- Footer: "Co-authored-by: Claude Code"

**Pull Requests:**
- Title in conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Description is mandatory: What, Why, How to test
- Max 400 lines of diff per PR (except documented schema changes)
- No PR without tests, except pure refactors

Use conventional commits. Don't explain the obvious.
