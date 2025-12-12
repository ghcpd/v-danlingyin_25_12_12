# Implementation 3: Component Library

A reusable, production-ready UI component library with interactive showcase. Demonstrates component composition, variants, and prop patterns.

## 🎄 Components

✅ **Button Component**
- 3 Variants: `primary` (red), `secondary` (green), `outline` (gold)
- 3 Sizes: `sm`, `md`, `lg`
- Props: `variant`, `size`, standard HTML button attributes
- Hover effects: scale, shadow glow
- Fully typed with TypeScript

✅ **Card Component**
- Composable structure: `Card.Header`, `Card.Body`, `Card.Footer`
- Gradient header (red→gold)
- Hover shadow elevation
- Flexible content structure

✅ **Badge Component**
- 4 Variants: `red`, `green`, `gold`, `slate`
- Inline display with rounded corners
- Status/tag use cases
- Light background with dark text

✅ **Alert Component**
- 4 Types: `success`, `error`, `warning`, `info`
- Custom icons for each type
- Optional close button
- Semantic HTML with role="alert"

✅ **Container Component**
- 5 Width Options: `sm`, `md`, `lg`, `xl`, `2xl`
- Responsive padding
- Max-width constraints
- Centered layout

✅ **Showcase Component**
- Interactive demo page
- All components and variants displayed
- Component states and interactions
- Code reference

## 📁 Project Structure

```
Implementation3-ComponentLibrary/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── src/
    ├── main.tsx           (React entry point)
    ├── App.tsx            (Renders Showcase)
    ├── index.css          (Tailwind styles)
    └── components/
        ├── Button.tsx     (Button with variants)
        ├── Card.tsx       (Composable card)
        ├── Badge.tsx      (Status badges)
        ├── Alert.tsx      (Alert notifications)
        ├── Container.tsx  (Layout container)
        ├── Showcase.tsx   (Demo page)
        └── index.ts       (Barrel export)
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# Opens http://localhost:5173

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Theme

- **Colors:** Red (#C53030), Green (#2F855A), Gold (#D69E2E)
- **Base Colors:** White, slate-50-900 (grayscale)
- **Spacing:** 4px base unit (Tailwind scale)
- **Typography:** System font stack with responsive sizing
- **Shadows:** Multi-level elevation (md, lg, xl)

## ⚙️ Technologies

- React 18
- TypeScript 5
- Tailwind CSS 3.4
- Vite 5
- PostCSS + Autoprefixer

## 📊 Component API Reference

### Button

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';  // default: 'primary'
  size?: 'sm' | 'md' | 'lg';                      // default: 'md'
  children: ReactNode;
}

// Usage:
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary" size="md">Action</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

### Card

```typescript
interface CardProps {
  children: ReactNode;
  className?: string;
}

// Usage:
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

### Badge

```typescript
interface BadgeProps {
  variant?: 'red' | 'green' | 'gold' | 'slate';  // default: 'red'
  children: React.ReactNode;
  className?: string;
}

// Usage:
<Badge variant="gold">Featured</Badge>
<Badge variant="green">Active</Badge>
```

### Alert

```typescript
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

// Usage:
<Alert type="success" title="Success!">
  Operation completed successfully.
</Alert>
```

### Container

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';  // default: 'lg'
}

// Usage:
<Container maxWidth="xl">Content</Container>
```

## 🎯 Component Implementation Details

### Button Variants

| Variant | Background | Hover Effect |
|---------|-----------|--------------|
| primary | Red (#C53030) | Scale 1.05 + red shadow |
| secondary | Green (#2F855A) | Scale 1.05 + green shadow |
| outline | Transparent | Gold background + scale 1.05 |

### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| sm | px-4 py-2 | text-sm |
| md | px-6 py-3 | text-base |
| lg | px-8 py-4 | text-lg |

### Card Structure

```typescript
// Compound component pattern
<Card className="custom-class">
  <Card.Header className="bg-custom">Header Content</Card.Header>
  <Card.Body className="p-custom">Body Content</Card.Body>
  <Card.Footer className="bg-slate-50">Footer Content</Card.Footer>
