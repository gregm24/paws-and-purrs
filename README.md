# Paws & Purrs

A full-stack business website for Paws & Purrs, a pet care and neighborhood help service on the Upper West Side of New York City. Built by Greg Myers, a CS student at the University of Florida, as both a real operational business site and a portfolio project demonstrating modern full-stack web development.

**Live services:** Dog walking · Cat feeding · Pet sitting · Errands · Tutoring · Computer help · Moving help · Childcare

---

## What This Project Is

Most pet sitter websites are generic templates. This one was built from scratch to feel like a boutique editorial landing page — warm but modern, with real backend functionality that actually runs the business.

Beyond being a marketing page, the site handles the full booking lifecycle: a visitor submits a request through the form, the data is saved to a Google Sheet, confirmation emails go to both the customer and the owner, and the owner can manage everything through a password-protected admin dashboard. The reviews section is similarly end-to-end: visitors submit reviews, the owner approves them in the admin panel, and approved reviews render live on the site.

**For a non-technical reader:** this is a real website that processes real bookings and reviews, sends real emails, and stores real data — not a static mockup.

**For a technical reader:** the stack is Next.js 16 App Router with React Server Components, Route Handlers, and ISR; Tailwind CSS v4; Google Sheets as a lightweight database via service account auth; and Resend for transactional email. No traditional database is used by design.

---

## Tech Stack

| Technology | Version | Why |
|---|---|---|
| Next.js | 16.2.4 | App Router gives React Server Components, Route Handlers (API endpoints), and ISR in one framework. No separate backend needed. |
| React | 19.2.4 | Component model. Server Components reduce client-side JS to nearly zero for static sections. |
| TypeScript | 5.x | Type safety across the full stack — form payloads, Sheets rows, and API responses all share types. |
| Tailwind CSS | v4 | Utility-first CSS. v4 drops the config file entirely; tokens live in `globals.css` via `@theme inline`. |
| googleapis | 171.x | Official Google client for the Sheets API. Handles auth, reading, writing, and row deletion. |
| Resend | 6.x | Transactional email API. Simpler than SendGrid or Nodemailer, generous free tier, reliable deliverability. |
| Google Sheets | — | Lightweight database. Zero setup cost, zero hosting cost, readable by non-developers, easy to export. Appropriate for the data volume of a small local business. |

**Why no traditional database?** For a business doing a few bookings per week, a full Postgres or MongoDB setup would be over-engineered. Google Sheets is free, the owner can read it directly without any technical knowledge, and it's trivial to export. The admin dashboard makes the data actionable without requiring the spreadsheet to be opened manually.

**Why Next.js App Router over Pages Router or a separate frontend/backend?** App Router lets the same codebase be a React Server Component (fetches data at render time with zero client JS), a Client Component (interactive UI), or an API Route Handler. The reviews section, for example, fetches directly from Google Sheets inside a Server Component — no separate API call, no client-side loading spinner.

---

## Features

### Single-Page Scrolling Layout

Five named sections on a single page: Hero/About (merged), Services, Booking, Reviews, and Memorial. Navbar links use native anchor IDs for smooth scrolling. On desktop the full link list renders in the header. On mobile and narrow windows, a horizontally scrollable row of sticky pill buttons replaces the traditional hamburger menu — the active section's pill is always visible because it auto-scrolls to center as the user moves through the page.

### Editorial Design

The site uses **Cormorant Garamond** (serif) for headings and **Jost** (geometric sans-serif) for body text, loaded via `next/font/google`. The palette anchors on deep navy `#1B2A4A` with warm cream `#FDF6EC` as the background and orange `#E8722A` as the accent.

The hero is a full-viewport split layout — photo on the left, text and contact info on the right — with no decorative patterns or rounded pill badges. The services section uses image-background cards with a navy tint overlay; hovering reveals the description and (for neighborhood services) price. The booking section features a two-row horizontally scrolling marquee of pet photos as a decorative background, implemented entirely in CSS with `@keyframes` and no JavaScript.

### Booking Flow

1. Visitor fills in name, email, service, date, and optional notes via the booking form
2. On submit, the form POSTs to `/api/booking`
3. The Route Handler validates required fields, then appends a row to the **Bookings** tab in Google Sheets: `[Timestamp, Name, Email, Service, Date, Notes]`
4. Two emails are sent via Resend in parallel:
   - Customer receives a confirmation with their booking details and Greg's contact info
   - Owner (Greg) receives a notification email with all submitted fields
5. If the Sheets write fails, the booking returns an error. If email fails, it logs silently — the booking still succeeds (emails are best-effort)

### Google Sheets Integration

Booking and review data live in a single Google Spreadsheet, with separate tabs for each. Access is via a service account — a non-human Google identity that is granted editor access to the sheet directly in Google Drive. The credentials (service account email + RSA private key) are stored in `.env.local` and never committed.

