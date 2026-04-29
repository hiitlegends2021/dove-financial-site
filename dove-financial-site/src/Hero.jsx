import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero conversion-hero">
      <div className="hero-content hero-split">
        <div>
          <p className="hero-tag">Dove Financial Innovations</p>

          <h1>
            Stop guessing your money.
            <span> Build real financial control.</span>
          </h1>

          <p className="hero-text">
            Budget smarter, protect yourself from scams, grow your financial
            knowledge, and build stronger money systems with Dove Financial
            tools, workshops, and practical education.
          </p>

          <div className="hero-buttons">
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="hero-primary"
              onClick={() => track("Shop Tools Clicked", { placement: "hero" })}
            >
              Shop Tools Now
            </a>

            <Link 
              to="/workshop" 
              className="hero-secondary" 
              onClick={() => track("Workshop Registration Clicked", { placement: "hero" })}
            >
              Reserve Workshop Seat
            </Link>
          </div>

          <p className="hero-proof">
            Practical tools. Real education. Built for everyday people and growing founders.
          </p>
        </div>

        <div className="hero-offer-card">
          <p className="offer-label">Start Here</p>
          <h3>Choose your next money move</h3>

          <div className="offer-list">
            <a href="#products">PlanWise Budgeting Tool</a>
            <a href="#products">SafetyNet Scam Defense</a>
            <a href="#products">Flip & Grow Learning Game</a>
            <a href="#products">Paycheck Breakdown Playbook</a>
            <a href="#workshops">Business Setup Workshop</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;