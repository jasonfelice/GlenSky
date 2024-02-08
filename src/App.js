import { Route, Routes } from 'react-router-dom';
import Utils from './utils/Utils';
import './App.css';
import Weather from './components/weather/Weather';
import Splash from './components/splash/Splash';
import Alert from './components/alert/Alert';
import { useEffect, useState } from 'react';

function App() {
  const [alert, setAlert] = useState(true);
  const date = new Date();

  useEffect(() => {
    return () => {
      setTimeout(() => setAlert(false), 3000);
    };
  },[alert]);

  return (
    <div className="App">
      {alert && <Alert />}
      <div className="rectangle">
        <span className='date'>{Utils.getCurrentDate(date)}</span>
        <main>
          <Routes>
            <Route path='/' element={<Splash date={date} />} />
            {/* type prop checks the type of search by coordinates or name */}
            <Route path='/weather/cords/:city' element={<Weather type={'cords'} />} />
            <Route path='/weather/name/:city' element={<Weather type={'name'} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
