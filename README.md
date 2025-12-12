# Christmas UI Samples

This repository contains three React + TypeScript + Tailwind UI implementations demonstrating a festive Christmas theme and components.

## Install

Make sure you have pnpm installed. Then run:

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173

## Project Structure

- public/: static assets (gift icons)
- src/: source files
  - components/: reusable components (Button, Card, Badge, Countdown, Navbar, Footer, GiftGrid, Snow)
  - pages/: three sample pages (LandingPage, MultiSectionPage, ComponentLibrary)
  - main.tsx: application entry and routes
- index.html: root
- tailwind.config.js, postcss.config.js, vite.config.ts, tsconfig.json

## The 3 UI Builds

1. Landing Page (Pages -> `LandingPage`): includes Hero, Countdown (to Dec 25, 2025), Gift Grid (6 cards), Footer and Snow animation.
2. Multi-section Page (Pages -> `MultiSectionPage`): hero + features + CTA sections.
3. Component Library (Pages -> `ComponentLibrary`): demonstrates Buttons, Cards, Badges.

## Theme and Interactions

- Theme colors: Red (#C53030), Green (#2F855A), Gold (#D69E2E)
- Snow animation via CSS
- Button hover glow and card hover scale
- Countdown updates every second
- Fully responsive via Tailwind breakpoints

## Test Cases

TEST CASE 1 — Project bootstrapping
- Run: `pnpm install` and `pnpm dev` in the project root.
- Expected: dev server starts and opens in browser (default port 5173).

TEST CASE 2 — UI rendering
- Navigate to `/landing` page.
- Expected: No console errors. Hero, Countdown, Gift Grid, Footer appear. Snow animation visible.
- Styling must match colors and spacing described in spec.

TEST CASE 3 — Responsiveness
- Resize viewport to 375px (mobile), 768px (tablet), 1280px (desktop) using developer tools.
- Expected: Layout changes at breakpoints, no overflow or broken layouts. Grid collapses responsibly.

## Dependencies used

- React 18
- Vite
- TypeScript
- TailwindCSS

## Notes

- Pure React + TS + Tailwind; no external libraries for animations or UI frameworks.
- If any import errors occur, ensure `pnpm install` has completed and the running environment uses Node 18+ and pnpm.
