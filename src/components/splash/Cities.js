import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Styles from './Cities.module.css';
import { setError, setPending } from '../../app/cities/citiesSlice';

const Cities = ({ cities }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const G_KEY = process.env.REACT_APP_G_KEY;

  const getCords = async (id) => {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${G_KEY}`);
    return `${response.data.result.geometry.location.lat},${response.data.result.geometry.location.lng}`;
  };
  return (
    <ul className={Styles.cities}>
        {
          (Array.isArray(cities)) && cities.map((city) => (
            <li
              // Get weather with coordinates
              onClick={(e) => {
                dispatch(setPending());
                e.target.classList.add(Styles.loading);
                getCords(city.place_id).then((cords) => {
                  e.target.classList.remove(Styles.loading);
                  navigate(`/weather/cords/${cords}`);
                })
                  .catch((error) => {
                    dispatch(setError(error.message));
                    e.target.classList.remove(Styles.loading);
                  });
              }}
              key={city.place_id}
           >{city.description}</li>
          ))
        }
    </ul>
  );
};

export default Cities;
