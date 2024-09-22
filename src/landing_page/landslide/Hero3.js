// src/landing_page/landslide/Hero3.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import Papa from 'papaparse'; // Ensure you have installed papaparse
import IndiaDisasterMap from './IndiaDisasterMap';
import BarChart from './BarChart'; // Import BarChart component
import PieChart from './PieChart'; // 

function Hero3() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the CSV file
                const response = await axios.get('/media/csvfiles/Global_Landslide_Catalog_Export.csv', {
                    responseType: 'text', // Ensure response is in text format
                });

                // Parse the CSV data
                Papa.parse(response.data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        setData(results.data.map(item => ({
                            ...item,
                            latitude: parseFloat(item.latitude),
                            longitude: parseFloat(item.longitude),
                        })));
                        setLoading(false);
                    },
                    error: (error) => {
                        setError(error);
                        setLoading(false);
                    }
                });

            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div className='container'>
            <div className='row mb-5 mt-5'>
                
                <div className='col-12 col-lg-10 offset-lg-1 mt-3'>
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
            Landslide Map
          </h1>
                    <IndiaDisasterMap data={data} />
                </div>
                
            </div>
            <div className='row mt-5 justify-content-center'> {/* Center the content */}
                <div className='col-md-6 text-center'> {/* Set width and center-align text */}
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
            Landslide Categories
          </h1>
                    <PieChart data={data} />
                </div>
            </div>
        </div>
    );
}

export default Hero3;
