import { useParams } from 'react-router-dom';


const Weather = () => {
  const { city } = useParams(); 
  return (
    <div className="weather">{city}</div>
    
  );
};

export default Weather;
