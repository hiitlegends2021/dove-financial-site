import React from "react";
import "./ThankYouPage.css";

export default function ThankYouPage() {
  return (
    <main className="thankyou-page">
      <section className="thankyou-card">
        <p className="eyebrow">Payment Confirmed</p>

        <h1>You’re booked into the Cash Flow Rescue process.</h1>

        <p className="intro">
          Thank you for securing your session. Your next step is to choose your
          meeting time so we can review your cash flow, identify pressure points,
          and build your next money move.
        </p>
        <p style={{ color: "#d4af37", fontWeight: "700", marginTop: "20px" }}>
        ⚠️ Sessions are limited. If you don’t schedule now, your spot is not guaranteed.
        </p>


        <a
          href="https://calendly.com/hiitlegends2021/30min" 
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Schedule My Session
        </a>
        <a
          href="https://calendly.com/hiitlegends2021/30min"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
        Schedule Later (Save My Link)
        </a>

        <div className="next-box">
          <h2>Before your session, prepare:</h2>
          <ul>
            <li>Your current income or revenue sources</li>
            <li>Your main expenses or bills</li>
            <li>Any overdue payments or cash flow concerns</li>
            <li>Your biggest question about paying yourself or staying stable</li>
          </ul>
        </div>

        <section className="upsell-box">
          <p className="eyebrow">Want deeper support?</p>
          <h2>Upgrade to a Full Financial Clarity Session</h2>
          <p>
            If you want more than a rescue session, upgrade to a full clarity
            session where we map out your full structure, priorities, and next
            30–60 day plan.
          </p>

          <a
            href="https://buy.stripe.com/3cI4gs3DSddA38K9JZ0Ny01"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Upgrade to Full Session — $117
          </a>
        </section>

        <p className="support-note">
          Questions? Contact Dove Financial directly through the website.
        </p>
      </section>
    </main>
  );
}