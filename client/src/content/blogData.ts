// blogData.ts
// Single source of truth for blog content + helpers.
// This file is intentionally defensive: one malformed post should NOT crash the app.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // WordPress HTML block markup or regular HTML
  category: string;
  date: string; // YYYY-MM-DD recommended
  readTime: string;
  image: string; // URL or local path

  // Optional fields
  tags?: string[];
  featured?: boolean;
  imageAlt?: string;
}

export const DEFAULT_BLOG_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/blog_fallback.webp";

/**
 * IMPORTANT:
 * - Keep this export name as `blogPosts` (lowercase).
 * - If any other file references `BlogPosts`, it will crash at runtime.
 */
export const blogPosts: BlogPost[] = [
  // ✅ Paste/keep your posts here exactly as you have them.
  // Example entry:
  // {
  //   id: "1779",
  //   slug: "pro-tips-for-giving-tuesday",
  //   title: "Pro Tips for Giving Tuesday",
  //   excerpt: "Giving Tuesday is ...",
  //   content: `...`,
  //   category: "Health & Lifestyle",
  //   date: "2024-11-26",
  //   readTime: "2 min read",
  //   image: "https://.../pro-tips-for-giving-tuesday.webp",
  //   imageAlt: "Hands offering support and generosity",
  //   tags: ["Community", "Wellness", "Giving"],
  // },
];

/* -------------------------------------------------------------------------- */
/*                                  SANITIZER                                 */
/* -------------------------------------------------------------------------- */

type AnyPost = any;

function normalizePost(p: AnyPost): BlogPost | null {
  const id = typeof p?.id === "string" ? p.id.trim() : String(p?.id ?? "").trim();
  const slug =
    typeof p?.slug === "string" ? p.slug.trim() : String(p?.slug ?? "").trim();
  const title =
    typeof p?.title === "string" ? p.title.trim() : String(p?.title ?? "").trim();
  const excerpt =
    typeof p?.excerpt === "string"
      ? p.excerpt.trim()
      : String(p?.excerpt ?? "").trim();
  const content =
    typeof p?.content === "string"
      ? p.content
      : String(p?.content ?? "").trim();
  const category =
    typeof p?.category === "string"
      ? p.category.trim()
      : String(p?.category ?? "General").trim();
  const date =
    typeof p?.date === "string" ? p.date.trim() : String(p?.date ?? "").trim();
  const readTime =
    typeof p?.readTime === "string"
      ? p.readTime.trim()
      : String(p?.readTime ?? "5 min read").trim();

  const imageRaw = typeof p?.image === "string" ? p.image.trim() : "";
  const image = imageRaw.length ? imageRaw : DEFAULT_BLOG_IMAGE;

  const tags = Array.isArray(p?.tags) ? p.tags.filter(Boolean) : undefined;
  const featured = typeof p?.featured === "boolean" ? p.featured : undefined;
  const imageAlt =
    typeof p?.imageAlt === "string" ? p.imageAlt.trim() : undefined;

  // Required fields check — if these are missing, we drop the post.
  const requiredOk = Boolean(id && slug && title && excerpt && content && date);

  if (!requiredOk) return null;

  return {
    id,
    slug,
    title,
    excerpt,
    content,
    category: category || "General",
    date,
    readTime: readTime || "5 min read",
    image,
    tags,
    featured,
    imageAlt,
  };
}

/**
 * Use this everywhere in the UI (BlogIndex, home "latest posts", etc.)
 * so a single malformed post can't crash the app.
 */
export const safeBlogPosts: BlogPost[] = (blogPosts as AnyPost[])
  .map(normalizePost)
  .filter(Boolean) as BlogPost[];

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

export function getPostBySlug(slug: string): BlogPost | undefined {
  const s = (slug ?? "").trim();
  if (!s) return undefined;
  // use safeBlogPosts so a malformed entry never breaks lookups
  return safeBlogPosts.find((post) => post.slug === s);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const c = (category ?? "").trim();
  if (!c) return [];
  return safeBlogPosts.filter((post) => post.category === c);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(safeBlogPosts.map((post) => post.category)))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

export function searchPosts(query: string): BlogPost[] {
  const q = (query ?? "").trim().toLowerCase();
  if (!q) return [];

  return safeBlogPosts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.content}`.toLowerCase();
    return haystack.includes(q);
  });
}

export function getPostsNewestFirst(): BlogPost[] {
  // Works if dates are YYYY-MM-DD. If some dates are not, we still won't crash.
  return [...safeBlogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedPosts(): BlogPost[] {
  return safeBlogPosts.filter((p) => p.featured);
}

// Always returns a safe image, even if caller passes undefined
export function getPostImage(post?: Partial<BlogPost> | null): string {
  const img = typeof post?.image === "string" ? post.image.trim() : "";
  return img ? img : DEFAULT_BLOG_IMAGE;
}

// Safe date formatter for UI
export function formatPostDate(dateStr?: string): string {
  if (!dateStr || typeof dateStr !== "string") return "—";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
