# PRD — Abbey House Plumbing & Heating
## Dynamic Category & Service Pages

**Version:** 2.0
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS
**Rendering:** Fully static (`generateStaticParams`)
**Testing:** Chrome DevTools MCP

---

## Project Goal

Build an SEO-optimised website for Abbey House
Plumbing & Heating Services. The site structure must mirror the Google Business Profile (GBP)
hierarchy exactly — homepage → category pages → service pages — so Google sees
identical topical relevance on the website as on the Business Profile.

All pages are driven by a single config file. Adding a new category or service requires
only a data entry — no new components, routes, or schema files.

---

## Site Architecture

```
Homepage  ("Plumber London")
│
├── Category: Boiler & Gas Engineering        /services/boiler-gas
│     ├── Service: Boiler Repair              /services/boiler-gas/boiler-repair
│     ├── Service: New Boiler Installation    /services/boiler-gas/new-boiler-installation
│     └── Service: Annual Boiler Servicing    /services/boiler-gas/annual-boiler-servicing
│
├── Category: Central Heating & Efficiency    /services/central-heating
│     ├── Service: Power Flushing             /services/central-heating/power-flushing
│     └── Service: Smart Heating Controls     /services/central-heating/smart-heating-controls
│
├── Category: Plumbing & Maintenance          /services/plumbing-maintenance
│     └── Service: Leak Detection             /services/plumbing-maintenance/leak-detection
│
└── Category: Landlord & Safety Compliance    /services/landlord-safety
      └── Service: Gas Safety Certificates    /services/landlord-safety/gas-safety-certificates
```

Internal links follow this hierarchy exactly. Every service page links back to its
parent category. Every category page links back to the homepage. This creates a clean
topical authority chain that mirrors the GBP structure Google already knows about.

---

## Design Integration — Global Rule

> **This rule applies to every epic without exception.**

Before writing any markup or styles, the agent must:

1. Read existing page components (`Navbar.tsx`, `Footer.tsx`, and at least one page)
2. Extract the exact Tailwind classes for: headings, body text, buttons, containers,
   cards, and link styles
3. Use those exact classes in all new components — never invent new ones
4. After implementing any UI, take a screenshot alongside an existing page and confirm
   they are visually indistinguishable

All `MATCH_EXISTING_*` placeholders in code patterns below must be replaced with the
actual classes found in the existing codebase before any component is committed.

---

## Epic 1 — Navigation

### Requirements

The navbar must dynamically highlight the active route. The Services link must remain
active for any route under `/services/*` — including category and service sub-pages.

### Code Pattern

```tsx
// components/Navbar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
      {links.map(({ href, label }) => {
        const isActive = href === '/'
          ? pathname === '/'
          : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? 'MATCH_EXISTING_ACTIVE' : 'MATCH_EXISTING_DEFAULT'}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
```

### Acceptance Criteria

- Navbar renders on all pages with all four links
- Active link uses the existing site's highlight style — no new styles
- Services link is active on `/services`, `/services/[cat]`, and `/services/[cat]/[svc]`
- Only one link is active at any time
- All links resolve without a 404

### E2E Test (Chrome DevTools MCP)

Navigate to `/`, `/services`, `/services/[cat]`, `/services/[cat]/[svc]`. Screenshot
each and confirm the correct nav link is highlighted at every level.

---

## Epic 2 — Data Layer

### Requirements

A single config file (`lib/services.ts`) defines all categories and their nested
services. The entire site — routing, templates, schema, sitemap, internal links —
is generated from this file alone. No other file needs editing to publish new content.

### Code Pattern

