import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const TestChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: 'top'
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
      fill: true,
      borderColor: '#ff9f40',
      tension: 0.1
    }],
  };
  return (<Line options={options} data={data} />);
};

export default TestChart;
