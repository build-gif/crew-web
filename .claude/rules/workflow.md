# Workflow & Processes

**Before any non-trivial task:**
1. If the task touches >=3 files OR changes the Prisma schema OR touches auth -> present a plan BEFORE writing code
2. The plan must list: files to create, files to modify, perceived risks
3. Wait for explicit approval before executing

**During execution:**
- Small, atomic commits — one concept per commit
- Run `npm run typecheck` before each commit
- If something seems ambiguous, ASK instead of guessing

**Tests:**
- Do not implement tests

**Code review:**
- Review comments are resolved, not ignored
