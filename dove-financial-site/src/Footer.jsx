import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Dove Financial</h3>

          <p>
            Helping entrepreneurs and everyday people build stronger financial
            foundations through practical education, tools, and real-life support.
          </p>

          <a
            href="https://form.jotform.com/261102442442039"
            target="_blank"
            rel="noreferrer"
            className="footer-register-button"
          >
            Reserve Your Seat
          </a>
        </div>

        <div className="footer-links">
          <div>
            <h4>Workshop</h4>
            <Link to="/workshop">Overview</Link>
            <Link to="/workshop">What You’ll Learn</Link>
            <Link to="/workshop">Location</Link>
          </div>

          <div>
            <h4>Explore</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Connect</h4>

            <a href="mailto:courtneyvinson@dove-financial-innovations.com">
              Email
            </a>

            <a
              href="https://www.dovefinancialinnovations.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>

            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
            >
              Dove Hub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Dove Financial. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;