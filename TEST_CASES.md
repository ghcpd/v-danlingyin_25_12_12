# Test Cases Documentation

## Overview
This document details the 3 comprehensive test cases for validating all 3 UI implementations. Each test case can be executed independently for each implementation.

---

## TEST CASE 1: Project Bootstrapping

**Category:** Installation & Execution  
**Priority:** P0 (Critical)  
**Estimated Duration:** 3-5 minutes per implementation

### Objective
Verify that each implementation can be installed with pnpm and the development server starts successfully without errors.

### Preconditions
- Node.js 16+ installed
- pnpm installed globally (`npm install -g pnpm`)
- Clean environment (no previous node_modules)
- Windows/Mac/Linux terminal access

### Test Steps

#### Step 1: Navigate to Implementation Folder
```bash
cd Implementation1-LandingPage
# OR
cd Implementation2-MultiSection
# OR
cd Implementation3-ComponentLibrary
```

#### Step 2: Clean Install Dependencies
```bash
pnpm install
```

**Expected Result:**
- ✅ All dependencies download successfully
- ✅ node_modules folder created
- ✅ pnpm-lock.yaml generated
- ✅ No ERROR or CRITICAL messages in console
- ✅ Installation completes in < 2 minutes

**Validation:**
```bash
# Check if node_modules exists
ls node_modules | head -5
# Should see: react, react-dom, tailwindcss, vite, etc.

# Check if pnpm-lock.yaml exists
ls pnpm-lock.yaml
```

#### Step 3: Start Development Server
```bash
pnpm dev
```

**Expected Result:**
- ✅ Dev server starts on port 5173
- ✅ Console shows: "VITE v5.x.x ready in XXX ms"
- ✅ Browser opens automatically to `http://localhost:5173`
- ✅ Page loads with content visible
- ✅ No 404 errors in console

**Example Console Output:**
```
  VITE v5.0.8  ready in 245 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

#### Step 4: Verify Browser Access
1. Look for browser window/tab opening automatically
2. Check URL is `http://localhost:5173`
3. Verify content is visible (page is not blank)
4. Open DevTools (F12) → Console tab
5. Check for errors (should see no red messages)

**Expected Result:**
- ✅ Browser opens without user intervention
- ✅ Page URL is correct
- ✅ Page content visible (no blank page)
- ✅ Console shows no errors (only warnings acceptable)
- ✅ Page is interactive (buttons clickable)

#### Step 5: Test Hot Module Replacement (HMR)
1. Open source file: `src/App.tsx`
2. Modify text slightly (e.g., change "Christmas" to "Xmas")
3. Save file (Ctrl+S)
4. Check browser automatically updates (no manual refresh)
5. Undo change and save

**Expected Result:**
- ✅ Browser updates automatically within 1 second
- ✅ No page flicker or full reload
- ✅ Component state preserved (if applicable)
- ✅ No console errors after change

#### Step 6: Stop Development Server
```bash
# Press Ctrl+C in terminal
```

**Expected Result:**
- ✅ Server stops gracefully
- ✅ Port 5173 released (can restart)
- ✅ No hanging processes

### Success Criteria
- ✅ All dependencies install without errors
- ✅ Dev server starts successfully
- ✅ Browser opens automatically
- ✅ Page loads content
- ✅ No console errors blocking functionality
- ✅ HMR works (optional but nice-to-have)
- ✅ Server stops cleanly

### Failure Scenarios & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| `command not found: pnpm` | pnpm not installed | `npm install -g pnpm@latest` |
| `Port 5173 in use` | Another process using port | Kill process or change port in vite.config.ts |
| `Module not found` | Incomplete install | Run `pnpm install` again |
| `ERR_MODULE_NOT_FOUND` | Missing @vitejs/plugin-react | Run `pnpm install @vitejs/plugin-react` |
| `EACCES permission denied` | Permission issue (Unix) | Try `sudo pnpm install` |
| `Failed to resolve` | Node version too old | Upgrade Node.js to 16+ |

### Test Data
- No test data required (static installation)

### Test Environment
- OS: Windows / Mac / Linux
- Node.js: 16, 18, or 20
- pnpm: 8.x or 9.x
- Network: Internet required for first install

