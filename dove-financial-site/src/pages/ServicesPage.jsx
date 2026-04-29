import { Link } from "react-router-dom";
import { track } from "@vercel/analytics";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <p className="section-label">Services</p>
          <h1>Support built for clarity, structure, and forward movement.</h1>
          <p className="services-intro">
            Dove Financial provides practical support for individuals,
            families, entrepreneurs, and early-stage business owners who need
            stronger financial direction and better structure.
          </p>

          <div className="hero-buttons">
            <a
              href="https://form.jotform.com/261102442442039"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book a Clarity Session
            </a>

            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container services-grid">
          <article className="service-card premium-card">
            <p className="section-label">Service 01</p>
            <h2>Financial Clarity Consultations</h2>
            <p className="service-lead">
              Get a clearer understanding of where you stand, what needs
              attention, and what steps make the most sense next.
            </p>

            <ul className="service-points">
              <li>Budget and cash flow review</li>
              <li>Financial organization and next-step guidance</li>
              <li>Support for everyday money decisions</li>
              <li>Practical insight without unnecessary complexity</li>
            </ul>

            <div className="service-actions">
              <a
                href="https://form.jotform.com/261102442442039"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Book Now
              </a>
            </div>
          </article>

          <article className="service-card premium-card">
            <p className="section-label">Service 02</p>
            <h2>Business Formation Support</h2>
            <p className="service-lead">
              Build your business on stronger ground with support that goes
              beyond filing and helps you think about structure from the start.
            </p>

            <ul className="service-points">
              <li>Guidance for new and early-stage business owners</li>
              <li>Support around business setup and structure</li>
              <li>Help organizing the next steps after formation</li>
              <li>Built for founders who want clarity, not confusion</li>
            </ul>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">
                Ask About This Service
              </Link>
            </div>
          </article>

          <article className="service-card premium-card">
            <p className="section-label">Service 03</p>
            <h2>Budgeting &amp; Money Management Tools</h2>
            <p className="service-lead">
              Use practical digital tools designed to help you track, organize,
              and act on your financial information more intentionally.
            </p>

            <ul className="service-points">
              <li>Tools designed for real-life budgeting needs</li>
              <li>Simple tracking for income, expenses, and goals</li>
              <li>Built to support better financial decisions</li>
              <li>Great for individuals and growing businesses</li>
            </ul>

            <div className="service-actions">
              <a
                href="https://payhip.com/dovehub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Explore Products
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="services-why">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Why Clients Choose Dove Financial</p>
            <h2>Clear support that helps people move forward</h2>
            <p>
              Our work is built around practical guidance, stronger financial
              foundations, and helping people take the next right step with
              confidence.
            </p>
          </div>

          <div className="card-grid">
            <article className="info-card">
              <h3>Practical over complicated</h3>
              <p>
                We focus on guidance that makes sense in real life, not jargon
                that leaves people more confused.
              </p>
            </article>

            <article className="info-card">
              <h3>Built for real people and real businesses</h3>
              <p>
                Our services are designed for everyday finances, side hustlers,
                families, and founders building from the ground up.
              </p>
            </article>

            <article className="info-card">
              <h3>Support with structure</h3>
              <p>
                We help connect the dots so your financial decisions, business
                setup, and tools all work together better.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="services-final-cta">
        <div className="container final-cta-box">
          <p className="section-label">Get Started</p>
          <h2>Ready for stronger financial direction?</h2>
          <p>
            Whether you need clarity around your money, support for your
            business setup, or tools that help you stay organized, Dove
            Financial is here to help.
          </p>

          <div className="hero-buttons final-buttons">
            <a
              href="https://form.jotform.com/261102442442039"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book a Clarity Session
            </a>

            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}