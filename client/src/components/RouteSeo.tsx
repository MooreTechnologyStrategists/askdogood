import SEO from "@/components/SEO";
import {
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  getStaticSeoForPath,
  type StaticSeoPage,
} from "@/lib/seo";

type RouteSeoProps = {
  location: string;
};

export default function RouteSeo({ location }: RouteSeoProps) {
  if (location.startsWith("/blog/") || /^\/garden\/[^/]+$/.test(location)) {
    return null;
  }

  const overrides: Record<string, { title: string; description: string }> = {
    "/about": {
      title: "Our Mission & Story | AskDoGood",
      description:
        "Our mission is to help people care for their health, strengthen their relationships, and move forward in everyday life.",
    },
    "/resources": {
      title: "Find Your Path | AskDoGood",
      description:
        "Choose health and food, relationships and support, career and purpose, or everyday life.",
    },
    "/resources/start": {
      title: "Start Here | AskDoGood",
      description:
        "Find free resources and relevant support for the part of life you want help with.",
    },
    "/resources/library": {
      title: "Free Resources | AskDoGood",
      description:
        "Explore articles, recipes, relationship tools, and practical resources for everyday life.",
    },
    "/shop": {
      title: "Guides, Plans, Membership & Merch | AskDoGood",
      description:
        "Explore the $17 reset guide, $97 personalized wellness plan, $19/month membership, and original AskDoGood merch.",
    },
    "/merch": {
      title: "Shop AskDoGood Merch",
      description:
        "Explore the original embroidered black hoodie, hoodie and jogger set, and cream logo tee.",
    },
    "/blog": {
      title: "Articles & Stories | AskDoGood",
      description:
        "Read about health, relationships, work, and everyday life, alongside personal stories from RoSeé.",
    },
    "/coaching": {
      title: "Personal Support | AskDoGood",
      description:
        "Explore wellness planning and membership, or inquire about conversation and life-transition support.",
    },
    "/journey": {
      title: "RoSeé’s Story | AskDoGood",
      description:
        "The experiences with service, health, work, and rebuilding behind AskDoGood.",
    },
    "/contact": {
      title: "Contact AskDoGood",
      description:
        "Ask about offers, orders, personal support, workshops, and partnerships.",
    },
    "/work-with-askdogood": {
      title: "Community Workshops & Partnerships | AskDoGood",
      description:
        "Bring practical wellness education, healthy routines, and life-transition resources to your community.",
    },
    "/clinical-recipes": {
      title: "Recipes & Food Ideas | AskDoGood",
      description: "Explore recipes and practical meal ideas from AskDoGood.",
    },
    "/keep-moving": {
      title: "Walking & Everyday Movement | AskDoGood",
      description: "Explore walking guides and movement at your own pace.",
    },
  };
  const base = getStaticSeoForPath(location);
  const config: StaticSeoPage | undefined = base
    ? { ...base, ...overrides[location] }
    : overrides[location]
      ? { path: location, keywords: [], ...overrides[location] }
      : undefined;
  if (!config) {
    return null;
  }

  return (
    <SEO
      title={config.title}
      description={config.description}
      keywords={config.keywords}
      url={config.path}
      type={config.type}
      image={config.image ?? DEFAULT_OG_IMAGE}
      noindex={config.noindex}
      schema={getSchemaForPath(config.path)}
    />
  );
}

function getSchemaForPath(path: string) {
  switch (path) {
    case "/":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: DEFAULT_OG_IMAGE,
          founder: SITE_AUTHOR,
          sameAs: SOCIAL_PROFILES,
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description:
            "AskDoGood offers practical education and support for health, relationships, career, and everyday life.",
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
      ];
    case "/about":
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_AUTHOR,
        url: `${SITE_URL}/about`,
        image: DEFAULT_OG_IMAGE,
        jobTitle: "Founder of Ask DoGood",
        worksFor: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        sameAs: SOCIAL_PROFILES,
      };
    case "/behind-the-scenes":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Behind the Scenes | Ask DoGood",
        url: `${SITE_URL}/behind-the-scenes`,
        description:
          "Founder features and behind-the-scenes notes on cultural memories, community service, style, and wellness routines.",
      };
    case "/course/thyroid-health-mastery":
      return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Thyroid Health Mastery Course",
        description:
          "A thyroid wellness course covering labs, medication, nutrition, stress, and self-advocacy.",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          sameAs: SITE_URL,
        },
        url: `${SITE_URL}/course/thyroid-health-mastery`,
        image: "/images/products/gumroad_cover.png",
      };
    case "/product/thyroid-mastery-course":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Thyroid Mastery Course",
        description:
          "Ask DoGood course product page for thyroid education, healing routines, and self-advocacy.",
        image: "/images/products/gumroad_cover.png",
        brand: {
          "@type": "Brand",
          name: SITE_NAME,
        },
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/product/thyroid-mastery-course`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      };
    case "/meal-prep":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Ask DoGood DMV Meal Prep",
        serviceType: "Meal prep and wellness food support",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        areaServed: "Washington DC, Maryland, Virginia",
        url: `${SITE_URL}/meal-prep`,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          lowPrice: "16",
          highPrice: "19",
          availability: "https://schema.org/InStock",
        },
      };
    case "/shop":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Ask DoGood Shop",
        url: `${SITE_URL}/shop`,
        description:
          "Wellness guides, personalized plans, membership, and made-to-order merchandise.",
      };
    case "/coaching":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Ask DoGood Coaching",
        serviceType: "Wellness coaching",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        areaServed: "US",
        url: `${SITE_URL}/coaching`,
      };
    default:
      return undefined;
  }
}
