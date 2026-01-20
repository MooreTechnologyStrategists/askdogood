import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export default function SEO({
  title = 'Ask DoGood - Holistic Health & Thyroid Wellness',
  description = 'Expert guidance on thyroid health, holistic wellness, and living your best life. Founded by RoSeé Murphy, thyroid warrior and wellness advocate.',
  keywords = ['thyroid health', 'holistic wellness', 'Black women health', 'Hashimoto\'s', 'hypothyroidism', 'natural healing', 'wellness coaching'],
  image = 'https://askdogoodassets.blob.core.windows.net/images/hero-home.webp',
  url,
  type = 'website',
  author = 'RoSeé Murphy',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
}: SEOProps) {
  const siteUrl = 'https://askdogood.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title.includes('Ask DoGood') ? title : `${title} | Ask DoGood`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ask DoGood" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@askdogood" />

      {/* Additional SEO Tags */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-US" />
      <html lang="en" />
    </Helmet>
  );
}
