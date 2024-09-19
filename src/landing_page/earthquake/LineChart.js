import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        // Handle the case where data is not provided or is not an array
        return <p>No data available</p>;
    }

    const chartData = {
        labels: data.map(item => item['Origin Time']),
        datasets: [
            {
                label: 'Magnitude',
                data: data.map(item => item['Magnitude']),
                fill: false,
                backgroundColor: 'rgba(139, 0, 0, 0.2)',
                borderColor: 'rgba(139, 0, 0, 1)',
                borderWidth: 2,
                tension: 0.1,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default LineChart;
