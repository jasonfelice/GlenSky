import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styles from './Splash.module.css';
import morning from '../../assets/vectors/morning.svg';
import afternoon from '../../assets/vectors/afternoon.svg';
import night from '../../assets/vectors/night.svg';
import Utils from '../../utils/Utils';
import Cities from './Cities';
import { getCities } from '../../app/cities/citiesSlice';

const Splash = ({ date }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Get cities data from redux store
  const cities = useSelector((state) => state.cities);
  const loading = (cities.status === 'pending');

  // toggle cities list
  const [toggleCities, setToggleCities] = useState(false);

  // Check focus state of input elements 
  const [ inputFocus, setInputFocus] = useState(false);
  const [input, setInput] = useState('');

  // Object for vector images 
  const timeObject = {
    morning: [morning],
    afternoon: [afternoon],
    night: [night],
  };

  // handle click outside form
  const handleFormBlur = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      // Clicked outside the component
      setToggleCities(false);
    }
  };

  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('mousedown', handleFormBlur);

    // set toggle cities as per state
    setToggleCities((!loading && !!cities.list.length));

    // Detach the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleFormBlur);
    };
  }, [cities, loading]);

  return (
    <div className={Styles.splash}>
      <div className={Styles.vectorWrapper}>
        <img
          draggable={false}
          className={Styles.splashVector}
          // Uses current time to select vector graphic
          src={timeObject[Utils.getTimeOfDay(date)]}
          alt={Utils.getTimeOfDay(date)} />
      </div>
      <div className={Styles.citySelect}>
        <form ref={wrapperRef} aria-label="form"  onClick={() => setInputFocus(true)} className={Styles.inputWrapper}>
          { loading ?
            (<i className={`${Styles.icon} ${Styles.spin}`} />) :
            // Get weather with city name
            (<i onClick={() => navigate(`/weather/name/${input}`)} className={`${Styles.icon} ${Styles.enter}`} />)
          }
          { !inputFocus && (<p>Las Vegas, Nevada, USA</p>)}
          { inputFocus && (<input autoFocus placeholder='Las Vegas, Nevada, USA' onChange={(e) => setInput(e.target.value)} onBlur={() => setInputFocus(!!input)} type="text" value={input} />)}
          <i onClick={() => dispatch(getCities(input))} className={`${Styles.icon} ${Styles.find}`} />
         {toggleCities && <Cities cities={cities.list} />}
        </form>
        <i className={Styles.target} />
      </div>
    </div>
  )
};

export default Splash;
