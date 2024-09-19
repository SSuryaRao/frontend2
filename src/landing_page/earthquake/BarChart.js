import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item['Origin Time']),
        datasets: [
            {
                label: 'Magnitude',
                data: data.map(item => item['Magnitude']),
                backgroundColor: 'rgba(139, 0, 0, 0.2)',  // Dark red with transparency
                borderColor: 'rgba(139, 0, 0, 1)',        // Solid dark red
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
