import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Styles from './Cities.module.css';

const Cities = ({ cities }) => {
  const navigate = useNavigate();
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
              onClick={() => getCords(city.place_id).then((cords) => navigate(`/weather/cords/${cords}`))}
              key={city.place_id}
           >{city.description}</li>
          ))
        }
    </ul>
  );
};

export default Cities;
