import { NavLink } from "react-router-dom";
import "./home.css";

function HomePage() {
  return (
    <div className="homepage-wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-yellow shadow-sm w-100">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink className="btn nav-btn" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn nav-btn" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn nav-btn" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="homepage-content d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="display-3 fw-bold">Welcome to Delish Nibbles & Foods</h1>
        <p className="lead mt-3 mb-4">
          Your taste buds deserve the best — explore our delicious range of meals.
        </p>
        <NavLink to="/product" className="btn explore-btn btn-lg">
          Explore Menu
        </NavLink>
      </div>

      {/* Footer */}
      <footer className="homepage-footer text-white text-center py-3">
        &copy; {new Date().getFullYear()} Delish Nibbles & Foods. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
