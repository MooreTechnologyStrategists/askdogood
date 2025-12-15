export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export const blogIndex: BlogMeta[] = [
  {
    slug: "alcohol-vs-weed-coping",
    title: "Alcohol vs. Weed: How Are You Really Coping?",
    excerpt:
      "Most people aren’t coping — they’re numbing. This is the honest truth about alcohol, weed, and real healing.",
    date: "2025-01-03",
    tags: ["healing", "sobriety", "coping"],
    image: "/assets/blog/alcohol-vs-weed-coping.jpg",
    imageAlt: "Wine glass and cannabis leaf split image representing coping choices.",
  },
  // add the next posts here
];
