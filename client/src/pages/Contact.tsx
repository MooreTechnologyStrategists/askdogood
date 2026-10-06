import { trackEvent } from "@/lib/analytics";
import { useState, type FormEvent } from "react";
import { Action, PageIntro, Section } from "@/components/Experience";
export default function Contact() {
  const [topic, setTopic] = useState(
    () =>
      new URLSearchParams(window.location.search).get("topic") ||
      "General question"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  function draft(e: FormEvent) {
    e.preventDefault();
    trackEvent("contact_draft_open", { page: window.location.pathname });
    const body = `Name: ${name}\nReply email: ${email}\nTopic: ${topic}\n\n${message}`;
    window.location.href = `mailto:askdogood@gmail.com?subject=${encodeURIComponent("AskDoGood: " + topic)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app should open with a draft. Review it and press Send there. Your message has not been sent by this website."
    );
  }
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Contact AskDoGood"
        title="Let’s find your next step."
        text="Ask about an offer, request order help, explore a workshop, or tell us what kind of support you need."
      />
      <Section>
        <div className="adg-split">
          <div>
            <h2>Reach a real person.</h2>
            <p>
              Use the form to prepare an email you can review and send, or email
              us directly.
            </p>
            <Action href="mailto:askdogood@gmail.com">
              Email askdogood@gmail.com
            </Action>
            <h3>Before booking a service</h3>
            <p>
              We’ll confirm the fit, availability, format, price, and what’s
              included. An inquiry is not a booking.
            </p>
            <h3>For order help</h3>
            <p>
              Include the offer name and your order reference. Please leave out
              payment-card details and sensitive medical records.
            </p>
            <p className="adg-note">
              AskDoGood offers education and practical support. This inbox is
              not a medical or crisis service.
            </p>
          </div>
          <form className="adg-card" onSubmit={draft}>
            <h2>Prepare your message</h2>
            <label className="adg-label" htmlFor="contact-topic">
              What can we help with?
            </label>
            <select
              id="contact-topic"
              className="adg-input"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            >
              {Array.from(
                new Set([
                  topic,
                  "General question",
                  "Product question",
                  "Order help",
                  "Wellness plan",
                  "Conversation support",
                  "Career and purpose",
                  "Community workshop",
                  "Partnership",
                ])
              ).map(value => (
                <option key={value}>{value}</option>
              ))}
            </select>
            <label className="adg-label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className="adg-input"
              autoComplete="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              maxLength={100}
            />
            <label className="adg-label" htmlFor="contact-email">
              Reply email
            </label>
            <input
              id="contact-email"
              className="adg-input"
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label className="adg-label" htmlFor="contact-message">
              Your message
            </label>
            <textarea
              id="contact-message"
              className="adg-input"
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              maxLength={5000}
            />
            <p className="adg-small">
              This opens your email app. You choose whether to send.
            </p>
            <button className="adg-button" type="submit">
              Open my email draft
            </button>
            <p role="status">{status}</p>
          </form>
        </div>
      </Section>
    </div>
  );
}