The **Reviews** tab is created automatically on the first review submission if it doesn't exist: the API checks the spreadsheet metadata, runs a `batchUpdate` to add the sheet, writes the header row, then appends the new review. Subsequent submissions skip straight to the append.

### Reviews System

- Visitors submit a star rating (half-star precision via a custom widget), their name, and a written review
- New reviews are appended to the **Reviews** sheet with `Display = FALSE`, hidden from the public by default
- The owner approves reviews in the admin dashboard by toggling the Display column
- The Reviews section is an **async React Server Component** — it reads directly from the Sheets API at render time and displays all rows where `Display = TRUE`, with real names and ratings rendered as star characters
- The page revalidates every 60 seconds (ISR), so approved reviews appear on the live site within a minute

### Admin Dashboard (`/admin`)

A password-protected management interface at `/admin`.

**Authentication:** The page holds a password input form. On submit, it sends the password as a `Bearer` token to `/api/admin/bookings`. The server validates it against `process.env.ADMIN_PASSWORD`. If valid, both bookings and reviews are fetched in parallel and the dashboard renders. The password stays in React component state for the session — no cookies, no tokens stored in the browser.

**Bookings tab:** Read-only table of all submissions. Columns: date submitted, name, email, service (shown as a colored badge), requested date, and notes.

**Reviews tab:** Full moderation controls:
- **Shown / Hidden toggle** — writes `TRUE` or `FALSE` to column E of the Reviews sheet instantly
- **Delete** — uses the Sheets `batchUpdate` API with a `deleteDimension` request to physically remove the row. After any mutation, the tab re-fetches all rows from the server so row indices stay accurate

### Email Confirmations (Resend)

Two emails per booking: a customer-facing confirmation and an internal notification to the owner. Both are sent in `Promise.all` after a successful Sheets write.

### Scroll Animations

A `FadeIn` client component wraps any element that should animate into view. It uses `IntersectionObserver` with a bottom margin offset so elements animate just before they're fully visible. Supports `direction` (`up`, `left`, `right`) for directional slides and a `delay` prop (in milliseconds) for staggered card grids. The observer disconnects after the first trigger — animations fire once, not on every scroll.

### Responsive Design

Fully optimized for mobile, tablet, and desktop. The hero photo stacks above the text on mobile and splits into a 55/45 left/right column on desktop. Service cards are a 3-column grid on desktop and compact 2- or 3-column grids on mobile. The fixed navbar uses a spacer `<div>` and `scroll-margin-top` on each section to compensate for nav height at each breakpoint.

---

## Codebase Structure

```
paws-and-purrs/
├── app/
│   ├── page.tsx                    # Root page — composes all sections, sets revalidate = 60
│   ├── layout.tsx                  # HTML shell, Cormorant Garamond + Jost fonts, SEO metadata
│   ├── globals.css                 # Tailwind import, brand color tokens (@theme inline),
│   │                               # marquee keyframe animation, scrollbar utilities,
│   │                               # scroll-margin-top for fixed nav anchor offsets
│   │
│   ├── components/
│   │   ├── Navbar.tsx              # Fixed nav: logo + desktop links + mobile pill strip (client)
│   │   ├── NavLinks.tsx            # Desktop horizontal link list with active-section highlighting
│   │   ├── FadeIn.tsx              # IntersectionObserver scroll-in animation wrapper (client)
│   │   │
│   │   ├── HeroAbout.tsx           # Full-viewport split hero: photo left, text/CTA/contact right
│   │   ├── Services.tsx            # 3+6 image-card grid (pet services + neighborhood help)
│   │   ├── Booking.tsx             # Booking section: scrolling photo marquee bg + form layout
│   │   ├── BookingForm.tsx         # Controlled form — POSTs to /api/booking (client)
│   │   ├── Reviews.tsx             # Async server component — fetches + renders approved reviews
│   │   ├── ReviewCard.tsx          # Star rating + quote + name card
│   │   ├── ReviewForm.tsx          # Review submission form (client)
│   │   ├── StarRating.tsx          # Half-star interactive rating widget (client)
│   │   ├── Memorial.tsx            # Memorial section for Cheddar and Leo
│   │   └── Footer.tsx              # Three-column footer: brand, nav, contact
│   │
│   ├── admin/
│   │   ├── page.tsx                # Auth gate + Bookings/Reviews tab switcher (client)
│   │   ├── BookingsTab.tsx         # Read-only bookings table
│   │   └── ReviewsTab.tsx          # Reviews table with toggle/delete actions (client)
│   │
│   └── api/
│       ├── booking/
│       │   └── route.ts            # POST: validate → Sheets append → Resend emails
│       ├── reviews/
│       │   └── route.ts            # POST: ensure sheet exists → append with Display=FALSE
│       └── admin/
│           ├── bookings/
│           │   └── route.ts        # GET: auth check → fetch Bookings sheet rows
│           └── reviews/
│               └── route.ts        # GET / PATCH (toggle) / DELETE (remove row)
│
├── public/images/                  # Pet photos, hero image, service card images
├── .env.local                      # Secrets — never committed (see Environment Variables below)
├── CLAUDE.md                       # Instructions for AI coding assistants working on this repo
└── package.json
```

