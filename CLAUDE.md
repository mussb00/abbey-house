# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Abbey House is a Next.js 16 application for a plumbing services website (BlueLine Plumbing). The project uses:
- **Next.js 16.1.6** with App Router
- **React 19.2.3**
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (Radix Nova style)
- **Lucide React** for icons

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Intended Site Architecture

This is a **multi-page site** with a hierarchical structure based on Google Business Profile categories and services. The site will have:

1. **Homepage** - Main landing page (content generated using `skills/homepage/`)
2. **Category Pages** - Pages for each Google Business Profile category
3. **Service Pages** - Individual pages for services within each category (hierarchical)
4. **Service Area Pages** - Pages for each geographic service area

### Website Structure Diagram

```
Homepage (/)
│
├── Category 1 (/category-1)
│   ├── Service 1.1 (/category-1/service-1-1)
│   ├── Service 1.2 (/category-1/service-1-2)
│   └── Service 1.3 (/category-1/service-1-3)
│
├── Category 2 (/category-2)
│   ├── Service 2.1 (/category-2/service-2-1)
│   ├── Service 2.2 (/category-2/service-2-2)
│   └── Service 2.3 (/category-2/service-2-3)
│
├── Category N (/category-n)
│   └── Service N.x (/category-n/service-n-x)
│
└── Service Areas
    ├── Area 1 (/service-areas/area-1)
    ├── Area 2 (/service-areas/area-2)
    └── Area N (/service-areas/area-n)
```

### App Router Structure

The above website structure should be reflected in the Next.js App Router as follows:

```
app/
├── page.tsx                           # Homepage
├── layout.tsx                         # Root layout
├── [category]/
│   ├── page.tsx                       # Category landing page (dynamic)
│   └── [service]/
│       └── page.tsx                   # Service page (dynamic)
├── service-areas/
│   └── [area]/
│       └── page.tsx                   # Service area page (dynamic)
└── (shared components for sections)
    ├── header.tsx
    ├── footer.tsx
    ├── hero.tsx
    ├── services.tsx
    ├── about.tsx
    └── contact.tsx
```

### Content Generation & Configuration

**All service pages, category pages, and service area pages must be configurable** to allow dynamic content generation:

- Each page type should accept configuration for:
  - Page title and metadata
  - Hero section content
  - Service/category descriptions
  - Unique selling points
  - FAQ sections
  - Call-to-action sections
  - Images and media

- Content should be generated using the skills system (`skills/` directory) or through a content management approach that allows per-page customization

- Configuration should be structured to support:
  - Template-based content generation
  - Dynamic metadata (title tags, meta descriptions, OG tags)
  - Customizable sections per page
  - Reusable content blocks

### Schema Markup

**Schema.org markup must be added to every page** and must be configurable:

- **Homepage**: Organization, LocalBusiness schema
- **Category Pages**: Service, BreadcrumbList schema
- **Service Pages**: Service, BreadcrumbList, FAQPage schema
- **Service Area Pages**: LocalBusiness, Service, BreadcrumbList schema

Schema markup should:
- Be configurable per page type
- Support dynamic data injection (business info, service details, locations)
- Be validated against Schema.org specifications
- Include proper JSON-LD implementation
- Support rich snippets (reviews, ratings, pricing when applicable)

Configuration for schema should be stored in a structured format (JSON, TypeScript config, or database) to allow easy updates without code changes.

## Current Component Structure

The existing components in `app/` directory are intended for the homepage and can be reused across different page types:

- `app/page.tsx` - Homepage entry point
- `app/layout.tsx` - Root layout with Geist fonts
- `app/header.tsx` - Sticky navigation header
- `app/hero.tsx` - Hero/banner section
- `app/services.tsx` - Services showcase section
- `app/about.tsx` - About section
- `app/contact.tsx` - Contact form section
- `app/footer.tsx` - Footer section

These components should be refactored to:
1. Accept props for customization
2. Be reusable across category, service, and service area pages
3. Support dynamic content based on page configuration

## UI Components

Reusable UI components live in `components/ui/`:
- `button.tsx` - Button component with variants
- `card.tsx` - Card components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- `input.tsx` - Form input component
- `textarea.tsx` - Form textarea component

Error handling components in `components/errors/`:
- `ImageWithFallback.tsx` - Image component with fallback handling

## Utilities

- `lib/utils.ts` - Contains the `cn()` utility function for merging Tailwind classes using `clsx` and `tailwind-merge`

## Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
```typescript
"@/*": ["./*"]
```

This allows imports like:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## shadcn/ui Configuration

The project uses shadcn/ui with the following configuration (`components.json`):
- Style: **radix-nova**
- RSC: enabled
- CSS Variables: enabled
- Base color: **neutral**
- Icon library: **lucide**
- Global CSS: `globals.css` (in project root)

When adding new shadcn/ui components, they will be placed in `components/ui/`.

## Styling Conventions

- Uses Tailwind CSS v4 with CSS variables for theming
- Global styles in `globals.css` at project root
- Geist fonts (Geist and Geist Mono) loaded via `next/font/google`
- Color scheme uses neutral base with CSS variables for primary, secondary, muted, etc.
- Responsive design with mobile-first approach

## Key Technical Details

- **TypeScript target**: ES2017
- **Module resolution**: bundler
- **JSX mode**: react-jsx (React 19 new transform)
- **Strict mode**: enabled
- All TSX/TS files automatically included in compilation

## Project Status

Current branch: `adding-service-pages`

The project is transitioning from a single-page layout to a multi-page hierarchical structure. The `skills/` directory contains documentation and prompts for content generation (completion, homepage).
