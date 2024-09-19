import React from "react";
import Mapbar from "./Mapbar";
import Graphbar from "./Graphbar";
import Heatmap from "./Heatmap"

function DashPage() {
  return (
    <div className="container">
        <div className="row ">
        <Mapbar />
        </div>
        <div className="row mt-5">
            <Heatmap />
        </div>
        <div className="row mt-5">
        
            
            <Graphbar />
      
        </div>
      
      
    </div>
    );
}

export default DashPage;
