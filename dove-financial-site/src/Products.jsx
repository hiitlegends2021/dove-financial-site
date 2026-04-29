import React from "react";
import { track } from "@vercel/analytics";
function Products() {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <p className="section-tag">Dove Financial Tools</p>
        <h2>Choose the tool that helps you move today.</h2>
        <p className="section-text">
          Each Dove Financial product is built to solve a real problem:
          budgeting, scam protection, financial learning, paycheck planning,
          and business structure.
        </p>

        <div className="products-grid conversion-products">
          <div className="product-card featured-product">
            <p className="product-label">Best for budgeting</p>
            <h3>PlanWise</h3>
            <p>
              Track income, bills, savings goals, and reminders so you can stop
              guessing and start managing your money with structure.
            </p>
            <a 
            href="https://payhip.com/dovehub" 
            target="_blank" 
            rel="noreferrer"
            onClick={() => track("Product Clicked", { placement: "PlanWise" })}
            >
              Get PlanWise Now
            </a>
          </div>

          <div className="product-card">
            <p className="product-label">Best for protection</p>
            <h3>SafetyNet</h3>
            <p>
              A real-time scam and fraud defense tool designed to help people
              spot suspicious messages before they lose money.
            </p>
            <a 
              href="https://payhip.com/dovehub" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => track("Product Clicked", { placement: "SafetyNet" })}
            >
              Protect Yourself Today
            </a>
          </div>

          <div className="product-card">
            <p className="product-label">Best for learning</p>
            <h3>Flip & Grow</h3>
            <p>
              A financial literacy learning experience for families, classrooms,
              entrepreneurs, and anyone building confidence with money terms.
            </p>
            <a 
              href="https://payhip.com/dovehub" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => track("Product Clicked", { placement: "Flip & Grow" })}
            >
              Start Learning
            </a>
          </div>

          <div className="product-card">
            <p className="product-label">Best quick win</p>
            <h3>Paycheck Breakdown Playbook</h3>
            <p>
              A practical guide that helps you organize every paycheck with more
              intention, clarity, and control.
            </p>
            <a 
              href="https://payhip.com/dovehub" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => track("Product Clicked", { placement: "Paycheck Breakdown Playbook" })}
            >
              Download the Playbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;