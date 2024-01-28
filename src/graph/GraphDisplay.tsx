import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphDisplay = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const graphData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };
  return (
    <div>
      <h1>Graph Goes Here</h1>
      <Line options={options} data={graphData} />;
    </div>
  );
};

export default GraphDisplay;
