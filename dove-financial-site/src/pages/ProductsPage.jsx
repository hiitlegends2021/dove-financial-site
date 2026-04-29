import { Link } from "react-router-dom";

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
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Dove Hub
            </a>

            <a
              href="https://planwise-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Explore PlanWise
            </a>
          </div>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container products-grid">
          <article className="product-card premium-card">
            <p className="section-label">Featured Tool</p>
            <h2>PlanWise</h2>
            <p className="product-lead">
              A practical budgeting and financial planning tool built to help
              users track income, expenses, savings goals, and real financial
              progress in one place.
            </p>

            <ul className="product-points">
              <li>Track income and expenses</li>
              <li>Build better budgeting habits</li>
              <li>Monitor goals and financial progress</li>
              <li>Designed for real-life money management</li>
            </ul>

            <div className="product-actions">
              <a
                href="https://planwise-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Explore PlanWise
              </a>
            </div>
          </article>

          <article className="product-card premium-card">
            <p className="section-label">Budget System</p>
            <h2>DoneEnvelope</h2>
            <p className="product-lead">
              A structured budgeting system designed to help people organize
              spending categories and manage money with more discipline and
              clarity.
            </p>

            <ul className="product-points">
              <li>Envelope-style budgeting support</li>
              <li>Simple structure for spending categories</li>
              <li>Helps reduce overspending and confusion</li>
              <li>Great for everyday money organization</li>
            </ul>

            <div className="product-actions">
              <a
                href="https://payhip.com/dovehub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View in Dove Hub
              </a>
            </div>
          </article>

          <article className="product-card premium-card">
            <p className="section-label">Digital Tool</p>
            <h2>DoveCalc</h2>
            <p className="product-lead">
              A smart financial calculator designed to help users make clearer
              budgeting, debt, and business-related financial decisions.
            </p>

            <ul className="product-points">
              <li>Supports practical financial calculations</li>
              <li>Useful for budgeting and planning</li>
              <li>Built to simplify financial decisions</li>
              <li>Designed for both personal and business use</li>
            </ul>

            <div className="product-actions">
              <a
                href="https://payhip.com/dovehub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </article>

          <article className="product-card premium-card">
            <p className="section-label">Learning Resource</p>
            <h2>Courses & Guides</h2>
            <p className="product-lead">
              Educational tools, playbooks, and financial learning resources
              built to make important money concepts easier to understand and
              apply.
            </p>

            <ul className="product-points">
              <li>Financial literacy resources</li>
              <li>Beginner-friendly guidance</li>
              <li>Downloadable digital content</li>
              <li>Designed for clarity and action</li>
            </ul>

            <div className="product-actions">
              <a
                href="https://payhip.com/dovehub"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
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
            <p>
              Dove Financial products are designed to help people do more than
              just learn. They are built to help users organize, act, and move
              forward with stronger financial direction.
            </p>
          </div>

          <div className="feature-actions">
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Shop Dove Hub
            </a>
          </div>
        </div>
      </section>

      <section className="products-final-cta">
        <div className="container final-cta-box">
          <p className="section-label">Get Started</p>
          <h2>Ready to explore the Dove Financial ecosystem?</h2>
          <p>
            Whether you want a better budgeting tool, a smarter calculator, or
            financial resources that actually help you move forward, Dove
            Financial has tools built for that next step.
          </p>

          <div className="hero-buttons final-buttons">
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
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