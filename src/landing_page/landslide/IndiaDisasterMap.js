// src/components/IndiaDisasterMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Papa from 'papaparse'; // Import PapaParse

const IndiaDisasterMap = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the CSV data
                const response = await axios.get('/media/csvfiles/Global_Landslide_Catalog_Export.csv', {
                    responseType: 'text',
                });

                // Parse CSV data
                const parsedData = Papa.parse(response.data, { header: true }).data;

                // Filter data for India-specific entries
                const indiaData = parsedData.filter(item => item.country_name === 'India');

                // Further limit data to manage performance (e.g., show only first 50 records)
                const limitedData = indiaData.slice(0, 50);

                setData(limitedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading map...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '600px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((item, index) => (
                // Ensure latitude and longitude are valid numbers
                item.latitude && item.longitude ? (
                    <Marker
                        key={index}
                        position={[parseFloat(item.latitude), parseFloat(item.longitude)]}
                    >
                        <Popup>
                            <strong>{item.event_title}</strong><br />
                            {item.event_description}<br />
                            {item.event_date}
                        </Popup>
                    </Marker>
                ) : null
            ))}
        </MapContainer>
    );
};

export default IndiaDisasterMap;
