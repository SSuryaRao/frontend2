import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { useMap } from 'react-leaflet/hooks';

const HeatLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (points.length > 0) {
      const gradient = {
        0.0: '#FF4500',  // Dark orange
        0.2: '#FF4500',  // Dark orange
        0.4: '#FF6347',  // Dark red-orange
        0.6: '#FF6347',  // Dark red-orange
        0.8: '#B22222',  // Dark red
        1.0: '#B22222'   // Dark red
      };

      const heatLayer = window.L.heatLayer(points, {
        radius: 100,  // Increased radius
        gradient: gradient
      }).addTo(map);

      return () => {
        map.removeLayer(heatLayer);
      };
    }
  }, [map, points]);

  return null;
};

const Heatmap = () => {
  const [heatmapPoints, setHeatmapPoints] = useState([]);

  useEffect(() => {
    Papa.parse('/media/csvfiles/Disaster.csv', {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result.data);  // Check if data is loaded
        const points = result.data
          .filter(row => row.Latitude && row.Longitude)
          .map(row => [parseFloat(row.Latitude), parseFloat(row.Longitude)]);
        console.log(points);  // Check points in console
        setHeatmapPoints(points);
      }
    });
  }, []);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "800px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <HeatLayer points={heatmapPoints} />
    </MapContainer>
  );
};

export default Heatmap;
