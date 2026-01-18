import { Link, useRoute } from "wouter";
import { gardenSeasons, getSeason } from "@/content/gardenSeasons";

export default function GardenSeasonPost() {
  const [, params] = useRoute("/garden/:season");
  const slug = params?.season || "";
  const season = getSeason(slug);

  if (!season) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="mt-2 text-muted-foreground">
          That season isn’t planted yet.
        </p>
        <Link href="/garden">
          <a className="underline mt-6 inline-block">Back to Garden</a>
        </Link>
      </main>
    );
  }

  const index = gardenSeasons.findIndex((s) => s.slug === season.slug);
  const prev = gardenSeasons[index - 1];
  const next = gardenSeasons[index + 1];

  return (
    <main className="container mx-auto px-4 py-12">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/"><a className="underline">Home</a></Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <Link href="/garden"><a className="underline">Garden</a></Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <span className="text-foreground">
          {season.slug[0].toUpperCase() + season.slug.slice(1)}
        </span>
      </nav>

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">{season.title}</h1>
        <p className="mt-2 text-muted-foreground">{season.subtitle}</p>

        <img
          src={season.heroImg}
          alt={season.heroAlt}
          className="mt-8 w-full rounded-2xl object-cover"
          loading="lazy"
        />

        <div className="mt-8 space-y-5 text-base leading-7">
          {season.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/garden/${prev.slug}`}>
              <a className="underline">← {prev.slug.toUpperCase()}</a>
            </Link>
          ) : <span />}

          {next ? (
            <Link href={`/garden/${next.slug}`}>
              <a className="underline">{next.slug.toUpperCase()} →</a>
            </Link>
          ) : <span />}
        </div>

        <div className="mt-10 rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Your reflection (quick prompt)</h2>
          <p className="text-muted-foreground mt-2">
            What “golden gem” have you learned lately that you can use now… and what
            gem might be slow-moving but still valuable?
          </p>
        </div>
      </article>
    </main>
  );
}
