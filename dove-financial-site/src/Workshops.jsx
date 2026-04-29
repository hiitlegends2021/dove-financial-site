function Workshops() {
  return (
    <section className="workshops" id="workshops">
      <div className="workshops-container">

        <p className="section-tag">
          Featured Event
        </p>

        <h2>
          The Business Setup Essentials™ Workshop
        </h2>

        <p className="section-text">
          A practical workshop created for entrepreneurs, side hustlers,
          and early-stage business owners who want to build with stronger
          structure from the start.
        </p>

        <div className="workshops-grid">

          <div className="workshop-card featured">
            <p className="workshop-label">Workshop Details</p>

            <h3>What You’ll Learn</h3>

            <p>
              • How to structure your business properly<br />
              • Business banking essentials<br />
              • Common mistakes new owners make<br />
              • Building real operational foundations<br />
              • How to move forward with confidence
            </p>

            <a
              href="https://form.jotform.com/261102442442039"
              target="_blank"
              rel="noreferrer"
              className="workshop-register-button"
              onClick={() => track("Workshop CTA Clicked", { placement: "hero" })}
            >
              Reserve Your Seat
            </a>
          </div>

          <div className="workshop-card">
            <h3>Date & Time</h3>

            <p>
              May 7th<br />
              6:30 PM
            </p>
          </div>

          <div className="workshop-card">
            <h3>Location</h3>

            <p>
              StageWorks<br />
              Downtown St. Cloud, Minnesota
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Workshops