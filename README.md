Behland Workshop Q&A — Next.js 14 + Tailwind CSS

Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Then open http://localhost:3000

Scripts

- dev: start Next.js in development
- build: build production bundle
- start: run production server
- lint: run ESLint
- format: format with Prettier
- typecheck: run TypeScript without emit

Structure

- src/app/page.tsx: Landing page with hero and decorative sand clock
- src/app/form/page.tsx: Accessible form with validation
- src/components/Header.tsx: Shared header navigation
- src/app/globals.css: Tailwind v4 setup and utilities

Tech

- Next.js App Router, TypeScript
- Tailwind CSS v4
- React Hook Form + Zod
# eventForm

const res = await fetch("/api/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(values),
});
