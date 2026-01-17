import { Link } from "wouter";
import { gardenSeasons } from "@/content/gardenSeasons";

export default function Garden() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Seasons of Growth</h1>
        <p className="text-muted-foreground">
          I try to find joy in everything. Even when it’s draining or thankless,
          the real reward is the wisdom you pick up along the way—some gems you use
          immediately, some slow-moving… all priceless.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gardenSeasons.map((s) => (
          <Link key={s.slug} href={`/garden/${s.slug}`}>
            <a className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={s.heroImg}
                alt={s.heroAlt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xl font-semibold">
                  {s.slug[0].toUpperCase() + s.slug.slice(1)}
                </div>
                <div className="text-white/80 text-sm">Read the blog →</div>
              </div>
            </a>
          </Link>
        ))}
      </section>

      <section className="mt-14 max-w-3xl rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Want the Garden Journal?</h2>
        <p className="text-muted-foreground mt-2">
          I’m building a seasonal reflection journal with prompts, wellness notes,
          and practical garden lessons. If you want it when it drops, join the list.
        </p>

        {/* Replace this with your real form later (ConvertKit/Mailchimp/etc.) */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Email address"
          />
          <button className="rounded-xl px-5 py-3 font-semibold border">
            Join the Garden List
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          No spam. Just growth.
        </p>
      </section>
    </main>
  );
}
