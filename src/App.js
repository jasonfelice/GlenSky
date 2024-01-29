import { Route, Routes } from 'react-router-dom';
import Utils from './utils/Utils';
import './App.css';
import Weather from './components/weather/Weather';
import Splash from './components/splash/Splash';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <div className="rectangle">
        <span className='date'>{Utils.getCurrentDate(date)}</span>
        <main>
          <Routes>
            <Route path='/' element={<Splash date={date} />} />
            <Route path='/weather/:city' element={<Weather />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
