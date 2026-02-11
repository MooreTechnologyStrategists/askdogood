import { Link, useRoute } from "wouter";
import { gardenSeasons, getSeason } from "@/content/gardenSeasons";
import SEO from "@/components/SEO";

/**
 * Garden season detail page
 * Fixes:
 * - Normalizes label safely (uses title if available, otherwise Title Case slug)
 * - Hardens hero image path if old /assets/images/garden/* strings are still lingering
 * - Guards against missing body arrays
 * - Keeps prev/next navigation safe
 */
export default function GardenSeasonPost() {
  const [, params] = useRoute("/garden/:season");
  const slug = params?.season || "";
  const season = getSeason(slug);

  if (!season) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="mt-2 text-muted-foreground">That season isn’t planted yet.</p>
        <Link href="/garden">
          <a className="underline mt-6 inline-block">Back to Garden</a>
        </Link>
      </main>
    );
  }

  const index = gardenSeasons.findIndex((s) => s.slug === season.slug);
  const prev = index > 0 ? gardenSeasons[index - 1] : undefined;
  const next = index >= 0 && index < gardenSeasons.length - 1 ? gardenSeasons[index + 1] : undefined;

  const label =
    (season as any).title ??
    season.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // If season.heroImg is still pointing at the old assets path, correct it here.
  // NOTE: the most robust fix is to update gardenSeasons to import images from "@/content/images/garden/*"
  const heroImg =
    typeof season.heroImg === "string" && season.heroImg.includes("/assets/images/garden/")
      ? season.heroImg.replace("/assets/images/garden/", "/content/images/garden/")
      : season.heroImg;

  const body = Array.isArray(season.body) ? season.body : [];

  return (
    <>
      <SEO
        title={`${label} | Garden to Table | Ask DoGood`}
        description={season.subtitle || `Garden season guide: ${label}`}
        keywords={['garden', 'seasonal gardening', 'wellness', 'plant-based', 'growing food']}
        url={`/garden/${season.slug}`}
      />
      <main className="container mx-auto px-4 py-12">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/">
          <a className="underline">Home</a>
        </Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <Link href="/garden">
          <a className="underline">Garden</a>
        </Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <span className="text-foreground">{label}</span>
      </nav>

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">{season.title}</h1>
        {season.subtitle ? (
          <p className="mt-2 text-muted-foreground">{season.subtitle}</p>
        ) : null}

        <img
          src={heroImg}
          alt={season.heroAlt ?? `${label} garden`}
          className="mt-8 w-full rounded-3xl object-cover shadow-xl"
          loading="lazy"
        />

        <div className="mt-8 space-y-5 text-base leading-7">
          {body.length ? (
            body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p className="text-muted-foreground">
              This season’s story is coming soon. (The soil is still doing its thing.)
            </p>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/garden/${prev.slug}`}>
              <a className="underline">← {prev.slug.toUpperCase()}</a>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/garden/${next.slug}`}>
              <a className="underline">{next.slug.toUpperCase()} →</a>
            </Link>
          ) : (
            <span />
          )}
        </div>

        <div className="mt-10 rounded-3xl border-2 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
          <h2 className="text-xl font-bold">Your reflection (quick prompt)</h2>
          <p className="text-muted-foreground mt-3">
            What “golden gem” have you learned lately that you can use now… and what gem might be slow-moving
            but still valuable?
          </p>
        </div>
      </article>
    </main>
    </>
  );
}
