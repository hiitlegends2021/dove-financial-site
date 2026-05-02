import React from "react";
import "./ToolsHub.css";

export default function ToolsHub() {
  return (
    <main className="tools-hub">
      <section className="hub-hero">
        <p className="eyebrow">Dove Financial Tools</p>
        <h1>Your Money. Your Protection. Your Growth.</h1>
        <p className="hero-subtitle">
          Explore Dove Financial’s digital tools built to help you organize your
          money, protect yourself from scams, and grow your financial knowledge.
        </p>

        <div className="hero-buttons">
          <a href="#tools" className="primary-btn">Explore Tools</a>
          <a href="https://trydoveinnovations.com" className="secondary-btn">
            Visit Dove Financial
          </a>
        </div>
      </section>

      <section id="tools" className="tools-section">
        <div className="section-header">
          <p className="eyebrow">Choose Your Tool</p>
          <h2>Built for clarity, confidence, and action.</h2>
        </div>

        <div className="tools-grid">
          <article className="tool-card">
            <div className="tool-icon">💰</div>
            <h3>PlanWise</h3>
            <p>
              A simple money planning tool to help you track income, organize
              expenses, and make smarter financial decisions.
            </p>
            <a
              href="https://planwise.dovefinancialinnovations.com"
              className="card-btn"
            >
              Launch PlanWise
            </a>
          </article>

          <article className="tool-card featured">
            <div className="tool-icon">🛡️</div>
            <h3>SafetyNet</h3>
            <p>
              A scam and fraud defense tool that helps you review suspicious
              messages before they cost you money or peace of mind.
            </p>
            <a
              href="https://safetynet.dovefinancialinnovations.com"
              className="card-btn"
            >
              Check a Message
            </a>
          </article>

          <article className="tool-card">
            <div className="tool-icon">🎓</div>
            <h3>Flip & Grow</h3>
            <p>
              A financial education game that helps students, families, and
              beginners learn money terms in a fun, interactive way.
            </p>
            <a
              href="https://flipandgrow.dovefinancialinnovations.com"
              className="card-btn"
            >
              Start Learning
            </a>
          </article>
        </div>
      </section>

      <section className="hub-cta">
        <h2>Not sure where to start?</h2>
        <p>
          Start with PlanWise if you need money clarity. Use SafetyNet if you
          want protection. Try Flip & Grow if you want to build knowledge.
        </p>
        <a href="https://trydoveinnovations.com" className="primary-btn">
          Back to Dove Financial
        </a>
      </section>
    </main>
  );
}