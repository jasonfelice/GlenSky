import { useState } from 'react';
import Styles from './Splash.module.css';
import morning from '../../assets/vectors/morning.svg';
import afternoon from '../../assets/vectors/afternoon.svg';
import night from '../../assets/vectors/night.svg';
import getTimeOfDay from '../../utils/getTimeOfDay';
import Cities from './Cities';

const Splash = ({ date }) => {

  // Check focus state of input elements 
  const [ inputFocus, setInputFocus] = useState(false);
  const [input, setInput] = useState('');
  const [citiesList, setCitiesList] = useState({ loading: false, cities: []});

  // Object for vector images 
  const timeObject = {
    morning: [morning],
    afternoon: [afternoon],
    night: [night],
  };

  return (
    <div className={Styles.splash}>
      <div className={Styles.vectorWrapper}>
        <img draggable={false} className={Styles.splashVector} src={timeObject[getTimeOfDay(date)]} alt={getTimeOfDay(date)} />
      </div>
      <div className={Styles.citySelect}>
        <form aria-label="form"  onClick={() => setInputFocus(true)} className={Styles.inputWrapper}>
          { citiesList.loading ? (<i className={`${Styles.icon} ${Styles.spin}`} />) : (<i className={`${Styles.icon} ${Styles.enter}`} />)}
          { !inputFocus && (<p>Las Vegas, Nevada, USA</p>)}
          { inputFocus && (<input autoFocus placeholder='Las Vegas, Nevada, USA' onChange={(e) => setInput(e.target.value)} onBlur={() => setInputFocus(!!input)} type="text" value={input} />)}
          <i className={`${Styles.icon} ${Styles.find}`} />
         { (!citiesList.loading && !!citiesList.cities.length) && <Cities cities={citiesList.cities} />}
        </form>
        <i className={Styles.target} />
      </div>
    </div>
  )
};

export default Splash;
