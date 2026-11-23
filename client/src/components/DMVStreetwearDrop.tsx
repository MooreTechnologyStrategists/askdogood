import { Action, Section } from "@/components/Experience";

type ApprovedDesign = {
  id: string;
  name: string;
  image: string;
  color: string;
  detail: string;
  backImage?: string;
};

const approvedDesigns: ApprovedDesign[] = [
  {
    id: "outta-pocket",
    name: "Outta Pocket Hoodie",
    image: "/images/merch/dmv-outta-pocket.jpg",
    backImage: "/images/merch/dmv-outta-front-back.jpg",
    color: "Vintage gray",
    detail: "Bold black-and-red lettering and the DC three-star flag on the back.",
  },
  {
    id: "nah-moe",
    name: "Nah Moe Hoodie",
    image: "/images/merch/dmv-nah-moe.jpg",
    color: "Royal blue",
    detail: "The original royal-blue hoodie with oversized cream lettering.",
  },
  {
    id: "lunchin-slim",
    name: "Whole Time, You Lunchin' Slim Hoodie",
    image: "/images/merch/dmv-lunchin-slim.jpg",
    color: "Sand / tan",
    detail: "Original tan hoodie with espresso and terracotta statement typography.",
  },
  {
    id: "pg-pride",
    name: "PG Circle Hoodie",
    image: "/images/merch/dmv-pg-circle.jpg",
    color: "Chocolate brown",
    detail: "The original large PG circle with Maryland-inspired design details.",
  },
  {
    id: "blue-logo",
    name: "I Still Make Plans Hoodie",
    image: "/images/merch/dmv-i-still-make-plans.jpg",
    color: "Powder blue / navy",
    detail: "Original front-and-back design with a dark navy AskDoGood mark.",
  },
];

export default function DMVStreetwearDrop() {
  return (
    <Section id="dmv-drop" eyebrow="AskDoGood • DMV collection" title="The real DMV drop. No substitutes.">
      <p className="adg-lead">
        These are the original hoodie designs from our collection: Outta Pocket,
        Nah Moe, Whole Time You Lunchin' Slim, PG, and I Still Make Plans.
        Colors, artwork, typography, and brand placements are shown as previously designed.
      </p>
      <p className="my-5 rounded-xl border border-[#173c32]/20 bg-[#f5f1e7] p-4 text-[#173c32]">
        <strong>Original concept artwork • Orders not open yet.</strong> We are
        preparing final print files, size options, supplier proofs, prices, and
        checkout. These images are design mockups, not photographed production samples.
      </p>
      <div className="adg-grid adg-grid-three mt-7">
        {approvedDesigns.map(design => (
          <article className="adg-card overflow-hidden" key={design.id}>
            <div className="overflow-hidden rounded-xl bg-[#eee9e2]">
              <img
                src={design.image}
                alt={design.name + " — the original approved merchandise mockup"}
                className="aspect-[600/656] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="adg-eyebrow mt-4">Original hoodie mockup · {design.color}</p>
            <h3>{design.name}</h3>
            <p>{design.detail}</p>
            {design.backImage && (
              <details className="mt-4 rounded-xl border p-3">
                <summary className="cursor-pointer font-semibold">See the DC flag on the back</summary>
                <img
                  src={design.backImage}
                  alt="Original Outta Pocket hoodie front and back, with the Washington DC flag on the back"
                  loading="lazy"
                  className="mt-3 w-full rounded-lg"
                />
              </details>
            )}
            <p className="adg-small mt-4">Preview only · not available to purchase yet</p>
            <Action
              href={"/contact?topic=" + encodeURIComponent("DMV merch: " + design.name)}
              secondary
            >
              Ask about this hoodie
            </Action>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border bg-white p-6">
        <h3>Matching headwear is the next drop.</h3>
        <p>
          Outta Pocket knit skull cap, Nah Moe baseball cap, Lunchin' Slim
          head wrap, and PG circle cap are part of the planned collection.
          Their original approved artwork must be added before product photos
          appear here. No invented headwear images will be used.
        </p>
      </div>
    </Section>
  );
}
