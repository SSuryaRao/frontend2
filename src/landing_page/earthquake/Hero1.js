import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import BarChart from "./BarChart"; // Path to BarChart component
import MapComponent from "./MapComponent"; // Path to MapComponent
import LineChart from "./LineChart";

const Hero3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/media/csvfiles/Indian_earthquake_data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        console.log("Parsed Data:", results.data);
      },
    });
  }, []);

  return (
    <div className="container"> {/* Corrected class name */}
      <div className="row mb-5 mt-5">
        <div className="col-12 col-lg-10 offset-lg-1 justify-content-center">
        <h1 className="mb-3"
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
            BarChart
          </h1>
          <BarChart data={data} />
        </div>
      </div>
      <div className="row mt-5">
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
              WebkitTextFillColor:
                "transparent" /* Makes the gradient visible */,
              letterSpacing: "1px" /* Slightly spaced letters for clarity */,

              borderBottom: "1px solid #D91E18",
            }}
          >
            Earthquake Map
          </h1>
          <MapComponent data={data} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          {/* <LineChart /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
