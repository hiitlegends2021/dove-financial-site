import "./CashFlowRescue.css";

export default function CashFlowRescue() {
  return (
    <main className="cfr-page">
      <section className="cfr-hero">
        <div className="cfr-badge">New Dove Financial Business Solution</div>

        <h1>
          Your Business Isn’t Broke.
          <span>Your Cash Flow Is Unclear.</span>
        </h1>

        <p>
          The Cash Flow Rescue System™ helps small business owners understand
          their numbers, identify pressure points, and walk away with a real
          financial system built around their business.
        </p>

        <div className="cfr-actions">
          <a href="/contact" className="cfr-btn primary">
            Book Your Cash Flow Rescue Session
          </a>
          <a href="#included" className="cfr-btn secondary">
            See What’s Included
          </a>
        </div>

        <p className="cfr-trust">
          Powered by PlanWise Business Edition™ • Built by Dove Financial
        </p>
      </section>

      <section className="cfr-section cfr-pain">
        <h2>If this sounds familiar, you’re in the right place.</h2>

        <div className="cfr-grid">
          <div className="cfr-card">Money is coming in, but it still feels tight.</div>
          <div className="cfr-card">Bills hit before revenue lands.</div>
          <div className="cfr-card">You’re unsure what you can safely pay yourself.</div>
          <div className="cfr-card">You’re guessing week to week.</div>
          <div className="cfr-card">Revenue looks good, but cash still feels stressful.</div>
          <div className="cfr-card">You need a system, not more confusion.</div>
        </div>
      </section>

      <section className="cfr-section cfr-solution">
        <div className="cfr-content">
          <p className="cfr-label">The Solution</p>
          <h2>Introducing the Cash Flow Rescue System™</h2>
          <p>
            This is not a generic consultation. It’s a guided, real-time
            breakdown of your business finances where we organize your numbers,
            identify cash flow pressure points, and build your operating system
            live.
          </p>
          <strong>You don’t leave with notes. You leave with a system.</strong>
        </div>
      </section>

      <section className="cfr-section">
        <h2>What Happens In Your Session</h2>

        <div className="cfr-steps">
          <div className="cfr-step">
            <span>01</span>
            <h3>Snapshot</h3>
            <p>We assess your current cash position, revenue, expenses, and stress points.</p>
          </div>

          <div className="cfr-step">
            <span>02</span>
            <h3>Diagnosis</h3>
            <p>We identify timing issues, leaks, owner pay pressure, and cash flow risks.</p>
          </div>

          <div className="cfr-step">
            <span>03</span>
            <h3>System Build</h3>
            <p>We build your PlanWise Business Edition™ system live during the session.</p>
          </div>

          <div className="cfr-step">
            <span>04</span>
            <h3>Action Plan</h3>
            <p>You leave with clear next steps for immediate, 30-day, and growth moves.</p>
          </div>
        </div>
      </section>

      <section id="included" className="cfr-section cfr-included">
        <p className="cfr-label">Included Tool</p>
        <h2>You Get PlanWise Business Edition™</h2>
        <p>
          A business financial control center built to help you manage cash flow
          with clarity every week.
        </p>

        <div className="cfr-grid">
          <div className="cfr-card">CEO Dashboard</div>
          <div className="cfr-card">Revenue Tracker</div>
          <div className="cfr-card">Expense Tracker</div>
          <div className="cfr-card">Cash Flow Calendar</div>
          <div className="cfr-card">Owner Pay System</div>
          <div className="cfr-card">Weekly CEO Review</div>
        </div>
      </section>

      <section className="cfr-section cfr-results">
        <h2>After this session, you’ll have:</h2>

        <ul>
          <li>Clear visibility into your business finances</li>
          <li>A working cash flow management system</li>
          <li>Confidence around bills, owner pay, and decisions</li>
          <li>A practical action plan for your next steps</li>
          <li>Less guessing and more control</li>
        </ul>
      </section>

      <section className="cfr-offer">
        <div className="cfr-offer-box">
          <p className="cfr-label">Limited Launch Offer</p>
          <h2>Cash Flow Rescue Session™</h2>

          <p>
            A 60-minute guided business cash flow session with PlanWise Business
            Edition™ included.
          </p>

          <div className="cfr-price">Intro Sessions Available</div>

          <a href="/contact" className="cfr-btn primary">
            Book Your Session
          </a>

          <p className="cfr-small">
            Best for small business owners, founders, side hustlers, and service
            providers who need better cash flow clarity.
          </p>
        </div>
      </section>

      <section className="cfr-final">
        <h2>Stop guessing. Start operating with clarity.</h2>
        <p>
          Your business deserves a system that helps you see what’s happening
          before cash flow becomes a crisis.
        </p>
        <a href="/contact" className="cfr-btn primary">
          Start Your Cash Flow Rescue
        </a>
      </section>
    </main>
  );
}