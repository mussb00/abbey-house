---
name: faq-generation
description: "Generate FAQ content for a service page by crawling an authoritative article URL and matching answers to PAA questions. Output is a faqs array of plain { question, answer } objects written directly into lib/services.ts. Follows Google FAQPage content guidelines: answers must be factual, non-promotional, match what is displayed on the page, and contain no links. Produces 5-10 Q&A pairs per service page."
---

# INSTRUCTIONS

1. Read `config.json` in `.claude/skills/service-page/` and find the first entry where `faq_generated` is `false`.
2. Fetch and read the full content of the `article_url` for that entry.
3. For each question in `paa_questions`, check whether the article contains a factual answer — even partially.
4. Draft a concise answer (2–4 sentences) using only information from the article. Do not invent facts.
5. Skip any PAA question the article does not answer.
6. Aim for 5–10 solid Q&A pairs.
7. Write the generated `faqs` array into the matching service entry in `lib/services.ts`.
8. Set `faq_generated` to `true` for that entry in `config.json`.
9. Append any unanswered PAA questions and article opportunity notes to `.claude/skills/faq-generation/opportunities/[slug].md` for editorial review.
10. Repeat until all entries with `faq_generated: false` are complete.

---

# CONTENT SPECIFICATIONS

Target keyword: `{{primary_service}} {{city}}`
Article URL to crawl: `{{article_url}}`
PAA questions: `{{paa_questions}}`

---

# GOOGLE FAQPAGE CONTENT GUIDELINES

These rules are non-negotiable. Violating them risks the page losing rich result eligibility.

- Every answer must be factually grounded in the crawled article. Do not supplement with external knowledge.
- Answers must be plain text — no HTML tags, no markdown, no links.
- Answers must be non-promotional. Do not reference the business, its services, or its pricing in any answer.
- Each question must be unique — no duplicate or near-duplicate questions.
- Questions must be phrased as genuine customer questions (interrogative form), not headings.
- The content displayed in the Accordion on the page must match the `faqs` array exactly — no paraphrasing between schema and display.
- Aim for answers between 40–120 words. Shorter answers risk being unhelpful; longer answers dilute topical focus.

---

# WRITING INSTRUCTIONS

You are an expert SEO content editor working from a single authoritative source.

## Your Mission

For each PAA question provided:
1. Crawl the article at `{{article_url}}` and locate relevant content.
2. If the article addresses the question — draft a clear, authoritative answer using only the article's content.
3. If the article does not address the question — skip it. Record it in the opportunities file.

## Answer Quality Standards

- Answer the specific question asked — do not drift into adjacent topics.
- Use plain English. Write at a 5th–6th grade reading level.
- Do not start answers with "Yes", "No", or a restatement of the question.
- Each answer must stand on its own — a reader should not need context from another answer.
- Do not include calls to action, pricing, or references to any specific business.

---

## Words to Avoid

embark, look no further, navigating, picture this, top-notch, unleash, unlock, unveil,
we've got you covered, transition, transitioning, crucial, delve, daunting, deep dive,
dive in, realm, ensure, in conclusion, in summary, optimal, assessing, firstly, strive,
striving, furthermore, moreover, comprehensive, we know, we understand, testament,
captivating, eager, refreshing, it is important to note, it should be noted, to sum up,
secondly, lastly, significantly, notably, essentially, as such, therefore, thus,
interestingly, in essence, noteworthy, it's crucial to note, undoubtedly, in a nutshell

---

# OUTPUT FORMAT

Write the generated content directly into `lib/services.ts` for the matching service slug:

```ts
faqs: [
  {
    question: "Question text as a plain string ending with a question mark?",
    answer: "Answer text as a plain string. No HTML. No links. Factual only. 40–120 words."
  },
  // 4–9 more entries
]
```

Only populate `faqs`. All other fields remain unchanged.

---

# ARTICLE OPPORTUNITIES OUTPUT

After writing the FAQs to `lib/services.ts`, create or append to `.claude/skills/faq-generation/opportunities/[slug].md`:

```md
## [Service slug] — FAQ generation notes

### Unanswered PAA questions
List any PAA questions that were skipped because the article did not contain a relevant answer.

### Article opportunities
For any answered question where the topic is broad enough to support a full article, note:
- **Target keyword variant** — the phrase a follow-up article should rank for
- **Suggested title tag** — under 60 characters
- **Suggested outline** — H1 + 3–4 H2 headings
```

---

# SUCCESS METRIC

Each FAQ set should:
- Contain 5–10 Q&A pairs grounded solely in the crawled article
- Pass Google's Rich Results Test with zero errors when rendered with `FAQPage` schema
- Display identically in the Accordion component and in the schema markup