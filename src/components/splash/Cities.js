import Styles from './Cities.module.css';

const Cities = ({ cities }) => {
  return (
    <ul className={Styles.cities}>
        {
          cities.map((city) => (
            <li>{city.name}</li>
          ))
        }
    </ul>
  );
};

export default Cities;
