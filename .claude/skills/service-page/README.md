# Service Page Skill – config.json Schema Reference

The `service-page` skill reads `.claude/skills/service-page/config.json` to generate
SEO-optimised service page content. The file contains a top-level `areas_served` array
shared across all pages, and a `pages` array with one entry per service page. All fields
are required.

## Top-Level Fields

| Field | Type | Purpose |
|---|---|---|
| `areas_served` | `string[]` | The full list of areas the business serves. The skill will only reference areas from this list when generating local SEO signals. |

## Per-Page Fields (`pages` array)

| Field | Type | Purpose |
|---|---|---|
| `slug` | `string` | The service slug as it appears in `lib/services.ts` (e.g. `"boiler-repair"`). Must match exactly. |
| `content_generated` | `boolean` | Set to `false` initially. The agent sets this to `true` after writing the generated `intro` and `sections` into `lib/services.ts`. |
| `primary_category` | `string` | The GBP category for this specific service (e.g. `"Boiler Repair Service"`). |
| `city` | `string` | The city the business serves (e.g. `"London"`). Combined with `primary_service` to form the target keyword. |
| `primary_service` | `string` | The specific service term (e.g. `"Boiler Repair"`). Must appear in `intro` within the first 50 words. |
| `parent_category` | `string` | The display name of the parent hub category this service belongs to (e.g. `"Central Heating"`). Must be mentioned by name at least once in the generated content. |
| `parent_slug` | `string` | The URL slug of the parent hub (e.g. `"central-heating"`). Reference only — the template renders the link. |
| `target_tone` | `string` | Writing style and voice (e.g. `"Urgent, reassuring, expert"`). |
| `secondary_categories` | `string[]` | GBP secondary categories scoped to this specific service. Each becomes an exact-match `sections[n].heading` H2. Must not include sibling service page names. |
| `services` | `string[]` | The granular GBP sub-tasks that belong to this service page. These do not have their own pages — they are woven into the body copy of this page to demonstrate topical depth (e.g. for Boiler Repair: `["Boiler fault code diagnostics", "Same-day repair", "All makes and models"]`). |
| `example` | `string` | A short, locally-authentic example paragraph demonstrating the desired tone. Must only reference areas from `areas_served`. |

## Key Distinction: `services` vs `secondary_categories`

- `secondary_categories` — GBP category labels that become H2 headings. Keyword/SEO constructs.
- `services` — The granular sub-tasks that belong to this service page and are woven into body copy. They don't have their own pages. They justify the page's breadth and add topical depth.

## Example config.json

```json
{
  "areas_served": [
    "London", "West London", "Paddington", "Marylebone", "Notting Hill", "Camden Town",
    "West Kilburn", "South Hampstead", "Belsize Park", "Maida Vale", "Brondesbury",
    "Chiswick", "Ealing", "West Hampstead", "Hampstead", "Richmond", "Hammersmith",
    "Kilburn", "Kentish Town", "St John's Wood", "Cricklewood", "Westminster",
    "Willesden Green", "Colindale", "London Borough of Brent", "Fulham", "Chelsea",
    "Kensington", "North West London", "North London"
  ],
  "pages": [
    {
      "slug": "boiler-repair",
      "content_generated": false,
      "primary_category": "Boiler Repair Service",
      "city": "London",
      "primary_service": "Boiler Repair",
      "parent_category": "Central Heating",
      "parent_slug": "central-heating",
      "target_tone": "Urgent, reassuring, expert",
      "secondary_categories": [
        "Emergency Boiler Repair",
        "Gas Safe Boiler Engineer",
        "Boiler Fault Diagnosis"
      ],
      "services": [
        "Boiler fault code diagnostics",
        "Same-day boiler repair",
        "Boiler part replacement",
        "No-fix no-fee callouts",
        "All makes and models"
      ],
      "example": "When a boiler breaks down in Hammersmith in January, it's not an inconvenience — it's an emergency. We get calls from Fulham and Chiswick too, usually within hours of the temperature dropping."
    }
  ]
}
```

## Adding New Fields

Document any new field in the table above before committing.