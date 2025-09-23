function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Brand & Description */}
          <div className="col-md-4 text-center text-md-start">
            <h5 style={{ color: "#d4af37" }}>Delish Nibbles</h5>
            <p className="small">
              Bringing gourmet bites to your table with love and the finest ingredients.
              Taste the gold standard of flavor!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/product" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/service" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="text-uppercase fw-bold mb-3">Connect With Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="mailto:info@delishnibbles.com" className="text-white" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light my-4" />

        {/* Copyright */}
        <div className="text-center small">
          &copy; {currentYear} <span style={{ color: "#d4af37" }}>Delish Nibbles & Foods</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
