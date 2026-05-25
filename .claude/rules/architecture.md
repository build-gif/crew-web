# Architecture & Decisions

**Stack:**
- Next.js 15 App Router (never Pages Router)
- Strict TypeScript (`strict: true`, no `any` without a justification comment)
- Tailwind CSS (no CSS modules, no styled-components)
- Prisma + Postgres (Supabase)
- NextAuth.js v5 with Google provider only
- Zod for validation at every boundary (API input, env parsing, forms)

**Deliberate decisions (do not change without discussion):**
- Next.js monolith — server actions instead of separate API routes when possible
- Postgres in dev and prod — Prisma abstracts the difference
- Server components by default. `"use client"` only when there is real interactivity
- No global state manager (Redux, Zustand, Jotai, Recoil are forbidden)
- No UI component libraries (Chakra, MUI, shadcn/ui are forbidden)
- Auth is Google only — do not add another provider without explicit justification
- Always create generic components, hooks, and utilities in `src/lib` for reuse

**What is NOT in scope:**
- Websockets / realtime
- Push notifications
- Sharing / collaboration
- Customizable themes (light/dark only)
- Third-party analytics
- External integrations (Google Calendar, Notion, etc.)
- Never put everything in a single file (e.g. `app/page.tsx` should not exceed ~300 lines; avoid duplicate code — create components)
