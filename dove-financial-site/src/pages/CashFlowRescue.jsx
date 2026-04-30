import React from "react";
import "./CashFlowRescue.css";

export default function CashFlowRescue() {
  return (
    <div className="cfr-container">
      
      {/* HERO */}
      <section className="cfr-hero">
        <h1>Fix Your Cash Flow. Fast.</h1>
        <p>
          82% of businesses fail because of cash flow problems.  
          Not lack of effort. Not lack of ideas.  
          Just lack of structure.
        </p>

        <button className="cfr-cta">
          Book a Cash Flow Rescue Session
        </button>
        <p style={{ marginTop: "10px", opacity: 0.7 }}>
  Limited sessions available this week
</p>
      </section>

      {/* PROBLEM */}
      <section className="cfr-section">
        <h2>The Problem</h2>
        <ul>
          <li>Money comes in... but disappears</li>
          <li>Bills hit at the wrong time</li>
          <li>You don’t know what you can safely pay yourself</li>
          <li>Revenue looks good but cash feels tight</li>
        </ul>
      </section>
      <section className="cfr-section highlight">
  <h2>What You Get</h2>
  <div className="cfr-grid">
    <div className="cfr-card">✔ Clear cash flow breakdown</div>
    <div className="cfr-card">✔ Real plan for your money</div>
    <div className="cfr-card">✔ Pay yourself correctly</div>
    <div className="cfr-card">✔ Remove financial stress</div>
  </div>
</section>

      {/* SOLUTION */}
      <section className="cfr-section highlight">
        <h2>The Solution</h2>
        <p>
          In one session, we break down your entire cash flow system and rebuild it using:
        </p>

        <ul>
          <li>✔ Revenue Tracking</li>
          <li>✔ Expense Control</li>
          <li>✔ Cash Flow Calendar</li>
          <li>✔ Owner Pay System</li>
          <li>✔ Weekly CEO Review</li>
        </ul>
      </section>

      {/* WHAT YOU GET */}
      <section className="cfr-section">
        <h2>What You Walk Away With</h2>

        <div className="cfr-grid">
          <div className="cfr-card">
            <h3>Clarity</h3>
            <p>You’ll know exactly where your money is going</p>
          </div>

          <div className="cfr-card">
            <h3>Control</h3>
            <p>You’ll know what you can spend and when</p>
          </div>

          <div className="cfr-card">
            <h3>System</h3>
            <p>You’ll leave with your PlanWise Business system built</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cfr-final">
        <h2>Stop Guessing Your Money</h2>
        <p>Let’s fix your cash flow together.</p>
        <button
  className="cfr-cta large"
  onClick={() => {
    window.location.href = "https://buy.stripe.com/3c14gs3DSddA3";
  }}
>
  Book Your Cash Flow Rescue Session
</button>
        <p style={{ marginTop: "10px", opacity: 0.7 }}>
Trusted by individuals and business owners building real financial clarity.
</p>
      </section>

    </div>
          );
}