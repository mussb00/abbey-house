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
    "passes": true
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
    "passes": true
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
  },
  {
    "id": "F-43",
    "category": "Epic 11 - Template and Content Structure",
    "description": "Update prd.md to reflect the agreed type structure, template rendering pattern, and site architecture",
    "steps": [
      "Open prd.md",
      "Update the Site Architecture block to show exactly 3 categories (central-heating, plumbing-services, gas-services) and their 12 agreed service slugs — remove the old 4-category structure",
      "Update the Epic 2 code pattern: replace description: string in both Service and Category types with intro: string and sections: { heading: string; body: string }[]",
      "Retain all other type fields unchanged including coverImage: string",
      "Update the Epic 5 code pattern to show CategoryPageTemplate rendering intro as a paragraph followed by sections.map() producing an h2 and p per entry",
      "Update the Epic 6 code pattern to show ServicePageTemplate rendering intro as a paragraph followed by sections.map() producing an h2 and p per entry",
      "Update the Epic 6 ServicePageTemplate description comment from a readme-style summary to describe the actual rendered structure: intro paragraph, H2+paragraph sections, parent category link, CTA",
      "Do not change any acceptance criteria, E2E tests, or other epic content in prd.md",
      "Confirm coverImage is present and unchanged in both type definitions after the edit"
    ],
    "passes": true
  },
  {
    "id": "F-44",
    "category": "Epic 11 - Template and Content Structure",
    "description": "Restructure Service and Category types in lib/services.ts to use intro and sections instead of description",
    "steps": [
      "Open lib/services.ts",
      "Remove description: string from both the Service and Category type definitions",
      "Add intro: string to both types — this is the opening paragraph where the primary keyword must appear",
      "Add sections: { heading: string; body: string }[] to both types — ordered array of H2 heading and body paragraph pairs",
      "Update all existing category and service entries in the categories array: convert any existing description string into an intro field and add at least one placeholder sections entry",
      "Confirm slug, name, tagline, metaTitle, metaDescription, keywords, and coverImage are all present and unchanged in both types",
      "Run tsc --noEmit and confirm zero TypeScript errors"
    ],
    "passes": true
  },
  {
    "id": "F-45",
    "category": "Epic 11 - Template and Content Structure",
    "description": "Update CategoryPageTemplate to render intro and sections as normal React components",
    "steps": [
      "Open components/CategoryPageTemplate.tsx",
      "Replace the existing <div><p>{category.description}</p></div> block with a <p> rendering category.intro followed by a category.sections.map() that renders each entry as an <h2> and a <p>",
      "Use existing site Tailwind classes for h2 and p — match text-foreground, text-muted-foreground, and spacing consistent with surrounding sections",
      "Do not introduce dangerouslySetInnerHTML",
      "Do not introduce any new CSS classes",
      "Confirm the cover image section remains present and unchanged",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to a category page and confirm intro renders as a paragraph and each sections entry renders as an h2 followed by a paragraph",
      "Confirm Lighthouse SEO score is still 100/100",
      "Confirm zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-46",
    "category": "Epic 11 - Template and Content Structure",
    "description": "Update ServicePageTemplate to render intro and sections as normal React components",
    "steps": [
      "Open components/ServicePageTemplate.tsx",
      "Replace the existing <div><p>{service.description}</p></div> block with a <p> rendering service.intro followed by a service.sections.map() that renders each entry as an <h2> and a <p>",
      "Use existing site Tailwind classes for h2 and p — match text-foreground, text-muted-foreground, and spacing consistent with surrounding sections",
      "Do not introduce dangerouslySetInnerHTML",
      "Do not introduce any new CSS classes",
      "Confirm the cover image section remains present and unchanged",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to a service page and confirm intro renders as a paragraph and each sections entry renders as an h2 followed by a paragraph",
      "Confirm Lighthouse SEO score is still 100/100",
      "Confirm zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-47",
    "category": "Epic 11 - Template and Content Structure",
    "description": "Verify zero TypeScript errors and zero visual regressions across all page types after type and template changes",
    "steps": [
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to /services and confirm zero console errors and no failed network requests",
      "Navigate to a category page and take a screenshot",
      "Navigate to an existing site page and take a screenshot",
      "Confirm the category page screenshot shows no visual regression — typography, colours, spacing, and image all consistent with the existing site",
      "Navigate to a service page and take a screenshot",
      "Confirm the service page screenshot shows no visual regression",
      "Confirm zero failed network requests on all three page types"
    ],
    "passes": true
  },
  {
    "id": "F-48",
    "category": "Epic 12 - Data Layer Reconciliation",
    "description": "Reconcile lib/services.ts with the agreed SEO architecture and fix the Chelsea typo in ServiceSchema.tsx",
    "steps": [
      "Open components/ServiceSchema.tsx and find the areaServed array",
      "Fix the typo: replace 'Chelea' with 'Chelsea'",
      "Replace current 4 categories and 7 services with exactly 3 categories: central-heating, plumbing-services, gas-services",
      "Add exactly 12 service entries matching the agreed slugs across the 3 categories",
      "Remove all brand-specific service entries — no Worcester Bosch, Vaillant, Ideal, or Baxi pages",
      "Confirm no slug contains /london",
      "Remove all accreditation language from any existing intro or sections fields",
      "Placeholder intro and sections content is acceptable at this stage — they will be replaced in Epic 13",
      "Confirm slug, name, tagline, metaTitle, metaDescription, keywords, and coverImage are all present and populated for every entry",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to all 15 pages and confirm HTTP 200 on each",
      "Navigate to /sitemap.xml and confirm all 15 URLs are present"
    ],
    "passes": true
  },
  {
    "id": "F-49",
    "category": "Epic 12 - Data Layer Reconciliation",
    "description": "Place the two populated content config files into the skill directories",
    "steps": [
      "Copy the provided category-page config.json into the repo at .claude/skills/category-page/config.json",
      "Copy the provided service-page config.json into the repo at .claude/skills/service-page/config.json",
      "Open .claude/skills/category-page/config.json and confirm the top-level areas_served array contains exactly 29 entries matching the agreed service areas",
      "Confirm the pages array contains exactly 3 entries with slugs: central-heating, plumbing-services, gas-services",
      "Confirm every entry in the pages array has content_generated set to false",
      "Confirm no entry has a services field — category hub configs do not list sub-tasks",
      "Open .claude/skills/service-page/config.json and confirm the top-level areas_served array contains exactly 29 entries matching the agreed service areas",
      "Confirm the pages array contains exactly 12 entries covering all agreed service slugs",
      "Confirm every entry in the pages array has content_generated set to false",
      "Confirm every service page entry has a services array listing the GBP sub-tasks for that page",
      "Confirm no entry in either config contains brand accreditation language",
      "Confirm no slug field in either config contains /london"
    ],
    "passes": true
  },
  {
    "id": "F-50",
    "category": "Epic 13 - SEO Content Population",
    "description": "Generate intro and sections for all 15 pages using the skill files, toggling content_generated per entry until all pages are complete",
    "steps": [
      "Read .claude/skills/category-page/SKILL.md in full",
      "Read .claude/skills/category-page/config.json and find the first entry where content_generated is false",
      "Generate intro and sections for that entry following all rules in SKILL.md, using the areas_served list for all location references",
      "Write the generated intro string and sections array into the matching category entry in lib/services.ts",
      "Set content_generated to true for that entry in .claude/skills/category-page/config.json",
      "Repeat for the next entry where content_generated is false until all 3 hub entries are complete",
      "Read .claude/skills/service-page/SKILL.md in full",
      "Read .claude/skills/service-page/config.json and find the first entry where content_generated is false",
      "Generate intro and sections for that entry following all rules in SKILL.md, using the areas_served list for all location references",
      "Write the generated intro string and sections array into the matching service entry in lib/services.ts",
      "Set content_generated to true for that entry in .claude/skills/service-page/config.json",
      "Repeat for the next entry where content_generated is false until all 12 service entries are complete",
      "Confirm .claude/skills/category-page/config.json has content_generated set to true for all 3 entries",
      "Confirm .claude/skills/service-page/config.json has content_generated set to true for all 12 entries",
      "Run tsc --noEmit and confirm zero TypeScript errors after all content has been written to lib/services.ts"
    ],
    "passes": true
  },
  {
    "id": "F-51",
    "category": "Epic 13 - SEO Content Population",
    "description": "Update metaTitle, metaDescription, and keywords for all 15 pages",
    "steps": [
      "Rewrite metaTitle, metaDescription, and keywords arrays for all 3 hub and 12 service entries in lib/services.ts",
      "London may appear in meta titles even though it is absent from slugs",
      "Confirm no two pages share an identical metaTitle",
      "Confirm no two pages share an identical metaDescription",
      "Confirm all meta titles are under 60 characters",
      "Confirm all meta descriptions are under 160 characters"
    ],
    "passes": true
  },
  {
    "id": "F-52",
    "category": "Epic 13 - SEO Content Population",
    "description": "Full content audit pass across all 15 pages",
    "steps": [
      "Review all intro and sections fields for every page against the Words to Avoid list in .claude/skills/category-page/SKILL.md and confirm zero matches",
      "Confirm zero placeholder or lorem ipsum text remains in any intro or sections field",
      "Confirm each hub page intro and sections combined is between 800 and 1200 words",
      "Confirm each service page intro and sections combined is between 800 and 1200 words",
      "Confirm each hub intro references the primary keyword within its first 50 words",
      "Confirm each service intro references the primary keyword within its first 50 words",
      "Confirm each hub page has at least 3 sections entries with headings matching its config secondary_categories",
      "Confirm each service page has at least 2 sections entries with headings matching its config secondary_categories",
      "Confirm each hub page references at least 3 areas from the areas_served list across intro and sections",
      "Confirm each hub page mentions all child_services from its config by name",
      "Confirm each service page references at least 2 areas from the areas_served list across intro and sections",
      "Confirm each service page mentions its parent_category by name at least once",
      "Confirm no intro or sections field references any area outside the areas_served list",
      "Confirm zero FAQ or Q&A formatted content across all 15 pages",
      "Confirm zero brand accreditation claims across all 15 pages",
      "Confirm zero HTML tags in any intro or sections field across all 15 pages"
    ],
    "passes": true
  },
  {
    "id": "F-53",
    "category": "Epic 14 - Post-Content Validation",
    "description": "Full internal link chain is walkable after all changes",
    "steps": [
      "Start from the homepage",
      "Navigate to /services using a nav or body link",
      "Click a category card and confirm the category page loads correctly",
      "Click a service card on the category page and confirm the service page loads correctly",
      "Confirm the This service is part of our [Category] offering link is present on the service page",
      "Click that link and confirm it returns to the correct category page without a 404",
      "Confirm all steps resolve without a 404 and with zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-54",
    "category": "Epic 14 - Post-Content Validation",
    "description": "Sitemap reflects all 15 final URLs after data layer reconciliation",
    "steps": [
      "Navigate to /sitemap.xml",
      "Confirm the file is accessible and well-formed XML",
      "Confirm exactly 15 loc entries are present",
      "Confirm a loc entry exists for each of the 3 hub category slugs: central-heating, plumbing-services, gas-services",
      "Confirm a loc entry exists for each of the 12 service slug pairs at the correct nested path",
      "Confirm no legacy slugs from the old structure are present: boiler-gas, plumbing-maintenance, landlord-safety"
    ],
    "passes": true
  },
  {
    "id": "F-55",
    "category": "Epic 14 - Post-Content Validation",
    "description": "Lighthouse SEO score is 100/100 on a hub page and a service page after all changes",
    "steps": [
      "Run a Lighthouse SEO audit on one hub category page via Chrome DevTools MCP",
      "Confirm score is 100/100 with no failing SEO checks",
      "Run a Lighthouse SEO audit on one service page via Chrome DevTools MCP",
      "Confirm score is 100/100 with no failing SEO checks"
    ],
    "passes": true
  },
  {
    "id": "F-56",
    "category": "Epic 14 - Post-Content Validation",
    "description": "Lighthouse Performance score is 90+ on a hub page and a service page after all changes",
    "steps": [
      "Run a Lighthouse Performance audit on one hub category page via Chrome DevTools MCP",
      "Confirm LCP is under 2.5 seconds",
      "Confirm CLS is under 0.1",
      "Confirm TBT is under 200ms",
      "Run the same audit on one service page via Chrome DevTools MCP",
      "Confirm LCP is under 2.5 seconds",
      "Confirm CLS is under 0.1",
      "Confirm TBT is under 200ms"
    ],
    "passes": true
  },
  {
    "id": "F-57",
    "category": "Epic 14 - Post-Content Validation",
    "description": "Zero console errors and zero failed network requests after all changes",
    "steps": [
      "Open browser console and Network tab via Chrome DevTools MCP",
      "Navigate to /services and confirm zero console errors and no failed network requests",
      "Navigate to a hub category page and confirm zero console errors and no failed network requests",
      "Navigate to a service page and confirm zero console errors and no failed network requests"
    ],
    "passes": true
  },
   {
    "id": "F-58",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Install shadcn accordion component",
    "steps": [
      "Run: npx shadcn@latest add accordion",
      "Confirm components/ui/accordion.tsx is created",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to any existing page and confirm zero console errors — no regressions from the install"
    ],
    "passes": true
  },
  {
    "id": "F-59",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Add faqs field to Service type in lib/services.ts",
    "steps": [
      "Open lib/services.ts",
      "Add faqs?: { question: string; answer: string }[] to the Service type — optional field, not Category",
      "Confirm the field is optional so all existing service entries without faqs compile without errors",
      "Run tsc --noEmit and confirm zero TypeScript errors"
    ],
    "passes": true
  },
  {
    "id": "F-60",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Create FaqSchema component that outputs FAQPage JSON-LD for service pages",
    "steps": [
      "Create components/FaqSchema.tsx",
      "Component accepts { faqs: { question: string; answer: string }[] } as its only prop",
      "Returns null if faqs is empty or undefined",
      "Outputs a <script type=application/ld+json> tag with @type FAQPage schema",
      "The mainEntity array must contain one Question entry per FAQ item, each with acceptedAnswer containing the matching answer text",
      "Answers in the schema must match the faqs array values exactly — no paraphrasing",
      "Use a Script component with a unique id prop (faq-schema-[service.slug]) to avoid duplicate IDs",
      "Run tsc --noEmit and confirm zero TypeScript errors"
    ],
    "passes": true
  },
  {
    "id": "F-61",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Update ServicePageTemplate to render FAQ accordion section and FaqSchema",
    "steps": [
      "Open components/ServicePageTemplate.tsx",
      "Import Accordion, AccordionContent, AccordionItem, AccordionTrigger from @/components/ui/accordion",
      "Import FaqSchema from @/components/FaqSchema",
      "Add FaqSchema before the closing </main> tag, passing service.faqs — rendered only when service.faqs has entries",
      "Add an FAQ section between the sections content and the parent category link",
      "Section heading should be a plain h2 using existing site Tailwind classes",
      "Render service.faqs using the Accordion component — each item uses AccordionItem, AccordionTrigger for the question, AccordionContent for the answer",
      "The entire FAQ section must be conditionally rendered — only shown when service.faqs exists and has at least one entry",
      "Do not introduce dangerouslySetInnerHTML anywhere",
      "Do not introduce any new CSS classes",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to a service page and confirm the FAQ section does not appear when faqs is empty",
      "Add a placeholder faqs entry to one service in lib/services.ts and confirm the accordion renders correctly",
      "Confirm Lighthouse SEO score is still 100/100",
      "Confirm zero console errors"
    ],
    "passes": true
  },
  {
    "id": "F-62",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Place the updated service-page config.json with faq fields and the faq-generation skill files",
    "steps": [
      "Replace .claude/skills/service-page/config.json with the updated file — now includes article_url, paa_questions, and faq_generated: false for all 12 service entries",
      "Create .claude/skills/faq-generation/SKILL.md using the provided skill file",
      "Create .claude/skills/faq-generation/ directory if it does not exist",
      "Create .claude/skills/faq-generation/opportunities/ directory for per-slug opportunity output files",
      "Confirm .claude/skills/service-page/config.json has faq_generated set to false for all 12 entries",
      "Confirm every entry has a non-empty article_url and at least 5 paa_questions"
    ],
    "passes": true
  },
  {
    "id": "F-63",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Generate faqs for all 12 service pages using the faq-generation skill, toggling faq_generated per entry until all are complete",
    "steps": [
      "Read .claude/skills/faq-generation/SKILL.md in full before generating any content",
      "Read .claude/skills/service-page/config.json and find the first entry where faq_generated is false",
      "Fetch and read the full content of the article_url for that entry",
      "For each paa_question, check if the article contains a factual answer — skip any it does not answer",
      "Draft 5–10 Q&A pairs using only information from the article — no invented facts, no promotional content, no links in answers",
      "Write the generated faqs array into the matching service entry in lib/services.ts",
      "Set faq_generated to true for that entry in .claude/skills/service-page/config.json",
      "Append unanswered questions and article opportunity notes to .claude/skills/faq-generation/opportunities/[slug].md",
      "Repeat for the next entry where faq_generated is false until all 12 service entries are complete",
      "Confirm .claude/skills/service-page/config.json has faq_generated set to true for all 12 entries",
      "Run tsc --noEmit and confirm zero TypeScript errors after all faqs have been written to lib/services.ts"
    ],
    "passes": true
  },
  {
    "id": "F-64",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Full FAQ content audit pass across all 12 service pages",
    "steps": [
      "Confirm every service entry in lib/services.ts has a faqs array with at least 5 entries",
      "Confirm no faqs array has more than 10 entries",
      "Confirm every question ends with a question mark",
      "Confirm every answer is between 40 and 120 words",
      "Confirm no answer contains HTML tags, markdown, or links",
      "Confirm no answer references the business by name or contains promotional content",
      "Confirm no two questions within the same service page are duplicates or near-duplicates",
      "Confirm the questions and answers in the faqs array match exactly what the Accordion renders on the page — no paraphrasing",
      "Confirm no answer contains any word from the Words to Avoid list in .claude/skills/faq-generation/SKILL.md"
    ],
    "passes": true
  },
  {
    "id": "F-65",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Validate FaqSchema passes Google Rich Results Test on at least two service pages",
    "steps": [
      "Navigate to a service page with faqs populated",
      "Inspect <head> and confirm a second <script type=application/ld+json> tag exists with @type FAQPage",
      "Extract the FAQPage JSON and confirm mainEntity contains one Question entry per FAQ item displayed on the page",
      "Confirm acceptedAnswer text in the schema matches the Accordion answer text exactly",
      "Submit the page URL to https://search.google.com/test/rich-results and confirm zero errors and zero warnings for the FAQPage result type",
      "Repeat for a second service page from a different category",
      "Confirm the existing LocalBusiness schema on the page is unaffected and still passes with zero errors"
    ],
    "passes": true
  },
  {
    "id": "F-66",
    "category": "Epic 15 - FAQ Generation and Schema",
    "description": "Lighthouse SEO 100/100 and zero console errors after FAQ additions",
    "steps": [
      "Run a Lighthouse SEO audit on one service page with faqs via Chrome DevTools MCP",
      "Confirm score is 100/100 with no failing SEO checks",
      "Open browser console and Network tab via Chrome DevTools MCP",
      "Navigate to a service page with faqs and confirm zero console errors and no failed network requests",
      "Navigate to a service page without faqs and confirm the FAQ section is absent and zero console errors"
    ],
    "passes": true
  },
   {
    "id": "F-67",
    "category": "Epic 16 - Navbar Mega-Menu and Mobile Hamburger",
    "description": "Rebuild Navbar to replace the Services link with three hub dropdowns on desktop and a hamburger overlay on mobile",
    "steps": [
      "Read components/Navbar.tsx, lib/services.ts, and at least one existing page component before writing any code",
      "Extract exact Tailwind classes used for text, links, borders, backgrounds, and buttons — use those exact classes throughout, do not introduce new styles",
      "Add 'use client' directive — component requires usePathname and useState",
      "Import getAllCategories from @/lib/services and call it at the top of the component — all hub names, slugs, and child service names must come from the data layer, never hardcoded",
      "Remove the single Services link from the desktop nav",
      "Render one hub label per category from getAllCategories() in the desktop nav",
      "Wrap each hub label and its dropdown panel in a single <div className='relative group'> so hover state persists when the cursor moves into the panel",
      "Show the dropdown panel on CSS group-hover — no JavaScript for open/close on desktop",
      "Render each child service in the panel as a Link to /services/[category.slug]/[service.slug] using the service name field",
      "Each service link in the panel must highlight with text-primary on hover and be fully clickable",
      "Apply active highlight (text-primary font-medium) to a hub label when pathname.startsWith('/services/' + category.slug)",
      "Apply active highlight to a service link in the panel when pathname equals /services/[category.slug]/[service.slug] exactly",
      "Position the panel absolutely below the hub label with z-50, white background, border border-border, rounded-lg, shadow-lg, and sufficient min-width to prevent text wrapping",
      "Keep Home, About, and Contact links with their existing active state logic unchanged",
      "On mobile (below md) hide the desktop nav entirely",
      "Show a Menu icon (lucide-react) hamburger button in the header bar on mobile alongside the existing phone number and CTA button",
      "On hamburger tap open a full-screen fixed overlay (inset-0, z-50, white background, scrollable) matching the Pimlico Plumbers pattern — full width, stacked rows",
      "Overlay must contain: a CLOSE button with X icon top right, Home / About / Contact as plain links, and the three hub categories as expandable rows with a chevron",
      "Tapping a hub row expands it inline to reveal its child service links — tapping again collapses it — only one hub expanded at a time",
      "All service links in the mobile overlay navigate correctly and close the overlay on tap",
      "Child service links in the mobile overlay highlight on hover and tap",
      "Use useState for overlay open/close and for which hub is currently expanded",
      "Phone number and Get Quote CTA remain in the header at all breakpoints (phone hidden below sm as currently)",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to /, /services/[categorySlug], and /services/[categorySlug]/[serviceSlug] on desktop and confirm the correct hub label is highlighted on each",
      "Take a screenshot of the desktop nav with a hub dropdown open and confirm visual consistency with the existing site",
      "Take a screenshot of the mobile overlay open and confirm it matches the Pimlico Plumbers pattern — full-screen, stacked hub rows, chevron, expandable child services",
      "Run Lighthouse SEO audit via Chrome DevTools MCP and confirm score is 100/100",
      "Confirm zero console errors on all page types",
      "Make one git commit: feat(navbar): replace services link with hub mega-menu and mobile hamburger overlay"
    ],
    "passes": true
  },
  {
    "id": "F-68",
    "category": "Epic 16 - Navbar Mega-Menu and Mobile Hamburger",
    "description": "Verify navbar active state is correct across all routes after data layer reconciliation replaces category and service slugs",
    "steps": [
      "Navigate to /services/central-heating and confirm the Central Heating hub label is highlighted and no other hub label is",
      "Navigate to /services/central-heating/boiler-repair and confirm the Central Heating hub label remains highlighted and the Boiler Repair service link inside the dropdown is also highlighted",
      "Navigate to /services/plumbing-services and confirm the Plumbing Services hub label is highlighted and no other hub label is",
      "Navigate to /services/gas-services and confirm the Gas Services hub label is highlighted and no other hub label is",
      "Navigate to / and confirm no hub label is highlighted and the Home link is highlighted",
      "Navigate to /about and confirm no hub label is highlighted and the About link is highlighted",
      "Navigate to /contact and confirm no hub label is highlighted and the Contact link is highlighted",
      "Confirm all dropdown service links on desktop resolve without a 404",
      "Confirm all service links in the mobile overlay resolve without a 404",
      "Confirm zero console errors on all tested routes"
    ],
    "passes": true
  },
  {
    "id": "F-69",
    "category": "Epic 17 - Radix Navigation Menu",
    "description": "Install @radix-ui/react-navigation-menu and remove all manual hover timer logic from Navbar",
    "steps": [
      "Run: npm install @radix-ui/react-navigation-menu",
      "Open components/Navbar.tsx",
      "Remove openDesktopHub state, openDesktopHubRef, closeTimer, switchTimer, handleHubEnter, and handleHubLeave entirely",
      "Confirm no timer refs or manual open/close state remain in the file",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Navigate to any page and confirm zero console errors — no regressions from the removal"
    ],
    "passes": true
  },
  {
    "id": "F-70",
    "category": "Epic 17 - Radix Navigation Menu",
    "description": "Replace the desktop nav block with the Radix NavigationMenu implementation",
    "steps": [
      "Import * as Nav from @radix-ui/react-navigation-menu at the top of components/Navbar.tsx",
      "Replace the existing desktop <nav> block with Nav.Root containing Nav.List",
      "Render Home as a Nav.Item with Nav.Link asChild wrapping a Next.js Link",
      "Render each category from getAllCategories() as a Nav.Item with Nav.Trigger for the label and Nav.Content for the dropdown panel",
      "Inside each Nav.Content render an All [Category Name] link followed by a divider then a Nav.Link asChild per service linking to /services/[category.slug]/[service.slug]",
      "Render About and Contact as Nav.Item with Nav.Link asChild wrapping Next.js Links",
      "Add Nav.Viewport as a direct sibling of Nav.List inside Nav.Root — this handles floating panel positioning",
      "Confirm the mobile overlay accordion block is completely unchanged",
      "Run tsc --noEmit and confirm zero TypeScript errors"
    ],
    "passes": true
  },
  {
    "id": "F-71",
    "category": "Epic 17 - Radix Navigation Menu",
    "description": "Confirm active state and visual consistency after Radix migration",
    "steps": [
      "Start dev server with npm run dev",
      "Navigate to / and confirm Home link shows text-primary font-medium",
      "Navigate to /services/central-heating and confirm the Central Heating hub trigger shows text-primary font-medium",
      "Navigate to /services/central-heating/boiler-repair and confirm Central Heating trigger still shows active style",
      "Navigate to /about and confirm About link shows active style and no hub trigger is active",
      "Hover each hub trigger on desktop and confirm the dropdown panel opens with all child service links listed",
      "Click a service link in a dropdown and confirm it navigates to the correct page without a 404",
      "Take a screenshot of the desktop nav with a dropdown open and confirm visual consistency with the existing site — no new styles introduced",
      "Resize to mobile and confirm the hamburger overlay still opens and all accordion hub rows still expand and link correctly",
      "Run Lighthouse SEO audit via Chrome DevTools MCP and confirm score is 100/100",
      "Confirm zero console errors on all page types",
      "Amend the previous navbar commit: git commit --amend with message feat(navbar): migrate desktop nav to radix navigation-menu"
    ],
    "passes": true
  },
  {
    "id": "F-72",
    "category": "Epic 18 - Footer Service Links",
    "description": "Rebuild footer Quick Links into a per-category service link grid driven by the data layer",
    "steps": [
      "Read app/footer.tsx and components/Navbar.tsx before writing any code — note the exact Tailwind classes used for text, links, opacity, and spacing",
      "Add 'use client' directive to app/footer.tsx only if required — prefer a server component import of getAllCategories if possible",
      "Import getAllCategories from @/lib/services at the top of the footer file",
      "Replace the existing static Quick Links <ul> with a dynamic block that renders one column per category returned by getAllCategories()",
      "Each column must have a heading that is a Next.js Link to /services/[category.slug] — heading text is category.name",
      "Below the heading render a <ul> listing every service in that category as a Next.js Link to /services/[category.slug]/[service.slug] — link text is service.name",
      "All new links must use the same opacity and hover classes as the existing footer links — do not introduce new Tailwind classes",
      "Retain the existing company blurb column and Contact Info column completely unchanged — only the Quick Links column is replaced",
      "The footer grid must adapt correctly at all breakpoints — confirm no horizontal overflow on mobile",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Start dev server and navigate to / via Chrome DevTools MCP",
      "Take a screenshot and confirm the footer renders all three category columns with their service links beneath each heading",
      "Click each category heading link and confirm it navigates to the correct /services/[category.slug] page without a 404",
      "Click at least one service link under each category and confirm it navigates to the correct /services/[category.slug]/[service.slug] page without a 404",
      "Confirm zero console errors and no failed network requests on / and on at least one service page",
      "Confirm the footer renders correctly on /services, /about, and /contact as well"
    ],
    "passes": false
  },
  {
    "id": "F-73",
    "category": "Epic 18 - Footer Service Links",
    "description": "Verify footer service links render and resolve correctly after a data layer change",
    "steps": [
      "Add a temporary new service entry to lib/services.ts under an existing category",
      "Navigate to / via Chrome DevTools MCP and confirm the new service link appears in the footer under the correct category column without any code changes to the footer component",
      "Click the new link and confirm it navigates to the correct page without a 404",
      "Remove the temporary entry and confirm the footer reverts correctly",
      "Confirm zero TypeScript errors after removal"
    ],
    "passes": false
  },
  {
    "id": "F-74",
    "category": "Epic 19 - Areas Served Section",
    "description": "Add a contextualised Areas Served section to CategoryPageTemplate with a page-specific heading and a 3-column area grid",
    "steps": [
      "Read components/CategoryPageTemplate.tsx and lib/services.ts before writing any code",
      "Add an areasServed: string[] field to the Category type in lib/services.ts — this is the list of service areas relevant to that category page",
      "Populate areasServed for all 3 hub categories using the 29-entry areas_served list from .claude/skills/category-page/config.json — all 3 hub pages use the same 29 areas",
      "Add an areasHeading: string field to the Category type — this is the page-specific H2 shown above the areas grid",
      "Set areasHeading for each category: central-heating → 'Find your local central heating engineer', plumbing-services → 'Find your local plumber', gas-services → 'Find your local gas engineer'",
      "Open components/CategoryPageTemplate.tsx and add an Areas Served section as a new <section className='py-20 bg-secondary/30'> placed between the services card grid section and the CTA section — this background alternates with the bg-white sections already in the file, maintaining the existing page rhythm",
      "Render category.areasHeading as <h2 className='text-3xl md:text-4xl text-foreground mb-4'> — these are the exact classes used on the two existing section-level H2s in the file; do not add any underline, border, accent bar, or any decorative element below or around the heading",
      "Render category.areasServed below the heading in a responsive grid using className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4' or the closest equivalent already present in the codebase — do not introduce new Tailwind classes",
      "Each area item renders the area name only as a <p className='text-muted-foreground'> — no dash, no icon, no bullet, no border; plain text matching the body copy style used throughout the templates",
      "Do not introduce dangerouslySetInnerHTML — render all items as plain JSX",
      "Do not introduce any new Tailwind classes not already present in the codebase",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Start dev server and navigate to /services/central-heating via Chrome DevTools MCP",
      "Take a screenshot and confirm the areasHeading H2 renders in the same visual style as the other section headings on the page — same size, same colour, no underline — above a 3-column grid of the 29 area names in muted text",
      "Navigate to /services/plumbing-services and confirm the heading reads 'Find your local plumber' and the area grid is present",
      "Navigate to /services/gas-services and confirm the heading reads 'Find your local gas engineer' and the area grid is present",
      "Confirm zero console errors on all three category pages"
    ],
    "passes": false
  },
  {
    "id": "F-75",
    "category": "Epic 19 - Areas Served Section",
    "description": "Add a contextualised Areas Served section to ServicePageTemplate with a service-specific heading and a 3-column area grid",
    "steps": [
      "Read components/ServicePageTemplate.tsx and lib/services.ts before writing any code",
      "Add an areasServed: string[] field to the Service type in lib/services.ts",
      "Add an areasHeading: string field to the Service type",
      "Populate areasServed and areasHeading for all 12 service entries — areasServed uses the same 29-area list for all services; areasHeading is service-specific following the pattern 'Find your local [service name] in London', for example: boiler-repair → 'Find your local boiler repair engineer', gas-safety-certificate → 'Find your local gas safety inspector'",
      "Open components/ServicePageTemplate.tsx and add an Areas Served section as a new <section className='py-20 bg-secondary/30'> placed between the bg-secondary/30 content section and the CTA section — same structural pattern as the category template",
      "Render service.areasHeading as <h2 className='text-3xl md:text-4xl text-foreground mb-4'> — identical classes to the existing section-level H2s in the file; no underline, no border, no accent bar, no decorative element of any kind",
      "Render service.areasServed in the identical grid markup used in CategoryPageTemplate — same className on the grid wrapper and the same <p className='text-muted-foreground'> on each area item; copy the markup directly so the two sections are pixel-identical",
      "Do not introduce dangerouslySetInnerHTML",
      "Do not introduce any new Tailwind classes not already present in the codebase",
      "Run tsc --noEmit and confirm zero TypeScript errors",
      "Start dev server and navigate to /services/central-heating/boiler-repair via Chrome DevTools MCP",
      "Take a screenshot and confirm the areasHeading H2 matches the visual style of the other section headings on the page — same size, same weight, same colour, no underline — and the area grid shows all 29 entries in muted text",
      "Navigate to /services/gas-services/gas-safety-certificate and confirm the heading reads 'Find your local gas safety inspector' and the area grid is present",
      "Navigate to /services/plumbing-services/shower-installation and confirm the heading and area grid are present",
      "Confirm zero console errors on all three service pages",
      "Take a screenshot of a service page Areas Served section and a category page Areas Served section and confirm they are visually identical — same section background, same heading style, same grid layout, same text colour"
    ],
    "passes": false
  },
  {
    "id": "F-76",
    "category": "Epic 19 - Areas Served Section",
    "description": "Post-Areas-Served validation — Lighthouse, TypeScript, and full link chain",
    "steps": [
      "Run tsc --noEmit and confirm zero TypeScript errors across the full project",
      "Run Lighthouse SEO audit on a category page via Chrome DevTools MCP — confirm score is 100/100",
      "Run Lighthouse SEO audit on a service page via Chrome DevTools MCP — confirm score is 100/100",
      "Open browser console via Chrome DevTools MCP",
      "Navigate to /services/central-heating and confirm zero console errors and no failed network requests",
      "Navigate to /services/central-heating/boiler-repair and confirm zero console errors and no failed network requests",
      "Navigate to /services/plumbing-services/bathroom-plumbing and confirm zero console errors and no failed network requests",
      "Navigate to /services/gas-services/gas-engineer and confirm zero console errors and no failed network requests",
      "Confirm the Areas Served section appears on every category and service page visited",
      "Confirm the areasHeading is unique and service-contextualised on every page — no two pages share an identical heading",
      "Confirm no page has a broken layout at mobile (375px) or desktop (1440px) viewport widths"
    ],
    "passes": false
  }
]
```