import { Action, Section } from "@/components/Experience";

const hoodies = [
  { name: "Outta Pocket", color: "Heather gray", image: "dmv-outta-pocket" },
  { name: "Nah Moe", color: "Royal blue", image: "dmv-nah-moe" },
  { name: "Whole Time, You Lunchin’ Slim", color: "Sand", image: "dmv-lunchin-slim" },
  { name: "PG Circle", color: "Chocolate brown", image: "dmv-pg-circle" },
];

export default function DMVStreetwearDrop({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="dmv-drop" eyebrow="AskDoGood streetwear" title="The DMV hoodie collection">
      {compact ? (
        <>
          <img src="/images/merch/dmv-four.webp" width={1199} height={1312}
            className="mx-auto block h-auto w-full max-w-2xl rounded-xl"
            alt="The four AskDoGood DMV hoodies in heather gray, royal blue, sand, and chocolate brown." />
          <Action href="/merch#dmv-drop">Explore the four hoodies</Action>
        </>
      ) : (
        <>
          <p className="mb-5">Preview the DMV designs. Orders open once the printed hoodies are available.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {hoodies.map(hoodie => (
              <article key={hoodie.image} className="adg-card">
                <img src={`/images/merch/${hoodie.image}.webp`} loading="lazy"
                  className="aspect-square w-full rounded-xl bg-stone-100 object-contain"
                  alt={`${hoodie.name} hoodie in ${hoodie.color.toLowerCase()} with the AskDoGood chest logo`} />
                <h3 className="mt-4">{hoodie.name}</h3>
                <p>{hoodie.color}</p>
                {hoodie.image === "dmv-outta-pocket" && (
                  <details className="mt-3">
                    <summary>View the DC flag back</summary>
                    <img src="/images/merch/dmv-flag.webp" loading="lazy" className="mt-3 h-auto w-full rounded-xl"
                      alt="Outta Pocket front and back, with three red stars and two red bars printed directly on the gray hoodie." />
                  </details>
                )}
              </article>
            ))}
          </div>
          <details className="mt-6">
            <summary>Also in development · I Still Make Plans</summary>
            <img src="/images/merch/dmv-plans.webp" loading="lazy" className="mt-3 h-auto w-full max-w-2xl rounded-xl"
              alt="Powder-blue I Still Make Plans hoodie with navy lettering, shown front and back." />
          </details>
          <Action href="#original-collection">Shop available AskDoGood apparel</Action>
        </>
      )}
    </Section>
  );
}