```ts
// lib/services.ts

export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  metaTitle: string        // under 60 chars
  metaDescription: string  // under 160 chars
  keywords: string[]
  coverImage: string
}

export type Category = {
  slug: string
  name: string
  tagline: string
  description: string      // comprehensive in-depth content for the category page
  metaTitle: string        // under 60 chars
  metaDescription: string  // under 160 chars
  keywords: string[]
  coverImage: string
  services: Service[]      // all services within this GBP category
}

export const categories: Category[] = [
  {
    slug: 'boiler-gas',
    name: 'Boiler & Gas Engineering',
    tagline: 'Gas Safe registered engineers across London',
    description: 'Comprehensive in-depth content about boiler and gas services...',
    metaTitle: 'Boiler & Gas Engineering London | Abbey House',
    metaDescription: 'Expert boiler and gas engineering across London. Gas Safe registered.',
    keywords: ['boiler engineer London', 'gas safe engineer'],
    coverImage: '/images/boiler-gas.jpg',
    services: [
      {
        slug: 'boiler-repair',
        name: 'Boiler Repair',
        tagline: 'Fast boiler repairs by Gas Safe engineers',
        description: 'Detailed service page content for boiler repair...',
        metaTitle: 'Boiler Repair London | Abbey House Plumbing',
        metaDescription: 'Gas Safe boiler repair across London. All makes and models.',
        keywords: ['boiler repair London', 'boiler not working'],
        coverImage: '/images/boiler-repair.jpg',
      },
    ],
  },
]

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): { category: Category; service: Service } | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  const service = category.services.find((s) => s.slug === serviceSlug)
  if (!service) return undefined
  return { category, service }
}

export function getAllServicePaths() {
  return categories.flatMap((cat) =>
    cat.services.map((svc) => ({
      categorySlug: cat.slug,
      serviceSlug: svc.slug,
    }))
  )
}
```

### Acceptance Criteria

- `Category` and `Service` types defined with all required fields
- `categories` array contains at least two categories, each with at least two services
- All four helper functions exist and return correct data
- `getAllServicePaths()` returns `{ categorySlug, serviceSlug }` for every service

---

## Epic 3 — Breadcrumb Component

### Requirements

A `Breadcrumb` component renders on all category and service pages, providing links
back up the hierarchy. This is the primary upward internal linking mechanism — every
page must link to its parent and ultimately back to the homepage.

### Code Pattern

```tsx
// components/Breadcrumb.tsx
import Link from 'next/link'

type Crumb = { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="MATCH_EXISTING_BREADCRUMB_STYLE">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="MATCH_EXISTING_LINK_STYLE">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// On a category page:
// <Breadcrumb crumbs={[
//   { label: 'Home', href: '/' },
//   { label: 'Services', href: '/services' },
//   { label: category.name },
// ]} />

// On a service page:
// <Breadcrumb crumbs={[
//   { label: 'Home', href: '/' },
//   { label: 'Services', href: '/services' },
//   { label: category.name, href: `/services/${category.slug}` },
//   { label: service.name },
// ]} />
```

### Acceptance Criteria

- Category pages show: Home > Services > [Category Name]
- Service pages show: Home > Services > [Category Name] > [Service Name]
- All crumb links resolve without a 404
- Current page crumb has no link and carries `aria-current="page"`
- Breadcrumb style matches the existing site

---

## Epic 4 — Dynamic Routing

### Requirements

Two dynamic routes handle category and service pages. Both use `generateStaticParams`
for full static generation at build time. Invalid slugs at either level return a 404.

### Code Pattern

```tsx
// app/services/[categorySlug]/page.tsx
import { notFound } from 'next/navigation'
import { getAllCategories, getCategoryBySlug } from '@/lib/services'
import CategoryPageTemplate from '@/components/CategoryPageTemplate'
import ServiceSchema from '@/components/ServiceSchema'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ categorySlug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: { categorySlug: string } }
): Promise<Metadata> {
  const category = getCategoryBySlug(params.categorySlug)
  if (!category) return {}
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    keywords: category.keywords.join(', '),
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      images: [category.coverImage],
    },
  }
}

export default function CategoryPage(
  { params }: { params: { categorySlug: string } }
) {
  const category = getCategoryBySlug(params.categorySlug)
  if (!category) notFound()
  return (
    <>
      <ServiceSchema category={category} />
      <CategoryPageTemplate category={category} />
    </>
  )
}
```

