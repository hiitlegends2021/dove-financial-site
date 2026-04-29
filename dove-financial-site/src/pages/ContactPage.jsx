export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1>Let’s connect.</h1>
          <p className="contact-intro">
            Have a question about the workshop, services, or products? Reach out
            and we’ll point you in the right direction.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-card">
            <p className="section-label">Email</p>
            <h2>Reach us directly</h2>
            <p>
              For questions about Dove Financial services, workshop access, or
              digital products, send us an email and we’ll get back to you.
            </p>

            <a
              href="mailto:courtneyvinson@dove-financial-innovations.com"
              className="contact-link"
            >
              courtneyvinson@dove-financial-innovations.com
            </a>

            <div className="contact-actions">
              <a
                href="mailto:courtneyvinson@dove-financial-innovations.com"
                className="btn btn-primary"
              >
                Send an Email
              </a>

              <a
                href="https://form.jotform.com/261102442442039"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Register for Workshop
              </a>
            </div>
          </div>

          <div className="contact-card">
            <p className="section-label">What We Help With</p>
            <h2>Start with the right next step</h2>

            <div className="contact-points">
              <div className="contact-point">
                <h3>Financial Clarity Sessions</h3>
                <p>
                  Get support understanding your financial situation and your
                  next best move.
                </p>
              </div>

              <div className="contact-point">
                <h3>Business Formation Support</h3>
                <p>
                  Reach out if you need help getting your business structure
                  started the right way.
                </p>
              </div>

              <div className="contact-point">
                <h3>Products & Tools</h3>
                <p>
                  Need help with PlanWise or another Dove Financial tool? We can
                  point you in the right direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}