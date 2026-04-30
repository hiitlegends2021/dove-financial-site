import React from "react";
import "./CashFlowRescue.css";

const STRIPE_LINK = "https://buy.stripe.com/3cI4gs3DSddA38K9JZ0Ny01";

export default function CashFlowRescue() {
  return (
    <div className="cfr-container">
      {/* HERO */}
      <section className="cfr-hero">
        <p className="cfr-badge">Cash Flow Rescue Session</p>

        <h1>
          Fix Your Cash Flow. <span>Fast.</span>
        </h1>

        <p className="cfr-subtitle">
          82% of businesses fail because of cash flow problems. Not lack of
          effort. Not lack of ideas. Just lack of structure.
        </p>

        <div className="cfr-cta-wrap">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cfr-cta pulse"
          >
            Book Your Cash Flow Rescue Session — $57
          </a>

          <p className="cfr-note">
            Limited sessions available this week. Secure your spot now.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="cfr-section">
        <p className="cfr-label">The Problem</p>
        <h2>Your money is moving, but it may not be managed.</h2>

        <div className="cfr-grid">
          <div className="cfr-card">Money comes in… but disappears</div>
          <div className="cfr-card">Bills hit at the wrong time</div>
          <div className="cfr-card">You don’t know what you can safely pay yourself</div>
          <div className="cfr-card">Revenue looks good, but cash still feels tight</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="cfr-section highlight">
        <p className="cfr-label">The Solution</p>
        <h2>One focused session. One clearer money plan.</h2>

        <p className="cfr-text">
          In your Cash Flow Rescue Session, we break down your income, expenses,
          timing, priorities, and next best money moves so you can stop guessing
          and start operating with structure.
        </p>

        <ul className="cfr-list">
          <li>✔ Revenue tracking review</li>
          <li>✔ Expense pressure-point breakdown</li>
          <li>✔ Cash flow calendar guidance</li>
          <li>✔ Pay-yourself clarity</li>
          <li>✔ Weekly money structure plan</li>
        </ul>
      </section>

      {/* WHAT YOU GET */}
      <section className="cfr-section">
        <p className="cfr-label">What You Get</p>
        <h2>Walk away with clarity, control, and direction.</h2>

        <div className="cfr-grid">
          <div className="cfr-card">
            <h3>Clarity</h3>
            <p>You’ll know exactly where your money is going.</p>
          </div>

          <div className="cfr-card">
            <h3>Control</h3>
            <p>You’ll know what you can spend, save, and pay yourself.</p>
          </div>

          <div className="cfr-card">
            <h3>Structure</h3>
            <p>You’ll leave with a simple system for your next money moves.</p>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="cfr-pricing">
        <p className="cfr-label">Start Here</p>

        <h2>Cash Flow Rescue Session</h2>

        <div className="cfr-price">$57</div>

        <p>
          A focused session designed to help you identify cash flow leaks,
          organize your money, and create a clear next-step plan.
        </p>

        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noreferrer"
          className="cfr-cta large pulse"
        >
          Reserve My Session
        </a>

        <p className="cfr-note">
          Payment secures your session. You’ll choose your appointment time after checkout.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="cfr-final">
        <p className="cfr-label">Ready?</p>

        <h2>Let’s fix your cash flow together.</h2>

        <p>
          Stop trying to figure it out alone. Get structure, clarity, and a real
          plan for your money.
        </p>

        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noreferrer"
          className="cfr-cta large pulse"
        >
          Book Your Cash Flow Rescue Session
        </a>

        <p className="cfr-trust">
          Trusted by individuals and business owners building real financial clarity.
        </p>
      </section>
    </div>
  );
}