// src/components/IndiaDisasterMap.js
import React from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Sample disaster data for India (latitude, longitude, risk probability, location, and notes)
const disasterDataIndia = [
  {
    disaster_type: "Earthquake",
    lat: 28.6139,
    lng: 77.209,
    risk: 0.85,
    location: "Delhi",
    notes: "Seismic Zone IV, high earthquake risk."
  },
  {
    disaster_type: "Flood",
    lat: 26.9124,
    lng: 75.7873,
    risk: 0.75,
    location: "Jaipur",
    notes: "Prone to flash floods during monsoons."
  },
  {
    disaster_type: "Cyclone",
    lat: 15.3173,
    lng: 75.7139,
    risk: 0.9,
    location: "Odisha Coast",
    notes: "High cyclone risk during pre-monsoon and post-monsoon seasons."
  },
  {
    disaster_type: "Landslide",
    lat: 27.533,
    lng: 88.5122,
    risk: 0.8,
    location: "Darjeeling",
    notes: "High landslide susceptibility in hilly regions."
  },
  {
    disaster_type: "Earthquake",
    lat: 34.0837,
    lng: 74.7973,
    risk: 0.95,
    location: "Srinagar",
    notes: "Seismic Zone V, extremely high earthquake risk."
  },
  {
    disaster_type: "Flood",
    lat: 25.3176,
    lng: 82.9739,
    risk: 0.7,
    location: "Varanasi",
    notes: "Flood-prone due to river Ganges overflow during monsoon."
  },
  {
    disaster_type: "Cyclone",
    lat: 13.0827,
    lng: 80.2707,
    risk: 0.88,
    location: "Chennai",
    notes: "High cyclone risk during monsoon seasons."
  },
  {
    disaster_type: "Landslide",
    lat: 31.1048,
    lng: 77.1734,
    risk: 0.65,
    location: "Shimla",
    notes: "Landslide risk due to steep slopes and heavy rainfall."
  },
  {
    disaster_type: "Earthquake",
    lat: 27.2046,
    lng: 77.4977,
    risk: 0.82,
    location: "Agra",
    notes: "Seismic Zone III, moderate earthquake risk."
  },
  {
    disaster_type: "Flood",
    lat: 22.5726,
    lng: 88.3639,
    risk: 0.78,
    location: "Kolkata",
    notes: "Prone to flooding due to river overflow and heavy rains."
  }
];

// Function to get color based on risk level
const getColor = (risk) => {
  if (risk >= 0.75) return "darkred";
  if (risk >= 0.5) return "orange";
  return "green";
};

function IndiaDisasterMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}> {/* Container to make map responsive */}
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        style={{ height: "60vh", width: "40vw" }} // Responsive dimensions
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {disasterDataIndia.map((data, index) => (
          <Circle
            key={index}
            center={[data.lat, data.lng]}
            radius={data.risk * 50000} // Adjust radius for visualization
            color={getColor(data.risk)}
          >
            <Popup>
              <strong>{data.location}</strong>
              <br />
              Disaster Type: {data.disaster_type}
              <br />
              Disaster Risk: {data.risk * 100}%
              <br />
              Notes: {data.notes}
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}

export default IndiaDisasterMap;
