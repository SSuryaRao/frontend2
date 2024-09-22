import React from "react";
import { FaPhoneAlt, FaFireAlt, FaAmbulance } from "react-icons/fa";

function Hero4() {
  return (
    <div className="container mt-5">
      <div
        className="row p-5 text-white"
        style={{
          background: "linear-gradient(145deg, #12c2e9, #c471ed, #f64f59)",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Left Column */}
        <div className="col-12 col-md-6">
          <h4 className="neon-text mb-4" style={{ fontSize: "1.75rem" }}>Quick Links</h4>
          <ul className="list-unstyled fs-5">
            <li><a href="#about" className="text-decoration-none text-white">About</a></li>
            <li><a href="#faqs" className="text-decoration-none text-white">FAQs</a></li>
            <li><a href="#help" className="text-decoration-none text-white">Help</a></li>
            <li><a href="#helpdesk" className="text-decoration-none text-white">Help Desk</a></li>
            <li><a href="#policy" className="text-decoration-none text-white">Website Policy</a></li>
            <li><a href="#feedback" className="text-decoration-none text-white">Feedback</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 text-end">
          <h4 className="neon-text mb-4" style={{ fontSize: "1.75rem" }}>Emergency Helplines</h4>
          <ul className="list-unstyled fs-5">
            <li><FaAmbulance className="me-2" /> Ambulance: <strong>102</strong></li>
            <li><FaFireAlt className="me-2" /> Fire Department: <strong>101</strong></li>
            <li><FaPhoneAlt className="me-2" /> Police Department: <strong>100</strong></li>
            <li><FaPhoneAlt className="me-2" /> NDRF: <strong>0671-2879711</strong></li>
            <li><FaPhoneAlt className="me-2" /> NDMA: <strong>011-1070</strong></li>
            <li><a href="https://www.ndrf.gov.in/contact-us" className="text-decoration-none text-white">Contact NDRF</a></li>
            <li><a href="https://ndma.gov.in/about-us/Contact-us" className="text-decoration-none text-white">Contact NDMA</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero4;


// 3D button design 
// import React from "react";
// import { FaPhoneAlt, FaRegQuestionCircle } from "react-icons/fa";

// function Hero4() {
//   return (
//     <div className="container mt-5">
//       <div
//         className="row p-5"
//         style={{
//           background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
//           borderRadius: "25px",
//           boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         {/* Left Column */}
//         <div className="col-12 col-md-6">
//           <h4 className="mb-4 text-white" style={{ fontSize: "1.75rem" }}>Quick Links</h4>
//           <div>
//             <a href="#about" className="btn btn-lg btn-light mb-3" style={{ borderRadius: "50px", padding: "10px 30px" }}>
//               <FaRegQuestionCircle className="me-2" /> About Us
//             </a>
//             <br />
//             <a href="#faqs" className="btn btn-lg btn-light mb-3" style={{ borderRadius: "50px", padding: "10px 30px" }}>
//               FAQs
//             </a>
//             <br />
//             <a href="#help" className="btn btn-lg btn-light" style={{ borderRadius: "50px", padding: "10px 30px" }}>
//               Help Desk
//             </a>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="col-12 col-md-6 text-end">
//           <h4 className="mb-4 text-white" style={{ fontSize: "1.75rem" }}>Emergency Helplines</h4>
//           <ul className="list-unstyled text-white fs-5">
//             <li><FaPhoneAlt className="me-2" /> Red Cross: <strong>1860-266-2345</strong></li>
//             <li><FaPhoneAlt className="me-2" /> Fire Department: <strong>101</strong></li>
//             <li><FaPhoneAlt className="me-2" /> Police Department: <strong>100</strong></li>
//             <li><FaPhoneAlt className="me-2" /> NDRF: <strong>0671-2879711</strong></li>
//             <li><FaPhoneAlt className="me-2" /> NDMA: <strong>011-1070</strong></li>
//             <li><a href="https://www.ndrf.gov.in/contact-us" className="text-white text-decoration-none">Contact NDRF</a></li>
//             <li><a href="https://ndma.gov.in/about-us/Contact-us" className="text-white text-decoration-none">Contact NDMA</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero4;
