# Code Style

**Naming:**
- Components: `PascalCase`, file matches name (`CobHero.jsx` exports `CobHero`)
- Hooks: `useCamelCase` — `use` prefix is mandatory
- Utils and helpers: `camelCase`
- Module constants: `UPPER_SNAKE_CASE`

**File types:**
- `.tsx` for typed components; `.jsx` is allowed without typing
- New shared utilities and hooks should go in `src/lib/`

**Imports:**
- Order: React -> external libs -> `@/` aliases -> relative -> styles
- No relative imports going up more than 2 levels (`../../../` is forbidden, use `@/`)
- Unused imports are errors

**Components:**
- Early return for loading/empty/error — never nested ternaries in JSX
- Extract a component when a file exceeds ~150 lines
- Do not use `React.FC`. Use `function Name(props) {}`

**Tailwind:**
- Inline styles are acceptable for the landing page (design-heavy, one-off values)
- No `@apply` in CSS — if you're repeating too many classes, create a component
- Breakpoints: mobile-first. `md:` and `lg:` add, never completely override

**Async:**
- `async/await` always. Never chained `.then()` in new code
- Every `fetch` or external call has an explicit timeout
