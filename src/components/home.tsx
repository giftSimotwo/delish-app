import { NavLink } from "react-router-dom";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="homepage-wrapper">
      <Navbar />

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
      <Footer />
    </div>
  );
}

export default HomePage;
