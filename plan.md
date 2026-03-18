# Abbey House Plumbing & Heating — Implementation Plan
## Task List

> **Agents:** You may ONLY edit the `passes` field of each task.
> Do NOT add, remove, rename, or reorder tasks.
> Do NOT change descriptions, steps, or categories.
> Only set `passes: true` after a successful E2E browser test via Chrome DevTools MCP.

```json
[
  {
    "id": "F-01",
    "category": "Epic 1 - Navigation",
    "description": "Navbar renders on all pages with correct links",
    "steps": [
      "Start dev server with npm run dev",
      "Navigate to /",
      "Confirm navbar is visible with all four links: Home, Services, About, Contact",
      "Navigate to /services, /about, /contact",
      "Confirm navbar is visible and all links present on each page",
      "Confirm all links resolve without a 404"
    ],
    "passes": true
  },
  {
    "id": "F-02",
    "category": "Epic 1 - Navigation",
    "description": "Navbar dynamically highlights the active page",
    "steps": [
      "Navigate to /",
      "Confirm Home link has active style and no other link does",
      "Navigate to /services",
      "Confirm Services link has active style and no other link does",
      "Navigate to /about",
      "Confirm About link has active style and no other link does",
      "Navigate to /contact",
      "Confirm Contact link has active style and no other link does"
    ],
    "passes": true
  },
  {
    "id": "F-03",
    "category": "Epic 1 - Navigation",
    "description": "Services nav link stays active on category and service sub-pages",
    "steps": [
      "Navigate to /services/[categorySlug]",
      "Confirm Services link is highlighted and no other link is",
      "Navigate to /services/[categorySlug]/[serviceSlug]",
      "Confirm Services link is still highlighted and no other link is"
    ],
    "passes": true
  },
  {
    "id": "F-04",
    "category": "Epic 1 - Navigation",
    "description": "Active link style matches the existing site design",
    "steps": [
      "Take a screenshot of the navbar on a new service page",
      "Take a screenshot of the navbar on an existing page",
      "Confirm active style uses existing site classes with no new styles introduced",
      "Confirm screenshots are visually consistent"
    ],
    "passes": true
  },
  {
    "id": "F-05",
    "category": "Epic 2 - Data Layer",
    "description": "lib/services.ts defines the Category and Service types",
    "steps": [
      "Open lib/services.ts",
      "Confirm Category type includes: slug, name, tagline, description, metaTitle, metaDescription, keywords, coverImage, services",
      "Confirm Service type includes: slug, name, tagline, description, metaTitle, metaDescription, keywords, coverImage"
    ],
    "passes": true
  },
  {
    "id": "F-06",
    "category": "Epic 2 - Data Layer",
    "description": "categories array contains at least two categories each with at least two services",
    "steps": [
      "Open lib/services.ts",
      "Confirm at least 2 category entries exist in the categories array",
      "Confirm each category has at least 2 nested service entries",
      "Confirm all required fields are populated with real content and no placeholder text"
    ],
    "passes": true
  },
  {
    "id": "F-07",
    "category": "Epic 2 - Data Layer",
    "description": "getAllCategories() returns all categories",
    "steps": [
      "Open lib/services.ts",
      "Confirm getAllCategories() function exists",
      "Confirm it returns the full categories array"
    ],
    "passes": true
  },
  {
    "id": "F-08",
    "category": "Epic 2 - Data Layer",
    "description": "getCategoryBySlug() returns the correct category or undefined",
    "steps": [
      "Open lib/services.ts",
      "Confirm getCategoryBySlug() function exists",
      "Confirm a valid slug returns the matching category object",
      "Confirm an invalid slug returns undefined"
    ],
    "passes": true
  },
  {
    "id": "F-09",
    "category": "Epic 2 - Data Layer",
    "description": "getServiceBySlug() returns the correct category and service pair or undefined",
    "steps": [
      "Open lib/services.ts",
      "Confirm getServiceBySlug() function exists",
      "Confirm valid categorySlug + serviceSlug returns { category, service }",
      "Confirm an invalid slug at either level returns undefined"
    ],
    "passes": true
  },
  {
    "id": "F-10",
    "category": "Epic 2 - Data Layer",
    "description": "getAllServicePaths() returns a flat array of all category and service slug pairs",
    "steps": [
      "Open lib/services.ts",
      "Confirm getAllServicePaths() function exists",
      "Confirm it returns { categorySlug, serviceSlug } for every service across all categories",
      "Confirm array length matches total number of services defined in the config"
    ],
    "passes": true
  },
  {
    "id": "F-11",
    "category": "Epic 3 - Breadcrumb Component",
    "description": "Breadcrumb component renders correctly on category pages",
    "steps": [
      "Navigate to /services/[categorySlug]",
      "Confirm breadcrumb displays: Home > Services > [Category Name]",
      "Confirm Home links to /",
      "Confirm Services links to /services",
      "Confirm category name has no link and carries aria-current=page"
    ],
    "passes": true
  },
  {
    "id": "F-12",
    "category": "Epic 3 - Breadcrumb Component",
    "description": "Breadcrumb component renders correctly on service pages",
    "steps": [
      "Navigate to /services/[categorySlug]/[serviceSlug]",
      "Confirm breadcrumb displays: Home > Services > [Category Name] > [Service Name]",
      "Confirm Home links to /",
      "Confirm Services links to /services",
      "Confirm category name links to /services/[categorySlug]",
      "Confirm service name has no link and carries aria-current=page"
    ],
    "passes": true
  },
  {
    "id": "F-13",
    "category": "Epic 3 - Breadcrumb Component",
    "description": "All breadcrumb links resolve without a 404",
    "steps": [
      "On a category page click each breadcrumb link",
      "Confirm each navigates to the correct page without a 404",
      "On a service page click each breadcrumb link",
      "Confirm each navigates to the correct page without a 404"
    ],
    "passes": true
  },
  {
    "id": "F-14",
    "category": "Epic 3 - Breadcrumb Component",
    "description": "Breadcrumb style matches the existing site design",
    "steps": [
      "Take a screenshot of the breadcrumb on a category page",
      "Confirm classes match existing site link and text styles",
      "Confirm screenshot shows no visual inconsistency with the rest of the site"
    ],
    "passes": true
  },
  {
    "id": "F-15",
    "category": "Epic 4 - Dynamic Routing",
    "description": "Category route resolves all valid category slugs",
    "steps": [
      "Navigate to /services/[categorySlug] for every slug in lib/services.ts",
      "Confirm each returns HTTP 200",
      "Confirm generateStaticParams pre-builds all category paths at compile time"
    ],
    "passes": true
  },
  {
    "id": "F-16",
    "category": "Epic 4 - Dynamic Routing",
    "description": "Service route resolves all valid category and service slug pairs",
    "steps": [
      "Navigate to /services/[categorySlug]/[serviceSlug] for every pair in lib/services.ts",
      "Confirm each returns HTTP 200",
      "Confirm generateStaticParams pre-builds all service paths at compile time"
    ],
    "passes": true
  },
  {
    "id": "F-17",
    "category": "Epic 4 - Dynamic Routing",
    "description": "Invalid category slug returns a styled 404",
    "steps": [
      "Navigate to /services/invalid-slug",
      "Confirm HTTP 404 is returned",
      "Confirm 404 page matches the existing site design",
      "Confirm 404 page includes a link back to /services"
    ],
    "passes": true
  },
  {
    "id": "F-18",
    "category": "Epic 4 - Dynamic Routing",
    "description": "Invalid service slug returns a styled 404",
    "steps": [
      "Navigate to /services/[validCategorySlug]/invalid-slug",
      "Confirm HTTP 404 is returned",
      "Confirm 404 page matches the existing site design",
      "Confirm 404 page includes a link back to /services"
    ],
    "passes": true
  },
  {
    "id": "F-19",
    "category": "Epic 4 - Dynamic Routing",
    "description": "generateMetadata produces unique metadata at the category level",
    "steps": [
      "Navigate to a category page",
      "Inspect <head> and confirm <title> matches category.metaTitle and is under 60 characters",
      "Confirm <meta name=description> matches category.metaDescription and is under 160 characters",
      "Confirm og:title, og:description, og:image are all present and correct"
    ],
    "passes": true
  },
  {
    "id": "F-20",
    "category": "Epic 4 - Dynamic Routing",
    "description": "generateMetadata produces unique metadata at the service level",
    "steps": [
      "Navigate to a service page",
      "Inspect <head> and confirm <title> matches service.metaTitle and is under 60 characters",
      "Confirm <meta name=description> matches service.metaDescription and is under 160 characters",
      "Confirm og:title, og:description, og:image are all present and correct",
      "Confirm metadata differs from the parent category page"
    ],
    "passes": true
  },
  {
    "id": "F-21",
    "category": "Epic 5 - Category Page Template",
    "description": "CategoryPageTemplate renders all content fields correctly",
    "steps": [
      "Navigate to a category page",
      "Confirm H1 matches category.name",
      "Confirm tagline is visible below the H1",
      "Confirm cover image loads and is not broken",
      "Confirm description body copy renders in full with no truncation",
      "Confirm no raw HTML, undefined values, or placeholder text is visible"
    ],
    "passes": true
  },
  {
    "id": "F-22",
    "category": "Epic 5 - Category Page Template",
    "description": "Category page lists all child services as clickable internal links",
    "steps": [
      "Navigate to a category page",
      "Confirm a card or link renders for every service nested under that category in lib/services.ts",
      "Confirm each link points to /services/[categorySlug]/[serviceSlug]",
      "Add a new service to lib/services.ts and confirm it automatically appears on the category page"
    ],
    "passes": true
  },
  {
    "id": "F-23",
    "category": "Epic 5 - Category Page Template",
    "description": "Category page CTA block is present and links to /contact",
    "steps": [
      "Navigate to a category page",
      "Confirm CTA heading and button are visible",
      "Click the CTA button and confirm it navigates to /contact without a 404"
    ],
    "passes": true
  },
  {
    "id": "F-24",
    "category": "Epic 5 - Category Page Template",
    "description": "Category page design is indistinguishable from the existing site",
    "steps": [
      "Take a screenshot of the category page",
      "Take a screenshot of an existing site page",
      "Confirm typography, colours, spacing, and button styles match exactly",
      "Confirm navbar and footer render correctly on the category page",
      "Confirm no visual inconsistency between the two screenshots"
    ],
    "passes": true
  },
  {
    "id": "F-25",
    "category": "Epic 6 - Service Page Template",
    "description": "ServicePageTemplate renders all content fields correctly",
    "steps": [
      "Navigate to a service page",
      "Confirm H1 matches service.name",
      "Confirm tagline is visible below the H1",
      "Confirm cover image loads and is not broken",
      "Confirm description body copy renders in full with no truncation",
      "Confirm no raw HTML, undefined values, or placeholder text is visible"
    ],
    "passes": true
  },
  {
    "id": "F-26",
    "category": "Epic 6 - Service Page Template",
    "description": "Service page contains an upward internal link back to its parent category",
    "steps": [
      "Navigate to a service page",
      "Confirm an inline body link to /services/[categorySlug] is present",
      "Confirm link text references the parent category name",
      "Click the link and confirm it navigates to the correct category page without a 404"
    ],
    "passes": true
  },
  {
    "id": "F-27",
    "category": "Epic 6 - Service Page Template",
    "description": "Service page CTA block is present and links to /contact",
    "steps": [
      "Navigate to a service page",
      "Confirm CTA heading and button are visible",
      "Click the CTA button and confirm it navigates to /contact without a 404"
    ],
    "passes": true
  },
  {
    "id": "F-28",
    "category": "Epic 6 - Service Page Template",
    "description": "Service page design is indistinguishable from the existing site",
    "steps": [
      "Take a screenshot of the service page",
      "Take a screenshot of an existing site page",
      "Confirm typography, colours, spacing, and button styles match exactly",
      "Confirm navbar and footer render correctly on the service page",
      "Confirm no visual inconsistency between the two screenshots"
    ],
    "passes": true
  },
  {
    "id": "F-29",
    "category": "Epic 7 - Services Index Page",
    "description": "/services renders a card for every category in lib/services.ts",
    "steps": [
      "Navigate to /services",
      "Confirm card count matches the number of entries in the categories array",
      "Confirm each card displays the correct category name and tagline"
    ],
    "passes": true
  },
  {
    "id": "F-30",
    "category": "Epic 7 - Services Index Page",
    "description": "Each category card links to the correct category page",
    "steps": [
      "Navigate to /services",
      "Click each category card",
      "Confirm each navigates to /services/[categorySlug] without a 404",
      "Confirm no hardcoded links exist in the component"
    ],
    "passes": true
  },
  {
    "id": "F-31",
    "category": "Epic 7 - Services Index Page",
    "description": "/services page has correct metadata",
    "steps": [
      "Navigate to /services",
      "Inspect <head> and confirm <title> is present and under 60 characters",
      "Confirm <meta name=description> is present and under 160 characters"
    ],
    "passes": true
  },
  {
    "id": "F-32",
    "category": "Epic 8 - Schema Markup",
    "description": "Category pages contain a valid JSON-LD LocalBusiness schema block",
    "steps": [
      "Navigate to a category page",
      "Inspect <head> for a <script type=application/ld+json> tag",
      "Extract and parse the JSON — confirm no syntax errors",
      "Confirm @type includes both Plumber and HVACBusiness",
      "Confirm all 26 areaServed entries are present",
      "Confirm hasOfferCatalog lists all services within that category"
    ],
    "passes": true
  },
  {
    "id": "F-33",
    "category": "Epic 8 - Schema Markup",
    "description": "Service pages contain a valid JSON-LD LocalBusiness schema block",
    "steps": [
      "Navigate to a service page",
      "Inspect <head> for a <script type=application/ld+json> tag",
      "Extract and parse the JSON — confirm no syntax errors",
      "Confirm @type includes both Plumber and HVACBusiness",
      "Confirm all 26 areaServed entries are present",
      "Confirm hasOfferCatalog scopes to the specific service only"
    ],
    "passes": true
  },
  {
    "id": "F-34",
    "category": "Epic 8 - Schema Markup",
    "description": "Schema is unique per page",
    "steps": [
      "Extract hasOfferCatalog from a category page schema",
      "Extract hasOfferCatalog from a child service page schema",
      "Confirm the two are different",
      "Extract hasOfferCatalog from two different service pages",
      "Confirm they are different from each other"
    ],
    "passes": true
  },
  {
    "id": "F-35",
    "category": "Epic 8 - Schema Markup",
    "description": "Schema passes validator.schema.org with zero errors and warnings",
    "steps": [
      "Copy JSON-LD from a category page",
      "Paste into https://validator.schema.org and confirm zero errors and zero warnings",
      "Copy JSON-LD from a service page",
      "Paste into https://validator.schema.org and confirm zero errors and zero warnings"
    ],
    "passes": false
  },
  {
    "id": "F-36",
    "category": "Epic 9 - SEO Infrastructure",
    "description": "sitemap.xml includes all category and service URLs",
    "steps": [
      "Navigate to /sitemap.xml",
      "Confirm the file is accessible and well-formed XML",
      "Confirm a <loc> entry exists for every category slug",
      "Confirm a <loc> entry exists for every service slug at the correct nested path"
    ],
    "passes": true
  },
  {
    "id": "F-37",
    "category": "Epic 9 - SEO Infrastructure",
    "description": "robots.txt is correctly configured",
    "steps": [
      "Navigate to /robots.txt",
      "Confirm the file is accessible",
      "Confirm it contains a Sitemap: directive pointing to /sitemap.xml",
      "Confirm it does not disallow /services/"
    ],
    "passes": true
  },
  {
    "id": "F-38",
    "category": "Epic 10 - Performance and Final Validation",
    "description": "Full internal link chain is walkable using only in-page links",
    "steps": [
      "Start from the homepage",
      "Navigate to /services using a nav or body link",
      "Click a category card and confirm the category page loads correctly",
      "Click a service card and confirm the service page loads correctly",
      "Click the category crumb in the breadcrumb and confirm return to the category page",
      "Confirm all steps resolve without a 404 and with zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-39",
    "category": "Epic 10 - Performance and Final Validation",
    "description": "Lighthouse SEO score is 100/100 on a category page and a service page",
    "steps": [
      "Run a Lighthouse SEO audit on a category page via Chrome DevTools MCP",
      "Confirm score is 100/100 with no failing SEO checks",
      "Run a Lighthouse SEO audit on a service page via Chrome DevTools MCP",
      "Confirm score is 100/100 with no failing SEO checks"
    ],
    "passes": true
  },
  {
    "id": "F-40",
    "category": "Epic 10 - Performance and Final Validation",
    "description": "Lighthouse Performance score is 90+ on a category page and a service page",
    "steps": [
      "Run a Lighthouse Performance audit on a category page via Chrome DevTools MCP",
      "Confirm LCP is under 2.5 seconds",
      "Confirm CLS is under 0.1",
      "Confirm TBT is under 200ms",
      "Run the same audit on a service page and confirm all targets are met"
    ],
    "passes": false
  },
  {
    "id": "F-41",
    "category": "Epic 10 - Performance and Final Validation",
    "description": "Zero console errors on all page types",
    "steps": [
      "Open browser console via Chrome DevTools MCP",
      "Navigate to /services and confirm zero console errors",
      "Navigate to /services/[categorySlug] and confirm zero console errors",
      "Navigate to /services/[categorySlug]/[serviceSlug] and confirm zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-42",
    "category": "Epic 10 - Performance and Final Validation",
    "description": "Zero failed network requests on all page types",
    "steps": [
      "Open the Network tab via Chrome DevTools MCP",
      "Navigate to /services and confirm no failed requests",
      "Navigate to a category page and confirm no failed requests",
      "Navigate to a service page and confirm no failed requests"
    ],
    "passes": true
  }
]
```