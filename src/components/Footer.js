import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>About</h5>
            <p>
Prodapt is a global leader in digital transformation and engineering services for the connectedness industry.
        With a sharp focus on telecom, media, and connected platforms, we deliver end-to-end solutions that drive innovation.            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/dashboard" className="text-light text-decoration-none">Dashboard</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-3 text-center text-md-start">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com" className="text-light me-3 fs-5"><i className="bi bi-twitter"></i></a>
            <a href="https://linkedin.com" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center text-secondary py-3 border-top border-secondary">
        &copy; {year} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
