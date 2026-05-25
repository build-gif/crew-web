# Architecture & Decisions

**Stack:**
- Next.js 16 App Router (never Pages Router)
- TypeScript (`strict: true`) for `.tsx` files; `.jsx` is allowed without typing
- Tailwind CSS v4 + inline styles (no CSS modules, no styled-components)
- External integrations via API routes: Supabase (leads), Resend (email), Notion (DB)

**Deliberate decisions (do not change without discussion):**
- Marketing site — no database, no auth, no server actions
- API routes (`/api/apply`, `/api/waitlist`) handle form submissions to external services
- `"use client"` for landing pages (heavy interactivity: typewriter, mobile detection, animations)
- Responsive via `useIsMobile` hook — separate mobile and desktop component trees
- No global state manager (Redux, Zustand, Jotai, Recoil are forbidden)
- No UI component libraries (Chakra, MUI, shadcn/ui are forbidden)
- Always create generic components, hooks, and utilities in `src/lib` for reuse
- Design tokens live in `src/components/ui/crew-shared.tsx` (`CREW_TOKENS`, `CrewIcon`)

**What is NOT in scope:**
- Authentication / user accounts
- Database / ORM (Prisma)
- Server actions
- Websockets / realtime
- Push notifications
- Customizable themes (single light theme only)
- Never put everything in a single file (pages should not exceed ~300 lines; avoid duplicate code — create components)
