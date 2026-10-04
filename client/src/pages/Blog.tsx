import { useMemo, useState } from "react";
import { Link } from "wouter";
import { safeBlogPosts } from "@/content/blogData";
import { articleImage, articleTopic } from "@/data/blogImages";
import { topics } from "@/content/experience";
import { Action, PageIntro, Section } from "@/components/Experience";
export default function Blog() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [limit, setLimit] = useState(12);
  const posts = useMemo(
    () =>
      safeBlogPosts
        .filter(post => {
          const text = `${post.title} ${post.excerpt} ${(post.tags || []).join(" ")}`;
          return (
            (topic === "all" || articleTopic(post.id) === topic) &&
            text.toLowerCase().includes(query.toLowerCase())
          );
        })
        .sort((a, b) => Date.parse(b.date || "") - Date.parse(a.date || "")),
    [query, topic]
  );
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Articles & stories"
        title="Real questions. Room to explore."
        text="Browse health and food, relationships, work, and everyday life. Discover practical ideas alongside RoSeé’s personal stories."
      />
      <Section>
        <div className="adg-filter">
          <label htmlFor="article-search">Find a topic</label>
          <input
            id="article-search"
            className="adg-input"
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setLimit(12);
            }}
          />
          <label htmlFor="article-topic">Browse by area</label>
          <select
            id="article-topic"
            className="adg-input"
            value={topic}
            onChange={e => {
              setTopic(e.target.value);
              setLimit(12);
            }}
          >
            <option value="all">All topics</option>
            {topics.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <p role="status" className="adg-small">
          {posts.length} article{posts.length === 1 ? "" : "s"} found
        </p>
        <div className="adg-grid adg-grid-three">
          {posts.slice(0, limit).map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="adg-card adg-image-card"
            >
              <img
                src={articleImage(post.id)}
                alt="A photograph from the AskDoGood archive"
                loading="lazy"
              />
              <div>
                <p className="adg-eyebrow">
                  {topics.find(item => item.id === articleTopic(post.id))?.name}
                </p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="adg-text-link">Read the article</span>
              </div>
            </Link>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="adg-card">
            <h2>Try another word or topic.</h2>
            <p>You can also browse the free resources.</p>
            <Action href="/resources/library" secondary>
              Explore resources
            </Action>
          </div>
        )}
        {posts.length > limit && (
          <button
            className="adg-button adg-button-secondary mt-8"
            onClick={() => setLimit(limit + 12)}
          >
            Show more articles
          </button>
        )}
      </Section>
      <Section tone title="Want a practical next step?">
        <p>
          Explore guides, personalized wellness planning, and membership. Each
          offer explains what is included before you buy.
        </p>
        <div className="adg-actions">
          <Action href="/shop">See offers & prices</Action>
          <Action href="/resources/start" secondary>
            Find my path
          </Action>
        </div>
      </Section>
    </div>
  );
}
