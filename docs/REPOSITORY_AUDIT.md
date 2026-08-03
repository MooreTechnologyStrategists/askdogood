# AskDoGood Repository Audit (Phase 1)

Date: 2026-07-14
Scope: Audit only. No redesign or new component build.

## Executive Verdict

This repository contains a production-capable AskDoGood React + Vite SPA and an Azure Static Web Apps deployment workflow.

Most likely production source of truth for the current frontend is `client/`, not repository root.

Key risk: critical form/API flows are coded against `/api/*`, but current Azure workflow deploys only static artifacts from `client/dist` with no API location.

## Source-of-Truth Findings

1. Current production application present in this repo: Yes, under `client/`.
2. Live site served from this repo: Likely yes, based on Azure Static Web Apps workflow targeting this repo and `main`.
3. Active framework: React + Vite + TypeScript SPA with `wouter` routing.
4. Static HTML only site: No (legacy assets/docs exist, but active app is SPA).
5. Another newer repo exists: Not provable from this workspace alone.

Evidence:
- `client/package.json` uses Vite build/dev scripts.
- `.github/workflows/azure-static-web-apps-delightful-dune-0031f331e.yml` builds `client` and deploys `client/dist`.
- `client/src/App.tsx` defines full route tree with many pages.

## Framework and Deployment

- Frontend: React 19 + Vite 7 + TypeScript + Tailwind.
- Router: `wouter` (`client/src/App.tsx`).
- Hosting target: Azure Static Web Apps.
- Deployment behavior: Workflow builds static app and uploads `client/dist`; `api_location` is empty.
- Static Web App fallback config exists in `client/public/staticwebapp.config.json`.

## Existing Routes (From App Router)

Core routes currently registered include:
- `/`, `/about`, `/blog`, `/blog/:slug`, `/contact`, `/resources`, `/shop`, `/journey`, `/stories`, `/work-with-askdogood`, `/guest-contributors`, `/meal-prep`, `/clinical-recipes`, `/label-scanner`, `/herbs`, `/coaching`, auth/dashboard routes, recipe routes, and product/lead-magnet routes.

Reference: `client/src/App.tsx`.

## Existing Components and Site Systems

Major reusable components already exist in `client/src/components`:
- Header, Footer, SEO, RouteSeo, GoogleAnalytics, BeehiivSubscribe, Product/affiliate recommendations, testimonials, trust badges, and many feature blocks.

Implication: do not recreate baseline shell components; refactor and simplify existing ones.

## Existing Forms and Conversion Inputs

Implemented forms:
- Newsletter signup (`BeehiivSubscribe`) posts to `/api/newsletter-signups` and then submits to Beehiiv endpoint.
- Guest contributor form posts to `/api/collaboration-submissions` with email fallback.
- Contact page is `mailto:`-driven (client-only, no backend persistence).
- Signup/Login pages exist (auth flows present in app/router stack).

Critical mismatch:
- Workflow deploys static frontend only; no API app location configured in Azure SWA workflow.
- This likely breaks `/api/newsletter-signups` and `/api/collaboration-submissions` on production unless a separate API origin is configured externally.

## Existing Products, Articles, and Assets

- Product catalog/data exists (`client/src/data/catalog.ts`) with Gumroad checkout URLs and product groupings.
- Blog corpus exists in `client/src/content/blogData.ts` plus markdown imports.
- Significant image inventory in `client/public/images` and `client/public/assets`.

Data quality concerns:
- Multiple content backup files and legacy variants (e.g., `blogData.ts.backup`, `blogData.ts.cleanup_backup`, duplicate merch files).
- Some text encoding artifacts appear in blog content (mojibake like `â€™`, `RoSeÃ©`).

## Analytics and SEO State

What exists:
- GA component wired in app (`client/src/components/GoogleAnalytics.tsx`).
- Route-level SEO layer (`RouteSeo`, `SEO`, `client/src/lib/seo.ts`).
- Robots and sitemap files in `client/public/`.

Gaps/risks:
- `client/index.html` includes placeholder GA script (`G-XXXXXXXXXX`) and placeholder Google verification token while app also injects GA via React component.
- `client/src/config/analytics.ts` has default Clarity placeholder.
- `client/src/lib/seo.ts` contains duplicate static entries (e.g., repeated `/resources`, `/contact`).
- Sitemap appears stale and not obviously generated from live route/content sources.

## Broken Links, Placeholder Content, Duplicate Work

Confirmed broken/likely broken internal links in homepage content:
- `/library` (no matching route in `App.tsx`).
- `/indian-creek-trail` (no matching route in `App.tsx`).

Likely broken asset references on homepage hero badges:
- `/assets/img/brand/azure-blob-logo.png`
- `/assets/img/brand/ai-badge.png`
- `/assets/img/brand/analytics-badge.png`
- `/assets/img/brand/news-badge.png`
Only `rosee-hero.jpg` was found in `client/public/assets/img/brand` during audit.

Placeholder/trust issues:
- Newsletter success is assumed after `no-cors` Beehiiv submit; UI can show success without verifiable downstream outcome.
- Contact flow says "Send Message" but opens local mail client, which can feel like a failed form on mobile/desktop web.

Duplicate/outdated implementation indicators:
- Root-level docs claim many items "complete" while code indicates unresolved critical issues.
- Legacy files: `Dashboard_old.tsx`, `Resources_old.tsx`, backup content files, duplicate merch data files.
- Duplicate public SEO artifacts at repo root `public/` and app-level `client/public/`.

## Integrations Inventory

- Azure Static Web Apps CI/CD (GitHub Actions).
- Google Analytics (GA4 style event tracking).
- Beehiiv subscribe endpoint (cross-origin post, no-cors).
- Gumroad product checkout links.
- tRPC/Express/MySQL/Drizzle server code exists, but deployment path for this backend is not shown in current SWA workflow.

## Current Deployment Workflow

Observed from `.github/workflows/azure-static-web-apps-delightful-dune-0031f331e.yml`:
- Trigger: push/pr on `main`.
- Build: `pnpm install` and `pnpm run build` in `client`.
- Deploy: upload static `client/dist` to Azure SWA.
- API build/deploy explicitly skipped (`api_location` empty; `skip_api_build: true`).

## Highest-Impact Problems (Blunt)

Critical:
1. Conversion and lead capture endpoints likely broken in production due static-only deployment.
2. Homepage information architecture is overloaded and inconsistent with a clear 5-journey path.
3. Navigation and homepage include dead links, reducing trust and harming SEO crawl quality.

High:
1. SEO hygiene issues (placeholder verification, duplicate static SEO entries, stale/hand-managed sitemap).
2. Content quality inconsistencies (encoding artifacts, duplicated/legacy data files).
3. Trust UX mismatch on forms (apparent success without robust verification path).

Medium:
1. Analytics implementation overlap and potential duplicate/dirty signal paths.
2. Excessive feature surface without clear funnel hierarchy.

## Exact Implementation Order (Post-Phase-1)

1. Fix production data capture path first.
2. Remove/repair dead routes and broken asset references.
3. Establish canonical IA for 5 journeys in nav + homepage structure.
4. Standardize trust/compliance layer (disclaimers, author/review metadata, editorial policy links).
5. Normalize analytics and SEO pipeline (single GA source, verification token, sitemap and robots governance).
6. Clean duplicate/legacy files and align one canonical content source.
7. Implement conversion map events and destination pages per journey.

## Audit Limits

- This audit could not independently verify external Google Analytics/Search Console account data from this workspace.
- Could not validate live production runtime responses for `/api/*` without running/deploying or accessing live endpoint logs.