```tsx
// app/services/[categorySlug]/[serviceSlug]/page.tsx
import { notFound } from 'next/navigation'
import { getAllServicePaths, getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import ServiceSchema from '@/components/ServiceSchema'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllServicePaths().map(({ categorySlug, serviceSlug }) => ({
    categorySlug,
    serviceSlug,
  }))
}

export async function generateMetadata(
  { params }: { params: { categorySlug: string; serviceSlug: string } }
): Promise<Metadata> {
  const result = getServiceBySlug(params.categorySlug, params.serviceSlug)
  if (!result) return {}
  const { service } = result
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.coverImage],
    },
  }
}

export default function ServicePage(
  { params }: { params: { categorySlug: string; serviceSlug: string } }
) {
  const result = getServiceBySlug(params.categorySlug, params.serviceSlug)
  if (!result) notFound()
  const { category, service } = result
  return (
    <>
      <ServiceSchema category={category} service={service} />
      <ServicePageTemplate category={category} service={service} />
    </>
  )
}
```

### Acceptance Criteria

- `/services/[categorySlug]` resolves all valid categories with HTTP 200
- `/services/[categorySlug]/[serviceSlug]` resolves all valid service paths with HTTP 200
- Invalid slugs at either level return a styled 404 with a link back to `/services`
- `generateStaticParams` pre-builds all paths defined in `lib/services.ts`
- `generateMetadata` produces unique title, description, and OG tags at every level

### E2E Test (Chrome DevTools MCP)

Navigate to a category URL and a service URL. Inspect `<head>` on both — confirm
titles and descriptions are unique and match config values. Navigate to an invalid
path at both levels and confirm a styled 404 is returned each time.

---

## Epic 5 — Category Page Template

### Requirements

`CategoryPageTemplate` renders the full layout for a category page. It must display
category content and link to all child service pages. This downward internal link
from category to services is central to the GBP topical relevance strategy.
The component must be visually indistinguishable from existing site pages.

### Code Pattern

```tsx
// components/CategoryPageTemplate.tsx
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Category } from '@/lib/services'

export default function CategoryPageTemplate({ category }: { category: Category }) {
  return (
    <main className="MATCH_EXISTING_CONTAINER">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: category.name },
      ]} />

      <h1 className="MATCH_EXISTING_H1">{category.name}</h1>
      <p className="MATCH_EXISTING_SUBHEADING">{category.tagline}</p>

      <img src={category.coverImage} alt={category.name}
        className="MATCH_EXISTING_IMAGE_STYLE" />

      <div className="MATCH_EXISTING_BODY_TEXT">
        <p>{category.description}</p>
      </div>

      {/* Downward internal links to all child service pages */}
      <section>
        <h2 className="MATCH_EXISTING_H2">Our {category.name} Services</h2>
        <div className="MATCH_EXISTING_GRID">
          {category.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              className="MATCH_EXISTING_CARD"
            >
              <h3 className="MATCH_EXISTING_CARD_TITLE">{service.name}</h3>
              <p className="MATCH_EXISTING_CARD_BODY">{service.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="MATCH_EXISTING_CTA_BLOCK">
        <h2 className="MATCH_EXISTING_H2">Need help with {category.name}?</h2>
        <a href="/contact" className="MATCH_EXISTING_BUTTON">Get a Free Quote</a>
      </div>
    </main>
  )
}
```

### Acceptance Criteria

- Breadcrumb renders: Home > Services > [Category Name]
- H1, tagline, image, and description all render correctly with no placeholder text
- All child services are listed as clickable links to the correct URLs
- Adding a new service to `lib/services.ts` automatically adds it to the category page
- CTA links to `/contact`
- Design is indistinguishable from existing site pages

---

## Epic 6 — Service Page Template

### Requirements

`ServicePageTemplate` renders the full layout for a service page. It must link back
to its parent category — completing the upward internal link chain. The design must
be seamless with the existing site.

### Code Pattern

