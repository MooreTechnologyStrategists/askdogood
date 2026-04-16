export const SITE_NAME = "Ask DoGood";
export const SITE_URL = "https://askdogood.com";
export const SITE_AUTHOR = 'RoSeé Murphy';
export const DEFAULT_DESCRIPTION =
  "AskDoGood helps people heal better, live smarter, and earn stronger through practical wellness, self-advocacy, and everyday stability.";
export const DEFAULT_OG_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/AskDoGood_Logo_300x300.png";
export const RSS_FEED_PATH = "/blog-rss.xml";
export const TWITTER_HANDLE = "@askdogood";

export const SOCIAL_PROFILES = [
  "https://instagram.com/the_real_dogood",
  "https://tiktok.com/@askdogood",
  "https://pinterest.com/askdogood",
  "https://youtube.com/@roseecm",
  "https://facebook.com/askdogood",
  "https://linkedin.com/in/askdogood",
];

export type SeoType = "website" | "article" | "product";
export type SitemapChangefreq = "daily" | "weekly" | "monthly";

export type StaticSeoPage = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  type?: SeoType;
  image?: string;
  noindex?: boolean;
  priority?: number;
  changefreq?: SitemapChangefreq;
};

export const staticSeoPages: StaticSeoPage[] = [
  {
    path: "/",
    title: "Ask DoGood | Heal Better, Live Smarter, Earn Stronger",
    description:
      "AskDoGood is a holistic health and workforce empowerment platform helping people rebuild health, daily structure, and stability through practical wellness, tools, and community support.",
    keywords: [
      "thyroid wellness",
      "DMV meal prep",
      "AskDoGood framework",
      "holistic health",
      "plant based meal prep",
      "workforce empowerment",
      "Ask DoGood",
      "chronic illness support",
    ],
    priority: 1,
    changefreq: "weekly",
  },
  {
    path: "/about",
    title: "About RoSeé Murphy | Ask DoGood",
    description:
      "Meet RoSeé Murphy, founder of Ask DoGood, and learn how lived thyroid recovery, resilience, and wellness advocacy shape the site’s guidance and resources.",
    keywords: [
      "RoSeé Murphy",
      "Ask DoGood founder",
      "thyroid advocate",
      "wellness coach",
      "healing journey",
    ],
    priority: 0.75,
    changefreq: "monthly",
  },
  {
    path: "/blog",
    title: "Wellness and Thyroid Articles | Ask DoGood Blog",
    description:
      "Read practical articles on thyroid wellness, healing routines, nutrition, mindset, and real-life growth from Ask DoGood.",
    keywords: [
      "thyroid blog",
      "wellness articles",
      "Ask DoGood blog",
      "healing stories",
      "nutrition tips",
    ],
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/resources",
    title: "Resources | Ask DoGood",
    description:
      "Access Ask DoGood wellness resources, practical tools, guides, and recommendations built to support healing and day-to-day progress.",
    keywords: ["wellness resources", "health tools", "thyroid resources"],
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/herbs",
    title: "A-Z Herb Dictionary — Benefits, Interactions & Thyroid Safety | Ask DoGood",
    description:
      "Comprehensive A-Z guide to medicinal herbs: where they grow, proven benefits, active compounds, drug interactions, and thyroid-specific safety notes.",
    keywords: [
      "herb dictionary",
      "medicinal herbs",
      "natural remedies",
      "ashwagandha",
      "turmeric",
      "sea moss",
      "thyroid herbs",
      "herbal medicine",
      "herb interactions",
      "holistic health",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/contact",
    title: "Contact and Coaching | Ask DoGood",
    description:
      "Get in touch with Ask DoGood for collaboration, coaching inquiries, media requests, and support.",
    keywords: ["contact Ask DoGood", "coaching", "wellness collaboration"],
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/work-with-askdogood",
    title: "Work With AskDoGood | Partnerships, Workshops, and Programs",
    description:
      "Partner with AskDoGood for workshops, community wellness programming, 6-week reset support, and practical health-plus-stability education.",
    keywords: [
      "work with AskDoGood",
      "wellness partnerships",
      "community wellness workshops",
      "lifestyle education",
      "health and workforce support",
    ],
    priority: 0.78,
    changefreq: "monthly",
  },
  {
    path: "/guest-contributors",
    title: "Guest Contributors and Wellness Writers | Ask DoGood",
    description:
      "Pitch a guest post to Ask DoGood on holistic health, DERS living, clean eating, rest, spirituality, employment, and real-life growth.",
    keywords: [
      "guest post wellness",
      "write for Ask DoGood",
      "holistic health contributor",
      "guest blogger submission",
    ],
    priority: 0.68,
    changefreq: "monthly",
  },
  {
    path: "/journey",
    title: "My Journey | Ask DoGood",
    description:
      "Follow the Ask DoGood healing journey through thyroid recovery, resilience, life transitions, and the lessons that shaped this work.",
    keywords: [
      "healing journey",
      "thyroid recovery story",
      "resilience",
      "wellness transformation",
    ],
    type: "article",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/behind-the-scenes",
    title: "Behind the Scenes | Ask DoGood",
    description:
      "Read the behind-the-scenes features on Ask DoGood covering the CIAA birthday story, healing with style, community outreach, and personal wellness routines.",
    keywords: [
      "behind the scenes",
      "MC Lyte birthday story",
      "DJ K-Rock",
      "community outreach",
      "healing with style",
      "Ask DoGood founder notes",
    ],
    type: "article",
    priority: 0.72,
    changefreq: "monthly",
  },
  {
    path: "/interests",
    title: "Interests and Inspiration | Ask DoGood",
    description:
      "Explore the ideas, causes, and creative interests that shape Ask DoGood beyond wellness alone.",
    keywords: ["interests", "inspiration", "Ask DoGood", "creative wellness"],
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/garden",
    title: "Garden and Seasonal Living | Ask DoGood",
    description:
      "Explore seasonal garden reflections, practical growing notes, and real-life lessons from tending what you plant.",
    keywords: [
      "garden journal",
      "seasonal living",
      "garden reflections",
      "Ask DoGood garden",
    ],
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/no-fluff",
    title: "No Fluff Advice | Ask DoGood",
    description:
      "Direct, practical Ask DoGood guidance without the fluff, focused on health, healing, and getting unstuck.",
    keywords: ["no fluff advice", "practical wellness", "direct guidance"],
    priority: 0.65,
    changefreq: "monthly",
  },
  {
    path: "/resources",
    title: "Resources | Ask DoGood",
    description:
      "Access Ask DoGood wellness resources, practical tools, guides, and recommendations built to support healing and day-to-day progress.",
    keywords: ["wellness resources", "health tools", "thyroid resources"],
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/contact",
    title: "Contact and Coaching | Ask DoGood",
    description:
      "Get in touch with Ask DoGood for collaboration, coaching inquiries, media requests, and support.",
    keywords: ["contact Ask DoGood", "coaching", "wellness collaboration"],
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/meal-prep",
    title: "DMV Meal Prep for Healing | Ask DoGood",
    description:
      "Order simple Monday-Friday meal prep combos, choose pickup or delivery in the DMV, and explore healing-friendly food support from Ask DoGood.",
    keywords: [
      "DMV meal prep",
      "healthy meal prep near me",
      "anti inflammatory meals",
      "plant based meal prep",
      "Ask DoGood meal prep",
    ],
    priority: 0.82,
    changefreq: "weekly",
  },
  {
    path: "/shop",
    title: "Shop Wellness Bundles on Gumroad | Ask DoGood",
    description:
      "Browse Ask DoGood Gumroad wellness bundles, thyroid tools, meal plans, and practical digital products built for healing and sustainable growth.",
    keywords: [
      "Ask DoGood Gumroad",
      "wellness bundles",
      "thyroid course",
      "meal plan download",
      "holistic health products",
    ],
    type: "product",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/clinical-recipes",
    title: "Clinical Recipes | Ask DoGood",
    description:
      "Browse anti-inflammatory, thyroid-supportive recipes and meal ideas built for real kitchens and real healing routines.",
    keywords: [
      "thyroid recipes",
      "anti inflammatory recipes",
      "clinical recipes",
      "wellness meals",
    ],
    priority: 0.85,
    changefreq: "weekly",
  },
  {
    path: "/label-scanner",
    title: "Label Scanner | Ask DoGood",
    description:
      "Use the Ask DoGood label scanner to make more informed product choices and cut through ingredient confusion.",
    keywords: ["label scanner", "ingredient checker", "wellness shopping tool"],
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/recipe/roasted-vegetables-trio",
    title: "Roasted Vegetables Trio Recipe | Ask DoGood",
    description:
      "A simple roasted vegetables trio recipe for a practical, nourishing, anti-inflammatory plate.",
    keywords: ["roasted vegetables recipe", "healthy side dish", "anti inflammatory recipe"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/quinoa-rice-medley",
    title: "Quinoa Rice Medley Recipe | Ask DoGood",
    description:
      "A balanced quinoa rice medley recipe for meal prep, energy, and easy weeknight nutrition.",
    keywords: ["quinoa recipe", "rice medley", "healthy meal prep"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/purple-cabbage-broccoli-slaw",
    title: "Purple Cabbage Broccoli Slaw Recipe | Ask DoGood",
    description:
      "A crisp purple cabbage and broccoli slaw recipe packed with texture, color, and practical nutrition.",
    keywords: ["broccoli slaw recipe", "purple cabbage slaw", "healthy salad"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/dogood-lentil-burgers",
    title: "DoGood Lentil Burgers Recipe | Ask DoGood",
    description:
      "A hearty lentil burger recipe for plant-forward meals that still feel substantial and satisfying.",
    keywords: ["lentil burgers", "plant based burgers", "healthy burger recipe"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/chickpea-burgers",
    title: "Chickpea Burgers Recipe | Ask DoGood",
    description:
      "A simple chickpea burger recipe for easy, nourishing plant-based meals.",
    keywords: ["chickpea burger recipe", "plant based burgers", "healthy recipe"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/green-smoothie-bowl",
    title: "Green Smoothie Bowl Recipe | Ask DoGood",
    description:
      "A refreshing green smoothie bowl recipe with practical ingredients for energy and nourishment.",
    keywords: ["green smoothie bowl", "healthy breakfast", "smoothie recipe"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/growing-fresh-mint",
    title: "Growing Fresh Mint Guide | Ask DoGood",
    description:
      "A practical guide to growing fresh mint and using small-space herbs to support your kitchen routine.",
    keywords: ["grow mint", "herb garden", "fresh mint guide"],
    type: "article",
    priority: 0.55,
    changefreq: "monthly",
  },
  {
    path: "/recipe/homemade-pizza",
    title: "Homemade Pizza Recipe | Ask DoGood",
    description:
      "A homemade pizza recipe that balances comfort, simplicity, and better ingredients.",
    keywords: ["homemade pizza recipe", "comfort food", "from scratch pizza"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/recipe/mason-jar-salad",
    title: "Mason Jar Salad Recipe | Ask DoGood",
    description:
      "A mason jar salad recipe built for real meal prep, convenience, and fresh flavor.",
    keywords: ["mason jar salad", "meal prep salad", "healthy lunch"],
    type: "article",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/shop",
    title: "Shop Courses, Guides, and Wellness Tools | Ask DoGood",
    description:
      "Shop Ask DoGood courses, guides, and wellness tools created to support thyroid health, healing routines, and practical self-advocacy.",
    keywords: ["thyroid course", "wellness shop", "healing guides"],
    type: "product",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/merch",
    title: "Merch | Ask DoGood",
    description:
      "Explore Ask DoGood merchandise designed to extend the brand’s voice, mission, and community.",
    keywords: ["Ask DoGood merch", "wellness merch"],
    type: "product",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/course/thyroid-health-mastery",
    title: "Thyroid Health Mastery Course | Ask DoGood",
    description:
      "Learn the Ask DoGood thyroid framework through modules on labs, medication, nutrition, stress, and self-advocacy.",
    keywords: [
      "thyroid course",
      "thyroid health mastery",
      "Hashimoto's support",
      "thyroid healing",
    ],
    type: "product",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/product/thyroid-mastery-course",
    title: "Thyroid Mastery Course Product Page | Ask DoGood",
    description:
      "Review the Ask DoGood thyroid mastery course offer, benefits, and what is included before you enroll.",
    keywords: ["thyroid mastery course", "thyroid product page", "wellness course"],
    type: "product",
    priority: 0.85,
    changefreq: "weekly",
  },
  {
    path: "/free-thyroid-lab-guide",
    title: "Free Thyroid Lab Interpretation Guide | Ask DoGood",
    description:
      "Download the free Ask DoGood thyroid lab guide to better understand TSH, Free T3, Free T4, antibodies, and key patterns to discuss with your doctor.",
    keywords: ["free thyroid lab guide", "TSH guide", "thyroid labs"],
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/free-meal-plan",
    title: "Free Meal Plan | Ask DoGood",
    description:
      "Get a free Ask DoGood meal plan built to support healing, energy, and more consistent nutrition habits.",
    keywords: ["free meal plan", "wellness meal plan", "healing nutrition"],
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/symptom-tracker",
    title: "Symptom Tracker | Ask DoGood",
    description:
      "Track symptoms, trends, and recovery patterns with the Ask DoGood symptom tracker.",
    keywords: ["symptom tracker", "health tracker", "thyroid symptoms"],
    priority: 0.75,
    changefreq: "weekly",
  },
  {
    path: "/supplement-guide",
    title: "Supplement Guide | Ask DoGood",
    description:
      "Access the Ask DoGood supplement guide for more practical, informed decisions about wellness support tools.",
    keywords: ["supplement guide", "wellness supplements", "thyroid supplements"],
    priority: 0.75,
    changefreq: "weekly",
  },
  {
    path: "/doctor-checklist",
    title: "Doctor Checklist | Ask DoGood",
    description:
      "Prepare for appointments with the Ask DoGood doctor checklist built for better questions, clearer notes, and stronger self-advocacy.",
    keywords: ["doctor checklist", "appointment prep", "self advocacy"],
    priority: 0.75,
    changefreq: "weekly",
  },
  {
    path: "/coaching",
    title: "Coaching | Ask DoGood",
    description:
      "Work with Ask DoGood through coaching grounded in practical structure, lived experience, and honest support.",
    keywords: ["wellness coaching", "thyroid coaching", "Ask DoGood coaching"],
    type: "product",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/stories",
    title: "Stories and Serialized Fiction | Ask DoGood",
    description:
      "Read serialized fiction from Ask DoGood, led by Chyna White and built around sharp characters, modern tension, and premium storytelling.",
    keywords: ["short stories", "serialized fiction", "Chyna White", "Ask DoGood stories"],
    priority: 0.7,
    changefreq: "weekly",
  },
  {
    path: "/stories/chyna-white",
    title: "Chyna White | Ask DoGood",
    description:
      "Enter the Chyna White story world and follow a fierce, high-pressure lead built for readers who want tension, style, and authority.",
    keywords: ["Chyna White", "fiction series", "serialized fiction", "contemporary drama"],
    type: "article",
    priority: 0.7,
    changefreq: "weekly",
  },
  {
    path: "/stories/chyna-white/episode-1",
    title: "Chyna White Episode 1 | Ask DoGood",
    description:
      "Read episode 1 of Chyna White and step into a sharp opening chapter filled with boardroom tension, old history, and a lead who does not shrink.",
    keywords: ["Chyna White episode 1", "fiction episode", "serialized fiction", "Ask DoGood fiction"],
    type: "article",
    priority: 0.65,
    changefreq: "monthly",
  },
  {
    path: "/login",
    title: "Log In | Ask DoGood",
    description: "Log in to your Ask DoGood account.",
    keywords: ["Ask DoGood login"],
    noindex: true,
  },
  {
    path: "/signup",
    title: "Sign Up | Ask DoGood",
    description: "Create your Ask DoGood account.",
    keywords: ["Ask DoGood signup"],
    noindex: true,
  },
  {
    path: "/dashboard",
    title: "Dashboard | Ask DoGood",
    description: "Ask DoGood member dashboard.",
    keywords: ["Ask DoGood dashboard"],
    noindex: true,
  },
  {
    path: "/profile",
    title: "Profile | Ask DoGood",
    description: "Ask DoGood profile page.",
    keywords: ["Ask DoGood profile"],
    noindex: true,
  },
  {
    path: "/rewards",
    title: "Rewards | Ask DoGood",
    description: "Ask DoGood member rewards.",
    keywords: ["Ask DoGood rewards"],
    noindex: true,
  },
  {
    path: "/challenges",
    title: "Challenges | Ask DoGood",
    description: "Ask DoGood challenges dashboard.",
    keywords: ["Ask DoGood challenges"],
    noindex: true,
  },
  {
    path: "/rss",
    title: "RSS Feed | Ask DoGood",
    description: "Subscribe to the Ask DoGood blog RSS feed.",
    keywords: ["RSS feed", "Ask DoGood blog feed"],
    noindex: true,
  },
  {
    path: "/feed",
    title: "RSS Feed | Ask DoGood",
    description: "Subscribe to the Ask DoGood blog RSS feed.",
    keywords: ["RSS feed", "Ask DoGood blog feed"],
    noindex: true,
  },
  {
    path: "/404",
    title: "Page Not Found | Ask DoGood",
    description: "The page you requested could not be found.",
    keywords: ["404", "page not found"],
    noindex: true,
  },
];

const seoByPath = new Map(staticSeoPages.map((page) => [page.path, page]));

export function getStaticSeoForPath(path: string) {
  return seoByPath.get(path);
}

export function toAbsoluteUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, SITE_URL).toString();
}

export function truncateDescription(text: string, maxLength = 160) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}…`;
}