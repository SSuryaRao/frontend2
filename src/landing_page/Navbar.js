import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ backgroundColor: "#343a40" }}>
      <div className="container-fluid p-2 d-flex justify-content-between">
        {/* Logo or Title on the Left */}
        <h1 className="navbar-brand text-white">Disaster App</h1>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/flood">
                Flood
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/landslide">
                Landslide
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/earthquake">
                Earthquake
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-warning" to="/helpline">
                Helpline
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
