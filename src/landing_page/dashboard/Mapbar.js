import React from "react";

function Mapbar() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary display-4 font-italic">Disaster Map</h1>
      <div className="map-container ">
        <iframe
          src="/map.html"
          width="100%"
          height="600px"
          style={{ border: "none" ,textColor:"teal"}}
          title="Disaster Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Mapbar;
