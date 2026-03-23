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
    "passes": false
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
    "passes": false
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
    "passes": false
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
    "passes": false
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
    "passes": false
  }
]
```