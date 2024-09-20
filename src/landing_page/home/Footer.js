import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Left-aligned: About section */}
          <div className="col-md-4 d-flex justify-content-start">
            <div>
              <h5>About Us</h5>
              <p>
                We provide real-time disaster alerts and safety information to help you stay informed and safe.
              </p>
            </div>
          </div>

          {/* Center-aligned: Quick links */}
          <div className="col-md-4 text-center">
            
          </div>

          {/* Right-aligned: Contact information */}
          <div className="col-md-4 d-flex justify-content-end">
            <div className="text-end">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
              <Link className="nav-link active text-light text-decoration-underline" aria-current="page" to="/">
                Home
              </Link>
              </li>
              <li>
              <Link className="nav-link active text-light text-decoration-underline" to="/dashboard">
                Dashboard
              </Link>
              </li>
              <li>
              <Link className="nav-link active text-light text-decoration-underline" to="/helpline">
                Helpline
              </Link>
              </li>
            </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Disaster Alert Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
