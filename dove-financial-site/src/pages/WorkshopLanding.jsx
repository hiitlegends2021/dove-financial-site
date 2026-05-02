import React from "react";
import "./WorkshopLanding.css";

export default function WorkshopLanding() {
  return (
    <main className="workshop-page">
      <section className="workshop-hero">
        <div className="workshop-badge">LIVE ONLINE WORKSHOP • $19</div>

        <h1>Stop Guessing Your Business Setup.</h1>

        <p className="hero-subtitle">
          Join <strong>The Business Setup Essentials — LIVE Online</strong> and
          walk away with a clear structure, financial setup plan, and next steps
          you can actually execute.
        </p>

        <div className="hero-actions">
          <a href="#reserve" className="primary-btn">
            Reserve Your Spot — $19
          </a>
          <p>No confusion. No guesswork. Just clarity, structure, and execution.</p>
        </div>
      </section>

      <section className="workshop-section problem">
        <h2>Most Businesses Don’t Fail… They Start Off Unstructured.</h2>
        <p>
          You registered your business—or you’re about to. But now you’re stuck
          wondering if you set it up correctly, what to do next, and how to
          separate your personal and business money.
        </p>
        <p>
          This is where most people get lost. Not because they lack motivation,
          but because they lack <strong>structure</strong>.
        </p>
      </section>

      <section className="workshop-section solution">
        <h2>This Session Gives You What Most People Never Get</h2>
        <p>
          In this live session, you’ll learn how to properly structure your
          business and finances so you can operate with clarity and confidence
          from the start.
        </p>
        <h3>Clarity creates structure. Structure creates income.</h3>
      </section>

      <section className="workshop-section">
        <h2>What You’ll Learn</h2>
        <div className="card-grid">
          <div className="info-card">How to understand your business structure</div>
          <div className="info-card">What to do after registering your business</div>
          <div className="info-card">How to separate personal and business finances</div>
          <div className="info-card">Business banking setup basics</div>
          <div className="info-card">Your next steps to move with confidence</div>
        </div>
      </section>

      <section className="workshop-section">
        <h2>What You Get</h2>
        <div className="offer-box">
          <ul>
            <li>60–75 minute live online session</li>
            <li>Live Q&A</li>
            <li>Replay access</li>
            <li>Business Setup Checklist</li>
            <li>Simple Financial Structure Guide</li>
          </ul>
        </div>
      </section>

      <section className="workshop-section audience">
        <h2>Who This Is For</h2>
        <p>
          New business owners, side hustlers, recently registered founders, and
          anyone who feels “set up” but not fully structured.
        </p>
      </section>

      <section className="workshop-section urgency">
        <h2>This Is Your Moment to Get It Right Early</h2>
        <p>
          Most people spend months fixing mistakes that could have been avoided
          with the right structure from the beginning.
        </p>
        <p className="price-note">
          This price will not stay at $19 as future sessions expand.
        </p>
      </section>

      <section className="workshop-section authority">
        <h2>Built by Dove Financial</h2>
        <p>
          At Dove Financial, we don’t just talk about business—we help you build
          structure that actually supports income.
        </p>
        <h3>Define. Organize. Visualize. Execute.</h3>
      </section>

      <section id="reserve" className="final-cta">
        <h2>Get the Structure Your Business Needs</h2>
        <p>
          Stop second-guessing your setup. Walk into your business with clarity,
          confidence, and a real plan.
        </p>

        <a href="https://dovefinancial.gumroad.com/l/xwait" className="primary-btn large">
          Reserve Your Spot — $19
        </a>

        <div className="micro-trust">
          <span>Secure checkout</span>
          <span>Join from anywhere</span>
          <span>Replay included</span>
        </div>
      </section>
    </main>
  );
}