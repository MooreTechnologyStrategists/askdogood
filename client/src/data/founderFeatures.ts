export type FounderFeature = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  cta: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export const founderFeatures: FounderFeature[] = [
  {
    id: 'ciaa-birthday',
    eyebrow: 'Music memory',
    title: 'CIAA birthday with MC Lyte and DJ K-Rock',
    summary:
      'A real highlight from the season around your surprise 39th birthday during CIAA, including personal time with MC Lyte and world-renowned DJ K-Rock.',
    cta: 'Read the feature',
    href: '/behind-the-scenes#ciaa-birthday',
    image: 'https://askdogoodassets.blob.core.windows.net/images/Zay-and-KRock.jpg',
    imageAlt: 'RoSee Murphy with world-renowned DJ K-Rock during the CIAA birthday celebration',
  },
  {
    id: 'healing-with-style',
    eyebrow: 'Personal style',
    title: 'Healing with style',
    summary:
      'A closer look at how presentation, confidence, and visual identity stayed part of the rebuild instead of getting left behind.',
    cta: 'Read the article',
    href: '/behind-the-scenes#healing-with-style',
  },
  {
    id: 'community-outreach',
    eyebrow: 'Community work',
    title: 'Holiday outreach in DC and Charlotte',
    summary:
      'A feature anchored in feeding unhoused neighbors in Columbia Heights during Christmas 2019 to 2020, and extending that same service into Charlotte the same year.',
    cta: 'View the outreach story',
    href: '/behind-the-scenes#community-outreach',
  },
  {
    id: 'skin-regimen',
    eyebrow: 'Wellness regimen',
    title: 'Skin rituals, collagen, and youthful maintenance',
    summary:
      'An editorial note on the collagen preferences, skin-support routines, and wellness habits behind the steady glow.',
    cta: 'Open the regimen note',
    href: '/behind-the-scenes#skin-regimen',
  },
];