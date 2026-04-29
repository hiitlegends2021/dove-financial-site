function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <p className="section-tag">Take Action Today</p>

        <h2>Don’t leave without choosing your next money move.</h2>

        <p className="section-text">
          Whether you need a budgeting tool, scam protection, financial education,
          a paycheck plan, or a business workshop — Dove Financial has a starting
          point built for you.
        </p>

        <div className="cta-buttons">
          <a
            href="https://payhip.com/dovehub"
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            Shop Dove Tools
          </a>

          <a
            href="https://form.jotform.com/261102442442039"
            target="_blank"
            rel="noreferrer"
            className="cta-secondary"
          >
            Reserve Workshop Seat
          </a>
        </div>

        <p className="secure-note">
          Secure checkout and registration options available.
        </p>
      </div>
    </section>
  );
}

export default CTASection;