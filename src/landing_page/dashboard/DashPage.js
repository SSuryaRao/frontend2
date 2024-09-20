import React from "react";
import Mapbar from "./Mapbar";
import Graphbar from "./Graphbar";
import Heatmap from "./Heatmap";

function DashPage() {
  return (
    <div className="container">
      <div className="row">
        {/* Mapbar Section */}
        <div className="col-12 col-lg-10 offset-lg-1">
          <Mapbar />
        </div>

        {/* Heatmap Section */}
        
        <div className="col-12 col-lg-10 offset-lg-1 mt-5">
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
        HeatMap
      </h1>
          <Heatmap />
        </div>

        {/* Graphbar Section */}
        <div className="col-12 col-lg-10 offset-lg-1 mt-5">
          <Graphbar />
        </div>
      </div>
    </div>
  );
}

export default DashPage;
