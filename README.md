# Redraft UI

A collection of 55 React components built on [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/) conventions. TypeScript-first, fully accessible, and styled with Tailwind CSS v4.

## Overview

These are copy-paste components, not an npm package. Each component is a `.tsx` file you own and modify directly. The design system uses OKLch colors with full light/dark mode support, CVA-based variant APIs, and Radix UI primitives for accessible behavior.

**Stack:** React 19 · TypeScript · Tailwind CSS v4 · Radix UI · class-variance-authority

---

## Components

### Forms & Inputs
| Component | File | Description |
|---|---|---|
| Button | `components/ui/button.tsx` | 6 variants × 8 sizes, supports `asChild` |
| Button Group | `components/ui/button-group.tsx` | Groups buttons into a connected row |
| Input | `components/ui/input.tsx` | Text input with focus ring and error states |
| Input Group | `components/ui/input-group.tsx` | Input with leading/trailing addons |
| Textarea | `components/ui/textarea.tsx` | Multi-line text input |
| Select | `components/ui/select.tsx` | Radix-based dropdown select |
| Native Select | `components/ui/native-select.tsx` | Browser-native `<select>` wrapper |
| Combobox | `components/ui/combobox.tsx` | Searchable select with Command |
| Checkbox | `components/ui/checkbox.tsx` | Radix checkbox with indeterminate state |
| Radio Group | `components/ui/radio-group.tsx` | Accessible radio button group |
| Switch | `components/ui/switch.tsx` | Toggle switch |
| Slider | `components/ui/slider.tsx` | Range slider |
| Toggle | `components/ui/toggle.tsx` | Pressable toggle button |
| Toggle Group | `components/ui/toggle-group.tsx` | Single or multi-select toggle set |
| Calendar | `components/ui/calendar.tsx` | Date picker built on react-day-picker |
| Input OTP | `components/ui/input-otp.tsx` | One-time password input |
| Label | `components/ui/label.tsx` | Accessible form label |
| Field | `components/ui/field.tsx` | Form field wrapper with label and error |

### Overlays & Dialogs
| Component | File | Description |
|---|---|---|
| Dialog | `components/ui/dialog.tsx` | Modal dialog |
| Alert Dialog | `components/ui/alert-dialog.tsx` | Confirmation dialog |
| Sheet | `components/ui/sheet.tsx` | Slide-in panel (top/right/bottom/left) |
| Drawer | `components/ui/drawer.tsx` | Bottom sheet drawer (mobile-first) |
| Popover | `components/ui/popover.tsx` | Floating content panel |
| Hover Card | `components/ui/hover-card.tsx` | Popover on hover |
| Tooltip | `components/ui/tooltip.tsx` | Short contextual hint |
| Dropdown Menu | `components/ui/dropdown-menu.tsx` | Context-style dropdown |
| Context Menu | `components/ui/context-menu.tsx` | Right-click menu |

### Navigation
| Component | File | Description |
|---|---|---|
| Tabs | `components/ui/tabs.tsx` | Tabbed content sections |
| Breadcrumb | `components/ui/breadcrumb.tsx` | Hierarchical path navigation |
| Navigation Menu | `components/ui/navigation-menu.tsx` | Top-level nav with dropdowns |
| Menubar | `components/ui/menubar.tsx` | Desktop-style menu bar |
| Pagination | `components/ui/pagination.tsx` | Page navigation controls |
| Sidebar | `components/ui/sidebar.tsx` | Collapsible app sidebar |
| Command | `components/ui/command.tsx` | Command palette (cmdk-based) |

### Layout & Structure
| Component | File | Description |
|---|---|---|
| Card | `components/ui/card.tsx` | Content container with header/footer/action |
| Separator | `components/ui/separator.tsx` | Horizontal or vertical divider |
| Scroll Area | `components/ui/scroll-area.tsx` | Custom scrollbar container |
| Resizable | `components/ui/resizable.tsx` | Drag-to-resize panel layout |
| Collapsible | `components/ui/collapsible.tsx` | Expandable/collapsible section |
| Aspect Ratio | `components/ui/aspect-ratio.tsx` | Fixed aspect ratio container |
| Carousel | `components/ui/carousel.tsx` | Embla-based content slider |

### Data Display
| Component | File | Description |
|---|---|---|
| Table | `components/ui/table.tsx` | Semantic HTML table |
| Avatar | `components/ui/avatar.tsx` | Image with initials fallback |
| Badge | `components/ui/badge.tsx` | Status label |
| Chart | `components/ui/chart.tsx` | Recharts wrapper with theme tokens |
| Item | `components/ui/item.tsx` | Generic list item primitive |
| Empty | `components/ui/empty.tsx` | Empty state with icon/message |

