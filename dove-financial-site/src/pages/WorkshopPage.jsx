function WorkshopPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-container">
          <p className="section-tag">Featured Workshop</p>
          <h1>The Business Setup Essentials™ Workshop</h1>
          <p className="section-text">
            A practical workshop for entrepreneurs, side hustlers, and early-stage
            founders who want to build with stronger structure from the start.
          </p>

          <a
            href="https://form.jotform.com/261102442442039"
            target="_blank"
            rel="noreferrer"
            className="hero-primary"
          >
            Reserve Your Seat
          </a>

          <p className="secure-note">
            Secure registration and payment powered by Stripe.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container two-column">
          <div className="info-card">
            <h3>Date & Time</h3>
            <p>May 7th</p>
            <p>6:30 PM</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>StageWorks</p>
            <p>Downtown St. Cloud, Minnesota</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <p className="section-tag">What You’ll Learn</p>
          <h2>Build your business on a stronger foundation.</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Business Structure</h3>
              <p>Learn how to set your business up properly from the start.</p>
            </div>

            <div className="feature-card">
              <h3>Business Banking</h3>
              <p>Understand why separation and structure matter financially.</p>
            </div>

            <div className="feature-card">
              <h3>Common Mistakes</h3>
              <p>Avoid the errors that slow down many early-stage founders.</p>
            </div>

            <div className="feature-card">
              <h3>Practical Next Steps</h3>
              <p>Leave with clearer direction and a stronger action plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light">
        <div className="page-container">
          <p className="section-tag">Who It’s For</p>
          <h2>Created for builders in motion.</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Early-Stage Founders</h3>
              <p>For those ready to stop guessing and build with more structure.</p>
            </div>

            <div className="feature-card">
              <h3>Side Hustlers</h3>
              <p>For those turning an idea into something official and sustainable.</p>
            </div>

            <div className="feature-card">
              <h3>Small Business Owners</h3>
              <p>For owners who want stronger systems and clearer foundations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container centered-block">
          <p className="section-tag">Reserve Your Seat</p>
          <h2>Ready to build the right way?</h2>
          <p className="section-text">
            Secure your seat and join us for a practical workshop designed to
            help you move with more confidence.
          </p>

          <a
            href="https://form.jotform.com/261102442442039"
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            Reserve Your Seat
          </a>
        </div>
      </section>
    </>
  );
}

export default WorkshopPage;