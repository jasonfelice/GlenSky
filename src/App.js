import { Route, Routes } from 'react-router-dom';
import getCurrentDate from './utils/getCurrentDate';
import './App.css';
import Weather from './components/weather/Weather';
import Splash from './components/splash/Splash';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <span className='date'>{getCurrentDate()}</span>
        <main>
          <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/weather/:city' element={<Weather />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
