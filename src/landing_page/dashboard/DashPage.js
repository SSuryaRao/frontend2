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
        <h1 className="text-danger display-4 font-italic mb-3 ">HeatMap</h1>
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
