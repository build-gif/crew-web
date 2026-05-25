# Security Rules

- `NEXTAUTH_SECRET` never in code — always in `.env.local` (gitignored)
- `.env*` files NEVER get committed. Only `.env.example` with placeholders
- Every server action that modifies data validates the session first:
  ```ts
  const session = await auth()
  if (!session?.user) return { error: "unauthorized" }
  ```
- Every Prisma query for user data filters by `userId: session.user.id` — never trust an ID coming from the client
- Zod validates ALL input in server actions / API routes, no exceptions
- Auth errors NEVER expose whether the email exists — always a generic message
- Session cookies: `httpOnly: true`, `sameSite: "lax"`, `secure: true` in prod
- Rate limit on public endpoints (login, signup): 5 attempts/min per IP
