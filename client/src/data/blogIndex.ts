// client/src/data/blogIndex.ts

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;

  // make these resilient (manual indexes drift)
  tags?: string[];
  image?: string;
  imageAlt?: string;
};

export const BLOG_INDEX_FALLBACK_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/blog_fallback.webp";

export const blogIndex: BlogMeta[] = [
  {
    slug: "alcohol-vs-weed-coping",
    title: "Alcohol vs. Weed: How Are You Really Coping?",
    excerpt:
      "Most people aren’t coping — they’re numbing. This is the honest truth about alcohol, weed, and real healing.",
    date: "2025-01-03",
    tags: ["healing", "sobriety", "coping"],
    image: "/assets/blog/alcohol-vs-weed-coping.jpg",
    imageAlt:
      "Wine glass and cannabis leaf split image representing coping choices.",
  },
  // add the next posts here
];

// Normalized version your UI should use
export const safeBlogIndex = blogIndex.map((p) => ({
  slug: p.slug?.trim() || "",
  title: p.title?.trim() || "Untitled",
  excerpt: p.excerpt?.trim() || "",
  date: p.date?.trim() || "",
  tags: Array.isArray(p.tags) ? p.tags : [],
  image: (p.image?.trim() || BLOG_INDEX_FALLBACK_IMAGE) as string,
  imageAlt: p.imageAlt?.trim() || `${p.title || "Blog"} cover image`,
})).filter((p) => p.slug && p.title && p.date);
