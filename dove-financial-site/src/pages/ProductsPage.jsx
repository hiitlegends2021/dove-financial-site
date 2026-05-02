import { Link } from "react-router-dom";

// ✅ centralized links
const productLinks = {
  planwise: "https://planwise.dovefinancialinnovations.com",
  safetynet: "https://safetynet.dovefinancialinnovations.com",
  flipandgrow: "https://flipandgrow.dovefinancialinnovations.com",
  paycheck: "https://payhip.com/dovehub",
  hub: "https://payhip.com/dovehub",
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <p className="section-label">Products</p>
          <h1>Tools and resources built to help you move with clarity.</h1>
          <p className="products-intro">
            Explore Dove Financial tools, planners, and digital resources
            designed to support better financial decisions, stronger structure,
            and more intentional progress.
          </p>

          <div className="hero-buttons">
            <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit Dove Hub
            </a>

            <a href={productLinks.planwise} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Explore PlanWise
            </a>
          </div>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container products-grid">

          {/* PLANWISE */}
          <article className="product-card premium-card">
            <p className="section-label">Featured Tool</p>
            <h2>PlanWise</h2>
            <p className="product-lead">
              A practical budgeting and financial planning tool built to help
              users track income, expenses, savings goals, and real financial
              progress in one place.
            </p>

            <div className="product-actions">
              <a href={productLinks.planwise} target="_blank" rel="noreferrer" className="btn btn-primary">
                Explore PlanWise
              </a>
            </div>
          </article>

          {/* DONE ENVELOPE */}
          <article className="product-card premium-card">
            <p className="section-label">Budget System</p>
            <h2>DoneEnvelope</h2>

            <div className="product-actions">
              <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
                View in Dove Hub
              </a>
            </div>
          </article>

          {/* DOVECALC */}
          <article className="product-card premium-card">
            <p className="section-label">Digital Tool</p>
            <h2>DoveCalc</h2>

            <div className="product-actions">
              <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </article>

          {/* COURSES */}
          <article className="product-card premium-card">
            <p className="section-label">Learning Resource</p>
            <h2>Courses & Guides</h2>

            <div className="product-actions">
              <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
                Browse Resources
              </a>
            </div>
          </article>

        </div>
      </section>

      <section className="products-feature-strip">
        <div className="container feature-card">
          <div className="feature-copy">
            <p className="section-label">Why These Tools Matter</p>
            <h2>Built for progress, not just information</h2>
          </div>

          <div className="feature-actions">
            <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
              Shop Dove Hub
            </a>
          </div>
        </div>
      </section>

      <section className="products-final-cta">
        <div className="container final-cta-box">
          <h2>Ready to explore the Dove Financial ecosystem?</h2>

          <div className="hero-buttons final-buttons">
            <a href={productLinks.hub} target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit Dove Hub
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