import React from "react";

function Hero4() {
  return (
    <div className="container mt-5 ">
      <div className="row  align-items-center  text-success-emphasis bg-light">
        <div className="col-6 text-start mt-5 fs-3 ">
          <p>
            About | FAQs <br /> Help | Help Desk <br /> Website Policy |
            Feedback <br />
          </p>
        </div>
        <div
          className="col-6 text-end mt-5 fs-3"
          style={{ textAlign: "right" }}
        >
          <ul style={{ listStyleType: "none" }}>
            <li>
              Red Cross: <strong>1860-266-2345</strong>
            </li>
            <li>
              Fire Department: <strong>101</strong>
            </li>
            <li>
              Police Department: <strong>100</strong>
            </li>
            <li>
              NDRF: <strong>0671-2879711</strong>
            </li>
            <li>
              NDMA: <strong>011-1070</strong>
            </li>
            <li>
              <a
                href="https://www.ndrf.gov.in/contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact NDRF
              </a>
            </li>
            <li>
              <a
                href="https://ndma.gov.in/about-us/Contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact NDMA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
