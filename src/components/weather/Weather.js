import Styles from './Weather.module.css';
import TestChart from './TestChart';

const Weather = () => {

  const temp = 'F';
  const selected = { color: '#fff',  };

  return (
    <div className={Styles.weather}>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} />
            <span className={Styles.averageTemp}>77°</span>
            <div className={Styles.tempSelector}><span style={temp === 'F' ? selected : {}}>F</span>{'|'}<span style={temp === "C" ? selected : {}}>C</span> </div>
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
        <div>Temperature</div>
        <span>|</span>
        <div>Precipitation</div>
        <span>|</span>
        <div>Humidity</div>
        <span>|</span>
        <div>Wind</div>
      </div>
      <div className={Styles.chartWrapper}>
        <TestChart />
      </div>
    </div>
  );
};

export default Weather;
