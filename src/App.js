import { Route, Routes } from 'react-router-dom';
import Utils from './utils/Utils';
import './App.css';
import Weather from './components/weather/Weather';
import Splash from './components/splash/Splash';
import data from './tempData'

function App() {
  const date = new Date();
  const groupedData = {};
  data.list.forEach(item => {
  const day = item.dt_txt.split(' ')[0];
  if (!groupedData[day]) {
    groupedData[day] = [];
  }
  groupedData[day].push(item);
});
  return (
    <div className="App">
      <div className="rectangle">
        <span className='date'>{Utils.getCurrentDate(date)}</span>
        <main>
          <Routes>
            <Route path='/' element={<Splash date={date} />} />
            <Route path='/weather/:city' element={<Weather data={groupedData} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
