# Walk Upload Schema

Use this format for every new walk so the site stays consistent and the page can render it without custom edits.

## Required files

1. Add the finished flipbook HTML to `client/public/flipbooks/{slug}.html`.
2. Add one new object to `client/src/content/walks.ts`.
3. Reuse the article-style layout unless the walk clearly needs a different format.

## Naming rules

- `slug`: lowercase, hyphen-separated, short, permanent.
- `href`: always `/flipbooks/{slug}.html`.
- `title`: the public title shown on cards and previews.
- `eyebrow`: short label like `Walk story`, `Trail recap`, `Series cover`, or `Recovery walk`.
- Default the eyebrow to `Trail essay` or `Walk story` for new trail uploads unless there is a stronger reason to label it differently.

## Default article-style flipbook structure

Use this as the baseline for future walks. The goal is a consistent trail article, not a fully custom page every time.

1. `hero`: one strong lead image, short eyebrow, long-form title, one-sentence dek, and 4 simple stats.
2. `intro`: two text panels that explain why the walk matters and what the image set captures.
3. `mosaic`: one wider landscape image plus one more personal or detail-oriented image.
4. `section`: one text-heavy two-column block and one quote or reflective callout block.
5. `full-photo`: one large scenic image that gives the article visual breathing room.
6. `story-grid`: three short cards such as arrival, middle distance, and pause.
7. `closing`: one final paragraph that says plainly why the walk belongs in the library.

## Image rules

- Prefer direct hosted blob URLs when the images already live in Azure Blob Storage.
- Use 5 to 7 images for a standard article-style trail page.
- Include at least:
  - 1 lead landscape image.
  - 1 path, boardwalk, or route image.
  - 1 personal-scale image with a person, pause, or body-in-space moment.
  - 1 wider scenic image for the mid-article full-width section.
- Keep captions short, uppercase, and factual.
- Do not embed large base64 image payloads for new walk pages unless there is no hosted image source.

## Writing rules

- Target 900 to 1,300 words for article-style trail entries.
- Write in plain editorial language, not generic wellness marketing language.
- Ground the article in what the photos actually show.
- Treat the trail as public, practical, repeatable healing space rather than aspirational lifestyle branding.
- Include one line that explains why the walk matters beyond scenery.
- Avoid inventing specific mileage, timing, or historical facts unless they are verified.

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
- `stats`: 0 to 4 items. For article-style trail pages without verified distance or step counts, use context stats like `Trail`, `Region`, `Season`, or `Format`.
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
2. Select 5 to 7 final hosted images and decide which one is hero, mosaic, full-width, and personal-scale.
3. Build the article-style flipbook HTML using the default structure above.
4. Pull out the best headline, summary, stats, and highlights.
5. Add the new object to `walkResources` in `client/src/content/walks.ts`.
6. If this should become the big feature card, switch `featured` to `true` on that entry and `false` on the current one.
7. Load `/keep-moving` and confirm the new walk appears in both sections automatically.

## Decision rule

If a walk has strong numbers, use the `stats` array.
If a walk is more reflective or editorial, leave `stats` empty and make the `highlights` do the work.

If a walk has enough strong imagery and narrative to support a longer read, use the default article-style flipbook and context stats instead of forcing distance and step counts.