import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaHome, FaTachometerAlt, FaWater, FaMountain, FaGlobe, FaPhone } from "react-icons/fa";

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
               <FaHome className="me-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/dashboard">
              <FaTachometerAlt className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/flood">
              <FaWater className="me-2" /> Flood
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/landslide">
              <FaMountain className="me-2" /> Landslide
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/earthquake">
              <FaGlobe className="me-2" /> Earthquake
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-warning" to="/helpline">
              <FaPhone className="me-2" /> Helpline
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaTachometerAlt, FaWater, FaMountain, FaGlobe, FaPhone } from "react-icons/fa";
// import "./navbar.css";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-dark bg-dark" : "navbar-light bg-transparent"}`}>
//       <div className="container-fluid p-2 d-flex justify-content-between align-items-center">
//         <h1 className="navbar-brand text-white">Disaster App</h1>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active text-light" to="/">
//                 <FaHome className="me-2" /> Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active text-light" to="/dashboard">
//                 <FaTachometerAlt className="me-2" /> Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active text-light" to="/flood">
//                 <FaWater className="me-2" /> Flood
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active text-light" to="/landslide">
//                 <FaMountain className="me-2" /> Landslide
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active text-light" to="/earthquake">
//                 <FaGlobe className="me-2" /> Earthquake
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active text-warning" to="/helpline">
//                 <FaPhone className="me-2" /> Helpline
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




//CSS styling old

/* Navbar custom styles (Optional) */
// .navbar-light .navbar-nav .nav-link {
//   color: #f8f9fa; /* Light text color for nav links */
// }

// .navbar-light .navbar-nav .nav-link.active {
//   color: #ffc107; /* Highlight color for active link */
// }

// .navbar-toggler-icon {
//   background-color: #f8f9fa; /* Toggler icon color */
// }

// .nav-link {
//   position: relative;
// }
// .nav-link::after {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 2px;
//   background: #00d4ff;
//   left: 0;
//   bottom: -5px;
//   transform: scaleX(0);
//   transition: transform 0.3s ease;
// }
// .nav-link:hover::after {
//   transform: scaleX(1);
// }
