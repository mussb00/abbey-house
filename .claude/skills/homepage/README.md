# Homepage Skill – config.json Schema Reference

The `/homepage` skill reads `.claude/skills/homepage/config.json` to generate SEO-optimised homepage copy. All fields are required.

## Schema

| Field | Type | Purpose |
|---|---|---|
| `primary_category` | `string` | The main Google Business Profile category (e.g. "Central Heating Services"). Used as the primary keyword throughout the copy. |
| `city` | `string` | The city or borough the business serves (e.g. "Brent"). Appended to the primary keyword for local SEO. |
| `primary_service` | `string` | The core service offered — often matches `primary_category` but can differ if the GBP category wording diverges from common search terms. |
| `local_neighbourhood` | `string` | A specific neighbourhood or sub-area within `city` used to add hyper-local flavour (e.g. "Brent (Borough)"). |
| `target_tone` | `string` | The writing style and voice for the copy (e.g. "Authoritative, conversational, local expert"). |
| `secondary_categories` | `string[]` | Additional GBP categories. Each becomes an H2 heading in the homepage draft (e.g. `["Gas installation service", "Gas engineer", "Plumber"]`). |
| `services` | `string[]` | Individual services offered under the primary category. Woven naturally into the body copy (e.g. `["Boiler repair", "Boiler service", "New boiler installation", "Boiler replacement"]`). |
| `example` | `string` | A short, locally-authentic example paragraph demonstrating the desired tone, specificity, and neighbourhood references. Used as a stylistic reference for the skill. |

## Adding New Fields

When a new field is added to `config.json`, document it in the table above with its type and purpose before committing.
