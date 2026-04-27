import SEO from "@/components/SEO";
import {
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  getStaticSeoForPath,
} from "@/lib/seo";

type RouteSeoProps = {
  location: string;
};

export default function RouteSeo({ location }: RouteSeoProps) {
  if (location.startsWith("/blog/") || /^\/garden\/[^/]+$/.test(location)) {
    return null;
  }

  const config = getStaticSeoForPath(location);
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
            "Practical wellness, thyroid support, DMV meal prep, and real-life healing guidance from Ask DoGood.",
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
        image:
          "/images/products/gumroad_cover.png",
      };
    case "/product/thyroid-mastery-course":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Thyroid Mastery Course",
        description:
          "Ask DoGood course product page for thyroid education, healing routines, and self-advocacy.",
        image:
          "/images/products/gumroad_cover.png",
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
        description: "Digital wellness tools and healing bundles available through Gumroad.",
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