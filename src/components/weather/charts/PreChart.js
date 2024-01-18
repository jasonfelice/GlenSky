import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const PreChart = ({ selectedData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [65, 59, 80, 81, 56, 55, 40],
      borderWidth: 2,
      fill: true,
      stepped: 'before',
      borderColor: '#1873d3',
      backgroundColor: '#1873d3a6',
      tension: 0.1
    }],
  };
  return (<Line aria-label="pre-chart" options={options} data={data} />);
};

export default PreChart;
