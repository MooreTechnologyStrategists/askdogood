import { useParams, Link } from "wouter";
import SEO from "@/components/SEO";
import { topics } from "@/content/experience";
import {
  Action,
  PageIntro,
  Section,
  OfferCards,
  Reassurance,
  Reflection,
} from "@/components/Experience";
import { safeBlogPosts } from "@/content/blogData";
export default function SupportTopic() {
  const { topic: id } = useParams<{ topic: string }>();
  const topic = topics.find(item => item.id === id);
  if (!topic)
    return (
      <PageIntro
        eyebrow="Find your path"
        title="Let’s find the right starting point."
        text="Explore the topics available at AskDoGood."
      >
        <Action href="/resources/start">Choose a topic</Action>
      </PageIntro>
    );
  return (
    <div className="adg-page">
      <SEO
        title={`${topic.name} | AskDoGood`}
        description={topic.summary}
        url={`/support/${topic.id}`}
      />
      <PageIntro
        eyebrow={topic.name}
        title={topic.title}
        text={topic.intro}
        image={topic.image}
        alt={topic.alt}
      >
        <div className="adg-actions">
          <Action href="#start">Start with a free resource</Action>
          <Action
            href={
              topic.id === "career"
                ? "/contact?topic=Career%20and%20purpose"
                : "#support"
            }
            secondary
          >
            {topic.id === "career"
              ? "Ask about support"
              : "Explore more support"}
          </Action>
        </div>
      </PageIntro>
      <Section eyebrow="You are not alone in this" title="What rebuilding can look like.">
        <div style={{ maxWidth: "48rem" }}>{topic.details.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <h3>Three steps you can take.</h3>
        <ol>{topic.steps.map(step => <li key={step} style={{ marginBottom: "1rem" }}>{step}</li>)}</ol>
        <div className="adg-actions"><Action href="/next-step-checklist.html">Use the free next-step checklist</Action><Action href="/resources/start#right-now" secondary>Find practical resource starting points</Action></div>
      </Section>
      <Section
        id="start"
        eyebrow="Something useful right now"
        title="Start here."
      >
        <div className="adg-grid adg-grid-three">
          {topic.resources.map(resource => (
            <article key={resource.title} className="adg-card">
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <Action secondary href={resource.href}>
                {resource.href.startsWith("https:")
                  ? "Visit resource"
                  : "Explore"}
              </Action>
            </article>
          ))}
        </div>
        <p className="adg-note">{topic.note}</p>
      </Section>
      {topic.id === "relationships" && (
        <Section tone title="You can start by putting it into words.">
          <Reflection />
        </Section>
      )}
      {topic.id === "career" && (
        <Section tone title="Your next-chapter checklist.">
          <div className="adg-grid adg-grid-three">
            {[
              [
                "Name the goal",
                "Write down the work, learning, or life change you want to make.",
              ],
              [
                "Find the gap",
                "Identify one skill, one conversation, or one routine that would help.",
              ],
              [
                "Choose a small action",
                "Make it specific enough to do this week.",
              ],
            ].map(([title, text]) => (
              <div className="adg-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="adg-actions">
            <Action href="/contact?topic=Career%20and%20purpose">
              Discuss my next chapter
            </Action>
          </div>
        </Section>
      )}
      {topic.reads.length > 0 && (
        <Section tone title="Keep exploring.">
          <div className="adg-grid adg-grid-three">
            {topic.reads.map(slug => {
              const post = safeBlogPosts.find(p => p.id === slug);
              return (
                post && (
                  <Link key={slug} href={`/blog/${slug}`} className="adg-card">
                    <p className="adg-eyebrow">From the reading room</p>
                    <h3>{post.title}</h3>
                    <span className="adg-text-link">Read the article</span>
                  </Link>
                )
              );
            })}
          </div>
        </Section>
      )}
      <Section
        id="support"
        eyebrow={
          topic.id === "relationships"
            ? "Ongoing wellness support"
            : "A little more structure"
        }
        title={
          topic.id === "career"
            ? "Build the routines around your next chapter."
            : "Choose support when you’re ready."
        }
      >
        <p>
          {topic.id === "relationships"
            ? "AskDoGood Wellness Membership offers ongoing wellness resources. For a personal conversation, ask us about availability and scope first."
            : topic.id === "career"
              ? "The reset guide supports everyday habits and reflection. It is a wellness resource, not a career course."
              : "Read what’s included and how the offer works before purchasing."}
        </p>
        <OfferCards ids={[topic.offer]} />
        <Reassurance />
        <div className="adg-actions">
          <Action href="/resources/start" secondary>
            Explore another topic
          </Action>
        </div>
      </Section>
    </div>
  );
}
