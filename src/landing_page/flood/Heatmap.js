import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';
import 'leaflet.heat';

const HeatmapLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (data.length > 0) {
      const gradient = {
        0.0: '#FF4500',  // Dark orange
        0.2: '#FF4500',  // Dark orange
        0.4: '#FF6347',  // Dark red-orange
        0.6: '#FF6347',  // Dark red-orange
        0.8: '#B22222',  // Dark red
        1.0: '#B22222'   // Dark red
      };

      if (!map) return;

      // Create heatmap layer
      const heatLayer = window.L.heatLayer(
        data.map((point) => [point.latitude, point.longitude, point.severity]), 
        {
          radius: 55,
          blur: 15,
          maxZoom: 17,
          gradient: gradient,  // Pass the gradient to the heatmap layer
        }
      ).addTo(map);

      // Cleanup on component unmount
      return () => {
        map.removeLayer(heatLayer);
      };
    }
  }, [map, data]);

  return null;
};

const Heatmap = () => {
  const [heatmapPoints, setHeatmapPoints] = useState([]);

  useEffect(() => {
    const loadCSV = async () => {
      const response = await fetch('/media/csvfiles/Flood_data_clean.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      
      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          const data = results.data;

          const points = data
            .filter((event) => event.Latitude && event.Longitude && event.Severity)
            .map((event) => ({
              latitude: parseFloat(event.Latitude),
              longitude: parseFloat(event.Longitude),
              severity: parseFloat(event.Severity),
            }));

          setHeatmapPoints(points);
        },
      });
    };

    loadCSV();
  }, []);

  return (
    <MapContainer center={[20, 80]} zoom={5} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {heatmapPoints.length > 0 && <HeatmapLayer data={heatmapPoints} />}
    </MapContainer>
  );
};

export default Heatmap;
