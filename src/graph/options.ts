import { InteractionMode, ScriptableScaleContext, TooltipItem } from 'chart.js';

const locales = 'en-GB';
const numOptions = {
  style: 'currency',
  currency: 'GBP'
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
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<'line'>) {
          let label = context.dataset.label || '';

          if (label) {
            label += ': ';
          }

          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat(locales, numOptions).format(context.parsed.y);
          }

          return label;
        }
      }
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
      },
      ticks: {
        callback: (value: number) => Intl.NumberFormat(locales, numOptions).format(value)
      }
    }
  }
};

export default options;
