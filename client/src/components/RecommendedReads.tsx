// RecommendedReads.tsx
import React, { useState, useEffect } from "react";
import "./RecommendedReads.css";

// This could be replaced with a fetch from an API or CMS in the future
const defaultArticles = [
  {
    title: "How Pushups Can Predict Heart Health",
    description: "Discover why a simple pushup test may reveal more about your heart than a treadmill.",
    link: "https://www.msn.com/en-us/health/medical/what-pushups-say-about-your-heart/ar-BB10Qw8A",
  },
  {
    title: "The Power of Plant-Based Eating",
    description: "Evidence-backed benefits of plant-based diets for energy, longevity, and disease prevention.",
    link: "https://www.health.harvard.edu/blog/plant-based-diets-the-benefits-and-challenges-2018092614760",
  },
  {
    title: "How to Build Lasting Healthy Habits",
    description: "Science-backed strategies to break cycles and create sustainable routines.",
    link: "https://www.nytimes.com/guides/smarterliving/how-to-make-a-habit-stick",
  },
  {
    title: "Reducing Toxins in Everyday Life",
    description: "Practical steps to lower your toxin load and protect your health.",
    link: "https://www.ewg.org/healthyhomeguide/",
  },
  {
    title: "Why Sleep Is Your Superpower",
    description: "The latest research on sleep’s role in healing, metabolism, and mental clarity.",
    link: "https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep",
  },
];

// Rotates articles every 24 hours (or on reload)
function getRotatedArticles(articles, count = 3) {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const start = day % articles.length;
  const rotated = [];
  for (let i = 0; i < count; i++) {
    rotated.push(articles[(start + i) % articles.length]);
  }
  return rotated;
}

export default function RecommendedReads({ count = 3 }) {
  const [articles, setArticles] = useState(() => getRotatedArticles(defaultArticles, count));

  // In the future, fetch articles from an API or CMS here
  useEffect(() => {
    setArticles(getRotatedArticles(defaultArticles, count));
  }, [count]);

  return (
    <section className="recommended-reads">
      <h2>Recommended Reads</h2>
      <div className="reads-grid">
        {articles.map((a) => (
          <a
            key={a.link}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-card"
          >
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="curated-badge">Curated by AskDoGood</span>
          </a>
        ))}
      </div>
    </section>
  );
}
