import { Helmet } from "react-helmet-async";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  RSS_FEED_PATH,
  SITE_AUTHOR,
  SITE_NAME,
  TWITTER_HANDLE,
  toAbsoluteUrl,
} from "@/lib/seo";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: "website" | "article" | "product";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function SEO({
  title = `${SITE_NAME} | Thyroid Wellness, Healing, and Real-Life Growth`,
  description = DEFAULT_DESCRIPTION,
  keywords = [
    "thyroid health",
    "holistic wellness",
    "Black women health",
    "Hashimoto's",
    "hypothyroidism",
    "natural healing",
    "wellness coaching",
  ],
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} feature image`,
  url,
  type = "website",
  author = SITE_AUTHOR,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  schema,
}: SEOProps) {
  const fullUrl = toAbsoluteUrl(url);
  const fullImageUrl = toAbsoluteUrl(image);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const normalizedSchema = Array.isArray(schema)
    ? schema
    : schema
      ? [schema]
      : [];
  const robotsContent = noindex
    ? "noindex, nofollow, noarchive"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={fullUrl} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${SITE_NAME} Blog Feed`}
        href={toAbsoluteUrl(RSS_FEED_PATH)}
      />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta httpEquiv="content-language" content="en-US" />
      <html lang="en" />

      {normalizedSchema.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}
