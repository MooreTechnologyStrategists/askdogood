// blogPosts.ts
// Source of truth for Blog index + Blog post rendering.
//
// Notes:
// - "image" should be a full URL (Azure Blob) or a local path.
// - If an image is missing, UI should fall back to DEFAULT_BLOG_IMAGE.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // currently WordPress HTML block markup
  category: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: string; // URL or local path

  // Optional future-friendly fields (safe to ignore in UI)
  tags?: string[];
  featured?: boolean;
  imageAlt?: string;
}

export const DEFAULT_BLOG_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/blog_fallback.webp";

export const blogPosts: BlogPost[] = [
  {
    id: "1779",
    slug: "pro-tips-for-giving-tuesday",
    title: "Pro Tips for Giving Tuesday",
    excerpt:
      "Giving Tuesday is a global day of generosity celebrated on the Tuesday following Thanksgiving. It encourages people to give back to their communities and support causes they care about. Here are some pro tips to make the most of Giving Tuesday: Plan Ahead: Research...",
    content: `<!-- wp:paragraph -->
<p>Giving Tuesday is a global day of generosity celebrated on the Tuesday following Thanksgiving. It encourages people to give back to their communities and support causes they care about. Here are some pro tips to make the most of Giving Tuesday:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Plan Ahead</strong>: Research organizations and causes you want to support. Make a list of charities or nonprofits that align with your values.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Set a Budget</strong>: Determine how much you can afford to donate. Even small contributions can make a big difference.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Spread the Word</strong>: Use social media to promote Giving Tuesday. Share information about the causes you're supporting and encourage others to participate.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Volunteer Your Time</strong>: If you can't donate money, consider volunteering. Many organizations need help with events, programs, and services.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Match Donations</strong>: If you're able, offer to match donations made by friends or family. This can double the impact of their contributions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Thank Donors</strong>: If you're part of an organization, make sure to thank those who donate. A simple thank-you note or social media shoutout can go a long way.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Think Long-Term</strong>: Consider setting up recurring donations to support your favorite causes throughout the year, not just on Giving Tuesday.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>By following these tips, you can make a meaningful impact on Giving Tuesday and beyond!</p>
<!-- /wp:paragraph -->`,
    category: "Health & Lifestyle",
    date: "2024-11-26",
    readTime: "2 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/pro-tips-for-giving-tuesday.webp",
    imageAlt: "Hands offering support and generosity",
    tags: ["Community", "Wellness", "Giving"],
  },

  {
    id: "1777",
    slug: "the-superpower-of-sea-moss-the-oceans-secret-weapon-for-everyday-wellness",
    title: "The Superpower of Sea Moss: The Ocean's Secret Weapon for Everyday Wellness",
    excerpt:
      "If you're looking for a natural way to boost your health, sea moss might just be your new best friend. This humble ocean plant is packed with 92 of the 102 minerals your body needs to function at its best. Let's dive into why sea moss deserves a spot in your...",
    content: `<!-- wp:paragraph -->
<p>If you're looking for a natural way to boost your health, sea moss might just be your new best friend. This humble ocean plant is packed with 92 of the 102 minerals your body needs to function at its best. Let's dive into why sea moss deserves a spot in your wellness routine.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Makes Sea Moss So Special?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sea moss is loaded with essential nutrients like iodine, calcium, potassium, and magnesium. These minerals support everything from your thyroid to your bones, making it a true multitasker for your health.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Benefits of Sea Moss</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Boosts Immunity</strong>: With its high vitamin C content, sea moss helps your body fight off infections and stay resilient.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Supports Thyroid Health</strong>: The iodine in sea moss is a game-changer for regulating thyroid function, which controls your metabolism and energy levels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Improves Digestion</strong>: Sea moss acts as a natural prebiotic, feeding the good bacteria in your gut and promoting a healthy digestive system.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Glowing Skin</strong>: Thanks to its collagen-boosting properties, sea moss can help keep your skin hydrated and youthful.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Energy Boost</strong>: Feeling sluggish? Sea moss provides a natural energy lift without the crash of caffeine.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use Sea Moss</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sea moss gel is the most popular form. You can blend it into smoothies, mix it into soups, or even add it to your morning tea. If you're not a fan of the taste, capsules are a convenient alternative.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Word of Caution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While sea moss is generally safe, it's high in iodine, so if you have thyroid issues, check with your doctor before adding it to your routine. Also, make sure you're buying high-quality, wildcrafted sea moss to avoid contaminants.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sea moss is a simple, natural way to give your body the nutrients it craves. Whether you're looking to boost your immunity, support your thyroid, or just feel better overall, this ocean superfood is worth a try!</p>
<!-- /wp:paragraph -->`,
    category: "Nutrition & Diet",
    date: "2024-11-23",
    readTime: "3 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/the-superpower-of-sea-moss-the-oceans-secret-weapon-for-everyday-wellness.webp",
    imageAlt: "Sea moss / ocean plant wellness concept",
    tags: ["Nutrition", "Thyroid", "Minerals"],
  },

  {
    id: "1775",
    slug: "how-collagen-saved-my-skin-my-dads-mobility-and-maybe-even-my-life",
    title: "How Collagen Saved My Skin, My Dad's Mobility, and Maybe Even My Life",
    excerpt:
      "Collagen is one of those wellness buzzwords you hear everywhere, but for me, it's been nothing short of life-changing. From healing my skin after cancer to helping my dad regain mobility, collagen has proven itself to be a true powerhouse. Let me share why...",
    content: `...`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-21",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/how-collagen-saved-my-skin-my-dads-mobility-and-maybe-even-my-life.webp",
    imageAlt: "Collagen wellness supplement concept",
    tags: ["Thyroid", "Autoimmune", "Skin", "Mobility"],
    featured: true,
  },

  {
    id: "1773",
    slug: "superfoods-the-superfood-that-helped-sustain-me-for-7-years",
    title: "SuperBeets: The Superfood That Helped Sustain Me for 7 Years",
    excerpt:
      "When I was first diagnosed with thyroid cancer, my world turned upside down. I had to rethink everything—what I ate, how I moved, and how I approached my health. One discovery that became a cornerstone of my wellness journey was beets, specifically SuperBeets...",
    content: `...`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-19",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/superfoods-the-superfood-that-helped-sustain-me-for-7-years.webp",
    imageAlt: "Beets / superfood wellness concept",
    tags: ["Thyroid", "Energy", "Heart Health"],
    featured: true,
  },

  {
    id: "1771",
    slug: "finding-peace-in-the-chaos-mindfulness-for-black-women",
    title: "Finding Peace in the Chaos: Mindfulness for Black Women",
    excerpt:
      "Let's be real—life as a Black woman can feel like you're constantly juggling a million things while trying to keep it all together. Between work, family, societal expectations, and the weight of simply existing in a world that doesn't always value us, finding...",
    content: `...`,
    category: "Mental Health",
    date: "2024-11-17",
    readTime: "5 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/finding-peace-in-the-chaos-mindfulness-for-black-women.webp",
    imageAlt: "Mindfulness and calm reflection",
    tags: ["Mental Health", "Mindfulness", "Black Women"],
    featured: true,
  },

  {
    id: "1769",
    slug: "the-beautiful-big-bill-americas-reckoning",
    title: "The Beautiful Big Bill: America's Reckoning",
    excerpt:
      `There's a phrase that's been making the rounds lately: "the beautiful big bill." It's not about money, though. It's about the reckoning America is finally starting to face—a reckoning with its history, its systems, and its treatment of Black people...`,
    content: `...`,
    category: "Black Women's Health",
    date: "2024-11-15",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/the-beautiful-big-bill-americas-reckoning.webp",
    imageAlt: "Justice and reflection concept",
    tags: ["Community", "Equity", "Black Women"],
  },

  {
    id: "1767",
    slug: "understanding-panic-attacks-a-story-of-inner-conflict",
    title: "Understanding Panic Attacks: A Story of Inner Conflict",
    excerpt:
      "Panic attacks are terrifying. Your heart races, your chest tightens, and it feels like the world is closing in on you. If you've ever experienced one, you know how overwhelming they can be. But what if I told you that panic attacks are often your body's way of...",
    content: `...`,
    category: "Mental Health",
    date: "2024-11-13",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/understanding-panic-attacks-a-story-of-inner-conflict.webp",
    imageAlt: "Anxiety support and calm coping concept",
    tags: ["Mental Health", "Anxiety", "Mindfulness"],
  },

  // ✅ Paste the rest of your posts here...
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

// ---------- helpers ----------

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return blogPosts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.content}`.toLowerCase();
    return haystack.includes(q);
  });
}

export function getPostsNewestFirst(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

// Convenience: ensures UI always has an image (useful if you forget one)
export function getPostImage(post: BlogPost): string {
  return post.image?.trim() ? post.image : DEFAULT_BLOG_IMAGE;
}
