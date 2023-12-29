import Styles from './Weather.module.css';
import TempChart from './charts/TempChart';
import PreChart from './charts/PreChart';
import HumidChart from './charts/HumidChart';
import WindChart from './charts/WindChart';
import rain from '../../assets/Rain.png';
import { useState } from 'react';

const Weather = () => {

  const [tempSi, setTempSi] = useState('F');
  const [selectedTab, setSelectedTab] = useState('temprature');

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
          <span>1am</span>
          <span>4am</span>
          <span>7am</span>
          <span>10am</span>
          <span>1pm</span>
          <span>4pm</span>
          <span>7pm</span>
        </div>
      <div className={Styles.chartWrapper}>    
        { (selectedTab === 'temprature') && ( <TempChart />) }
        { (selectedTab === 'precipitation') && ( <PreChart />) }
        { (selectedTab === 'humidity') && ( <HumidChart />) }
        { (selectedTab === 'wind') && ( <WindChart />) }
      </div>
      <div className={Styles.daysWrapper}>
        <div className={Styles.daySelect}>
          <span>SAT</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>SUN</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>MON</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>TUE</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
        <div className={Styles.daySelect}>
          <span>WED</span>
          <img src={rain} width={75} height={75} alt="Rain" className={Styles.dayIcon} />
          <p><span style={{ color: '#fff' }}>77°</span><span>69°</span></p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
