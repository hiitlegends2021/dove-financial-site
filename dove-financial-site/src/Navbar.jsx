import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Shop financial tools, reserve your workshop seat
      </div>

      <header className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <Link to="/" className="logo-wrap">
            <div className="logo-icon">🕊</div>
            <div className="logo-text">Dove Financial</div>
          </Link>

          {/* Navigation */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/workshop">Workshop</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cash-flow-rescue">Cash Flow Rescue</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="nav-actions">
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="nav-shop-btn"
              onClick={() => track("Shop Tools Clicked")}
            >
              Shop Tools
            </a>

            <Link
              to="/cash-flow-rescue"
              className="nav-cta"
              onClick={() => track("Cash Flow CTA Clicked")}
            >
              Book Now
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;