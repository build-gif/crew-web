# Commands & Permissions

**Development:**
```bash
npm run dev       # Next in dev mode, port 3000
npm run build     # Production build
npm run start     # Serve production build
```

**Quality:**
```bash
npm run lint       # ESLint
```

**Can run without asking:**
- `npm run lint`, `npm run build`
- `git status`, `git diff`, `git log`, `git branch`
- File reads and directory listings

**Always ask for confirmation:**
- `git commit`, `git push`, `git checkout` to another branch
- `npm install` of any new package
- Changes to `.env*`, `next.config.ts`
