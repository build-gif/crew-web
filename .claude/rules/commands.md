# Commands & Permissions

**Development:**
```bash
npm run dev       # Next in dev mode, port 3000
npm run build     # Production build
npm run start     # Serve production build
```

**Quality:**
```bash
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint, --max-warnings 0
npm run format     # Prettier across the entire project
```

**Database:**
```bash
npx prisma migrate dev --name <description>  # Create and apply migration
npx prisma studio                            # DB GUI on localhost:5555
npx prisma generate                          # Regenerate client after schema changes
npm run db:seed                              # Populate DB with dev data
npm run db:reset                             # Drop everything and start over (DEV ONLY)
```

**Can run without asking:**
- `npm run typecheck`, `npm run lint`, `npm run format`
- `npx prisma generate`
- `git status`, `git diff`, `git log`, `git branch`
- File reads and directory listings

**Always ask for confirmation:**
- `git commit`, `git push`, `git checkout` to another branch
- `npx prisma migrate dev`
- `npm run db:reset`, `npm run db:seed`
- `npm install` of any new package
- Changes to `.env*`, `next.config.ts`, `prisma/schema.prisma`
