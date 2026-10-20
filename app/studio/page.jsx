import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PhotoHero from "../../components/PhotoHero";
import { DemoForm } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "The Studio | Ritik Hair Salon",
  description: "Cuts, colour, finish, and a simple demo inquiry.",
};
export default function Studio() {
  return (
    <div className="image-led-page salon-photos">
      <SiteHeader />
      <main>
        <PhotoHero
          inner
          image="salon-curls.jpg"
          alt="A client enjoying a hairstyling appointment"
          kicker="The Ritik studio"
          title="A little more you."
        >
          <div className="photo-actions">
            <a className="photo-button" href="#contact">
              Let’s talk hair ↗
            </a>
          </div>
        </PhotoHero>
        <section className="photo-section" id="story">
          <div className="photo-section-head">
            <div>
              <span className="photo-kicker">A fresh perspective</span>
              <h2>Come as you are.</h2>
            </div>
            <p>
              A calm chair. A thoughtful consultation. A look that feels like
              you.
            </p>
          </div>
          <div className="short-list" id="services">
            <article>
              <h3>Cut</h3>
              <p>Shape, movement, and an easy grow-out.</p>
            </article>
            <article>
              <h3>Colour</h3>
              <p>Soft dimension or a complete reinvention.</p>
            </article>
            <article>
              <h3>Finish</h3>
              <p>Gloss, texture, and the final touch.</p>
            </article>
          </div>
        </section>
        <section className="photo-section" id="contact">
          <div className="photo-form-layout">
            <div>
              <span className="photo-kicker">Your next look</span>
              <h2>Let’s talk hair.</h2>
              <p>Tell us what you have in mind.</p>
              <p>Fictional salon · Demo inquiry only.</p>
            </div>
            <DemoForm>
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Service
                <select name="service">
                  <option>Cut</option>
                  <option>Colour</option>
                  <option>Finish</option>
                  <option>Consultation</option>
                </select>
              </label>
              <label>
                Your idea
                <textarea name="message" rows="3" />
              </label>
              <button type="submit" className="photo-button">
                Try the inquiry ↗
              </button>
            </DemoForm>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
