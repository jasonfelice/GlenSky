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
const PreChart = ({ selectedData }) => {
  const [pres, setPres] = useState([]);
  useEffect(() => {
    const data = selectedData.map((each) => (!!each.rain) ? each.rain['3h'] : 0);
    setPres(data);
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
    labels: pres.map(() => ''),
    datasets: [{
      data: pres,
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
