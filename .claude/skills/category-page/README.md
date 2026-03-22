# Category Page Skill – config.json Schema Reference

The `category-page` skill reads `.claude/skills/category-page/config.json` to generate
SEO-optimised category hub page content. The file contains a top-level `areas_served` array
shared across all pages, and a `pages` array with one entry per hub page. All fields are required.

## Top-Level Fields

| Field | Type | Purpose |
|---|---|---|
| `areas_served` | `string[]` | The full list of areas the business serves. The skill will only reference areas from this list when generating local SEO signals. Never add areas outside the business's actual service territory. |

## Per-Page Fields (`pages` array)

| Field | Type | Purpose |
|---|---|---|
| `slug` | `string` | The category slug as it appears in `lib/services.ts` (e.g. `"central-heating"`). Must match exactly. |
| `content_generated` | `boolean` | Set to `false` initially. The agent sets this to `true` after writing the generated `intro` and `sections` into `lib/services.ts` for this entry. |
| `primary_category` | `string` | The main GBP category for this hub (e.g. `"Central Heating Services"`). |
| `city` | `string` | The city the business serves (e.g. `"London"`). Combined with `primary_service` to form the target keyword. |
| `primary_service` | `string` | The head term for the cluster (e.g. `"Central Heating"`). Must appear in `intro` within the first 50 words. |
| `target_tone` | `string` | Writing style and voice (e.g. `"Authoritative, conversational, local expert"`). |
| `secondary_categories` | `string[]` | GBP secondary categories for this cluster. Each becomes an exact-match `sections[n].heading` H2. Should reflect the full breadth of the hub. |
| `child_services` | `string[]` | The exact `name` values of every child service page nested under this category in `lib/services.ts`. Every name must appear at least once in the generated content. These correspond to the service cards the template renders. |
| `example` | `string` | A short, locally-authentic example paragraph demonstrating the desired tone. Must only reference areas from `areas_served`. |

## Key Distinction: `child_services` vs `secondary_categories`

- `secondary_categories` — GBP category labels that become H2 headings. These are keyword/SEO constructs.
- `child_services` — The exact page names of service pages that live under this hub in `lib/services.ts`. These must be mentioned in prose so the content matches what the visitor sees in the service cards below.

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
      "slug": "central-heating",
      "content_generated": false,
      "primary_category": "Central Heating Services",
      "city": "London",
      "primary_service": "Central Heating",
      "target_tone": "Authoritative, conversational, local expert",
      "secondary_categories": [
        "Boiler Repair",
        "Boiler Service",
        "New Boiler Installation",
        "Power Flush",
        "Smart Thermostat Installation",
        "Radiator Services",
        "Heating System Repairs"
      ],
      "child_services": [
        "Boiler Repair",
        "Boiler Service",
        "New Boiler Installation",
        "Power Flush",
        "Smart Thermostat Installation",
        "Radiator Installation & Repair",
        "Heating System Repairs"
      ],
      "example": "Last November, we had calls from across Islington and Camden after the first cold snap — boilers that hadn't been touched since the previous winter suddenly refusing to fire up."
    }
  ]
}
```

## Adding New Fields

Document any new field in the table above before committing.