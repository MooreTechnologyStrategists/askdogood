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
    title: 'My surprise 39th birthday party with MC Lyte at CIAA',
    summary:
      'A real highlight from my CIAA season: my surprise 39th birthday party and personal time with hip-hop legend MC Lyte.',
    cta: 'Read the feature',
    href: '/behind-the-scenes#ciaa-birthday',
    image: '/images/personal/rosee-with-mc-lyte.jpg',
    imageAlt: 'RoSee Murphy with MC Lyte during the CIAA birthday celebration',
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