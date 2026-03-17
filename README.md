# Innovista Design Studio

Marketing website for Innovista Design Studio, built with Next.js and TypeScript.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Resend (transactional form emails)

## Project structure

- `app/` – routes, layouts, and API handlers
- `components/` – reusable UI sections
- `lib/content.ts` – local content source for insights, case studies, partners, and jobs
- `lib/resend.ts` – email helpers used by form API routes
- `public/` – static assets

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run start` – run production server
- `npm run lint` – run Next.js lint checks

## Environment variables

- `RESEND_API_KEY` – required for form email delivery
- `NEXT_PUBLIC_SITE_URL` – canonical metadata base URL

