This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Content Skills – config.json Schema

Homepage and completion copy is generated from `.claude/skills/homepage/config.json`. All fields are required:

| Field | Type | Purpose |
|---|---|---|
| `primary_category` | `string` | Main GBP category / primary SEO keyword (e.g. "Central Heating Services") |
| `city` | `string` | City or borough served (e.g. "Brent") — appended to primary keyword |
| `primary_service` | `string` | Core service offered — may match `primary_category` |
| `local_neighbourhood` | `string` | Specific sub-area for hyper-local copy (e.g. "Brent (Borough)") |
| `target_tone` | `string` | Writing voice for generated copy (e.g. "Authoritative, conversational, local expert") |
| `secondary_categories` | `string[]` | Additional GBP categories — each becomes an H2 heading in the homepage draft |
| `services` | `string[]` | Individual services woven naturally into body copy |
| `example` | `string` | Reference paragraph demonstrating desired tone, specificity, and neighbourhood mentions |

When adding new fields to `config.json`, document them in this table and in `.claude/skills/homepage/README.md`.
