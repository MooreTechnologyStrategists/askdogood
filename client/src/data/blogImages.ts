import { safeBlogPosts } from "@/content/blogData";
export const BLOG_DEFAULT_CARD =
  "/images/editorial/when-life-shifts-your-next-step-still-matters.svg";
export const BLOG_DEFAULT_HERO = BLOG_DEFAULT_CARD;
export function articleTopic(text: string) {
  if (
    /relationship|dating|partner|marriage|love|trust|couple|boundary|boundaries|bedroom|connection|communication/i.test(
      text
    )
  )
    return "relationships";
  if (
    /career|work-from-home|working-from-home|business|job|raise|pay|income|azure|technology|software|productivity|student|loan|credit|money/i.test(
      text
    )
  )
    return "career";
  if (
    /thyroid|health|food|meal|recipe|vegan|nutrition|supplement|symptom|disease|blood|skin|herb|collagen|beet|weight|exercise|muscle|menopause/i.test(
      text
    )
  )
    return "health";
  return "life";
}
// Subject-led choices: archive photography for actual people, places, food and gardens;
// purpose-made editorial covers for subjects without an accurate archive photograph.
const photoRules: [RegExp, string, string][] = [
  [
    /jamaica.*basket|basket.*jamaica|jamaica.*youth|from-kingston-courts-to-yonkers-dreams/,
    "/images/personal/professional/jamaica-youth-team.webp",
    "Youth basketball team in Jamaica, from the AskDoGood archive",
  ],
  [
    /paris/,
    "/images/personal/travel/rosee-speaking-paris-2023.webp",
    "RoSeé speaking in Paris in 2023",
  ],
  [
    /mc-lyte/,
    "/images/personal/rosee-with-mc-lyte.jpg",
    "Archive photograph of RoSeé with MC Lyte",
  ],
  [
    /meal-prep|vegan-diet|vegan-lifestyle|flexatarian/,
    "/images/personal/food/muhammad-dishes-1.jpg",
    "A colorful vegetable dish from the AskDoGood food archive",
  ],
  [
    /garden.*winter|winter.*garden/,
    "/images/personal/rosee-founder-snow-2026.jpg",
    "RoSeé outdoors in winter, from the personal archive",
  ],
  [
    /garden|grow-your|herb|mint/,
    "/images/personal/food/garden-peppers.jpg",
    "Peppers growing in RoSeé’s garden",
  ],
  [
    /weekly-relationship-check-in|misunderstandings-in-communication|building-back-our-villages/,
    "/images/personal/professional/clay-banks-hands-together.jpg",
    "Hands coming together around a table, illustrating connection",
  ],
  [
    /date-ideas|slow-walk-dates/,
    "/images/personal/food/night-umbrella.jpg",
    "An inviting outdoor gathering space in RoSeé’s garden",
  ],
  [
    /finding-peace|reclaiming-peace/,
    "/images/personal/food/night-garden.jpg",
    "An evening pocket of peace in RoSeé’s garden",
  ],
];
const knownSlugs = new Set(safeBlogPosts.map(post => post.id));
export function articleImage(slug: string) {
  const match = photoRules.find(([test]) => test.test(slug));
  return (
    match?.[1] ||
    (knownSlugs.has(slug) ? `/images/editorial/${slug}.svg` : BLOG_DEFAULT_CARD)
  );
}
export function articleImageAlt(slug: string) {
  return (
    photoRules.find(([test]) => test.test(slug))?.[2] ||
    `Editorial cover: ${safeBlogPosts.find(post => post.id === slug)?.title || "AskDoGood reading room"}`
  );
}
export const blogImages: Record<string, string> = Object.fromEntries(
  safeBlogPosts.map(post => [post.id, articleImage(post.id)])
);
