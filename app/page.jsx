import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Ritik Hair Salon | Futuristic Salon Demo",
  description:
    "Ritik Hair Salon is a fictional salon demo website with a visual-first landing page and a polished second page for services, story, and contact.",
};
export default function Page() {
  return (
    <>
      <div>
        <div className="topbar">
          <span>Demo concept</span>
          <p>Fictional content for presentation only</p>
        </div>
        <SiteHeader />
        <main>
          <section className="hero hero-home">
            <div className="hero-overlay" />
            <div className="container hero-home-grid">
              <div className="hero-copy compact">
                <span className="eyebrow">Visual-first salon concept</span>
                <h1>Good hair. A new perspective.</h1>
                <p className="hero-text short">
                  Cuts, colour, and a little reinvention. Find your next look.
                </p>
                <div className="hero-actions">
                  <Link className="btn btn-primary" href="/studio">
                    View full site
                  </Link>
                  <a className="btn btn-secondary" href="#looks">
                    See looks
                  </a>
                </div>
              </div>
              <div className="hero-collage">
                <article className="hero-panel panel-large">
                  <img
                    src={asset("assets/hero-main.svg")}
                    alt="Abstract futuristic salon portrait"
                  />
                </article>
                <article className="hero-panel panel-small">
                  <img
                    src={asset("assets/look-1.svg")}
                    alt="Abstract salon detail artwork"
                  />
                </article>
                <article className="hero-panel panel-card glow-card">
                  <span>Cut / colour / finish</span>
                  <strong>Your next look starts here.</strong>
                </article>
              </div>
            </div>
          </section>
          <section className="section statement-strip">
            <div className="container strip-wrap">
              <span>Editorial</span>
              <span>Minimal</span>
              <span>Elevated</span>
              <span>Futuristic</span>
              <span>Appointment-led</span>
            </div>
          </section>
          <section className="section section-light" id="looks">
            <div className="container">
              <div className="section-heading split-heading">
                <div>
                  <span className="eyebrow dark">Featured looks</span>
                  <h2>Less copy. More atmosphere.</h2>
                </div>
                <p>
                  The first page is intentionally short so the brand mood hits
                  fast.
                </p>
              </div>
              <div className="looks-grid">
                <article className="look-card tall">
                  <img
                    src={asset("assets/look-2.svg")}
                    alt="Abstract image tile one"
                  />
                </article>
                <article className="look-card">
                  <img
                    src={asset("assets/look-3.svg")}
                    alt="Abstract image tile two"
                  />
                </article>
                <article className="look-card">
                  <img
                    src={asset("assets/look-4.svg")}
                    alt="Abstract image tile three"
                  />
                </article>
                <article className="look-card wide info-card">
                  <span className="eyebrow dark">Concept direction</span>
                  <h3>
                    Built to feel premium before a visitor reads much at all.
                  </h3>
                  <Link className="text-link" href="/studio">
                    Open page two
                  </Link>
                </article>
              </div>
            </div>
          </section>
          <section className="section section-dark feature-banner">
            <div className="container feature-banner-grid">
              <div>
                <span className="eyebrow">Second page</span>
                <h2>All the fuller salon details live on page two.</h2>
              </div>
              <Link className="btn btn-primary" href="/studio">
                Go to studio page
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
