import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Styles from './Weather.module.css';
import TempChart from './charts/TempChart';
import PreChart from './charts/PreChart';
import HumidChart from './charts/HumidChart';
import WindChart from './charts/WindChart';
import Loading from '../loading/Loading';
import Error from './Error';
import Utils from '../../utils/Utils';
import { getWeather } from '../../app/weather/weatherSlice';
import { setSelectedTime, setSelectedDay } from '../../app/weather/weatherSlice';

const Weather = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { city } = useParams();
  const weatherState = (useSelector((state) => state.weather));

  const { selectedTime, selectedData } = weatherState;
  const data = weatherState.weather.list;

  // Set Deafult temperature to Fahrenheit
  const [tempSi, setTempSi] = useState('F');

  // Sets the temprature converter by checking the state of selected SI unit
  const convertTemp = (tempSi === 'C') ? Utils.convertToCelcius : Utils.convertToFahrenheit;

  // Set temperature tab as default
  const [selectedTab, setSelectedTab] = useState('temprature');

  // Convert time to location's timezone
  const convertTimezone = (dt_txt, offset) => {
    const date = new Date(dt_txt + "Z"); // Append 'Z' to indicate UTC
    const localTimestamp = new Date(date.getTime() + offset * 1000);
    return localTimestamp.toISOString().slice(0, 19).replace('T', ' ');
  };

  useEffect(() => {
    // // Type checks the type of search by coordinates or name
    dispatch(getWeather({type, city}));
    
  }, [dispatch, type, city]);

  return (
    <div className={Styles.weather}>
      {/* Back Icon */}
      <i onClick={() => navigate('/')} className={Styles.back} />
      {
        (weatherState.status === 'failed' && (<Error />))
      }
      {
        (weatherState.status === 'pending') &&  (<Loading />)
      }
      {
        (weatherState.status === 'fetched') && (
          <>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} style={{ background: `url(https://openweathermap.org/img/wn/${selectedTime.weather[0].icon}@4x.png) no-repeat center center` }} />
            <span className={Styles.averageTemp}>{convertTemp(selectedTime.main.temp)}°</span>
            <div className={Styles.tempSelector}>
              <span onClick={() => setTempSi('F')} style={tempSi === 'F' ? {color: '#fff'} : {}}>F</span>
              {'|'}
              <span onClick={() => setTempSi('C')} style={tempSi === "C" ? {color: '#fff'} : {}}>C</span>
            </div>
          </div>
          <div className={Styles.description}>
            <p>{weatherState.weather.location}</p>
            <p>{Utils.convertDate(selectedTime.dt_txt.slice(0, 10))}</p>
            <p>{`${selectedTime.weather[0].main} | ${selectedTime.weather[0].description}`}</p>
          </div>
        </div>
        <div className={Styles.headinfoRight}>
          <p>Precipiration: {(!!selectedTime.rain) ? Math.floor(selectedTime.rain['3h']*100) : 0}%</p>
          <p>Humidity: {selectedTime.main.humidity}%</p>
          <p>Wind: {selectedTime.wind.speed}m/s</p>
        </div>
      </div>
      <div className={Styles.chartTabs}>
        <div onClick={() => setSelectedTab('temprature')} className={selectedTab === 'temprature' ? Styles.selectedTab : ''}>Temperature</div>
        <span>|</span>
        <div onClick={() => setSelectedTab('precipitation')} className={selectedTab === 'precipitation' ? Styles.selectedTab : ''}>Precipitation</div>
        <span>|</span>
        <div onClick={() => setSelectedTab('humidity')} className={selectedTab === 'humidity' ? Styles.selectedTab : ''}>Humidity</div>
        <span>|</span>
        <div onClick={() => setSelectedTab('wind')} className={selectedTab === 'wind' ? Styles.selectedTab : ''}>Wind</div>
      </div>
      <div className={Styles.timeWrapper}>
          {
            selectedData.map((each) => (
              <span onClick={() => dispatch(setSelectedTime(each))} key={each.dt}>{Utils.getHour(convertTimezone(each.dt_txt, weatherState.weather.timezone))}</span>
            ))
          }
        </div>
      <div className={Styles.chartWrapper}>    
        { (selectedTab === 'temprature') && ( <TempChart convertTemp={convertTemp} selectedData={selectedData} />) }
        { (selectedTab === 'precipitation') && ( <PreChart selectedData={selectedData} />) }
        { (selectedTab === 'humidity') && ( <HumidChart selectedData={selectedData} />) }
        { (selectedTab === 'wind') && ( <WindChart selectedData={selectedData} />) }
      </div>
      <div className={Styles.daysWrapper}>
        {
          Object.keys(data).map((day) => {
            return (
              <div
                onClick={() => {
                  dispatch(setSelectedDay(day));
                }}
                key={day}
                className={Styles.daySelect}
              >
                <span>{Utils.getDay(day)}</span>
                <img src={`https://openweathermap.org/img/wn/${data[day][Math.floor(data[day].length/2)].weather[0].icon}@4x.png`} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
                <p><span style={{ color: '#fff' }}>{convertTemp(data[day][Math.floor(data[day].length/2)].main.temp_max)}°</span><span>{convertTemp(data[day][0].main.temp_min)}°</span></p>
              </div>
            );
          })
        }
      </div>
      </>
      )}
    </div>
  );
};

export default Weather;
