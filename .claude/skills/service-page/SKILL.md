---
name: service-page
description: "Generate SEO-optimised service page content for a local service business. The content targets a specific service keyword (e.g. 'Boiler Repair London'), uses GBP secondary categories scoped to this service as H2 headings, and weaves in the GBP sub-tasks that belong to this service page. Output is two plain-string fields — intro and sections — written directly into lib/services.ts. No HTML tags, no FAQ content, no brand accreditation claims."
---

# INSTRUCTIONS

1. Read `config.json` in `.claude/skills/service-page/` and find the first entry where `content_generated` is `false`.
2. Use the fields from that entry to generate service page content.
3. Write the output directly into `lib/services.ts` — populate the `intro` field and the `sections` array for the matching service entry under its parent category.
4. Set `content_generated` to `true` for that entry in `config.json`.
5. Repeat until all entries have `content_generated` set to `true`.
6. Do not produce HTML. All output must be plain strings.

---

# CONTENT SPECIFICATIONS

GBP Primary Category: `{{primary_category}}`
City: `{{city}}`
Target Keyword: `{{primary_service}} {{city}}`
Parent Hub Category: `{{parent_category}}`
Target length: 800–1,200 words across `intro` + all `sections[n].body` fields combined

## Areas Served (only reference areas from this list — do not name any other London area)
`{{areas_served}}`

## GBP Secondary Categories (become H2 headings — scoped to this service only, use exact match)
- `{{secondary_category_1}}`
- `{{secondary_category_2}}`
- `{{secondary_category_3}}`

## GBP Services (sub-tasks that belong to this service page — weave naturally into body copy)
These are the granular tasks and capabilities covered by this service page. They do not have
their own pages — they live within this page's content.
- `{{service_1}}`
- `{{service_2}}`
- `{{service_3}}`

---

# WRITING INSTRUCTIONS

You are an expert in creating content that dominates both traditional Google search rankings AND
gets recommended by AI systems like ChatGPT and Google's AI overview.

You understand that Google still rewards comprehensive, keyword-optimised content for map pack
rankings, while AI systems look for authentic, conversational content that matches how real
people communicate.

## Your Writing Mission

Write service page content that ranks for `{{primary_service}} {{city}}` and converts visitors
who have already decided they need this specific service.

---

## Optimisation Guidelines

### For Google Algorithm

- Use the target keyword `{{primary_service}} {{city}}` in the `intro` field within the first 50 words
- Use each GBP secondary category as an exact-match `sections[n].heading` — scoped to this specific service, not the broader hub
- Maintain keyword density of 1–2% for the primary keyword across all fields combined
- Include local SEO signals by referencing areas from the `areas_served` list only — do not name any area not in that list
- Use proper heading hierarchy: `intro` is the opening paragraph under the H1, each `sections[n].heading` becomes an H2
- Include semantic keywords related to `{{primary_service}}`
- Weave the GBP services (sub-tasks) listed above naturally into the body copy

### For AI Systems

- Sound like genuine recommendations from a trusted local expert
- Use natural, conversational language that matches how people actually talk
- Answer at least one real question people ask about this service, such as "What do I do if [common problem]?" or "How much does `{{primary_service}}` cost?"
- Include authentic local knowledge: which areas have the most callouts, seasonal demand, common property types
- Share helpful diagnostic or preparation advice — not just a service pitch
- Use the exact words customers use when describing this problem

---

## Balanced Writing Approach

Start each section with natural, conversational language, then include technical keyword optimisation.

**Example of the tone to match:**

`{{example}}`

---

## Content Structure

- **`intro`:** Opening paragraph. Must contain the target keyword within the first 50 words. Use a relatable local scenario specific to this service.
- **`sections[n].heading`:** Each GBP secondary category, used as exact-match H2 text. Scoped to this service only — do not use sibling service page names as headings.
- **`sections[n].body`:** One to two paragraphs per section. Weave in GBP sub-tasks from the services list. At least one section should address a common customer question directly.
- **Local Elements:** Reference at least 2 areas from the `areas_served` list. Do not reference any area outside that list.
- **Parent Hub Reference:** The parent hub category `{{parent_category}}` must be mentioned by name at least once — the template renders the structural link back to it automatically.

---

## Language Guidelines

- Write at 5th grade reading level
- Use short, clear sentences
- Balance conversational tone with keyword requirements
- Include both technical terms (for Google) and plain language explanations (for AI)
- Sound helpful and expert, not robotic or overly salesy

---

## Quality Signals for Both Systems

- Demonstrate real local expertise and community knowledge
- Include specific, helpful information that solves actual problems with this service
- Reference seasonal or area-specific issues relevant to `{{primary_service}}`
- Show genuine business history and community involvement
- Provide value beyond just describing the service

---

## Words to Avoid

embark, look no further, navigating, picture this, top-notch, unleash, unlock, unveil,
we've got you covered, transition, transitioning, crucial, delve, daunting, deep dive,
dive in, realm, ensure, in conclusion, in summary, optimal, assessing, firstly, strive,
striving, furthermore, moreover, comprehensive, we know, we understand, testament,
captivating, eager, refreshing, edge of my seat, breath of fresh air, breath of fresh,
to consider, it is important to consider, there are a few considerations, it's essential to,
vital, it's important to note, it should be noted, to sum up, secondly, lastly, in terms of,
with regard to, it's worth mentioning, it's interesting to note, significantly, notably,
essentially, as such, therefore, thus, interestingly, in essence, noteworthy, bear in mind,
it's crucial to note, one might argue, it's widely acknowledged, predominantly, from this
perspective, in this context, this demonstrates, arguably, it's common knowledge, undoubtedly,
this raises the question, in a nutshell, unveiled

---

## Additional Rules for This Variant

- Do not write FAQ sections or Q&A formatted content
- Do not make any brand accreditation, approved installer status, or manufacturer partnership claims
- Do not include any HTML tags in any field — plain strings only
- Do not include anchor tags or links — the template renders the parent hub link automatically
- The `sections` array must contain at least 2 entries, one per GBP secondary category
- H2 headings must be scoped to this service — do not use sibling service page names as headings
- Only reference areas from the `areas_served` list — never invent or assume service areas

---

## Output Format

Write the generated content directly into `lib/services.ts` for the matching service slug:

```ts
{
  intro: "Opening paragraph as a plain string...",
  sections: [
    {
      heading: "Exact GBP secondary category as plain string",
      body: "One to two paragraphs as a plain string..."
    }
    // one entry per secondary category
  ]
}
```

Only populate `intro` and `sections`. All other fields (`slug`, `name`, `tagline`, `metaTitle`,
`metaDescription`, `keywords`, `coverImage`) remain unchanged.

---

## Success Metric

Content should feel natural enough that AI systems recommend it, while being optimised enough
that Google ranks it in the top 3 map pack results for `{{primary_service}} {{city}}`.