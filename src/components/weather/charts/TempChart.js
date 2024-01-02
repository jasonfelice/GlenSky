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
const TempChart = () => {
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
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
      data: [65, 59, 80, 81],
      borderWidth: 2,
      fill: true,
      borderColor: '#ff9f40',
      backgroundColor: '#ff9f409e',
      tension: 0.1
    }],
  };
  return (<Line aria-label="temp-chart" options={options} data={data} />);
};

export default TempChart;
