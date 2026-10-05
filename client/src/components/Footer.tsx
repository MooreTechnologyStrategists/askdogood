import { Link } from "wouter";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import { topics, mission } from "@/content/experience";
export default function Footer() {
  return (
    <>
      <section id="stay-connected" className="adg-newsletter-section">
        <div className="container">
          <BeehiivSubscribe variant="card" source="site_footer" />
        </div>
      </section>
      <footer className="adg-footer">
        <div className="container">
          <div className="adg-grid adg-grid-four">
            <div>
              <Link href="/">
                <img
                  className="adg-logo"
                  src="/images/branding/askdogood-logo.png"
                  alt="AskDoGood official logo"
                  loading="lazy"
                />
              </Link>
              <p>{mission}</p>
              <a href="mailto:askdogood@gmail.com">askdogood@gmail.com</a>
            </div>
            <div>
              <h3>Find your path</h3>
              {topics.map(topic => (
                <Link key={topic.id} href={`/support/${topic.id}`}>
                  {topic.name}
                </Link>
              ))}
            </div>
            <div>
              <h3>Offers & experiences</h3>
              {[
                ["Guides, plans & membership", "/shop"],
                ["Shop merch", "/merch"],
                ["Cookbook preview", "/cookbook"],
                ["Workshops & partnerships", "/work-with-askdogood"],
                ["Member sign in", "/login"],
              ].map(([title, href]) => (
                <Link key={href} href={href}>
                  {title}
                </Link>
              ))}
            </div>
            <div>
              <h3>Get to know us</h3>
              {[
                ["Mission & vision", "/about"],
                ["RoSeé’s story", "/journey"],
                ["Free resources", "/resources/library"],
                ["Articles & stories", "/blog"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <Link key={href} href={href}>
                  {title}
                </Link>
              ))}
              <div className="adg-footer-social">
                <a href="https://instagram.com/the_real_dogood">Instagram</a>
                <a href="https://tiktok.com/@askdogood">TikTok</a>
                <a href="https://youtube.com/@roseecm">YouTube</a>
              </div>
            </div>
          </div>
          <p className="adg-footer-bottom">
            © {new Date().getFullYear()} AskDoGood. Wellness education and
            practical life support. Our resources do not replace medical care,
            therapy, or qualified professional advice.
          </p>
        </div>
      </footer>
    </>
  );
}
