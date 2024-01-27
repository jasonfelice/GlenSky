import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Weather.module.css';
import TempChart from './charts/TempChart';
import PreChart from './charts/PreChart';
import HumidChart from './charts/HumidChart';
import WindChart from './charts/WindChart';
import Utils from '../../utils/Utils';
import { getWeather } from '../../app/weather/weatherSlice';

const Weather = ({ data }) => {

  const dispatch = useDispatch();
  const tData = (useSelector((state) => state.weather));

  // Set Deafult temperature to Fahrenheit
  const [tempSi, setTempSi] = useState('F');

  // Sets the temprature converter by checking the state of selected SI unit
  const convertTemp = (tempSi === 'C') ? Utils.convertToCelcius : Utils.convertToFahrenheit;

  // Set temperature tab as default
  const [selectedTab, setSelectedTab] = useState('temprature');

  const [selectedDay, setSelectedDay] = useState(Object.keys(data)[0]);
  const [selectedTime, setSelectedTime] = useState(data[selectedDay][0]);
  const selectedData = data[selectedDay];

  // Deconstruct weather data from selected time
  const {main, weather, wind, rain} = selectedTime;

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className={Styles.weather}>
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
            <p>{Utils.convertDate(selectedTime.dt_txt.slice(0, 10))}</p>
            <p>{`${weather[0].main} | ${weather[0].description}`}</p>
          </div>
        </div>
        <div className={Styles.headinfoRight}>
          <p>Precipiration: {(!!rain) ? Math.floor(rain['3h']*100) : 0}%</p>
          <p>Humidity: {main.humidity}%</p>
          <p>Wind: {wind.speed}m/s</p>
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
              <span onClick={() => setSelectedTime(each)} key={each.dt}>{Utils.getHour(each.dt_txt)}</span>
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
                  setSelectedDay(day);
                  setSelectedTime(data[day][0]);
                }}
                key={day}
                className={Styles.daySelect}
              >
                <span>{Utils.getDay(day)}</span>
                <img src={`https://openweathermap.org/img/wn/${data[day][0].weather[0].icon}@4x.png`} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
                <p><span style={{ color: '#fff' }}>{convertTemp(data[day][0].main.temp_max)}°</span><span>{convertTemp(data[day][0].main.temp_min)}°</span></p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Weather;
