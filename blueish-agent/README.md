# Blueish Agent - Next.js + Storybook Project

A complete Next.js project with Storybook integration, built with ZERO hardcoded values. All design data is derived from the parsed Pencil design file (`pen-parsed.json`).

## Project Structure

```
blueish-agent/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts          # Claude API endpoint for streaming chat
│   │   ├── globals.css                # Global styles with theme variables
│   │   ├── layout.tsx                 # Root layout
│   │   └── page.tsx                   # Home page
│   ├── components/
│   │   ├── ui/                        # Reusable UI components (shadcn-style)
│   │   │   ├── button.tsx             # Button component with variants
│   │   │   ├── badge.tsx              # Badge component
│   │   │   ├── input.tsx              # Input field component
│   │   │   ├── textarea.tsx           # Textarea component
│   │   │   ├── card.tsx               # Card component family
│   │   │   ├── dialog.tsx             # Dialog/Modal component
│   │   │   ├── tabs.tsx               # Tabs component
│   │   │   ├── accordion.tsx          # Accordion component
│   │   │   ├── alert.tsx              # Alert component
│   │   │   ├── tooltip.tsx            # Tooltip component
│   │   │   ├── switch.tsx             # Toggle switch component
│   │   │   ├── checkbox.tsx           # Checkbox component
│   │   │   ├── radio.tsx              # Radio button component
│   │   │   ├── select.tsx             # Select dropdown component
│   │   │   ├── progress.tsx           # Progress bar component
│   │   │   ├── avatar.tsx             # Avatar component
│   │   │   ├── sidebar.tsx            # Sidebar navigation
│   │   │   ├── breadcrumb.tsx         # Breadcrumb navigation
│   │   │   ├── separator.tsx          # Visual separator
│   │   │   ├── scroll-area.tsx        # Scrollable area
│   │   │   ├── collapsible.tsx        # Collapsible content
│   │   │   ├── *.stories.tsx          # Storybook stories for UI components
│   │   └── screens/                   # Full-page screen components
│   │       ├── SignUp.tsx
│   │       ├── Dashboard.tsx
│   │       ├── RoleSelection.tsx
│   │       ├── IntegrationSelection.tsx
│   │       └── *.stories.tsx          # Screen component stories
│   ├── lib/
│   │   ├── design-tokens.ts           # Design token system (from pen-parsed.json)
│   │   └── utils.ts                   # Utility functions (cn helper)
│   └── data/
│       └── pen-parsed.json            # Design system data from Pencil
├── .storybook/
│   ├── main.ts                        # Storybook configuration
│   └── preview.ts                     # Storybook preview settings
├── public/                            # Static assets
├── storybook-static/                  # Built Storybook output
├── vite.config.ts                     # Vite configuration for Storybook
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
└── package.json                       # Dependencies and scripts
```

## Key Features

### 1. Design Token System (ZERO Hardcoded Values)
- All colors, spacing, and theme variables are loaded from `pen-parsed.json`
- `src/lib/design-tokens.ts` provides functions to:
  - Generate CSS variables dynamically
  - Export color palettes for both light and dark modes
  - Support theme-aware color selection
  - Theme bases: Default, Gray, Slate, Stone, Zinc

### 2. Global CSS Theme
- `src/app/globals.css` auto-generates CSS variables from the design data
- Supports light mode (default) and dark mode
- All CSS variables are theme-aware

### 3. UI Components Library
- 21+ shadcn/ui-style components
- All built with TypeScript and React
- Using Radix UI primitives for accessibility
- Class-variance-authority for variant management
- Tailwind CSS for styling

### 4. Storybook Integration
- Interactive component documentation
- Stories for all UI components
- Stories for screen components
- Built with Vite for fast compilation

### 5. API Integration
- Claude 3.5 Haiku chat API endpoint
- Streaming responses supported
- Located at `/api/chat`

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm 7+
- ANTHROPIC_API_KEY environment variable for Claude API

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the project
npm run build