```tsx
// components/ServicePageTemplate.tsx
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Category, Service } from '@/lib/services'

export default function ServicePageTemplate(
  { category, service }: { category: Category; service: Service }
) {
  return (
    <main className="MATCH_EXISTING_CONTAINER">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: category.name, href: `/services/${category.slug}` },
        { label: service.name },
      ]} />

      <h1 className="MATCH_EXISTING_H1">{service.name}</h1>
      <p className="MATCH_EXISTING_SUBHEADING">{service.tagline}</p>

      <img src={service.coverImage} alt={service.name}
        className="MATCH_EXISTING_IMAGE_STYLE" />

      <div className="MATCH_EXISTING_BODY_TEXT">
        <p>{service.description}</p>
      </div>

      {/* Upward internal link back to parent category */}
      <p className="MATCH_EXISTING_BODY_TEXT">
        This service is part of our{' '}
        <Link href={`/services/${category.slug}`} className="MATCH_EXISTING_LINK_STYLE">
          {category.name}
        </Link>{' '}
        offering.
      </p>

      <div className="MATCH_EXISTING_CTA_BLOCK">
        <h2 className="MATCH_EXISTING_H2">Need {service.name}?</h2>
        <a href="/contact" className="MATCH_EXISTING_BUTTON">Get a Free Quote</a>
      </div>
    </main>
  )
}
```

### Acceptance Criteria

- Breadcrumb renders: Home > Services > [Category] > [Service]
- All breadcrumb links resolve correctly
- Inline back-link to parent category is present in the page body
- Design is indistinguishable from existing site pages

### E2E Test (Chrome DevTools MCP — Epics 5 & 6)

Navigate to `/services`. Click a category card — confirm the category page loads with
correct breadcrumb and all child service cards. Click a service card — confirm the
service page loads with the full four-level breadcrumb. Click the category crumb —
confirm it returns to the correct category page. Screenshot each level and confirm
design consistency with the existing site throughout.

---

## Epic 7 — Services Index Page

### Requirements

The `/services` page lists all categories as cards. It auto-updates when new
categories are added to `lib/services.ts`. No hardcoded content.

### Code Pattern

```tsx
// app/services/page.tsx
import { getAllCategories } from '@/lib/services'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing & Heating Services London | Abbey House',
  description: 'Expert plumbing and heating services across London. Browse all categories.',
}

export default function ServicesPage() {
  const categories = getAllCategories()
  return (
    <main className="MATCH_EXISTING_CONTAINER">
      <h1 className="MATCH_EXISTING_H1">Our Services</h1>
      <p className="MATCH_EXISTING_SUBHEADING">
        Expert plumbing and heating across London.
      </p>
      <div className="MATCH_EXISTING_GRID">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/services/${cat.slug}`}
            className="MATCH_EXISTING_CARD">
            <h2 className="MATCH_EXISTING_CARD_TITLE">{cat.name}</h2>
            <p className="MATCH_EXISTING_CARD_BODY">{cat.tagline}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

### Acceptance Criteria

- A card renders for every category in `lib/services.ts`
- Each card links to the correct `/services/[categorySlug]` URL
- No hardcoded links anywhere in the component
- Design matches existing site card and grid patterns

### E2E Test (Chrome DevTools MCP)

Navigate to `/services`. Confirm every category has a card. Click each card and
confirm the correct category page loads without a 404.

---

## Epic 8 — Schema Markup

### Requirements

`ServiceSchema` generates `LocalBusiness` JSON-LD dynamically. On category pages it
lists all services in that category. On service pages it scopes to that specific
service only. No schema is written manually per page.

### Code Pattern

