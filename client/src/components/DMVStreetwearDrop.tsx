import { Action, Section } from "@/components/Experience";

export default function DMVStreetwearDrop({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="dmv-drop" eyebrow="AskDoGood streetwear" title="The DMV hoodie collection">
      <figure className="mx-auto max-w-2xl">
        <img src="/images/merch/dmv-four.webp" width={1199} height={1312}
          className="block h-auto w-full rounded-xl"
          alt="Clockwise from top left: gray Outta Pocket, royal blue Nah Moe, chocolate brown PG Circle, and tan Whole Time, You Lunchin’ Slim. Each hoodie carries the AskDoGood chest logo." />
        <figcaption className="mt-3">Outta Pocket · Nah Moe · Whole Time, You Lunchin’ Slim · PG Circle</figcaption>
      </figure>
      {compact ? (
        <Action href="/merch#dmv-drop">See the front and back designs</Action>
      ) : (
        <div className="adg-grid mt-7">
          <figure className="adg-card">
            <h3>Outta Pocket</h3>
            <img src="/images/merch/dmv-flag.webp" loading="lazy" className="mt-3 h-auto w-full rounded-xl"
              alt="Front and back of the gray Outta Pocket hoodie. Three red stars and two red bars sit directly on the gray back." />
          </figure>
          <figure className="adg-card">
            <h3>I Still Make Plans</h3>
            <img src="/images/merch/dmv-plans.webp" loading="lazy" className="mt-3 h-auto w-full rounded-xl"
              alt="Front and back of the powder-blue I Still Make Plans hoodie with navy lettering and AskDoGood branding." />
          </figure>
        </div>
      )}
      <p className="adg-small mt-4">DMV collection preview. Orders have not opened yet.</p>
    </Section>
  );
}
