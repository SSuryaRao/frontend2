// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    // Process data for the chart
    const chartData = {
        labels: data.length > 0 ? data.map(item => item.event_title) : [], // Use appropriate label
        datasets: [{
            label: 'Fatality Count',
            data: data.length > 0 ? data.map(item => item.fatality_count || 0) : [], // Use appropriate data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    return (
        <div>
            {data.length > 0 ? (
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context) => `Fatalities: ${context.raw}`,
                                },
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Event Title'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Fatality Count'
                                }
                            }
                        }
                    }}
                />
            ) : (
                <div>No data available for the bar chart.</div>
            )}
        </div>
    );
};

export default BarChart;
