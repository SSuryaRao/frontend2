// src/landing_page/landslide/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data }) => {
    // Prepare data for the pie chart
    const categories = data.reduce((acc, item) => {
        const category = item.landslide_category || 'Unknown';
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const pieData = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#DAF7A6'], // Add more colors as needed
            }
        ]
    };

    // Options for the pie chart
    const options = {
        plugins: {
            legend: {
                position: 'bottom', // Adjust the position of the legend
                labels: {
                    boxWidth: 20, // Adjust the width of the box
                    padding: 15 // Adjust the padding between labels
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    };

    return (
        <div>
            <h1 className='text-primary mb-3 display-4 font-italic'>Landslide Categories</h1>
            <Pie data={pieData} options={options} />
        </div>
    );
};

export default PieChart;
