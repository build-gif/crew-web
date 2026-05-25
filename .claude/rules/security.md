# Security Rules

- `.env*` files NEVER get committed. Only `.env.example` with placeholders
- API keys (`RESEND_API_KEY`, `NOTION_TOKEN`, etc.) always in `.env.local` (gitignored)
- Validate input in API routes before sending to external services
- Never expose API keys or service tokens in client-side code
- Use `NEXT_PUBLIC_` prefix only for values safe to expose to the browser
