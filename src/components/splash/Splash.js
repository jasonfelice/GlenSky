import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Splash.module.css';
import morning from '../../assets/vectors/morning.svg';
import afternoon from '../../assets/vectors/afternoon.svg';
import night from '../../assets/vectors/night.svg';
import Utils from '../../utils/Utils';
import Cities from './Cities';
import { getCities } from '../../app/cities/citiesSlice';

const Splash = ({ date }) => {

  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const loading = (cities.status === 'pending');

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
        <img draggable={false} className={Styles.splashVector} src={timeObject[Utils.getTimeOfDay(date)]} alt={Utils.getTimeOfDay(date)} />
      </div>
      <div className={Styles.citySelect}>
        <form aria-label="form"  onClick={() => setInputFocus(true)} className={Styles.inputWrapper}>
          { loading ? (<i className={`${Styles.icon} ${Styles.spin}`} />) : (<i className={`${Styles.icon} ${Styles.enter}`} />)}
          { !inputFocus && (<p>Las Vegas, Nevada, USA</p>)}
          { inputFocus && (<input autoFocus placeholder='Las Vegas, Nevada, USA' onChange={(e) => setInput(e.target.value)} onBlur={() => setInputFocus(!!input)} type="text" value={input} />)}
          <i onClick={() => dispatch(getCities(input))} className={`${Styles.icon} ${Styles.find}`} />
         {(!loading && !!cities.list.length) && <Cities cities={cities.list} />}
        </form>
        <i className={Styles.target} />
      </div>
    </div>
  )
};

export default Splash;
