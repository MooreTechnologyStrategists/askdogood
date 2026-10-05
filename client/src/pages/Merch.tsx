import {
  Action,
  PageIntro,
  Section,
  Reassurance,
} from "@/components/Experience";
import OriginalMerchCheckout from "@/components/OriginalMerchCheckout";
import { merchProducts, hasValidCheckoutUrl } from "@/data/merch-products";
export default function Merch() {
  const other = merchProducts.filter(p => p.brand === "askdogood");
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="AskDoGood merch"
        title="Wear what moves you."
        text="The original black embroidered hoodie, matching hoodie and jogger set, and cream logo tee. Pieces rooted in peace, culture, and commUNITY."
      >
        <div className="adg-actions">
          <Action href="#original-collection">
            Shop the original collection
          </Action>
        </div>
      </PageIntro>
      <Section id="original-collection" title="Three ways to carry the good.">
        <p>
          Choose your piece and size. Shipping is calculated at secure checkout.
        </p>
        <OriginalMerchCheckout />
      </Section>
      <Section tone title="Before you order.">
        <div className="adg-grid adg-grid-three">
          {[
            [
              "Made to order",
              "Review the size options and address before paying. Your pieces are produced for your order.",
            ],
            [
              "Delivery details",
              "US delivery. The hoodie and joggers may ship separately; review shipping costs at checkout.",
            ],
            [
              "Order help",
              "After payment, use your order reference when contacting askdogood@gmail.com.",
            ],
          ].map(([title, text]) => (
            <article className="adg-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Reassurance />
      </Section>
      <Section
        tone
        eyebrow="In development · design previews"
        title="Common Ground: the DMV, in commUNITY."
      >
        <p className="adg-lead">
          Different roots. One village. We’re exploring a new collection with
          the message up front and a smaller AskDoGood mark on the sleeve, back
          neck, or hem.
        </p>
        <img
          src="/images/merch/common-ground-concepts.webp"
          alt="Three Common Ground apparel concepts: black COMMUNITY hoodie, cream Different roots One village DMV tee, and green You Me UNITY hoodie, with small AskDoGood brand placements"
          className="adg-concept-board"
          loading="lazy"
        />
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <h3>01 · COMMUNITY</h3>
            <p>
              The DMV is our common ground. Connected lettering on a black
              hoodie; a quiet brand mark at the wrist.
            </p>
          </article>
          <article className="adg-card">
            <h3>02 · Different roots. One village.</h3>
            <p>
              A DMV tee with interlocking arches. A neighborhood statement, with
              AskDoGood at the back neck.
            </p>
          </article>
          <article className="adg-card">
            <h3>03 · You. Me. UNITY.</h3>
            <p>
              A forest-green hoodie with a bold back message and a small
              front-hem brand detail.
            </p>
          </article>
        </div>
        <p className="adg-small">
          Concept mockups, not production samples. These designs are not
          available to purchase yet.
        </p>
        <Action href="/contact?topic=Common%20Ground%20collection" secondary>
          Tell us which design you’d wear
        </Action>
      </Section>
      <Section title="More from the collection.">
        <details className="adg-card adg-details">
          <summary>Explore additional pieces and upcoming designs</summary>
          <div className="adg-grid adg-grid-three">
            {other.map(product => {
              const url = hasValidCheckoutUrl(product.stripeLink)
                ? product.stripeLink
                : product.checkoutUrl;
              const available = product.inStock && hasValidCheckoutUrl(url);
              return (
                <article className="adg-card" key={product.id}>
                  <p className="adg-eyebrow">
                    {available ? "Available to order" : "Coming soon"}
                  </p>
                  <h3>{product.name}</h3>
                  <p>
                    {product.description.replace(" for the 7-day sprint", "")}
                  </p>
                  {available ? (
                    <>
                      <p className="adg-price">${product.price.toFixed(2)}</p>
                      <Action href={url!}>View purchase details</Action>
                    </>
                  ) : (
                    <p className="adg-small">
                      Design preview. Purchasing is not open yet.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </details>
      </Section>
    </div>
  );
}
