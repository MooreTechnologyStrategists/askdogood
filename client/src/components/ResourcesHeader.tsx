import { Link } from "wouter";
import header from "@/content/resources-header.json";

export default function ResourcesHeader() {
  return (
    <section className="rounded-2xl border p-8 bg-white shadow-sm">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-800 mb-4">
          {header.badge}
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          {header.headline}
        </h1>

        <p className="text-gray-600 mb-6">
          {header.subtext}
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href={header.primaryCTA.link}
            className="bg-green-700 text-white px-5 py-2 rounded-full"
          >
            {header.primaryCTA.text}
          </Link>

          <Link
            href={header.secondaryCTA.link}
            className="border px-5 py-2 rounded-full"
          >
            {header.secondaryCTA.text}
          </Link>
        </div>
      </div>
    </section>
  );
}