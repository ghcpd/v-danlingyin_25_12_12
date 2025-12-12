UI Test Cases (detailed verification steps)

TEST CASE 1 — Project bootstrapping
- For each project folder (landing, multi-section, component-library):
  - Run `pnpm install` and ensure all packages install without errors.
  - Run `pnpm dev` and verify Vite starts and serves content at a port (default 5173).
  - Open the URL and confirm page loads.

TEST CASE 2 — UI rendering
- For Landing:
  - Verify Hero shows title "Christmas Wonderland 2025" and subtitle.
  - Verify falling snow animation is present (CSS-based).
  - Verify Countdown shows Days/Hours/Minutes/Seconds and updates each second.
  - Verify Gift Grid shows 6 cards with images and hover scale effect.
  - Verify Footer includes "Made with ❤️ for the holiday season" and social icons.
- For Multi-section:
  - Verify Hero, Features (3 feature cards), CTA with input+button, and Footer render.
- For Component Library:
  - Verify Buttons (primary/ghost) show expected styling and hover effects.
  - Verify Card and Badge display correctly.
- Open browser console and assert there are no red errors or uncaught exceptions.

TEST CASE 3 — Responsiveness
- For each project:
  - Resize viewport to 375px width (mobile): ensure layout stacks, text readable, no horizontal scroll.
  - Resize to 768px (tablet): check columns and spacing adapt (e.g., features become multi-column).
  - Resize to 1280px (desktop): full grid and spacing visible, no overflow.

Notes on verification tools:
- Use browser dev tools to throttle device widths.
- Use Lighthouse or manual visual check to ensure no layout breaks and CSS transitions are smooth.

If anything fails, capture console logs and a screenshot and report which project and which section failed.
