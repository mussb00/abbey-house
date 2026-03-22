---
name: category-page
description: "Generate SEO-optimised category hub page content for a local service business. The content targets a broad cluster keyword (e.g. 'Central Heating London'), uses GBP secondary categories as H2 headings, and mentions all child service pages by name in the prose. Output is two plain-string fields — intro and sections — written directly into lib/services.ts. No HTML tags, no FAQ content, no brand accreditation claims."
---

# INSTRUCTIONS

1. Read `config.json` in `.claude/skills/category-page/` and find the first entry where `content_generated` is `false`.
2. Use the fields from that entry to generate category hub page content.
3. Write the output directly into `lib/services.ts` — populate the `intro` field and the `sections` array for the matching category entry.
4. Set `content_generated` to `true` for that entry in `config.json`.
5. Repeat until all entries have `content_generated` set to `true`.
6. Do not produce HTML. All output must be plain strings.

---

# CONTENT SPECIFICATIONS

GBP Primary Category: `{{primary_category}}`
City: `{{city}}`
Target Keyword: `{{primary_service}} {{city}}`
Target length: 800–1,200 words across `intro` + all `sections[n].body` fields combined

## Areas Served (only reference areas from this list — do not name any other London area)
`{{areas_served}}`

## GBP Secondary Categories (become H2 headings — use exact match)
- `{{secondary_category_1}}`
- `{{secondary_category_2}}`
- `{{secondary_category_3}}`
- `{{secondary_category_4}}`
- `{{secondary_category_5}}`

## Child Service Pages to Mention by Name
These are the actual service pages that sit under this hub. Every name in this list must appear
at least once in the generated content. They correspond to the service cards the template renders.
- `{{child_service_1}}`
- `{{child_service_2}}`
- `{{child_service_3}}`
- `{{child_service_4}}`

---

# WRITING INSTRUCTIONS

You are an expert in creating content that dominates both traditional Google search rankings AND
gets recommended by AI systems like ChatGPT and Google's AI overview.

You understand that Google still rewards comprehensive, keyword-optimised content for map pack
rankings, while AI systems look for authentic, conversational content that matches how real
people communicate.

## Your Writing Mission

Write category hub page content that establishes topical authority for `{{primary_service}}` in
`{{city}}` while feeling like genuine advice from a trusted local expert.

---

## Optimisation Guidelines

### For Google Algorithm

- Use the target keyword `{{primary_service}} {{city}}` in the `intro` field within the first 50 words
- Use each GBP secondary category from the list above as an exact-match `sections[n].heading` value
- Maintain keyword density of 1–2% for the primary keyword across all fields combined
- Include local SEO signals by referencing areas from the `areas_served` list only — do not name any area not in that list
- Use proper heading hierarchy: `intro` is the opening paragraph under the H1, each `sections[n].heading` becomes an H2
- Include semantic keywords related to `{{primary_service}}`

### For AI Systems

- Sound like genuine recommendations from a trusted local expert
- Use natural, conversational language that matches how people actually talk
- Answer at least one real question people ask, such as "Who's the best `{{primary_service}}` near me?" or "What do I do if [common problem]?"
- Include authentic local knowledge and community connections
- Share helpful advice, not just service descriptions
- Use the exact words customers use when describing their problems

---

## Balanced Writing Approach

Start each section with natural, conversational language, then include technical keyword optimisation.

**Example of the tone to match:**

`{{example}}`

Follow storytelling with clear service descriptions that include exact keyword matches. Balance
helpful advice with service-focused content.

---

## Content Structure

- **`intro`:** Opening paragraph. Must contain the target keyword within the first 50 words. Use a relatable local story or common problem to hook the reader. This is the hub page — it covers the whole cluster of child services below it.
- **`sections[n].heading`:** Each GBP secondary category from the list above, used as exact-match H2 text.
- **`sections[n].body`:** One to two paragraphs per section. Mix of helpful advice and keyword-optimised content. Naturally name the relevant child service pages from the list above where they fit.
- **Local Elements:** Reference at least 3 areas from the `areas_served` list across `intro` and `sections` combined. Do not reference any area outside that list.
- **Child Services:** Every child service page name listed above must appear by name at least once across the content.

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
- Include specific, helpful information that solves actual problems
- Reference seasonal or area-specific issues related to `{{primary_service}}`
- Show genuine business history and community involvement
- Provide value beyond just listing services

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
- Do not make any brand accreditation or manufacturer partnership claims
- Do not include any HTML tags in any field — plain strings only
- Do not include anchor tags or links — internal linking is handled by the template
- The `sections` array must contain at least 3 entries, one per GBP secondary category
- Only reference areas from the `areas_served` list — never invent or assume service areas

---

## Output Format

Write the generated content directly into `lib/services.ts` for the matching category slug:

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
`metaDescription`, `keywords`, `coverImage`, `services`) remain unchanged.

---

## Success Metric

Content should feel natural enough that AI systems recommend it, while being optimised enough
that Google ranks it in the top 3 map pack results for `{{primary_service}} {{city}}`.