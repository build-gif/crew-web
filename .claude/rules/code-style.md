# Code Style

**Naming:**
- Components: `PascalCase`, file matches name (`PomodoroTimer.tsx` exports `PomodoroTimer`)
- Hooks: `useCamelCase` — `use` prefix is mandatory
- Utils and helpers: `camelCase`
- Module constants: `UPPER_SNAKE_CASE`
- Server actions: verbs in the name (`createTask`, `completeSession`)

**Imports:**
- Order: React -> external libs -> `@/` aliases -> relative -> styles
- No relative imports going up more than 2 levels (`../../../` is forbidden, use `@/`)
- Unused imports are errors (`@typescript-eslint/no-unused-vars: error`)

**Components:**
- Props are always typed in a named interface above the component (not inline)
- Early return for loading/empty/error — never nested ternaries in JSX
- Extract a component when a file exceeds ~150 lines
- Do not use `React.FC`. Use `function Name(props: Props) {}`

**Tailwind:**
- No `@apply` in CSS — if you're repeating too many classes, create a component
- Class order: layout -> box model -> typography -> colors -> states
- Use Tailwind theme variables (`bg-background`, `text-foreground`), not literal hex
- Breakpoints: mobile-first. `md:` and `lg:` add, never completely override

**Async:**
- `async/await` always. Never chained `.then()` in new code
- Every `fetch` or external call has an explicit timeout
- Network errors become `Result<T, E>` in server actions, never throw that bubbles up to React
