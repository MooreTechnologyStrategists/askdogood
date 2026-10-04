import { Link } from "wouter";
import { useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { catalogById } from "@/data/catalog";
import { coreOfferIds, coreOfferLabels, topics } from "@/content/experience";
export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const props = {
    className: `adg-button${secondary ? " adg-button-secondary" : ""}`,
    onClick: () => trackEvent("offering_path_click", { destination: href }),
  };
  return /^(https:|mailto:|tel:|#)/.test(href) ||
    /\.(html|pdf)([?#]|$)/.test(href) ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
  children,
  image,
  alt = "",
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="adg-intro">
      <div className={`container ${image ? "adg-split" : ""}`}>
        <div>
          <p className="adg-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="adg-lead">{text}</p>
          {children}
        </div>
        {image && (
          <img
            className="adg-photo"
            src={image}
            alt={alt}
            fetchPriority="high"
          />
        )}
      </div>
    </section>
  );
}
export function Section({
  title,
  eyebrow,
  children,
  tone = false,
  id,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  tone?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`adg-section${tone ? " adg-tinted" : ""}`}>
      <div className="container">
        {eyebrow && <p className="adg-eyebrow">{eyebrow}</p>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
export function TopicCards() {
  return (
    <div className="adg-grid adg-grid-four">
      {topics.map(topic => (
        <Link
          href={`/support/${topic.id}`}
          key={topic.id}
          className="adg-card adg-topic-card"
          onClick={() => trackEvent("topic_selected", { topic: topic.id })}
        >
          <p className="adg-eyebrow">{topic.name}</p>
          <h3>{topic.question}</h3>
          <p>{topic.summary}</p>
          <span className="adg-text-link">
            Explore {topic.name.toLowerCase()}
          </span>
        </Link>
      ))}
    </div>
  );
}
export function OfferCards({
  ids = coreOfferIds,
}: {
  ids?: readonly string[];
}) {
  return (
    <div className="adg-grid adg-grid-three">
      {ids.map(id => {
        const offer = catalogById[id];
        const info = coreOfferLabels[id];
        return (
          offer && (
            <article key={id} className="adg-card adg-offer-card">
              <p className="adg-eyebrow">
                {info?.format || "Digital resource"}
              </p>
              <h3>{offer.name}</h3>
              <p>{info?.forWho || offer.shortSummary}</p>
              <p className="adg-price">
                {offer.priceLabel}
                {offer.kind === "membership" && <span> / month</span>}
              </p>
              <Action href={`/product/${offer.slug}`}>
                {info?.action || "See what’s included"}
              </Action>
              <p className="adg-small">Read the details before you buy.</p>
            </article>
          )
        );
      })}
    </div>
  );
}
export function HowItWorks() {
  return (
    <div className="adg-grid adg-grid-three">
      {[
        [
          "01",
          "Choose what you need",
          "Explore a topic or choose a guide, a plan, membership, or merch.",
        ],
        [
          "02",
          "Know what you’re getting",
          "Read what’s included, who it’s for, the price, and how it’s delivered.",
        ],
        [
          "03",
          "Take your next step",
          "Use secure checkout for a ready offer, or ask us about a service before booking.",
        ],
      ].map(([number, title, text]) => (
        <div key={number} className="adg-card">
          <span className="adg-step">{number}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function Reassurance() {
  return (
    <div className="adg-reassurance">
      <div>
        <h3>Clear choices. Real support.</h3>
        <p>
          Prices and formats are shown before purchase. Guides, personalized
          services, memberships, and made-to-order apparel each have their own
          delivery steps.
        </p>
      </div>
      <div>
        <p>Questions about an offer or an order?</p>
        <a className="adg-text-link" href="mailto:askdogood@gmail.com">
          askdogood@gmail.com
        </a>
        <p className="adg-small">
          Wellness education and reflection support; medical care and therapy
          are provided by qualified professionals.
        </p>
      </div>
    </div>
  );
}
export function Reflection() {
  const [note, setNote] = useState("");
  const [prompt, setPrompt] = useState("What is weighing on you today?");
  return (
    <div className="adg-card">
      <p className="adg-eyebrow">A moment for you</p>
      <h3>Get it off your chest.</h3>
      <p>
        This is a personal writing space. No one reads or responds to what you
        type here. It stays in this page’s memory and disappears when you leave
        or reload.
      </p>
      <div className="adg-actions">
        {[
          "What is weighing on you today?",
          "What do you need someone to understand?",
          "What is one small next step?",
        ].map(text => (
          <button
            key={text}
            className="adg-prompt"
            onClick={() => setPrompt(text)}
            aria-pressed={prompt === text}
          >
            {text}
          </button>
        ))}
      </div>
      <label className="adg-label" htmlFor="reflection">
        {prompt}
      </label>
      <textarea
        id="reflection"
        value={note}
        onChange={e => setNote(e.target.value)}
        rows={6}
        className="adg-input"
        placeholder="Write for yourself, in your own words…"
      />
      <button
        onClick={() => setNote("")}
        className="adg-button adg-button-secondary mt-4"
      >
        Clear my writing
      </button>
      <p className="adg-small">
        Want a person to hear from you? Use Contact to draft an email you can
        review and send.
      </p>
      <Action href="/contact?topic=Conversation%20support" secondary>
        Ask about conversation support
      </Action>
    </div>
  );
}
