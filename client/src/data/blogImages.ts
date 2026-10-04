import { safeBlogPosts } from "@/content/blogData";
export const BLOG_DEFAULT_CARD = "/images/personal/food/night-garden.jpg";
export const BLOG_DEFAULT_HERO = BLOG_DEFAULT_CARD;
export function articleTopic(text: string) {
  if (
    /relationship|dating|partner|marriage|love|trust|couple|boundary|boundaries|bedroom|connection/i.test(
      text
    )
  )
    return "relationships";
  if (
    /career|work|business|job|raise|pay|income|azure|technology|software|productivity|student|loan|credit|money/i.test(
      text
    )
  )
    return "career";
  if (
    /thyroid|health|food|meal|recipe|vegan|nutrition|supplement|symptom|disease|blood|skin|herb|collagen|beet|weight|exercise|muscle/i.test(
      text
    )
  )
    return "health";
  return "life";
}
export function articleImage(slug: string) {
  if (/jamaica.*basket|basket.*jamaica|jamaica.*youth/.test(slug))
    return "/images/personal/professional/jamaica-youth-team.webp";
  if (/paris/.test(slug))
    return "/images/personal/travel/rosee-speaking-paris-2023.webp";
  if (/music|hip-hop|chappelle/.test(slug))
    return "/images/personal/rosee-with-mc-lyte.jpg";
  if (/garden|grow|herb|mint/.test(slug))
    return "/images/personal/food/garden-peppers.jpg";
  const paths: Record<string, string[]> = {
    health: [
      "/images/personal/food/muhammad-dishes-1.jpg",
      "/images/personal/food/muhammad-dishes-3.jpg",
      "/images/personal/food/garden-peppers.jpg",
    ],
    relationships: [
      "/images/personal/food/night-garden.jpg",
      "/images/personal/food/night-umbrella.jpg",
    ],
    career: [
      "/images/personal/travel/rosee-speaking-paris-2023.webp",
      "/images/personal/food/blue-suit-sit-down-zay.jpg",
    ],
    life: [
      "/images/personal/rosee-garden-2026.webp",
      "/images/personal/rosee-founder-snow-2026.jpg",
      "/images/personal/food/brown-garden-hat-zay.jpg",
    ],
  };
  const list = paths[articleTopic(slug)];
  const hash = Array.from(slug).reduce((n, c) => n + c.charCodeAt(0), 0);
  return list[hash % list.length];
}
export const blogImages: Record<string, string> = Object.fromEntries(
  safeBlogPosts.map(post => [post.id, articleImage(post.id)])
);
