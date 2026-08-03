# AskDoGood Image Automation (SEO-First)

This implementation adds a complete image generation pipeline with built-in SEO metadata and Canva-ready output.

## What was added

- API endpoint: `POST /api/image-automation/generate`
- API endpoint: `GET /api/image-automation/manifest`
- Server route registration in `server/_core/index.ts`
- Enhanced image generator helper in `server/_core/imageGeneration.ts`
- UI page: `/image-studio`
- Route SEO metadata for `/image-studio` in `client/src/lib/seo.ts`

## Why this is SEO-optimized by default

Each generated image returns:

- `filenameStem` (kebab-case, URL-safe)
- `imageTitle`
- `altText`
- `caption`
- `metaDescription`
- `focusKeyword`
- JSON-LD `ImageObject`
- Open Graph + Twitter image tags

This means image assets are generated with a search-friendly metadata payload every time.

## Request payload

```json
{
  "intent": "blog-hero",
  "prompt": "Create an editorial wellness visual featuring fresh anti-inflammatory meal prep with warm natural light.",
  "title": "Anti-Inflammatory Meal Prep",
  "pagePath": "/blog/anti-inflammatory-meal-prep",
  "targetKeyword": "anti-inflammatory meal prep",
  "styleDirection": "warm earthy palette, practical and realistic editorial style",
  "aspectRatio": "16:9",
  "tags": ["meal prep", "wellness", "thyroid"],
  "includeCanvaBrief": true
}
```

## Example response (trimmed)

```json
{
  "success": true,
  "image": {
    "id": "...",
    "url": "https://...",
    "key": "askdogood/images/generated/2026/07/anti-inflammatory-meal-prep-....png",
    "mimeType": "image/png"
  },
  "seo": {
    "filenameStem": "anti-inflammatory-meal-prep",
    "imageTitle": "Anti-Inflammatory Meal Prep Visual",
    "altText": "...",
    "caption": "...",
    "metaDescription": "...",
    "focusKeyword": "anti-inflammatory meal prep",
    "jsonLd": {
      "@context": "https://schema.org",
      "@type": "ImageObject"
    }
  },
  "canva": {
    "format": "Website hero",
    "dimensions": "1792x1024",
    "overlayText": "..."
  },
  "usage": {
    "html": "<img src=\"...\" alt=\"...\" loading=\"lazy\" decoding=\"async\" />",
    "openGraph": {
      "og:image": "...",
      "og:image:alt": "..."
    },
    "twitter": {
      "twitter:image": "...",
      "twitter:image:alt": "..."
    }
  }
}
```

## Storage and manifests

Generated images are saved under:

- `askdogood/images/generated/YYYY/MM/...`

Manifest records are persisted to:

- Local: `server/data/generated-image-seo-manifest.jsonl`
- Cloud: `askdogood/image-seo-manifest/YYYY-MM-DD/<id>.json` (when forge storage is configured)

## Authentication

Both endpoints require authenticated requests via the existing session auth.

## Canva workflow

Use `canva` response fields to quickly compose assets in Canva:

- `format`
- `dimensions`
- `title`
- `subtitle`
- `overlayText`
- `safeMargin`

This is intentionally connector-friendly output so your team can paste specs directly into Canva layouts.
