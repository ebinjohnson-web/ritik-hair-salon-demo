import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Ritik Hair Salon | Studio Page",
  description:
    "The second page of the Ritik Hair Salon fictional demo, featuring story, services, experience, and a demo contact form.",
};
export default function Page() {
  return (
    <>
      <div>
        <div className="topbar">
          <span>Page two</span>
          <p>Studio story, service blocks, and contact demo</p>
        </div>
        <SiteHeader />
        <main>
          <section className="hero hero-studio">
            <div className="hero-overlay" />
            <div className="container hero-studio-grid">
              <div className="hero-copy">
                <span className="eyebrow">Fictional salon brand</span>
                <h1>
                  Designed to feel refined, calm, and unmistakably modern.
                </h1>
                <p className="hero-text">
                  This second page carries the fuller story: a fictional studio,
                  service menu, consultation flow, and polished inquiry section.
                </p>
              </div>
              <div className="hero-side-stack">
                <article className="glass-card">
                  <span>Location</span>
                  <strong>North District / Studio 08</strong>
                </article>
                <article className="glass-card">
                  <span>Model</span>
                  <strong>
                    Appointment-first with editorial style direction
                  </strong>
                </article>
              </div>
            </div>
          </section>
          <section className="section section-light" id="story">
            <div className="container split-section">
              <div className="section-copy">
                <span className="eyebrow dark">Studio story</span>
                <h2>A fictional brand with a confident point of view.</h2>
                <p>
                  Ritik Hair Salon is positioned as a boutique salon concept
                  where precision cutting, dimensional colour, and a calm luxury
                  atmosphere come together.
                </p>
                <p>
                  The content here is fully fictitious, but structured to feel
                  like a real premium salon website that could later be adapted
                  with real photos, real services, and a live booking setup.
                </p>
                <div className="feature-list">
                  <div>
                    <strong>Appointment-led</strong>
                    <span>Clear next steps and fewer distractions.</span>
                  </div>
                  <div>
                    <strong>Editorial presentation</strong>
                    <span>High-contrast type and image-focused layout.</span>
                  </div>
                  <div>
                    <strong>Clean service clarity</strong>
                    <span>Short blocks that are easy to scan on mobile.</span>
                  </div>
                </div>
              </div>
              <div className="about-visual simple-visual">
                <div className="about-card about-card-main">
                  <img
                    src={asset("assets/studio-space.svg")}
                    alt="Abstract studio environment artwork"
                  />
                  <div className="image-badge">Studio mood</div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-dark" id="services">
            <div className="container">
              <div className="section-heading center">
                <span className="eyebrow">Services</span>
                <h2>Short, polished, and easy to browse.</h2>
                <p>
                  Simple cards work well for a salon because visitors want fast
                  clarity.
                </p>
              </div>
              <div className="services-grid">
                <article className="service-card">
                  <h3>Precision Cut</h3>
                  <p>
                    Structure-focused cuts shaped for movement and clean
                    grow-out.
                  </p>
                </article>
                <article className="service-card">
                  <h3>Signature Colour</h3>
                  <p>
                    Dimensional colour work designed around tone, texture, and
                    light.
                  </p>
                </article>
                <article className="service-card">
                  <h3>Gloss + Finish</h3>
                  <p>
                    Polish, tone, and shine enhancement for a fresh editorial
                    finish.
                  </p>
                </article>
                <article className="service-card">
                  <h3>Styling Session</h3>
                  <p>
                    Event-ready styling with a softer luxury, camera-friendly
                    look.
                  </p>
                </article>
                <article className="service-card">
                  <h3>Texture Refresh</h3>
                  <p>
                    Shape balancing and light refinement between full
                    appointments.
                  </p>
                </article>
                <article className="service-card">
                  <h3>Consultation</h3>
                  <p>
                    Dedicated planning session for major changes and future
                    appointment mapping.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="section section-cream" id="process">
            <div className="container split-section reverse">
              <div className="experience-visual">
                <div className="experience-panel">
                  <img
                    src={asset("assets/detail-panel.svg")}
                    alt="Abstract detail panel artwork"
                  />
                </div>
              </div>
              <div className="section-copy">
                <span className="eyebrow dark">Process</span>
                <h2>
                  A better salon website also makes the process feel better.
                </h2>
                <p>
                  The goal is not only to show beautiful work, but to reduce
                  friction: who the studio is for, what it offers, and how to
                  make the first move.
                </p>
                <div className="steps-grid">
                  <article className="step-card">
                    <span>01</span>
                    <h3>Discover</h3>
                    <p>
                      Visitors get the brand instantly through strong visuals
                      and restrained copy.
                    </p>
                  </article>
                  <article className="step-card">
                    <span>02</span>
                    <h3>Select</h3>
                    <p>
                      Service blocks keep the decision path simple and
                      professional.
                    </p>
                  </article>
                  <article className="step-card">
                    <span>03</span>
                    <h3>Inquire</h3>
                    <p>
                      A clear contact area turns curiosity into a booking
                      conversation.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-light">
            <div className="container">
              <div className="section-heading split-heading">
                <div>
                  <span className="eyebrow dark">Studio notes</span>
                  <h2>Fictional details that make the page feel complete.</h2>
                </div>
              </div>
              <div className="benefits-grid">
                <article className="benefit-card">
                  <h3>Lead stylist</h3>
                  <p>
                    Mara Vale — known in this concept for precise shape work and
                    tonal blonding.
                  </p>
                </article>
                <article className="benefit-card">
                  <h3>Atmosphere</h3>
                  <p>
                    Muted lighting, brushed steel accents, warm stone, and a
                    quiet soundtrack.
                  </p>
                </article>
                <article className="benefit-card">
                  <h3>Booking model</h3>
                  <p>
                    Appointment-first, with new guest consultations encouraged
                    for colour services.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="section section-contact" id="contact">
            <div className="container contact-grid">
              <div className="contact-copy">
                <span className="eyebrow dark">Contact</span>
                <h2>Built to guide the next step clearly.</h2>
                <p>
                  Everything below is sample content, but it shows how a real
                  salon inquiry section could be laid out.
                </p>
                <div className="contact-list">
                  <div>
                    <strong>Phone</strong>
                    <span>(555) 014-2808</span>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>hello@ritikhairsalon.demo</span>
                  </div>
                  <div>
                    <strong>Address</strong>
                    <span>118 Meridian Lane, Studio 08, North District</span>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <span>Tue–Sat | By appointment only</span>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <DemoForm id="demoForm" className="demo-form">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </label>
                  <label>
                    Service interest
                    <select name="service" required>
                      <option value>Choose one</option>
                      <option>Precision Cut</option>
                      <option>Signature Colour</option>
                      <option>Gloss + Finish</option>
                      <option>Consultation</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us what kind of appointment you are thinking about"
                      defaultValue={""}
                    />
                  </label>
                  <button type="submit" className="btn btn-primary full-width">
                    Send Demo Inquiry
                  </button>
                  <p className="form-note">
                    Demo form only. This can later be connected to email or a
                    booking app.
                  </p>
                </DemoForm>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
