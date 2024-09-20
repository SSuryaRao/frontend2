import React from "react";

function Mapbar() {
  return (
    <div className="container mt-5">
      <h1
        style={{
          color: "#333333" /* Dark grey for clean contrast */,
          fontSize: "2.5rem" /* Large font size for impact */,
          fontWeight: "bold" /* Bold text */,
          textAlign: "center" /* Center alignment */,
          background:
            "linear-gradient(90deg, #D91E18, #F39C12)" /* Red-to-orange gradient fill */,
          WebkitBackgroundClip: "text" /* Clips background to text */,
          WebkitTextFillColor: "transparent" /* Makes the gradient visible */,
          letterSpacing: "1px" /* Slightly spaced letters for clarity */,
         
          borderBottom: '1px solid #D91E18',
        }}
      >
        Disaster Map
      </h1>

      <div className="map-container ">
        <iframe
          src="/map.html"
          width="100%"
          height="600px"
          style={{ border: "none", textColor: "teal" }}
          title="Disaster Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Mapbar;
