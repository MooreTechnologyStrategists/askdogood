# Build Tracker

Date initialized: 2026-07-14
Rule: check this file before each change.

Status values: Not Started | In Progress | Implemented | Tested | Needs Revision | Blocked | Deprecated

## Phase 1: Audit

| Task | Status | Notes |
|---|---|---|
| Identify production repository and framework | Implemented | Active app appears to be `client/` React+Vite in this repo. |
| Map routes/components/forms/products/articles/assets | Implemented | See `docs/REPOSITORY_AUDIT.md`. |
| Confirm analytics, SEO, integrations | Implemented | Confirmed in code; external account validation pending. |
| Verify deployment configuration | Implemented | Azure SWA workflow deploys static `client/dist` only. |
| Produce blunt audit + implementation order | Implemented | Included in `docs/REPOSITORY_AUDIT.md`. |

## Critical Findings Tracker

| Item | Status | Severity | Owner | Notes |
|---|---|---|---|---|
| `/api/*` forms on static-only deployment path | Blocked | Critical | Engineering | Need API hosting decision (Azure Functions/API app/external endpoint). |
| Homepage dead links and missing assets | Needs Revision | High | Engineering + Content | Route/asset cleanup required before redesign. |
| SEO placeholders and duplicate metadata entries | Needs Revision | High | Engineering + SEO | Remove placeholders, dedupe static SEO records, regenerate sitemap. |
| Content encoding artifacts and backup sprawl | Needs Revision | High | Content + Engineering | Clean canonical content sources. |

## File Change Log (This Session)

Created:
- `docs/REPOSITORY_AUDIT.md`
- `docs/BUILD_TRACKER.md`
- `docs/PRODUCT_VISION.md`
- `docs/CONVERSION_MAP.md`
- `docs/CHANGELOG.md`
- `docs/TRAFFIC_AUDIT.md`
- `docs/SEO_PLAN.md`
- `docs/CONTENT_CALENDAR.md`
- `docs/MONETIZATION_MAP.md`

Modified:
- None outside docs.

Removed:
- None.

## Testing Performed

- Static code/config audit only (file-level verification).
- No runtime tests or deployment tests executed in this Phase 1 pass.

## Next Recommended Task

Resolve API hosting for lead capture endpoints before any homepage redesign work.
