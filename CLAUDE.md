# Abbey House Plumbing & Heating — Claude Project File

## What This Project Is

This is a Next.js (App Router) website for Abbey House Plumbing & Heating Services,
a London-based plumbing and heating company. The goal is to build a fully static,
SEO-optimised dynamic service pages system where adding a single entry to a config
file publishes a complete, schema-marked, SEO-optimised service page automatically.
The site must rank as highly as possible organically for local London plumbing searches.

---

## File Structure

```
abbey-house/
  app/
    services/
      page.tsx                          # All categories index — /services
      [categorySlug]/
        page.tsx                        # Category page — /services/[cat]
        [serviceSlug]/
          page.tsx                      # Service page — /services/[cat]/[svc]
    sitemap.ts                          # Auto-generated sitemap
    not-found.tsx                       # 404 page
  components/
    Navbar.tsx                          # Active state via usePathname()
    Breadcrumb.tsx                      # Upward internal links on all sub-pages
    CategoryPageTemplate.tsx            # Shared layout for category pages
    ServicePageTemplate.tsx             # Shared layout for service pages
    ServiceSchema.tsx                   # LocalBusiness JSON-LD — category + service
  lib/
    services.ts                         # Single source of truth — categories with
                                        # nested services — edit here to add content
  public/
    robots.txt
  PRD.md                                # Full requirements and code patterns per epic
  plan.md                               # Full feature checklist — tick off as you go
  activity.md                           # Session log — read first, update last
```

### URL Structure

```
/services                               # Lists all categories
/services/[categorySlug]                # Category page
/services/[categorySlug]/[serviceSlug]  # Service page
```

### Internal Linking Chain

Homepage → /services → /services/[cat] → /services/[cat]/[svc]
Every page links back up via breadcrumb. This mirrors the GBP hierarchy exactly.

---

## How to Start Every Session

1. **Read `activity.md`** — understand what was last worked on, what is broken,
   and what the next task is. Also read the previous session entries for context.
2. **Read `plan.md`** — find the first uncompleted task. That is your target.
3. **Read `PRD.md`** — find the epic that contains your target task. Read the
   requirements, code pattern, and acceptance criteria before writing any code.
4. **Read existing components** — before writing any UI, read `Navbar.tsx`,
   `Footer.tsx`, and at least one existing page. Match all styles exactly.
5. **Work on one task at a time.** Do not move to the next task until the current
   one passes its E2E test.

---

## Design Integration Rule

> All new components must be indistinguishable from the existing site.

Before writing any markup, extract the exact Tailwind classes used for headings,
body text, buttons, containers, and cards from the existing codebase. Use those
exact classes. Do not invent new styles.

---

## Testing Rule

Every epic has a defined E2E test in `PRD.md`. Use Chrome DevTools MCP to run it.
Do not mark a task as complete based on code inspection alone — a browser-based
test must pass first.

---

## Git Commit Rules

- Commit after every completed task
- Use descriptive messages in this format:

```
feat(epic-1): add dynamic active state to navbar using usePathname
feat(epic-4): implement ServicePageTemplate matching existing site styles
fix(epic-3): resolve 404 not returning correct styled page
test(epic-6): confirmed schema passes validator.schema.org with zero errors
chore: end of session — 8/23 tasks complete
```

- Never commit broken code. If a task is incomplete at session end,
  revert to the last clean state and document this in `activity.md`.

---

## Updating activity.md

At the end of every session, append a new entry to `activity.md`:

```
### YYYY-MM-DD HH:MM
**Completed:** [task from plan.md]
**Changes Made:** [files created or modified]
**Status:** [what works now]
**Next:** [next task to work on]
**Blockers:** [any issues, or "None"]
```

New agents must read all previous entries before starting work.

---

## Commands

```bash
# Start the development server
npm run dev
# Runs at http://localhost:3000
```

Always start the dev server before running any E2E tests via Chrome DevTools MCP.

---

## Key Rules Summary

- Edit `lib/services.ts` to add new categories or services — no other files need changing
- Categories contain nested services — the full hierarchy lives in one config file
- Only tick off tasks in `plan.md` — never edit task descriptions
- Match existing site styles exactly — no new design patterns
- One task at a time — finish and test before moving on
- Always update `activity.md` before ending a session