import { Link } from "wouter";
import { siteCopy } from "@/content/siteCopy";

export default function ResourcesHeader() {
  return (
    <section className="rounded-2xl border p-8 bg-white shadow-sm">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-800 mb-4">
          AskDoGood Resources
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          {siteCopy.resources.headline}
        </h1>

        <div className="space-y-4 text-gray-600 mb-6">
          {siteCopy.resources.content.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/resources/start"
            className="bg-green-700 text-white px-5 py-2 rounded-full"
          >
            Start Here
          </Link>

          <Link
            href="/resources/library"
            className="border px-5 py-2 rounded-full"
          >
            Browse All
          </Link>
        </div>

        <p className="mt-6 text-sm font-medium text-primary/80">{siteCopy.cta}</p>
      </div>
    </section>
  );
}