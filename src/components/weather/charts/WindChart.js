import arrow from '../../../assets/icons/arrow.svg';

const WindChart = () => {
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
        <i style={windStyle} />
        <i style={windStyle} />
        <i style={windStyle} />
        <i style={windStyle} />
        <i style={windStyle} />
        <i style={windStyle} />
        <i style={windStyle} />
    </div>
  )
};

export default WindChart;
