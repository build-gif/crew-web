# AGENTS.md — Crew of Builders Platform

## Stack
- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- Supabase (Auth, DB, Storage) via @supabase/ssr
- Vercel (deploy)

## Regras Inviolaveis
1. NUNCA usar hex hardcoded em componentes. Usar variaveis CSS ou classes Tailwind.
2. NUNCA escrever logica de banco em Client Components.
3. NUNCA commitar .env.local.
4. NUNCA usar `any` em TypeScript.
5. SEMPRE usar o cliente Supabase correto (server.ts vs client.ts).
