import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to disable collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Bootstrap's md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldExpand = hovered || isMobile;

  return (
    <nav
      className="navbar navbar-expand-lg bg-light shadow-sm px-3 sticky-top"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        height: shouldExpand ? "auto" : "50px",
        overflow: "hidden",
        transition: "height 0.3s ease",
        zIndex: 1030,
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img
            src="/logo192.png"
            alt="Delish Logo"
            width="36"
            height="36"
            className="me-2"
          />
          <span style={{ color: "#d4af37" }}>Delish Nibbles</span>
        </NavLink>

        {/* Toggler (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-lg-3 gap-2">
            {[
              { to: "/product", label: "Products" },
              { to: "/service", label: "Services" },
              { to: "/about", label: "About" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link btn rounded-pill px-3 py-2 ${
                      isActive ? "fw-bold text-white" : "text-dark"
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#d4af37" : "#f8f9fa",
                    border: "1px solid #d4af37",
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
