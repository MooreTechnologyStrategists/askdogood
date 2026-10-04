import { useParams } from "wouter";
import SEO from "@/components/SEO";
import {
  Action,
  PageIntro,
  Section,
  Reassurance,
} from "@/components/Experience";
import { catalogById, catalogItems, type CatalogItem } from "@/data/catalog";
import { productDetailsById } from "@/data/productDetails";
import { coreOfferLabels } from "@/content/experience";
import { trackEvent } from "@/lib/analytics";
export default function ProductDetail() {
  const { slug = "" } = useParams<{ slug: string }>();
  const product =
    catalogById[slug] ||
    catalogItems.find(p => p.slug === slug || p.id === slug);
  if (!product)
    return (
      <PageIntro
        eyebrow="Shop AskDoGood"
        title="Let’s find the right offer."
        text="This item may have moved. Explore the current offers."
      >
        <Action href="/shop">Back to shop</Action>
      </PageIntro>
    );
  const detail = productDetailsById[product.id] || {
    headline: product.name,
    subheadline: product.shortSummary,
    includes: [product.description],
    bestFor: ["People looking for practical wellness education."],
    outcomes: ["A resource you can use at your own pace."],
    deliveryNote: "Review delivery and access details at checkout.",
  };
  const membership = product.kind === "membership";
  const service = product.kind === "service";
  const live =
    product.checkoutState === "live" &&
    /^https:\/\/(buy\.stripe\.com|book\.stripe\.com|askdogood\.gumroad\.com)\//.test(
      product.checkoutUrl || ""
    );
  const label = coreOfferLabels[product.id];
  const steps = service
    ? [
        "Pay securely for your personalized plan.",
        "Follow the next-step instructions to share your goals and routine.",
        "AskDoGood prepares your written plan from the information you provide.",
      ]
    : membership
      ? [
          "Review the $19/month recurring subscription at checkout.",
          "Follow the membership access instructions after purchase.",
          "Use the wellness resources and ongoing guidance as you build your routine.",
        ]
      : [
          "Complete secure checkout using your preferred payment method.",
          "Follow the digital access instructions provided after purchase.",
          "Use the resource at your own pace.",
        ];
  return (
    <div className="adg-page">
      <SEO
        title={`${product.name} | AskDoGood`}
        description={product.shortSummary}
        url={`/product/${product.slug}`}
        type="product"
      />
      <PageIntro
        eyebrow={
          label?.format ||
          (membership
            ? "Monthly membership"
            : service
              ? "Personalized service"
              : "Digital resource")
        }
        title={product.name}
        text={detail.subheadline}
      >
        <div className="adg-actions">
          <Action href="/shop" secondary>
            Back to offers
          </Action>
        </div>
      </PageIntro>
      <Section>
        <div className="adg-split adg-detail-layout">
          <div>
            <h2>What’s included</h2>
            <ul className="adg-list">
              {detail.includes.map(text => (
                <li key={text}>{text}</li>
              ))}
            </ul>
            <h2>Who it’s for</h2>
            <ul className="adg-list">
              {detail.bestFor.map(text => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <aside className="adg-card adg-purchase">
            <p className="adg-eyebrow">
              {membership ? "Recurring membership" : "One-time purchase"}
            </p>
            <p className="adg-price">
              {product.priceLabel}
              {membership && <span> / month</span>}
            </p>
            <p>
              {service
                ? "A personalized written wellness plan, prepared after we receive your information."
                : membership
                  ? "Ongoing wellness guidance, resources, and accountability."
                  : "A digital resource to use at your own pace."}
            </p>
            <p className="adg-small">{detail.deliveryNote}</p>
            {membership && (
              <p className="adg-note">
                This is a recurring subscription billed monthly. Review
                subscription and cancellation terms before paying.
              </p>
            )}
            {live ? (
              <a
                className="adg-button"
                href={product.checkoutUrl}
                onClick={() =>
                  trackEvent("begin_checkout", {
                    product_id: product.id,
                    product_brand: "askdogood",
                    currency: "USD",
                  })
                }
              >
                {membership
                  ? "Join for $19/month"
                  : service
                    ? "Purchase my plan"
                    : "Buy this resource"}
              </a>
            ) : (
              <>
                <p className="adg-note">
                  This offer is not available to purchase yet.
                </p>
                <Action href="/contact?topic=Product%20question" secondary>
                  Ask about this offer
                </Action>
              </>
            )}
            <p className="adg-small">
              Payment is completed on the checkout provider’s secure page. Need
              help? Email askdogood@gmail.com.
            </p>
          </aside>
        </div>
      </Section>
      <Section tone title="What happens after you purchase?">
        <div className="adg-grid adg-grid-three">
          {steps.map((text, i) => (
            <div className="adg-card" key={text}>
              <span className="adg-step">0{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="adg-note">
          {service
            ? "This is wellness education and planning. It does not include medical diagnosis, treatment, or therapy."
            : membership
              ? "Membership supports everyday wellness. It does not include on-demand therapy or medical care."
              : "These resources support learning and daily habits. They do not replace medical care."}
        </p>
        <Reassurance />
      </Section>
      <Section title="Before you choose.">
        <div className="adg-faq">
          <details>
            <summary>Can I ask a question before paying?</summary>
            <p>
              Yes. Email askdogood@gmail.com with the offer name and your
              question. We can clarify scope and delivery before you choose.
            </p>
          </details>
          <details>
            <summary>Where do I find access or order help?</summary>
            <p>
              Keep your payment confirmation and follow the access instructions
              supplied after checkout. If something is missing, email AskDoGood
              with the offer name and order reference. Do not send card details.
            </p>
          </details>
          <details>
            <summary>Does this guarantee a health or life outcome?</summary>
            <p>
              No. Our resources offer practical education and structure. Your
              needs and results vary; medical decisions belong with your
              qualified care team.
            </p>
          </details>
        </div>
        <div className="adg-actions">
          <Action href="/contact?topic=Product%20question" secondary>
            Ask before I buy
          </Action>
        </div>
      </Section>
    </div>
  );
}
