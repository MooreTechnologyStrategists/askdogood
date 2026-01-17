import { Link } from "wouter";

import spring from "@/assets/images/garden/spring.webp";
import summer from "@/assets/images/garden/summer.webp";
import fall from "@/assets/images/garden/fall.webp";
import winter from "@/assets/images/garden/winter.webp";

const seasons = [
  { title: "Spring", image: spring, path: "/garden/spring" },
  { title: "Summer", image: summer, path: "/garden/summer" },
  { title: "Fall", image: fall, path: "/garden/fall" },
  { title: "Winter", image: winter, path: "/garden/winter" },
];

export default function Garden() {
  return (
    <main className="container py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Seasons of Growth</h1>
        <p className="text-muted-foreground max-w-2xl">
          Finding joy, wisdom, and meaning through every season of life.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((s) => (
          <Link key={s.title} href={s.path}>
            <a className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={s.image}
                alt={`AskDoGood garden ${s.title}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xl font-semibold">{s.title}</div>
                <div className="text-white/80 text-sm">Read the blog →</div>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </main>
  );
}
