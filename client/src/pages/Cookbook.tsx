import { Action, PageIntro, Section } from "@/components/Experience";
export default function Cookbook() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Beats, Plants & Plates · In development"
        title="Good food. Good music. A stronger everyday rhythm."
        text="An original AskDoGood cookbook that brings practical meals, hip-hop culture, and everyday self-care to the same table. Explore two recipe drafts while we prepare the first release."
      >
        <div className="adg-actions">
          <Action href="/downloads/Beats-Plants-and-Plates-Preview.pdf">
            Read the free recipe preview
          </Action>
          <Action href="/contact?topic=Cookbook%20interest" secondary>
            I’m interested in the cookbook
          </Action>
        </div>
      </PageIntro>
      <Section>
        <div className="adg-split">
          <img
            src="/images/merch/beats-plants-plates-cover.webp"
            alt="Beats, Plants & Plates review-edition cookbook cover with a rice, chickpea, and vegetable bowl and a vinyl motif"
            className="adg-book-cover"
          />
          <div>
            <p className="adg-eyebrow">A rhythm you can use</p>
            <h2>Flavor, culture, and a little room to breathe.</h2>
            <p>
              The planned collection includes 12 original recipe concepts:
              overnight oats, a roasted-chickpea bowl, ginger tofu, black-bean
              tacos, a purple smoothie, lentil stew, and more. Most are
              plant-based, with an optional salmon recipe.
            </p>
            <p>
              Artist notes draw on documented interviews and official sources
              about RZA, Erykah Badu, Questlove, Method Man, Masta Killa, and
              GZA. The recipes are our own, with no artist affiliation or
              endorsement.
            </p>
            <h3>Try two tracks.</h3>
            <p>
              The free preview contains The Bassline Bowl and Call & Response,
              with amounts, directions, swaps, and allergen notes.
            </p>
            <Action href="/downloads/Beats-Plants-and-Plates-Preview.pdf">
              Open the preview
            </Action>
          </div>
        </div>
      </Section>
      <Section tone title="Where the book stands.">
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <h3>Written review edition</h3>
            <p>
              The recipe drafts and cultural source notes are assembled. This
              preview shares a small part of the book.
            </p>
          </article>
          <article className="adg-card">
            <h3>Kitchen testing next</h3>
            <p>
              Yields, timings, seasoning, and swaps need cooking trials before a
              commercial release. Cover imagery is a creative illustration.
            </p>
          </article>
          <article className="adg-card">
            <h3>Stay in the loop</h3>
            <p>
              Join the free newsletter below for AskDoGood news, or send a
              cookbook inquiry. Release date and price have not been set;
              purchasing is not open.
            </p>
            <Action href="#stay-connected" secondary>
              Join the newsletter
            </Action>
          </article>
        </div>
      </Section>
    </div>
  );
}