</Card>
```

### Alert Types

| Type | Background | Border | Icon |
|------|-----------|--------|------|
| success | green-50 | green-200 | ✓ |
| error | red-50 | red-200 | ✕ |
| warning | yellow-50 | yellow-200 | ⚠ |
| info | blue-50 | blue-200 | ℹ |

## 🔄 Showcase Page Structure

The Showcase component demonstrates:
1. **Buttons Section** - 9 variations (3 variants × 3 sizes)
2. **Cards Section** - 2 cards with header/body/footer
3. **Badges Section** - 4 color variants
4. **Alerts Section** - 4 types with close functionality
5. **Container Section** - Different max-widths

## ✅ Testing Checklist

- [ ] `pnpm install` completes without errors
- [ ] `pnpm dev` starts successfully
- [ ] Showcase page loads in browser
- [ ] All buttons are clickable
- [ ] Button hover effects work (scale, shadow)
- [ ] Cards display with proper structure
- [ ] Card headers have gradient background
- [ ] Badges show correct colors
- [ ] Alerts display with correct icons
- [ ] Alert close buttons work
- [ ] Containers respect max-width constraints
- [ ] Mobile (375px): Showcase is fully readable
- [ ] Tablet (768px): Grid layouts work
- [ ] Desktop (1280px): Full showcase visible
- [ ] No console errors

## 📖 Usage Examples

### Button Patterns

```typescript
// Primary action
<Button onClick={handleSubmit}>Submit Form</Button>

// Secondary action
<Button variant="secondary">Cancel</Button>

// Destructive action
<Button variant="outline">Delete</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card Patterns

```typescript
// Product card
<Card>
  <Card.Header>Product Name</Card.Header>
  <Card.Body>
    <p>Description</p>
    <Badge variant="gold">On Sale</Badge>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary" size="sm">Buy</Button>
  </Card.Footer>
</Card>

// Info card
<Card>
  <Card.Header>Information</Card.Header>
  <Card.Body>Details here</Card.Body>
</Card>
```

### Alert Patterns

```typescript
// Form submission
<Alert type="success" title="Saved">
  Your changes have been saved.
</Alert>

// Error handling
<Alert type="error" title="Error">
  Something went wrong. Please try again.
</Alert>

// Dismissible alert
const [showAlert, setShowAlert] = useState(true);

{showAlert && (
  <Alert 
    type="warning" 
    title="Warning"
    onClose={() => setShowAlert(false)}
  >
    Please review the changes.
  </Alert>
)}
```

## 🎓 Design Patterns Demonstrated

1. **Compound Components** - Card with composable sections
2. **Variant Pattern** - Multiple button/badge styles
3. **State Management** - Alert dismissal with state
4. **Type Safety** - Full TypeScript interfaces
5. **Composition** - Flexible content structure
6. **Responsive Design** - All components mobile-friendly
7. **Accessibility** - Semantic HTML, ARIA roles
8. **CSS-in-JS** - Tailwind class composition

## 📈 Performance

- **Component Library:** ~30KB JavaScript
- **Showcase Page:** Fast interactive demo
- **No Runtime Dependencies:** Pure React + Tailwind

## 🎨 Customization Guide

### Adding a New Component

1. Create file: `src/components/NewComponent.tsx`
2. Define TypeScript interface
3. Implement component with Tailwind classes
4. Export from `src/components/index.ts`
5. Add to Showcase.tsx demo

### Adding a New Variant

```typescript
// Example: Add 'danger' variant to Button
const variantClasses = {
  // ... existing variants
  danger: 'bg-red-600 text-white hover:shadow-lg hover:shadow-red-600/50',
};
```

## 🧪 Testing Components

### Unit Test Example

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click Me');
});

test('applies variant classes', () => {
  render(<Button variant="primary">Test</Button>);
  expect(screen.getByRole('button')).toHaveClass('bg-christmas-red');
});
```

## 📦 Export Pattern

All components are exported via barrel export:

```typescript
// src/components/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Badge } from './Badge';
export { Alert } from './Alert';
export { Container } from './Container';

// Usage:
import { Button, Card, Badge } from './components';
```

---

**Built with ❤️ for the holiday season** 🎄
