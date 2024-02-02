import Styles from './Cities.module.css';

const Cities = ({ cities }) => {
  return (
    <ul className={Styles.cities}>
        {
          cities.map((city) => (
            <li key={city.place_id}>{city.description}</li>
          ))
        }
    </ul>
  );
};

export default Cities;
