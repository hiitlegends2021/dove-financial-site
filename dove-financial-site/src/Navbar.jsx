import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="announcement-bar">
        Shop financial tools, reserve your workshop seat, and build clarity today.
      </div>

      <header className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo-wrap">
            <div className="logo-icon">🕊️</div>
            <div className="logo-text">Dove Financial</div>
          </Link>

          {/* Navigation */}
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#workshops">Workshops</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="nav-actions">
            <a
              href="https://payhip.com/dovehub"
              target="_blank"
              rel="noreferrer"
              className="nav-shop-btn"
              onClick={() => track("Shop Tools Clicked", { placement: "navbar" })}
            >
              Shop Tools
            </a>

            <a
              href="https://form.jotform.com/261102442442039"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
              onClick={() => track("Workshop Registration Clicked",  { placement: "navbar" })}
            >
              Book Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;