### How the Pieces Connect

**Server vs. Client Components.** Every file in `app/` is a Server Component by default — runs on the server, ships no JavaScript to the browser. Components that need interactivity declare `'use client'`: the booking form, the nav, the review form, the star widget, and the admin dashboard. Static sections (HeroAbout, Services, Booking, Memorial, Footer) have zero client-side JavaScript.

**The reviews render path.** `Reviews.tsx` is an `async` Server Component. When the page renders, Next.js awaits it, which calls the Google Sheets API directly from server code. No HTTP round-trip. The result is plain HTML with the approved reviews baked in, delivered in the initial response. `export const revalidate = 60` in `page.tsx` tells Next.js to serve a cached version and regenerate in the background every 60 seconds.

**The booking write path.** `BookingForm.tsx` (client) sends `POST /api/booking` → `route.ts` (server) validates fields → appends to Sheets → fires Resend emails → returns `{ success: true }` → form shows success state.

**Admin auth flow.** `page.tsx` (client) collects the password → sends `GET /api/admin/bookings` and `GET /api/admin/reviews` simultaneously with `Authorization: Bearer <password>` → both Route Handlers check `request.headers.get('authorization') === \`Bearer ${process.env.ADMIN_PASSWORD}\`` → on success, data is set in state and the dashboard renders.

---

## Notable Technical Decisions & Tradeoffs

**Google Sheets as the database.** Unconventional but deliberate. The volume of bookings and reviews is small (tens per month, not thousands per day), the data is tabular, and the owner can view or edit it directly without any technical knowledge. The main tradeoffs are no relational queries, no transactions, and row-index management for deletions (row numbers shift after a delete, solved by re-fetching after each mutation). For this use case, those tradeoffs are worth the zero infrastructure cost.

**`overflow-x: clip` instead of `overflow-x: hidden`.** Preventing horizontal scroll on mobile is necessary, but `overflow: hidden` on `html`/`body` creates a new block formatting context that silently breaks `position: fixed` and `position: sticky`. The `clip` value achieves the same visual clipping without that side effect.

**`fixed` instead of `sticky` for the navbar.** `sticky` is fragile — it stops working whenever an ancestor element has `overflow` set to anything other than `visible`. `fixed` is unconditional and viewport-relative. The cost is a matching spacer `<div>` in the page and `scroll-margin-top` on each section so anchor links don't land with headings hidden behind the nav bar.

**ISR over fully dynamic rendering.** `revalidate = 60` on the main page means Next.js generates a static HTML version, serves it from cache, and regenerates silently in the background every 60 seconds. This is significantly faster than server-rendering on every request. The 60-second staleness window is acceptable for a reviews feed — no user expects a review they just submitted to appear instantly.

**Reviews default to hidden.** New review submissions write `Display = FALSE`. The owner has one-click moderation in the admin dashboard before anything goes public. This prevents spam or unwanted content from appearing on the live site without any action required.

**No authentication library for the admin.** The admin uses a raw password check rather than NextAuth or a similar library. For a single-user, personal dashboard with no user accounts, the added complexity of sessions, OAuth flows, and token management would be significant overhead with no meaningful benefit. The password is validated server-side on every API request, which is stateless and correct for this use case.

**CSS-only marquee animation.** The booking section background uses a `@keyframes marquee` animation on a flex row of duplicated images — no JavaScript, no library. Two rows scroll in opposite directions at slightly different speeds (45s and 40s) for visual depth. The seamless loop works because the image set is duplicated: `translateX(-50%)` moves exactly one copy's width, at which point the animation resets to `translateX(0)` with an identical visual state.

---

## Environment Variables

All secrets live in `.env.local`, which is gitignored and never committed.

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=    # service account email from Google Cloud console
GOOGLE_PRIVATE_KEY=              # RSA private key — wrap in double quotes, keep \n escapes
GOOGLE_SHEET_ID=                 # spreadsheet ID from the Google Sheets URL
RESEND_API_KEY=                  # API key from resend.com dashboard
NOTIFICATION_EMAIL=              # email address to receive booking notifications
ADMIN_PASSWORD=                  # password for the /admin dashboard
```

---

## Local Development

```bash
npm install
npm run dev      # starts at http://localhost:3000
npm run build    # production build — also type-checks the entire project
npm run lint     # ESLint
```

There is no test suite. Google Sheets and Resend calls are live even in development — `.env.local` is loaded automatically by Next.js. There is no mock or sandbox layer.

The admin dashboard is accessible at `http://localhost:3000/admin`.
