# Performance Rules

- Server component > client component. If it can be server, make it server
- Granular `revalidatePath`, never unnecessary `revalidatePath('/')`
- Images via `next/image` with explicit `width`/`height`, never raw `<img>`
- Prisma: use `select` to fetch only the necessary fields, avoid unnecessary `include`
- Avoid `useEffect` for data fetching — use server components or `use` hook with promise
- Timer (Pomodoro): runs with 1s `setInterval` in an isolated client component — do not propagate re-renders to the entire tree
- New dependencies must justify their weight. If it costs >20KB gzipped, discuss first
