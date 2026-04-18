# Walk Upload Schema

Use this format for every new walk so the site stays consistent and the page can render it without custom edits.

## Required files

1. Add the finished flipbook HTML to `client/public/flipbooks/{slug}.html`.
2. Add one new object to `client/src/content/walks.ts`.

## Naming rules

- `slug`: lowercase, hyphen-separated, short, permanent.
- `href`: always `/flipbooks/{slug}.html`.
- `title`: the public title shown on cards and previews.
- `eyebrow`: short label like `Walk story`, `Trail recap`, `Series cover`, or `Recovery walk`.

## Walk object schema

```ts
{
  slug: "new-walk-slug",
  title: "Public Walk Title",
  eyebrow: "Walk story",
  description: "One sentence for the library card. Focus on what the walk proves or captures.",
  href: "/flipbooks/new-walk-slug.html",
  recoveredHeading: "Main headline from the walk",
  recoveredSummary: "Two to three lines explaining what the walk is about and why it matters.",
  stats: [
    { label: "Distance", value: "4.2 mi" },
    { label: "Steps", value: "9,870" },
    { label: "Time", value: "95 min" },
    { label: "Route", value: "3 stops" },
  ],
  highlights: [
    "Three to six high-value proof points, scenes, or quotes.",
    "Use complete sentences.",
    "Include one signature line if the walk has one.",
  ],
  featured: false,
  featureCard: {
    badge: "Walk story",
    title: "Short featured-card title",
    description: "One paragraph explaining why this walk matters in the library.",
    callouts: [
      { label: "Story frame", value: "What kind of walk this is." },
      { label: "Proof point", value: "The strongest measurable or emotional takeaway." },
    ],
  },
}
```

## Field rules

- `description`: 20 to 35 words.
- `recoveredHeading`: 3 to 8 words when possible.
- `recoveredSummary`: 1 to 2 sentences.
- `stats`: 0 to 4 items. Use an empty array if the walk is more editorial than metric-driven.
- `highlights`: 3 to 6 bullets.
- `featured`: set `true` only for the one walk that should power the large feature card on the page.
- `featureCard.callouts`: exactly 2 short supporting facts.

## Content priorities

Put these in roughly this order:

1. What happened on the walk.
2. Why it matters physically, emotionally, or symbolically.
3. The clearest metric or proof point.
4. The strongest quote or closing line.

## Recommended workflow

1. Pick the slug first.
2. Save the flipbook HTML using that slug.
3. Pull out the best headline, summary, stats, and highlights.
4. Add the new object to `walkResources` in `client/src/content/walks.ts`.
5. If this should become the big feature card, switch `featured` to `true` on that entry and `false` on the current one.
6. Load `/keep-moving` and confirm the new walk appears in both sections automatically.

## Decision rule

If a walk has strong numbers, use the `stats` array.
If a walk is more reflective or editorial, leave `stats` empty and make the `highlights` do the work.