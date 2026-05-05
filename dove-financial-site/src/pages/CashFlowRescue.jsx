import React from "react";
import { Link } from "react-router-dom";
import "./CashFlowRescue.css";

export default function CashFlowRescue() {
  return (
    <main className="cashflow-page">
      <section className="cashflow-hero">
        <div className="cashflow-badge">Cash Flow Rescue Session</div>

        <h1>
          Fix Your Business Cash Flow —
          <span> For Real This Time.</span>
        </h1>

        <p className="cashflow-subtitle">
          If your business makes money but still feels financially stressful,
          this session helps you find the leaks, understand your numbers, and
          rebuild the system behind your cash flow.
        </p>

        <div className="cashflow-cta-row">
          <a
            href="YOUR_CHECKOUT_LINK_HERE"
            className="cashflow-primary-btn"
          >
            Start My Cash Flow Rescue — $117
          </a>

          <a href="#how-it-works" className="cashflow-secondary-btn">
            See How It Works
          </a>
        </div>

        <p className="cashflow-note">
          Limited sessions available this week. Built for entrepreneurs,
          founders, and small business owners.
        </p>
      </section>

      <section className="cashflow-section cashflow-problem">
        <div className="cashflow-section-header">
          <p className="cashflow-label">The Real Problem</p>
          <h2>You don’t need more guessing. You need control.</h2>
        </div>

        <div className="cashflow-grid">
          <div className="cashflow-card">
            <h3>Money comes in</h3>
            <p>
              Sales happen, invoices get paid, clients book, and revenue shows
              up.
            </p>
          </div>

          <div className="cashflow-card">
            <h3>Money disappears</h3>
            <p>
              Expenses, subscriptions, tools, taxes, and random spending drain
              the business.
            </p>
          </div>

          <div className="cashflow-card">
            <h3>You feel stuck</h3>
            <p>
              Even after a good month, you still don’t feel financially clear or
              in control.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="cashflow-section cashflow-system">
        <div className="cashflow-section-header">
          <p className="cashflow-label">How It Works</p>
          <h2>We use a real system, not generic advice.</h2>
        </div>

        <p className="cashflow-wide-text">
          During your session, we walk through your business using the{" "}
          <strong>Cash Flow System powered by DoveCalc Executive</strong>. This
          allows us to diagnose your numbers in real time, identify what’s
          draining your cash flow, and create a practical action plan you can
          actually use.
        </p>

        <div className="cashflow-process">
          <div>
            <span>01</span>
            <h3>Enter Your Numbers</h3>
            <p>Revenue, expenses, subscriptions, owner pay, and cash flow.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Find the Leaks</h3>
            <p>We identify where money is slipping through the cracks.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Build the Plan</h3>
            <p>You leave with a clear next-step cash flow rescue plan.</p>
          </div>
        </div>
      </section>

      <section className="cashflow-section cashflow-includes">
        <div className="cashflow-section-header">
          <p className="cashflow-label">What You Get</p>
          <h2>A focused session built to create clarity fast.</h2>
        </div>

        <div className="cashflow-list-grid">
          <div className="cashflow-list-item">✓ Live cash flow walkthrough</div>
          <div className="cashflow-list-item">✓ Business expense review</div>
          <div className="cashflow-list-item">✓ Financial leak detection</div>
          <div className="cashflow-list-item">✓ Owner pay clarity</div>
          <div className="cashflow-list-item">✓ Simple action plan</div>
          <div className="cashflow-list-item">✓ Clear next steps</div>
        </div>
      </section>

      <section className="cashflow-section cashflow-fit">
        <div className="cashflow-section-header">
          <p className="cashflow-label">This Is For You If</p>
          <h2>Your business money feels harder than it should.</h2>
        </div>

        <div className="cashflow-fit-box">
          <p>✓ You’re making money but still feel broke</p>
          <p>✓ You don’t know your real profit</p>
          <p>✓ You avoid checking your business numbers</p>
          <p>✓ Your owner pay is inconsistent</p>
          <p>✓ You want a better system before growing bigger</p>
        </div>
      </section>

      <section className="cashflow-section cashflow-price">
        <div className="cashflow-price-card">
          <p className="cashflow-label">Cash Flow Rescue</p>

          <h2>$117</h2>

          <p>
            One guided session to help you understand your cash flow, identify
            what’s draining your business, and create a clear plan forward.
          </p>

          <a
            href="YOUR_CHECKOUT_LINK_HERE"
            className="cashflow-primary-btn"
          >
            Reserve My Session — $117
          </a>

          <small>
            You don’t need more confusion. You need structure, clarity, and
            control.
          </small>
        </div>
      </section>

      <section className="cashflow-section cashflow-final">
        <h2>You don’t need more revenue. You need control.</h2>

        <p>
          Cash Flow Rescue helps you stop guessing, see the truth, and fix the
          system behind your business money.
        </p>

        <a
          href="https://buy.stripe.com/3c14gs3DSddA38K9JZ0Ny01"
          className="cashflow-primary-btn"
        >
          Start My Cash Flow Rescue
        </a>

        <Link to="/services" className="cashflow-back-link">
          View Other Dove Financial Services
        </Link>
      </section>
    </main>
  );
}