# Performance Rules

- Images via `next/image` with explicit `width`/`height` when possible, never raw `<img>` for new components
- Isolate interactive client components — do not propagate re-renders to the entire tree
- New dependencies must justify their weight. If it costs >20KB gzipped, discuss first
- Animations and transitions should respect `prefers-reduced-motion`