### Feedback & Status
| Component | File | Description |
|---|---|---|
| Alert | `components/ui/alert.tsx` | Inline feedback message |
| Progress | `components/ui/progress.tsx` | Progress bar |
| Skeleton | `components/ui/skeleton.tsx` | Loading placeholder |
| Spinner | `components/ui/spinner.tsx` | Loading spinner |
| Sonner | `components/ui/sonner.tsx` | Toast notification (sonner-based) |

### Utilities
| Component | File | Description |
|---|---|---|
| Kbd | `components/ui/kbd.tsx` | Keyboard shortcut display |
| Direction | `components/ui/direction.tsx` | RTL/LTR direction provider |

---

## Design Tokens

Defined in `globals.css` using OKLch color space. All tokens have light and dark values.

### Colors
| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | white | near-black | Page background |
| `--foreground` | near-black | off-white | Body text |
| `--primary` | dark stone | light stone | Primary actions |
| `--secondary` | light gray | dark muted | Secondary surfaces |
| `--muted` | light gray | dark muted | Subdued backgrounds |
| `--muted-foreground` | medium gray | medium warm | Placeholder, captions |
| `--accent` | light gray | dark muted | Hover states |
| `--destructive` | red | lighter red | Error, delete actions |
| `--border` | warm gray | white/10% | Borders, dividers |
| `--input` | warm gray | white/15% | Input backgrounds |
| `--ring` | medium warm | muted warm | Focus rings |
| `--card` | white | dark stone | Card surfaces |
| `--popover` | white | dark stone | Overlay surfaces |

Chart colors: `--chart-1` through `--chart-5` — a warm amber-to-red scale.

Sidebar tokens: `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-accent`, `--sidebar-border`, `--sidebar-ring`.

### Radius
Base radius is `0.625rem`. All other radii scale from it:

```css
--radius-sm:  calc(var(--radius) * 0.6)   /* 0.375rem */
--radius-md:  calc(var(--radius) * 0.8)   /* 0.5rem   */
--radius-lg:  var(--radius)               /* 0.625rem */
--radius-xl:  calc(var(--radius) * 1.4)   /* 0.875rem */
--radius-2xl: calc(var(--radius) * 1.8)   /* 1.125rem */
--radius-3xl: calc(var(--radius) * 2.2)   /* 1.375rem */
--radius-4xl: calc(var(--radius) * 2.6)   /* 1.625rem */
```

---

## Component API Conventions

**Variants via CVA.** Most interactive components expose a `variant` and/or `size` prop generated with `class-variance-authority`:

```tsx
// Button example
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive" size="lg">Delete Account</Button>
<Button variant="ghost" size="icon"><TrashIcon /></Button>
```

**`asChild` pattern.** Components that accept `asChild` delegate rendering to their child element via Radix `Slot`, letting you compose with `Link`, `a`, or any element:

```tsx
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

**`data-slot` attributes.** Sub-components use `data-slot` for CSS targeting:

```tsx
<Card>
  <CardHeader>         {/* data-slot="card-header" */}
    <CardTitle />      {/* data-slot="card-title" */}
    <CardAction />     {/* data-slot="card-action" — positioned top-right */}
  </CardHeader>
  <CardContent />      {/* data-slot="card-content" */}
  <CardFooter />       {/* data-slot="card-footer" */}
</Card>
```

**Compound exports.** Components with sub-parts export everything from one file:

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
```

---

## Button Variants Reference

```tsx
variant: "default"     // dark fill, primary action
variant: "outline"     // bordered, secondary action
variant: "secondary"   // muted fill, low emphasis
variant: "ghost"       // no border/fill, hover only
variant: "destructive" // red tint, delete/error actions
variant: "link"        // underlined text link

size: "default"  // h-9  (36px)
size: "xs"       // h-6  (24px)
size: "sm"       // h-8  (32px)
size: "lg"       // h-10 (40px)
size: "icon"     // 36×36px square
size: "icon-xs"  // 24×24px square
size: "icon-sm"  // 32×32px square
size: "icon-lg"  // 40×40px square
```

---

## Dependencies

```json
{
  "react": "^19.0.0",
  "radix-ui": "^1.4.3",
  "@base-ui/react": "^1.4.1",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.6.0",
  "clsx": "^2.1.1",
  "lucide-react": "^1.16.0",
  "@hugeicons/react": "^1.1.6",
  "embla-carousel-react": "^8.6.0",
  "react-day-picker": "^10.0.1",
  "date-fns": "^4.1.0",
  "react-resizable-panels": "^4.11.1",
  "recharts": "^3.8.0",
  "input-otp": "^1.4.2",
  "sonner": "^2.0.7",
  "vaul": "^1.1.2",
  "cmdk": "^1.1.1",
  "next-themes": "^0.4.6",
  "tw-animate-css": "^1.4.0"
}
```

Utility function (`lib/utils.ts`):

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
