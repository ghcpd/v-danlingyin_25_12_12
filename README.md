Christmas UI Cases
===================

Three distinct React + TypeScript + Tailwind implementations built from the provided UI spec (Christmas Landing Page).

Quick start
-----------
Requirements: pnpm (recommended)

Installation

1. Install dependencies

   pnpm install

2. Run development server

   pnpm dev

3. Open the app

   Visit http://localhost:5173/ (Vite default). Use the header links or these hash routes:
   - #landing — Landing Page (full spec: Hero / Countdown / Gift Grid / Footer)
   - #multi — Multi-Section Page (Hero + Features + CTA)
   - #library — Reusable Component Library (Buttons, Cards, Badges, Countdown)

What this repo contains
-----------------------
- A single Vite React + TypeScript project exposing three unique UI implementations as pages.
- TailwindCSS for styling with the strict theme: Red (#C53030), Green (#2F855A), Gold (#D69E2E).
- Pure React + TS implementations, no external animation/UI libraries.

Project structure
-----------------
- index.html
- package.json
- tailwind.config.js
- postcss.config.js
- tsconfig.json
- public/assets/* (SVG assets)
- src/
  - main.tsx
  - styles/main.css
  - App.tsx
  - components/
    - Button.tsx
    - Countdown.tsx
    - GiftCard.tsx
    - Footer.tsx
    - Icons.tsx
  - pages/
    - LandingPage.tsx
    - MultiSection.tsx
    - ComponentLibrary.tsx

3 Test Cases
------------
TEST CASE 1 — Project bootstrapping
- Commands:
  - pnpm install
  - pnpm dev
- Expected:
  - Dependencies install successfully
  - Dev server starts without errors

TEST CASE 2 — UI rendering
- Expected:
  - Open http://localhost:5173/#landing
  - All components render without console errors
  - Landing page shows: Hero / Countdown / Gift Grid / Footer
  - Styles match the Christmas theme colors (Red / Green / Gold)
  - Button hover glow, card hover animation present

TEST CASE 3 — Responsiveness
- Expected:
  - Layout adapts to target viewports: mobile (375px), tablet (768px), desktop (1280px)
  - No horizontal overflow or broken layout
  - Tailwind breakpoints are used (md, sm)

Preview of components
---------------------
- Buttons: solid gradient, outline, ghost with hover glow
- Cards: gift cards with image, title, description and hover scale
- Badges: red/green/gold badges for statuses
- Countdown: live updating timer to Dec 25 (updates every second)

Dependencies
------------
- react, react-dom
- dev: vite, typescript, tailwindcss, postcss, autoprefixer

Notes
-----
- All animations and interactions are implemented with CSS and React. No external UI or animation libraries are used.
- Colors and spacing use Tailwind utilities with a small extended theme to include the specified Christmas colors.

If you want separate repositories for each implementation, I can split them into standalone packages, but this single project contains three unique builds accessible via the header or hash routes.