### Automation
```bash
#!/bin/bash
cd Implementation1-LandingPage
pnpm install
if [ $? -eq 0 ]; then
  echo "✓ Install successful"
else
  echo "✗ Install failed"
  exit 1
fi

timeout 10s pnpm dev &
sleep 3
if curl -f http://localhost:5173 > /dev/null; then
  echo "✓ Dev server running"
else
  echo "✗ Dev server failed"
  exit 1
fi
```

---

## TEST CASE 2: UI Rendering & Theme Compliance

**Category:** Component Rendering & Visual Verification  
**Priority:** P0 (Critical)  
**Estimated Duration:** 5-10 minutes per implementation

### Objective
Verify that all UI components render correctly, theme colors are applied accurately, and no visual glitches occur.

### Preconditions
- Dev server running (`pnpm dev`)
- Browser DevTools open (F12)
- Screen at 1280px width (desktop view)
- No console errors from TEST CASE 1

### Test Steps for Implementation 1: Landing Page

#### Render Check: Hero Section
1. Look at top of page
2. Verify content visible:
   - Title: "Christmas Wonderland 2025" (white text)
   - "2025" in red color (#C53030)
   - Subtitle: "Celebrate the magic with us"
   - Button: "Join Event"

3. Check visual properties:
   - Title is **bold** and **large** (40px+)
   - Snowflakes visible falling (❄️ emojis)
   - Background is **dark** (slate-900)
   - Button is **red** with **glow** on hover

4. Inspect elements (F12 → Elements):
   ```
   - h1 should contain "Christmas Wonderland" and "2025"
   - button.bg-christmas-red should exist
   - Multiple div.animate-snowfall should exist (20 snowflakes)
   ```

5. Test button interaction:
   - Hover over "Join Event" button
   - Verify **scale-up** animation (button slightly larger)
   - Verify **shadow glow** appears (red shadow)

**Success Criteria:**
- ✅ Title visible and readable
- ✅ "2025" is red (#C53030)
- ✅ Snowflakes animated and visible
- ✅ Button has red background
- ✅ Button hover effect works
- ✅ All text is readable

#### Render Check: Countdown Section
1. Look for countdown section (below hero)
2. Verify content visible:
   - Heading: "Countdown to Christmas"
   - 4 blocks: Days / Hours / Minutes / Seconds
   - Numbers updating every 1 second

3. Check visual properties:
   - Background is **gradient** (red to green)
   - Blocks have **gold** background (#D69E2E)
   - Numbers are **red** (#C53030)
   - Layout is **1x4 grid** (all sizes)

4. Verify timer functionality:
   - Screenshot at time T
   - Wait 5 seconds
   - Screenshot at time T+5
   - Verify seconds decreased by 5

5. Inspect elements:
   ```
   - Find elements with class: christmas-gold, christmas-red
   - Verify background-color computed style matches
   ```

**Success Criteria:**
- ✅ All 4 countdown blocks visible
- ✅ Gold and red colors correct
- ✅ Numbers updating every second
- ✅ Gradient background visible
- ✅ Layout is responsive

#### Render Check: Gift Grid Section
1. Look for gift grid section (after countdown)
2. Verify all 6 cards visible:
   - 🎁 Joy & Laughter
   - 🎄 Festive Cheer
   - ❄️ Winter Wonder
   - 🏠 Warm Gatherings
   - 🍪 Special Treats
   - ✨ Bright Lights

3. Check visual properties per card:
   - White background
   - **Red/Gold gradient** header
   - Card emoji in header
   - Card title visible
   - Description text visible

4. Test hover effect:
   - Hover over one card
   - Verify **shadow increases** (deeper shadow)
   - Verify card **scales up** slightly
   - Release hover, effect disappears

5. Verify grid layout:
   - Desktop (1280px): 3 columns visible
   - Tablet (768px): 2 columns
   - Mobile (375px): 1 column (TEST CASE 3)

**Success Criteria:**
- ✅ All 6 cards visible
- ✅ Emojis display correctly
- ✅ Text readable and aligned
- ✅ Gradient headers visible
- ✅ Hover effects working
- ✅ Grid responsive

#### Render Check: Footer
1. Scroll to bottom of page
2. Verify footer content:
   - Text: "Made with ❤️ for the holiday season"
   - Social icons: f (Facebook) and 📷 (Instagram)
   - Copyright text

3. Check visual properties:
   - Background is **dark** (slate-900)
   - Text is **white**
   - Social icons are **large** (≥24px)

4. Test social icons:
   - Hover over Facebook icon
   - Verify **color changes** to red
   - Hover over Instagram icon
   - Verify **color changes** to gold

**Success Criteria:**
- ✅ Footer content visible
- ✅ Social icons interactive
- ✅ Colors match theme

### Test Steps for Implementation 2: Multi-Section Page

#### Render Check: Hero Section
1. Verify hero content:
   - Title: "Christmas Celebration" (white)
   - "Celebration" in **gold** color
   - Subtitle text visible
   - Button: "Discover More"

2. Check visual properties:
   - Background is **gradient** (green to slate)
   - Title is **bold and large**
   - Button is **red** with hover effect
   - Snow animation visible (optional)

3. Button interaction:
   - Hover over "Discover More"
   - Verify **scale-up** (1.1x larger)
   - Verify **shadow glow**

**Success Criteria:**
- ✅ Hero content visible
- ✅ Gradient background correct
- ✅ Button hover works
- ✅ Layout centered

#### Render Check: Features Section
1. Verify all 6 feature cards visible:
   - Section heading: "Why Celebrate With Us?"
   - Cards in grid layout

2. Check each card contains:
   - Large emoji icon (≥40px)
   - Card title (bold)
   - Card description (readable)

3. Verify card styling:
   - Light background (slate-50 → slate-100 gradient)
   - Shadow visible
   - No overflow

4. Test hover effect:
   - Hover over card
   - Verify card **lifts up** (translate-y: -2)
   - Verify **shadow increases**
   - Effect smooth (300ms transition)

5. Grid layout:
   - Desktop: 3 columns
   - Tablet: 2 columns
   - Mobile: 1 column

**Success Criteria:**
- ✅ All 6 cards visible
- ✅ Icons and text readable
- ✅ Hover effects smooth
- ✅ Grid responsive
- ✅ Spacing consistent

#### Render Check: CTA Section
1. Verify CTA section visible (below features):
   - Heading: "Ready to Join the Magic?"
   - Subtitle text
   - Email input field
   - "Sign Up" button

2. Check visual properties:
   - Background is **gradient** (red→green→gold)
   - Text is **white**
   - Input has **white background**
   - Button is **white** with **red text**

3. Test form interaction:
   - Click email input
   - Type: "test@example.com"
   - Click "Sign Up" button
   - Verify success message appears: "✓ Thank you! Check your email for details."
   - Verify message disappears after 3 seconds
   - Verify input cleared

4. Test form validation:
   - Click "Sign Up" without entering email
   - Verify browser validates (HTML5)
   - Type partial email: "test@"
   - Try to submit (should fail validation)

**Success Criteria:**
- ✅ Form visible and styled correctly
- ✅ Input accepts text
- ✅ Submit works
- ✅ Success message appears
- ✅ Auto-hide works (3 seconds)
- ✅ Gradient background visible

#### Render Check: Footer
1. Verify footer visible with 3 columns:
   - About column
   - Links column (Home, Events, Contact)
   - Social column (f and 📷)

2. Check styling:
   - Dark background (slate-900)
   - White text
   - Links are clickable
   - Social icons interactive

**Success Criteria:**
- ✅ All columns visible
- ✅ Links clickable
- ✅ Social icons interactive
- ✅ Responsive layout

### Test Steps for Implementation 3: Component Library

#### Render Check: Page Structure
1. Verify page loaded with:
   - Title: "Christmas Component Library"
   - Subtitle text
   - Multiple sections with components

#### Render Check: Button Variants & Sizes
1. Verify buttons section visible with 3 subsections:
   - Primary Variant: 3 buttons (sm, md, lg)
   - Secondary Variant: 3 buttons (sm, md, lg)
   - Outline Variant: 3 buttons (sm, md, lg)

2. Check Primary buttons:
   - Small: px-4 py-2 text-sm
   - Medium: px-6 py-3 text-base
   - Large: px-8 py-4 text-lg
   - All have **red** background (#C53030)
   - Hover effect: **scale-up** + **red shadow**

3. Check Secondary buttons:
   - Same sizes as primary
   - **Green** background (#2F855A)
   - Hover effect: **scale-up** + **green shadow**

4. Check Outline buttons:
   - **Gold border** (#D69E2E)
   - **Gold text** until hover
   - Hover: background becomes **gold**, text becomes **white**

**Success Criteria:**
- ✅ All 9 buttons visible
- ✅ Sizes correct (sm → md → lg)
- ✅ Colors match theme
- ✅ Hover effects work

#### Render Check: Card Component
1. Verify 2 cards visible with sections:
   - Card Header (gradient background)
   - Card Body (white background)
   - Card Footer (slate-50 background)

2. Check card 1:
   - Header: "Card Title" in white
   - Body: description text + badge
   - Footer: "Action" button (outline variant)

3. Check card 2:
   - Header: "Holiday Special" in white
   - Body: description text + badge
   - Footer: "Learn More" button (primary variant)

4. Verify styling:
   - Headers have **gradient** (red→gold)
   - Body has white background
   - Footer has light background with border-top
   - Shadows visible
   - Hover: shadow increases (hover:shadow-xl)

**Success Criteria:**
- ✅ Both cards visible
- ✅ Composable sections working
- ✅ Gradient headers correct
- ✅ Buttons integrated

#### Render Check: Badge Component
1. Verify badges section visible with 4 variants:
   - Red badge
   - Green badge
   - Gold badge
   - Slate badge

2. Check each badge:
   - Inline display (not block)
   - Rounded corners
   - Correct text color
   - Correct background color

**Success Criteria:**
- ✅ All 4 variants visible
- ✅ Colors match theme
- ✅ Styling consistent

#### Render Check: Alert Component
1. Verify alerts section visible with up to 4 alerts:
   - Success (green background, white border-left)
   - Error (red background, white border-left)
   - Warning (yellow background, white border-left)
   - Info (blue background, white border-left)

2. Check each alert contains:
   - Icon (✓, ✕, ⚠, ℹ)
   - Title (optional)
   - Message text
   - Close button (✕)

3. Test close functionality:
   - Click close (✕) button
   - Alert disappears immediately
   - Other alerts remain visible

**Success Criteria:**
- ✅ All alerts visible initially
- ✅ Icons display correctly
- ✅ Close button works
- ✅ Proper styling per type

#### Render Check: Container Component
1. Verify container section visible with 2 examples:
   - Small Container (max-w-sm)
   - Large Container (max-w-lg)

2. Check container widths:
   - Small: ~384px max-width
   - Large: ~512px max-width
   - Both centered (mx-auto)
   - Both have padding (px-4 sm:px-6 lg:px-8)

**Success Criteria:**
- ✅ Containers visible
- ✅ Max-widths respected
- ✅ Responsive padding

### Visual Verification Checklist

**Colors:**
- [ ] Red (#C53030) appears in correct places
- [ ] Green (#2F855A) appears in gradients/buttons
- [ ] Gold (#D69E2E) appears in accents
- [ ] White text on dark backgrounds
- [ ] Dark text on light backgrounds

**Typography:**
- [ ] Headings are bold
- [ ] Responsive font sizes (text-lg on mobile, text-4xl on desktop)
- [ ] Text is readable (no small unreadable text)
- [ ] Proper line spacing

**Spacing:**
- [ ] Consistent padding (4px base units)
- [ ] No crowded elements
- [ ] White space balanced
- [ ] Margins between sections

**Shadows & Effects:**
- [ ] Shadows on cards/buttons
- [ ] Hover effects smooth
- [ ] Transitions 300ms
- [ ] No flickering

**Accessibility:**
- [ ] Buttons have sufficient size (≥44px)
- [ ] Text contrast sufficient
- [ ] Focus states visible (Tab key)

### Success Criteria (Overall)
- ✅ All components render without errors
- ✅ Colors match theme specifications
- ✅ Typography is readable
- ✅ Spacing is balanced
- ✅ Hover effects work
- ✅ No visual glitches
- ✅ No console errors

### Failure Handling
| Issue | Check | Fix |
|-------|-------|-----|
| Colors wrong | DevTools → Computed Styles | Check tailwind.config.js |
| Text unreadable | Use DevTools color picker | Verify contrast ratio |
| Hover doesn't work | Check className in component | Verify hover: classes present |
| Layout broken | Check screen width | Run TEST CASE 3 |

---

## TEST CASE 3: Responsiveness & Mobile Compatibility

**Category:** Responsive Design Validation  
**Priority:** P0 (Critical)  
**Estimated Duration:** 7-10 minutes per implementation

### Objective
Verify that layouts adapt correctly to mobile (375px), tablet (768px), and desktop (1280px) screen sizes with no overflow, broken layouts, or text visibility issues.

### Preconditions
- Dev server running (`pnpm dev`)
- Browser DevTools open (F12)
- Previous tests (TEST CASE 1-2) passed
- Network throttling **disabled** (for accurate sizing)

### Test Equipment/Tools
- **DevTools Device Emulation** (built into Chrome, Firefox, Edge)
- **Screen sizes:** 375px (mobile), 768px (tablet), 1280px (desktop)
- **Physical devices** (optional): iPhone, iPad, desktop

### Test Steps: Device Emulation

#### Setup: Enable Device Emulation
```
1. Open DevTools (F12)
2. Click toggle device emulation icon (Ctrl+Shift+M / Cmd+Shift+M)
3. Set viewport to specific dimensions using dropdown
```

#### Mobile Viewport: 375px (iPhone SE)

##### Global Checks
1. **No horizontal scrollbar:**
   - View page
   - Scroll horizontally
   - ✅ Should NOT be able to scroll left/right

2. **Viewport scaling:**
   - Check meta viewport tag exists in HTML head:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     ```

3. **Touch target sizes:**
   - All buttons: ≥44px height
   - All inputs: ≥44px height
   - Spacing between targets: ≥8px

4. **Text readability:**
   - No text smaller than 14px
   - Line height sufficient (≥1.5x)
   - Contrast ratio ≥4.5:1

##### Implementation 1: Landing Page (375px)

**Hero Section:**
- [ ] Title stacks vertically (not side-by-side)
- [ ] Title is readable (14px+ font)
- [ ] Button spans appropriate width (no stretching)
- [ ] Snow animation visible (less intense is ok)

**Countdown Section:**
- [ ] 4 blocks stack 2x2 grid (2 rows, 2 columns)
- [ ] Each block ≥44px height
- [ ] Numbers visible and readable
- [ ] No overflow on edges

**Gift Grid:**
- [ ] Grid shows 1 column (full width per card)
- [ ] Cards don't overflow screen width
- [ ] Emojis visible
- [ ] Title and description text readable
- [ ] Spacing between cards (gap: 1rem minimum)

**Footer:**
- [ ] Footer content stacks vertically
- [ ] Social icons visible
- [ ] Text readable

**Measurement Guide:**
```
375px width breakdown:
- Content: 375px (full width)
- Padding: 16px left + 16px right = 32px
- Available: 343px for content
- Card width: ≈343px (fits with padding)
```

##### Implementation 2: Multi-Section Page (375px)

**Hero Section:**
- [ ] Title stacked vertically
- [ ] Button full width or ≥60% width
- [ ] All text readable

**Features Section:**
- [ ] Cards in 1 column
- [ ] Each card ≥150px height (readable content)
- [ ] Emojis visible
- [ ] Title bold and readable

**CTA Section:**
- [ ] Input and button **stack vertically** (not side-by-side)
- [ ] Input ≥40px height
- [ ] Button ≥40px height
- [ ] Width responsive to screen

**Footer:**
- [ ] Columns stack vertically (1 column layout)
- [ ] All text readable

##### Implementation 3: Component Library (375px)

**General:**
- [ ] Page scrollable top to bottom
- [ ] All components visible

**Buttons Section:**
- [ ] Buttons stack vertically
- [ ] Size progression visible (sm → md → lg)
- [ ] No text cutoff

**Cards:**
- [ ] Full width with padding
- [ ] Content readable
- [ ] Footer button visible

**Badges:**
- [ ] Badges wrap to multiple lines if needed
- [ ] Text readable

**Alerts:**
- [ ] Alerts span full width (with padding)
- [ ] Title, icon, message visible
- [ ] Close button ≥44px

**Container:**
- [ ] Containers adjust to 375px width
- [ ] Padding visible
- [ ] Content readable

#### Tablet Viewport: 768px (iPad)

##### Global Checks (768px)
1. **Multi-column layouts appear:**
   - Check grids switch to 2 columns
   - Check spacing increases
   - Check larger fonts apply

2. **Tablet-specific styles:**
   - Tailwind `md:` breakpoint classes apply
   - Spacing increases from mobile

##### Implementation 1: Landing Page (768px)

**Gift Grid:**
- [ ] Grid switches to 2 columns
- [ ] Cards maintain aspect ratio
- [ ] Spacing between cards increases
- [ ] No overflow

**Countdown:**
- [ ] Stays 1x4 grid (or switches to 2x2, both acceptable)
- [ ] Block sizes increase slightly
- [ ] Numbers more readable

##### Implementation 2: Multi-Section Page (768px)

**Features Section:**
- [ ] **MUST switch to 2 columns** (md:grid-cols-2)
- [ ] 6 cards should display as 2 rows × 3 columns would at desktop, but 2×3 at tablet
- [ ] Each card has adequate spacing
- [ ] No overlap

**CTA Section:**
- [ ] Input and button **should be side-by-side** at 768px (flex-row)
- [ ] Input takes more width
- [ ] Button takes less width
- [ ] Both ≥40px height

##### Implementation 3: Component Library (768px)

**Showcase:**
- [ ] Button sections display 2-3 buttons per row (not stacked)
- [ ] Content flows well
- [ ] No excessive white space

#### Desktop Viewport: 1280px

##### Global Checks (1280px)
1. **Max-width containers:**
   - Check containers don't expand beyond max-width
   - Check centered with equal margins
   - Check adequate padding on edges

2. **Full layouts visible:**
   - 3-column grids should be visible
   - All content accessible without scrolling past fold
   - Hover effects work (not just touch devices)

##### Implementation 1: Landing Page (1280px)

**Gift Grid:**
- [ ] **MUST show 3 columns** (lg:grid-cols-3)
- [ ] All 6 cards visible in 2 rows
- [ ] Spacing consistent
- [ ] No excessive width per card

##### Implementation 2: Multi-Section Page (1280px)

**Features Section:**
- [ ] **MUST show 3 columns** (lg:grid-cols-3)
- [ ] All 6 cards in single view (1 row)
- [ ] Cards evenly spaced

**CTA Section:**
- [ ] Form displays optimally (not stretched)
- [ ] Input and button clear sizes

##### Implementation 3: Component Library (1280px)

**Showcase:**
- [ ] Multiple components visible per row
- [ ] Good use of space
- [ ] Content not cramped

### Responsive Test Scenarios

#### Scenario 1: Dynamic Resizing
1. Start at 375px
2. Gradually resize to 768px
3. Watch grid change from 1 → 2 columns
4. Continue to 1280px
5. Watch grid change to 3 columns
6. **Success:** Smooth transitions, no jump/flicker, layouts snap at breakpoints

#### Scenario 2: Touch Interaction (Virtual)
1. Use touch emulation (DevTools)
2. Tap buttons on mobile view (375px)
3. **Success:** Buttons respond, no delay, size adequate for touch

#### Scenario 3: Text Overflow
1. Enable "Responsive Design Mode" in Firefox
2. Test at 320px (minimal width)
3. **Success:** 
   - Text wraps appropriately
   - No horizontal scroll needed
   - Content remains readable

#### Scenario 4: Form Input Focus
1. At 375px, click email input
2. **Success:**
   - Focus ring visible
   - Keyboard appears (if on real device)
   - Input doesn't jump position
   - Input remains visible (not covered by keyboard)

### Tailwind Breakpoint Verification

**Check that responsive classes are used:**

```
Expected patterns:
✅ sm:px-6 (small padding at mobile)
✅ md:grid-cols-2 (2 columns at tablet)
✅ lg:grid-cols-3 (3 columns at desktop)
✅ sm:text-base (larger text on mobile)
✅ lg:text-lg (even larger on desktop)
```

**Verify in DevTools:**
```
1. Right-click element
2. Inspect
3. In Elements panel, check classes
4. Resize viewport
5. Watch classes apply/remove dynamically
```

### Responsive Layout Grid Reference

| Screen | Width | Columns | Padding | Card Width |
|--------|-------|---------|---------|-----------|
| Mobile | 375px | 1 | 16px | ~343px |
| Tablet | 768px | 2 | 24px | ~360px |
| Desktop | 1280px | 3 | 32px | ~380px |

### Common Mobile Issues to Check

| Issue | Check | Fix |
|-------|-------|-----|
| Text too small | font-size | Use sm:text-lg, md:text-xl |
| Buttons too small | button height | Ensure ≥44px on mobile |
| Grid too narrow | gap size | Increase gap:4 to gap:6 |
| Input hidden by keyboard | position | Use scrollIntoView() if needed |
| Hero image stretched | aspect-ratio | Set fixed ratio |

### Success Criteria

**Mobile (375px):**
- ✅ No horizontal scrolling
- ✅ Text readable (14px+)
- ✅ Buttons ≥44px height
- ✅ Single column grids
- ✅ Proper spacing between elements
- ✅ Footer accessible without excessive scrolling

**Tablet (768px):**
- ✅ Multi-column layouts (2 columns)
- ✅ Larger font sizes
- ✅ Increased spacing
- ✅ Form inputs side-by-side (if CTA)
- ✅ Good use of space

**Desktop (1280px):**
- ✅ 3-column grids visible
- ✅ All content accessible
- ✅ Max-width containers centered
- ✅ Adequate padding on edges
- ✅ Hover effects visible/working
- ✅ No excessive width stretching

**Cross-Device:**
- ✅ Consistent spacing (Tailwind scale)
- ✅ No layout shifts
- ✅ Smooth breakpoint transitions
- ✅ All content readable
- ✅ Touch targets adequate
- ✅ No text overflow

### Verification Checklist

**Layout Grid:**
- [ ] Mobile: 1 column visible
- [ ] Tablet: 2 columns visible
- [ ] Desktop: 3 columns visible
- [ ] No overflow at any size

**Typography:**
- [ ] Text readable at all sizes
- [ ] No text < 14px on mobile
- [ ] Line height adequate (≥1.5x)
- [ ] Line length reasonable (≤75 characters)

**Spacing:**
- [ ] Consistent gutters (gap: 1rem minimum)
- [ ] Padding scales with breakpoints
- [ ] No crowded elements
- [ ] White space balanced

**Interactive Elements:**
- [ ] Buttons ≥44px
- [ ] Inputs ≥44px
- [ ] Hover effects smooth
- [ ] Touch targets spacious

**Edge Cases:**
- [ ] 320px width (edge case)
- [ ] 2560px width (large desktop)
- [ ] Landscape orientation (tablets)
- [ ] Zoom levels (browser zoom in/out)

### Automated Responsive Testing

```bash
# Using responsive design mode in Firefox
# Or using Chrome DevTools with saved device presets

# Manual test at key breakpoints:
# 1. 320px (iPhone 5)
# 2. 375px (iPhone SE)
# 3. 414px (iPhone 12)
# 4. 768px (iPad)
# 5. 1024px (iPad Pro)
# 6. 1280px (Desktop)
# 7. 1920px (Full HD)
```

---

## Summary: Test Case Execution

### Quick Reference

| Test Case | Duration | Effort | Critical? |
|-----------|----------|--------|-----------|
| **TC1: Bootstrapping** | 3-5 min | Easy | ✅ YES |
| **TC2: UI Rendering** | 5-10 min | Medium | ✅ YES |
| **TC3: Responsiveness** | 7-10 min | Medium | ✅ YES |
| **TOTAL** | **15-25 min** | **Medium** | **3/3** |

### Execution Order
1. ✅ **TC1** first (verify setup)
2. ✅ **TC2** next (verify rendering)
3. ✅ **TC3** last (verify responsiveness)

### Per Implementation
- Execute all 3 test cases for each implementation
- Run sequentially or in parallel (recommended: sequential first)
- Document results in test report

### Pass/Fail Criteria
- **PASS:** All success criteria met for all 3 test cases
- **FAIL:** Any critical criterion not met
- **CONDITIONAL PASS:** Minor visual issues not blocking functionality

---

**End of Test Cases Documentation**
