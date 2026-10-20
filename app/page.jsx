import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PhotoHero from "../components/PhotoHero";
import { DemoForm } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Ritik Hair Salon | Good hair. Good feeling.",
  description:
    "A fictional salon concept with real styling photography, cuts, colour, and a simple inquiry experience.",
};
export default function Page() {
  return (
    <div className="image-led-page salon-photos">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PhotoHero
          image="salon-cut.jpg"
          alt="A hairstylist preparing a client for a cut in a warmly lit salon"
          kicker="Ritik Hair Salon · The studio"
          title="Good hair. Good feeling."
        >
          <div className="photo-actions">
            <Link className="photo-button" href="/studio#contact">
              Find your next look ↗
            </Link>
            <a className="photo-button outline" href="#looks">
              Explore the studio
            </a>
          </div>
        </PhotoHero>
        <div className="photo-ribbon">
          <span>Cut.</span>
          <span>Colour.</span>
          <span>Finish.</span>
          <span>A little reinvention.</span>
        </div>
        <section className="photo-section" id="looks">
          <div className="photo-section-head">
            <div>
              <span className="photo-kicker">In the chair</span>
              <h2>Made for you.</h2>
            </div>
            <Link href="/studio#services">Our services ↗</Link>
          </div>
          <div className="photo-duo">
            <Link className="photo-card" href="/studio#services">
              <img
                src={asset("assets/photos/salon-portrait.jpg")}
                alt="A stylist shaping a client's softly waved hair"
                width="2000"
                height="3000"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Shape &amp; movement.</strong>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
            <Link className="photo-card" href="/studio#services">
              <img
                src={asset("assets/photos/salon-curls.jpg")}
                alt="A smiling client having her curly hair styled"
                width="2000"
                height="1333"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Texture &amp; personality.</strong>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>
        </section>
        <section className="photo-callout">
          <h2>Your next good hair day.</h2>
          <Link className="photo-button" href="/studio#contact">
            Let’s talk hair ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
