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
const HumidChart = ({ selectedData }) => {
  const [humidities, setHumidities] = useState([]);
  useEffect(() => {
    const hData = selectedData.map(each => each.main.humidity);
    setHumidities(hData);
  }, [selectedData]);

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
    labels: humidities.map(() => ''),
    datasets: [{
      data: humidities,
      borderWidth: 2,
      borderColor: '#4f94cd',
      tension: 0.1
    }],
  };
  return (<Line aria-label="humid-chart" options={options} data={data} />);
};

export default HumidChart;
