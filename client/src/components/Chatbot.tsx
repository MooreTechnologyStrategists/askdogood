import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { topics } from "@/content/experience";
import { Link } from "wouter";
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  return (
    <div className="adg-assistant">
      <button
        aria-expanded={open}
        aria-controls="askdogood-helper"
        aria-label={open ? "Close AskDoGood guide" : "Open AskDoGood guide"}
        className="adg-helper-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span>Find my next step</span>
      </button>
      {open && (
        <aside id="askdogood-helper" className="adg-helper-panel">
          <p className="adg-eyebrow">AskDoGood guide</p>
          <h2>What brought you here?</h2>
          <p>
            Choose a path to find resources and offers. This guide does not
            provide medical advice or live counseling.
          </p>
          {topics.map(topic => (
            <Link
              key={topic.id}
              href={`/support/${topic.id}`}
              onClick={() => setOpen(false)}
              className="adg-helper-link"
            >
              {topic.name}
            </Link>
          ))}
          <Link
            href="/shop"
            className="adg-helper-link"
            onClick={() => setOpen(false)}
          >
            Offers & prices
          </Link>
          <Link
            href="/contact"
            className="adg-helper-link"
            onClick={() => setOpen(false)}
          >
            Contact a real person
          </Link>
        </aside>
      )}
    </div>
  );
}
