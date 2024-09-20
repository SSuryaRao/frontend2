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
      <div className="row mb-5">
        <div className="col-12 col-lg-10 offset-lg-1 justify-content-center">
          <BarChart data={data} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-10 offset-lg-1 mt-5">
          <MapComponent data={data} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
