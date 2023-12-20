import { useState } from 'react';
import Styles from './Splash.module.css';
import morning from '../../assets/vectors/morning.svg';
import afternoon from '../../assets/vectors/afternoon.svg';
import night from '../../assets/vectors/night.svg';
import getTimeOfDay from '../../utils/getTimeOfDay';

const Splash = ({ date }) => {

  // Check focus state of input elements 
  const [ inputFocus, setInputFocus] = useState(false);
  const [input, setInput] = useState('');

  // Object for vector images 
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
      <div className={Styles.citySelect}>
        <form onClick={() => setInputFocus(true)} className={Styles.inputWrapper}>
          { !inputFocus && (<p>Las Vegas, Nevada, USA</p>)}
          { inputFocus && (<input autoFocus onChange={(e) => setInput(e.target.value)} onBlur={() => setInputFocus(!!input)} type="text" value={input} />)}
        </form>
      </div>
    </div>
  )
};

export default Splash;
