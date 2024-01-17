import { useState } from 'react';
import Styles from './Weather.module.css';
import TempChart from './charts/TempChart';
import PreChart from './charts/PreChart';
import HumidChart from './charts/HumidChart';
import WindChart from './charts/WindChart';
import Utils from '../../utils/Utils';

const Weather = ({ data }) => {

  const [tempSi, setTempSi] = useState('F');
  // Sets the temprature converter by checking the state of selected SI unit
  const convertTemp = (tempSi === 'C') ? Utils.convertToCelcius : Utils.convertToFahrenheit;
  const [selectedTab, setSelectedTab] = useState('temprature');
  const [selectedDay, setSelectedDay] = useState(Object.keys(data)[0]);
  const selectedData = data[selectedDay];

  return (
    <div className={Styles.weather}>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} />
            <span className={Styles.averageTemp}>77°</span>
            <div className={Styles.tempSelector}>
              <span onClick={() => setTempSi('F')} style={tempSi === 'F' ? {color: '#fff'} : {}}>F</span>
              {'|'}
              <span onClick={() => setTempSi('C')} style={tempSi === "C" ? {color: '#fff'} : {}}>C</span>
            </div>
          </div>
          <div className={Styles.description}>
            <p>Saturday</p>
            <p>Clear with periodic clouds</p>
          </div>
        </div>
        <div className={Styles.headinfoRight}>
          <p>Precipiration: 24%</p>
          <p>Humidity: 40%</p>
          <p>Wind: 5mph</p>
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
            selectedData.map((sData) => (
              <span key={sData.dt}>{Utils.getHour(sData.dt_txt)}</span>
            ))
          }
        </div>
      <div className={Styles.chartWrapper}>    
        { (selectedTab === 'temprature') && ( <TempChart />) }
        { (selectedTab === 'precipitation') && ( <PreChart />) }
        { (selectedTab === 'humidity') && ( <HumidChart humid={selectedData} />) }
        { (selectedTab === 'wind') && ( <WindChart data={selectedData} />) }
      </div>
      <div className={Styles.daysWrapper}>
        {
          Object.keys(data).map((day) => {
            return (
              <div onClick={() => setSelectedDay(day)} key={day} className={Styles.daySelect}>
                <span>{Utils.getDay(day)}</span>
                <img src={`https://openweathermap.org/img/wn/${data[day][0].weather[0].icon}@4x.png`} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
                <p><span style={{ color: '#fff' }}>{convertTemp(245)}°</span><span>69°</span></p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Weather;
