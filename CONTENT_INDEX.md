# Content Index — AskDoGood

This master index groups priority Markdown resources with quick summaries and 2–3 next actions to turn each doc into work you can execute.

## How to use
- Scan this index to pick a doc, then execute its action items (create an issue, card, or task).
- Add YAML frontmatter to each file (`title`, `tags`, `area`, `owner`, `effort`, `status`) to enable automation.

---

### 1. [21_DAY_PLANT_BASED_RESET.md](21_DAY_PLANT_BASED_RESET.md)
- Summary: A complete 21-day plant-based meal plan with recipes, weekly shopping lists, meal-prep guide, trackers, and restaurant tips.
- Actions:
  - Add frontmatter tags `nutrition,product,lead-magnet` and `owner`.
  - Create a 1-page PDF lead magnet (shopping list + 3 recipes) and upload to Gumroad.

### 2. [README.md](README.md)
- Summary: Project overview, tech stack, dev commands, and content management notes for the site repo.
- Actions:
  - Add a short “Content workflow” section linking to `CONTENT_INDEX.md`.
  - Add badge or quick links to key docs (course, gumroad guide, content system).

### 3. [CONTENT_AUTOMATION_SYSTEM.md](CONTENT_AUTOMATION_SYSTEM.md)
- Summary: End-to-end automation plan for email + social + AI generation with scripts and a 200-day content calendar.
- Actions:
  - Convert the calendar into a CSV/JSON export for scheduler import.
  - Create an `automation` checklist issue (Mailchimp, OpenAI key, n8n/Zapier flows).

### 4. [SITE_OVERHAUL_PLAN.md](SITE_OVERHAUL_PLAN.md)
- Summary: Roadmap for critical UX/SEO fixes, Chyna White story series, analytics, and conversion improvements.
- Actions:
  - Turn the “Critical Fixes” items into a 1-week sprint board (issues/cards).
  - Draft episode 1 of Chyna White and add to content pipeline.

### 5. [SEO_IMPLEMENTATION.md](SEO_IMPLEMENTATION.md)
- Summary: SEO component usage, page-by-page meta guidance, technical checklist, keyword strategy, and monitoring tasks.
- Actions:
  - Create issues for: sitemap generation, `react-helmet-async` install, and structured-data snippets.
  - Add SEO meta templates to `client/src/components/` and document usage in `README.md`.

### 6. [THYROID_COURSE_WORKBOOK.md](THYROID_COURSE_WORKBOOK.md)
- Summary: Full course workbook with modules, meal plans, lab panels, supplement protocols, and progress trackers.
- Actions:
  - Create Gumroad product checklist and upload-ready files (PDF, workbook, videos links).
  - Break workbook into 6 deliverables and create course module cards in the project board.

### 7. [BLOG_POST_STANDARDS.md](BLOG_POST_STANDARDS.md)
- Summary: Standards and scripts for blog post structure, image rules, and maintenance scripts for post cleanup.
- Actions:
  - Run `cleanup_blog_posts.py` and create a CI check that validates frontmatter and image paths.
  - Export a list of missing images/posts and create tasks to generate images via `tools/generate_blog_images_fast.py`.

### 8. [GUMROAD_SETUP_GUIDE.md](GUMROAD_SETUP_GUIDE.md)
- Summary: Step-by-step Gumroad setup and product creation workflow, plus promo/launch and upsell strategies.
- Actions:
  - Create a template product entry (Thyroid Course) and populate Gumroad with the prepared assets.
  - Add product links back into course pages and `QUICK_START.md`.

### 9. [EMAIL_BLAST_TEMPLATES.md](EMAIL_BLAST_TEMPLATES.md)
- Summary: Ready-to-send launch email series, segmentation and send instructions (Mailchimp/Azure), and subject line A/B options.
- Actions:
  - Import 1500-subscriber CSV into Mailchimp and schedule the 5-email launch sequence.
  - Replace placeholder links with live Gumroad product links and track UTM parameters.

### 10. [QUICK_START.md](QUICK_START.md)
- Summary: Prioritized immediate actions and short-term roadmap for deployments, marketing, and quick wins.
- Actions:
  - Use this as the project’s daily checklist; convert its items into a milestone in your task tracker.
  - Run the quick dev commands locally to validate the site and confirm analytics/tracking are live.

---

Next steps I can take for you:
- Turn these actions into GitHub issues or a Trello board (pick a tool).
- Add YAML frontmatter to the top 10 files to make them machine-readable.

Generated: 2026-02-04
