import { Link } from "wouter";
import { gardenSeasons } from "@/content/gardenSeasons";

/**
 * Garden landing page
 * Fixes:
 * - Ensures heroImg points to an existing path under: client/src/content/images/garden/
 * - Normalizes season label if title isn't provided
 * - Keeps Link usage compatible with wouter (<Link><a/></Link>)
 */
export default function Garden() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Seasons of Growth</h1>
        <p className="text-muted-foreground">
          I try to find joy in everything. Even when it’s draining or thankless,
          the real reward is the wisdom you pick up along the way—some gems you
          use immediately, some slow-moving… all priceless.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gardenSeasons.map((s) => {
          // Prefer explicit title, otherwise Title Case the slug
          const label =
            (s as any).title ??
            s.slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");

          // If your gardenSeasons already exports heroImg correctly, this does nothing.
          // If it still points at /assets/images/garden/*, we correct it here.
          const heroImg =
            typeof s.heroImg === "string" && s.heroImg.includes("/assets/images/garden/")
              ? s.heroImg.replace(
                  "/assets/images/garden/",
                  "/content/images/garden/"
                )
              : s.heroImg;

          return (
            <Link key={s.slug} href={`/garden/${s.slug}`}>
              <a className="group relative overflow-hidden rounded-2xl shadow-sm border">
                <img
                  src={heroImg}
                  alt={s.heroAlt ?? `${label} garden`}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-xl font-semibold">{label}</div>
                  <div className="text-white/80 text-sm">Read the blog →</div>
                </div>
              </a>
            </Link>
          );
        })}
      </section>

      <section className="mt-14 max-w-3xl rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Want the Garden Journal?</h2>
        <p className="text-muted-foreground mt-2">
          I’m building a seasonal reflection journal with prompts, wellness notes,
          and practical garden lessons. If you want it when it drops, join the list.
        </p>

        {/* Replace this with your real form later (ConvertKit/Mailchimp/etc.) */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <label className="sr-only" htmlFor="garden-email">
            Email address
          </label>
          <input
            id="garden-email"
            type="email"
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Email address"
            autoComplete="email"
          />
          <button type="button" className="rounded-xl px-5 py-3 font-semibold border">
            Join the Garden List
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">No spam. Just growth.</p>
      </section>

      {/* Optional: small debug hint during development */}
      {/* <pre className="mt-10 text-xs text-muted-foreground">{JSON.stringify(gardenSeasons, null, 2)}</pre> */}
    </main>
  );
}
