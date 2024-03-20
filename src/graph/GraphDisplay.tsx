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
// Utils
import options from './options';
// Types
import type { ScriptableContext } from 'chart.js';
import { TotalSaved } from '../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Params = {
  totalSaved: TotalSaved;
};

const GraphDisplay = ({ totalSaved }: Params) => {
  const labels = totalSaved.map(({ month }) => month);

  const formattedGraphData = totalSaved.map(({ month, total }) => ({
    x: month,
    y: total
  }));

  const graphData = {
    labels,
    datasets: [
      {
        data: formattedGraphData,
        backgroundColor: (ctx: ScriptableContext<'line'>) =>
          ctx?.parsed?.y < 0 ? '#FF0000' : '#1976d2',
        borderColor: (ctx: ScriptableContext<'line'>) =>
          ctx?.parsed?.y < 0 ? '#FF0000' : '#1976d2',
        label: 'Total',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10
      }
    ]
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 5px',
        margin: '3rem',
        minHeight: '400px',
        padding: '1rem'
      }}>
      <Line options={options} data={graphData} />
    </div>
  );
};

export default GraphDisplay;
