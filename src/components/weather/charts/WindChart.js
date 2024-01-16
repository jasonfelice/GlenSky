import arrow from '../../../assets/icons/arrow.svg';

const WindChart = ({ data }) => {
  const windWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'inherit',
  };

  const windStyle = {
    background: `url(${arrow}) no-repeat center center/cover`,
    width: '50px',
    height: '50px',
    display: 'block',
    filter: 'invert(.3)',
  };

  return (
    <div style={windWrapperStyle} aria-label="wind-chart">
        {
          data.map((each) => (
            <i key={each.dt} style={{ ...windStyle, transform: `rotate(${each.wind.deg}deg)` }} />
          ))
        }
    </div>
  )
};

export default WindChart;
