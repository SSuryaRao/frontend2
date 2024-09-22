import React from "react";
import FloodChart from "../../components/FloodChart";
import Heatmap from "./Heatmap";

function Hero2() {
  return (
    <div className="container">
      <div className="row mt-5">
        <FloodChart />
      </div>
      <div className="row">
        <div className="col-12 mt-5 col-lg-10 offset-lg-1">
          <h1
            style={{
              color: "#333333" /* Dark grey for clean contrast */,
              fontSize: "2.5rem" /* Large font size for impact */,
              fontWeight: "bold" /* Bold text */,
              textAlign: "center" /* Center alignment */,
              background:
                "linear-gradient(90deg, #D91E18, #F39C12)" /* Red-to-orange gradient fill */,
              WebkitBackgroundClip: "text" /* Clips background to text */,
              WebkitTextFillColor:
                "transparent" /* Makes the gradient visible */,
              letterSpacing: "1px" /* Slightly spaced letters for clarity */,

              borderBottom: "1px solid #D91E18",
            }}
          >
            Heatmap
          </h1>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
        
          <Heatmap />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
