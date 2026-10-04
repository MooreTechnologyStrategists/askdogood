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
