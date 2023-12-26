import Styles from './Weather.module.css';

const Weather = () => {

  return (
    <div className={Styles.weather}>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} />
            <span className={Styles.averageTemp}>77°</span>
            <div className={Styles.tempSelector}><span>F</span>{'|'}<span>C</span> </div>
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
    </div>
  );
};

export default Weather;
