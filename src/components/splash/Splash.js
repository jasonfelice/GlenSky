import Styles from './Splash.module.css';
import morning from '../../assets/vectors/morning.svg';
import afternoon from '../../assets/vectors/afternoon.svg';
import night from '../../assets/vectors/night.svg';
import getTimeOfDay from '../../utils/getTimeOfDay';

const Splash = ({ date }) => {
  const timeObject = {
    morning: [morning],
    afternoon: [afternoon],
    night: [night],
  };

  return (
    <div className={Styles.splash}>
      <div className={Styles.vectorWrapper}>
        <img className={Styles.splashVector} src={timeObject[getTimeOfDay(date)]} alt={getTimeOfDay(date)} />
      </div>
      <div className={Styles.citySelect}></div>
    </div>
  )
};

export default Splash;
