# AskDoGood Platform Decision (June 2, 2026)

## Decision Today
Do **not** migrate back to WordPress right now.

## Why (Executive Summary)
1. The current site is an active React/Vite codebase with ongoing SEO implementation and growth work already in flight.
2. A migration now would consume 4-8+ weeks of attention with high risk of traffic volatility, redirect errors, schema regressions, and tracking breaks.
3. The biggest SEO gains available this quarter are execution gains (technical cleanup, content quality, internal links, schema, analytics discipline), not CMS swap gains.
4. WordPress is a valid option later only if editorial operations become blocked by the current workflow.

## Current-State Evidence
1. Active custom app stack and dependency footprint (React/Vite ecosystem).
2. Existing technical SEO work documented and partially implemented.
3. Marketing/content operations are already organized around the current stack and docs.

## Cost-Risk of Migrating Now
1. URL mapping and redirects for all legacy/new slugs.
2. Re-implementation of page templates, schema, metadata, forms, tracking, automation hooks.
3. Potential downtime and indexing churn during cutover.
4. Team context-switch away from revenue and content velocity.

## What to Do Instead (Next 30 Days)
1. Finish technical SEO backlog
- sitemap.xml and robots.txt verification
- canonical and metadata consistency
- schema coverage for Organization, Person, Article, Product/Course, FAQ
- Core Web Vitals improvements on top pages

2. Tighten measurement
- GA4 + Search Console dashboards
- weekly non-branded query movement
- conversion tracking for course/product/email signups

3. Publish authority content on schedule
- intent clusters: thyroid education, symptom pathways, protocol explainers, case-story content
- each new page links to commercial pages and related education pages

4. Improve local/discovery assets only if local intent is real
- Google Business Profile if local coaching/service geography is part of the offer

## Revisit Trigger (When WordPress Could Make Sense)
Re-open migration decision in 90 days **only if** 2+ of the following are true:
1. Publishing velocity is blocked (cannot reliably ship 2-3 quality posts per week).
2. Non-technical contributors cannot safely publish/edit without engineering help.
3. SEO tasks depend on plugins/workflows that are materially faster in WordPress.
4. Total cost of current maintenance exceeds migration + managed WP hosting over 12 months.

## If You Must Migrate Later
Use a phased migration plan, not a hard switch:
1. Migrate blog/content section first.
2. Keep product/conversion-critical pages on current stack during phase 1.
3. Validate redirects, schema parity, and analytics parity before full cutover.

## Final Recommendation
Stay on the current platform now, execute SEO/AIO rigorously for 90 days, and re-evaluate with KPI evidence instead of tooling preference.
