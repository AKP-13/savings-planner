import { InteractionMode, ScriptableScaleContext } from 'chart.js';

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

export default options;
