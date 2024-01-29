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
import { TotalSaved } from '../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Params = {
  totalSaved: TotalSaved;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  },
  elements: {
    line: {
      tension: 0.4
    }
  }
};

const GraphDisplay = ({ totalSaved }: Params) => {
  const labels = totalSaved.map(({ month }) => month);

  const formattedGraphData = totalSaved.map(({ month, total }) => {
    return {
      x: month,
      y: total
    };
  });

  const graphData = {
    labels,
    datasets: [
      {
        data: formattedGraphData,
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        label: 'Total',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10
      }
    ]
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '4px', margin: '1rem', padding: '1rem' }}>
      <Line options={options} data={graphData} />
    </div>
  );
};

export default GraphDisplay;
