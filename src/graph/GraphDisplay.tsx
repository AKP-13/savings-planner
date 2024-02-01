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
// Types
import type { InteractionMode, ScriptableContext, ScriptableScaleContext } from 'chart.js';
import { TotalSaved } from '../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Params = {
  totalSaved: TotalSaved;
};

const options = {
  elements: {
    line: {
      tension: 0.1
    }
  },
  interaction: {
    intersect: false,
    mode: 'index' as InteractionMode
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        color: (context: ScriptableScaleContext) =>
          context.tick.value === 0 ? 'black' : 'rgba(0, 0, 0, 0.54)',
        lineWidth: (context: ScriptableScaleContext) => (context.tick.value === 0 ? 1 : 0.25)
      }
    }
  }
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
        backgroundColor: 'white',
        borderRadius: '4px',
        margin: '1rem',
        minHeight: '400px',
        padding: '1rem'
      }}>
      <Line options={options} data={graphData} />
    </div>
  );
};

export default GraphDisplay;
