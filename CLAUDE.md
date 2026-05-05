# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

There are no tests. No test runner is set up.

## Architecture

**Next.js 16 + React 19 + Tailwind CSS v4** — all three have breaking changes vs. training data. Read `node_modules/next/dist/docs/` before touching unfamiliar APIs.

### Key breaking changes to know

- **`params` is a Promise** in Next.js 16: `const { id } = await params` (not `params.id` directly).
- **Tailwind v4** has no `tailwind.config.js`. Custom tokens go in `app/globals.css` using `@theme inline { ... }`. The project already defines `--color-background`, `--color-foreground`, and font variables there.
- **Server Components by default**: all files in `app/` are Server Components unless they start with `'use client'`. Add `'use client'` to any component that uses `useState`, `useEffect`, event handlers, or browser APIs.

### File conventions (App Router)

- Pages: `app/page.tsx`, `app/[slug]/page.tsx`
- Layouts: `app/layout.tsx` (root layout already set up with Geist fonts)
- API endpoints (Route Handlers): `app/api/<name>/route.ts` — export named functions `GET`, `POST`, etc. **Do not** create a `pages/api/` directory.
- Global styles: `app/globals.css` — Tailwind imported via `@import 'tailwindcss'`

### Google Sheets booking integration

The booking form will POST to a Route Handler at `app/api/booking/route.ts`, which writes to Google Sheets via the Sheets API. Store the service account credentials in `.env.local` (never commit this file).

### Component organization

As sections are built, keep components in `app/components/`. Each section (Hero, About, Services, etc.) gets its own file. Anything interactive (form inputs, mobile nav toggle, etc.) needs `'use client'`.

## Business Info
- Owner: Greg Myers
- Phone: 917-900-8924
- Services: Dog walking, cat feeding, pet sitting, plus general neighborhood help (errands, tutoring, organization, computer help, moving help, childcare)
- Pricing: Dog Walk / Cat Feeding = $15, Pet Sitting (30 min) = $20, Other services = fees vary
- Location: Upper West Side, NYC (Lincoln Towers area) -- available year-round when home from college
- Greg is a sophomore CS student at University of Florida

## Site Structure
Single-page scrolling site with navbar links jumping to each section:
1. Hero (Home)
2. About
3. Services
4. Booking
5. Reviews
6. Gallery
7. Charities
8. Future Goal
9. Footer

## Design
- Vibe: Warm, friendly, but also modern and cool -- not cheesy or babyish
- Color scheme: Warm creams and oranges with deep navy as contrast (can be adjusted)
- No logo yet -- use text-based branding for now
- Should feel like a startup landing page, not a generic pet sitter site

## GitHub
- Repo: https://github.com/gregm24/paws-and-purrs
- Branch: main
- Commit after every section with a clear descriptive message
- Always run git add . && git commit -m "message" && git push after finishing a section

## Additional Code Rules
- Keep components under 150 lines -- split into smaller components if needed
- No unnecessary npm packages
- Never commit API keys or secrets -- use .env.local
- Don't make it look like a Fiverr template
- Don't over-animate -- subtle is better
- Don't use placeholder text like "Lorem ipsum"