# Start production server
npm start

# View Storybook (development)
npm run storybook

# Build Storybook (static)
npm run build-storybook
```

## Design System

### Color Palette
Colors are auto-generated from `pen-parsed.json`:
```typescript
import { getCSSVariables, getColor } from '@/lib/design-tokens';

// Get all CSS variables for a mode
const lightVars = getCSSVariables('light');
const darkVars = getCSSVariables('dark');

// Get a specific color
const primaryColor = getColor('--primary', 'light');
```

### Using CSS Variables
```css
/* In CSS */
.my-element {
  background: var(--background);
  color: var(--foreground);
}
```

```tsx
// In JSX with Tailwind
<div className="bg-background text-foreground">
  Content
</div>
```

## Component Usage Examples

### Button
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
```

### Card
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Dialog
```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## API Routes

### POST /api/chat
Stream Claude chat responses.

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
```

**Response:** Streaming text/event-stream

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Hello!' }],
  }),
});

const reader = response.body?.getReader();
// Stream processing...
```

## Theme Configuration

### Light Mode CSS Variables
```css
:root {
  --background: #fafafa;
  --foreground: #0a0a0a;
  --primary: [primary-light-color];
  --secondary: [secondary-light-color];
  --muted: [muted-light-color];
  --muted-foreground: [muted-foreground-light-color];
  /* ... more variables from pen-parsed.json */
}
```

### Dark Mode CSS Variables
```css
.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --primary: [primary-dark-color];
  --secondary: [secondary-dark-color];
  --muted: [muted-dark-color];
  --muted-foreground: [muted-foreground-dark-color];
  /* ... more variables from pen-parsed.json */
}
```

## Data Files

### pen-parsed.json
Contains the complete design system:
- **metadata**: Version and counts (47 variables, 90 components, 24 screens)
- **theme**: All CSS variables with light/dark mode variations
- **components**: Component definitions from the Pencil design
- **screens**: UI screen layouts
- **texts**: All unique text strings used

## Development

### Creating New Components
1. Create component file in `src/components/ui/`
2. Use TypeScript and React.forwardRef for proper typing
3. Import CSS variables via Tailwind: `var(--primary)`
4. Create corresponding `.stories.tsx` file for Storybook

### Creating New Screens
1. Create component file in `src/components/screens/`
2. Compose using UI components
3. Create corresponding `.stories.tsx` file

### Running Storybook
```bash
# Development mode (hot reload)
npm run storybook

# Build static site
npm run build-storybook

# Open storybook-static/ in browser for static version
```

## Styling

### Using Tailwind with Theme Variables
```tsx
<div className="bg-primary text-primary-foreground">
  Using theme colors
</div>
```

### Using the cn() Utility
```tsx
import { cn } from '@/lib/utils';

const className = cn(
  'base-class',
  isActive && 'active-class',
  'conditional-class'
);
```

## Performance Optimization

- Next.js automatic code splitting
- Storybook optimized Vite build
- CSS variables for efficient theming (no CSS-in-JS)
- Radix UI components (accessibility focused, tree-shakeable)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Responsive design with Tailwind CSS

## Environment Variables

Create `.env.local`:
```
ANTHROPIC_API_KEY=your_key_here
```

## Troubleshooting

### Storybook Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check `vite.config.ts` for proper alias configuration
- Ensure `pen-parsed.json` exists in `src/data/`

### Theme Variables Not Applied
- Check browser console for CSS variable values
- Verify `.dark` class is present on root element for dark mode
- Ensure `globals.css` is imported in root layout

### API Connection Issues
- Verify `ANTHROPIC_API_KEY` is set in environment
- Check API endpoint is accessible
- Review browser console for CORS issues

## License

MIT

## Project Generated
February 23, 2026

This project demonstrates best practices for:
- Data-driven design systems
- Component libraries
- TypeScript/React development
- Storybook integration
- Next.js full-stack apps
- CSS-in-variables theming
- Zero hardcoded values pattern