```tsx
// components/ServiceSchema.tsx
import Script from 'next/script'
import type { Category, Service } from '@/lib/services'

const BUSINESS = {
  name: 'Abbey House Plumbing & Heating Services',
  url: 'https://abbeyservicesgroup.co.uk',
  telephone: '07930 909496',
  email: 'info@abbeyservicesgroup.co.uk',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: [
    'West London','North West London','North London','Paddington','Marylebone',
    'Notting Hill','Camden Town','West Kilburn','South Hampstead','Belsize Park',
    'Maida Vale','Brondesbury','Chiswick','Ealing','West Hampstead','Hampstead',
    'Richmond','Hammersmith','Kilburn','Kentish Town',"St John's Wood",
    'Cricklewood','Westminster','Willesden Green','Colindale','London Borough of Brent',
  ].map((name) => ({ '@type': 'AdministrativeArea', name })),
}

export default function ServiceSchema(
  { category, service }: { category: Category; service?: Service }
) {
  const items = service
    ? [{ '@type': 'Offer', itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.metaDescription,
        url: `${BUSINESS.url}/services/${category.slug}/${service.slug}`,
      }}]
    : category.services.map((svc) => ({ '@type': 'Offer', itemOffered: {
        '@type': 'Service',
        name: svc.name,
        description: svc.metaDescription,
        url: `${BUSINESS.url}/services/${category.slug}/${svc.slug}`,
      }}))

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'HVACBusiness'],
    ...BUSINESS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: category.name,
      itemListElement: items,
    },
  }

  return (
    <Script
      id={service ? `schema-${category.slug}-${service.slug}` : `schema-${category.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Acceptance Criteria

- Category pages: schema lists all services within the category
- Service pages: schema scopes to the specific service only
- `@type` includes both `Plumber` and `HVACBusiness` on all pages
- All 26 `areaServed` entries present on every page
- JSON is syntactically valid with no parse errors
- Passes https://validator.schema.org with zero errors and warnings

### E2E Test (Chrome DevTools MCP)

Inspect `<head>` on a category page and a service page under it. Extract and compare
`hasOfferCatalog` — confirm it is scoped correctly for each. Validate both at
validator.schema.org and confirm zero errors.

---

## Epic 9 — SEO Infrastructure

### Requirements

The sitemap must include all category and service URLs, reflecting the full hierarchy.

### Code Pattern

```ts
// app/sitemap.ts
import { getAllCategories, getAllServicePaths } from '@/lib/services'
import type { MetadataRoute } from 'next'

const BASE = 'https://abbeyservicesgroup.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes = getAllCategories().map((cat) => ({
    url: `${BASE}/services/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const serviceRoutes = getAllServicePaths().map(({ categorySlug, serviceSlug }) => ({
    url: `${BASE}/services/${categorySlug}/${serviceSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/services`, priority: 0.9 },
    ...categoryRoutes,
    ...serviceRoutes,
  ]
}
```

```txt
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://abbeyservicesgroup.co.uk/sitemap.xml
```

### Acceptance Criteria

- `/sitemap.xml` is accessible, well-formed, and includes all category and service URLs
- `/robots.txt` has a `Sitemap:` directive and does not block `/services/`
- Each page has exactly one H1
- All images have non-empty descriptive `alt` attributes

### E2E Test (Chrome DevTools MCP)

Navigate to `/sitemap.xml` and confirm all category and service URLs are present.
Run Lighthouse SEO on a category page and a service page — both must score 100/100.

---

## Epic 10 — Performance & Final Validation

### Targets

| Metric              | Target      |
|---------------------|-------------|
| Lighthouse SEO      | 100 / 100   |
| Lighthouse Perf     | 90+ / 100   |
| Lighthouse A11y     | 90+ / 100   |
| LCP                 | Under 2.5s  |
| CLS                 | Under 0.1   |
| TBT                 | Under 200ms |
| Console errors      | Zero        |
| Failed network reqs | Zero        |

### Acceptance Criteria

- All targets met on at least one category page and one service page
- No broken assets in the Network tab
- Full internal link chain is walkable using only in-page links:
  Homepage → /services → /services/[cat] → /services/[cat]/[svc] → back up via breadcrumb

### E2E Test (Chrome DevTools MCP)

Run full Lighthouse audits on a category and service page. Walk the complete internal
link chain from the homepage to a service page using only in-page links — confirm
every step resolves without a 404. Confirm zero console errors at every level.