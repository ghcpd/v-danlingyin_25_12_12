# Christmas UI Case - 3 Implementations

This workspace contains 3 independent React + TypeScript + Tailwind projects demonstrating a Christmas-themed UI built to the provided spec.

Projects:
- landing/ - Responsive Landing Page (Hero, Countdown, Gift Grid, Footer)
- multi-section/ - Multi-section page (Hero, Features, CTA, Footer)
- component-library/ - Reusable UI components (Button, Card, Badge) with a demo page

Each project is pnpm-ready. You can install dependencies per-project or for the whole workspace.

- Per-project (quick run):
  1) cd into a project folder (e.g., `landing`)
  2) `pnpm install`
  3) `pnpm dev`

- Workspace (recommended):
  1) From repository root run: `pnpm -w install`
  2) Start an individual project from root: `pnpm run dev:landing` (or `pnpm --filter landing dev`)
  3) Or run all dev scripts in the workspace from root: `pnpm run dev` (this runs `pnpm -w -r dev` and starts the `dev` script in each workspace — be aware multiple Vite servers may try to use the same port; Vite will prompt for alternate ports where necessary).

Common constraints followed:
- Colors: Red (#C53030), Green (#2F855A), Gold (#D69E2E)
- Styling: Tailwind spacing + shadows
- Responsive via Tailwind breakpoints
- Interactions: button hover glow, countdown updates every second, card hover scale
- No external UI or animation libraries

File tree (top-level):

- landing/
  - package.json, index.html, tailwind.config.js, postcss.config.js, tsconfig.json
  - src/
    - main.tsx, App.tsx, styles/index.css
    - components/(Hero.tsx, Countdown.tsx, GiftGrid.tsx, Footer.tsx)
    - data/gifts.ts
  - public/assets/gift*.svg
  - README.md

- multi-section/
  - package.json, index.html, tailwind.config.js, postcss.config.js, tsconfig.json
  - src/
    - main.tsx, App.tsx, styles/index.css
    - components/(Hero.tsx, Features.tsx, CTA.tsx, Footer.tsx)
  - README.md

- component-library/
  - package.json, index.html, tailwind.config.js, postcss.config.js, tsconfig.json
  - src/
    - main.tsx, Demo.tsx, styles/index.css
    - components/(Button.tsx, Card.tsx, Badge.tsx)
  - README.md

3 UI Test Cases (detailed):

TEST CASE 1 — Project bootstrapping
- Steps:
  1. cd into each project folder (e.g., landing)
  2. Run: pnpm install
  3. Run: pnpm dev
- Expected:
  - Dev server starts without dependency errors
  - Browser opens at localhost:5173 (or available port)

TEST CASE 2 — UI rendering
- Steps:
  1. Open the app in browser
  2. Inspect console
- Expected:
  - No console errors
  - All required sections render:
    - Landing: Hero / Countdown / Gift Grid / Footer
    - Multi-section: Hero / Features / CTA / Footer
    - Component Library: Buttons / Cards / Badges demo
  - Styling uses theme colors and Tailwind spacing

TEST CASE 3 — Responsiveness
- Steps:
  1. Resize browser to widths: 375px (mobile), 768px (tablet), 1280px (desktop)
  2. Verify layout and no horizontal overflow
- Expected:
  - Layout adapts at breakpoints (mobile stacks, tablet two/three columns, desktop grid)
  - No overflow or broken components

Notes:
- All code is plain React + TS + Tailwind. No external UI frameworks.
- If you need changes to structure, assets, or behavior (e.g., alternate countdown target), tell me which project and file to update.

Note: you can now run `pnpm -w install` at the repository root to install dependencies for all projects.

Troubleshooting:
- ERR_PNPM_NO_PKG_MANIFEST: This means pnpm couldn't find a root `package.json`. Ensure `package.json` and `pnpm-workspace.yaml` exist in the repository root. You can run:
  - `ls package.json pnpm-workspace.yaml`
  - If missing, create `package.json` with `name`, `private: true`, and `workspaces` fields, and `pnpm-workspace.yaml` with the `packages:` list of workspaces.
- If `pnpm` isn't available on your system, install it (https://pnpm.io/installation) or use your package manager to install pnpm globally.
