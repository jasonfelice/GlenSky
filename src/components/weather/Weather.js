import Styles from './Weather.module.css';

const Weather = () => {

  return (
    <div className={Styles.weather}>
      <div className={Styles.weatherInfo}>
        <div className={Styles.headInfoLeft}>
          <div className={Styles.headTemprature}>
            <i className={Styles.weatherIcon} />
            <span>77°</span>
            <div className={Styles.tempSelector}><span>F</span>{'|'}<span>C</span> </div>
          </div>
        </div>
        <div className={Styles.headinfoRight}></div>
      </div>
    </div>
  );
};

export default Weather;
