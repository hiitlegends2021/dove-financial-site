function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <p className="section-tag">How We Help</p>
        <h2>Services designed to create clarity and structure.</h2>
        <p className="section-text">
          Dove Financial offers practical support for individuals,
          families, and entrepreneurs who want better financial systems,
          stronger foundations, and more confident next steps.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Financial Clarity Consultations</h3>
            <p>
              One-on-one support to help you understand your finances,
              identify priorities, and make stronger money decisions.
            </p>
            <a href="#contact">Book a Session</a>
          </div>

          <div className="service-card">
            <h3>Business Formation Support</h3>
            <p>
              Guided support for entrepreneurs ready to structure their
              business properly and build on a stronger foundation.
            </p>
            <a href="#contact">View Service</a>
          </div>

          <div className="service-card">
            <h3>Budgeting & Money Management Tools</h3>
            <p>
              Digital tools designed to simplify budgeting, planning,
              and day-to-day money management with more clarity.
            </p>
            <a href="#products">Explore Tools</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services