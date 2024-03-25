import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Utils from './utils/Utils';
import Weather from './components/weather/Weather';
import Splash from './components/splash/Splash';
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const citiesStatus = useSelector((state) => state.cities.status);
  const citiesMessage = useSelector((state) => state.cities.error);
  const date = new Date();

  return (
    <div className="App">
      <Header />
      <div className="rectangle">
      {(citiesStatus === 'failed') && <Alert message={citiesMessage} />}
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
      <Footer />
    </div>
  );
}

export default App;
