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
import { useEffect, useState } from 'react';
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
const HumidChart = ({ humid }) => {
  const [humidities, setHumidities] = useState([]);
  useEffect(() => {
    const hData = [];
    humid.forEach((each) => hData.push(each.main.humidity));
    setHumidities(hData);
  }, [humid]);

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
      labels: { display: false},
      data: humidities,
      borderWidth: 2,
      borderColor: '#4f94cd',
      tension: 0.1
    }],
  };
  return (<Line aria-label="humid-chart" options={options} data={data} />);
};

export default HumidChart;
