import rainThunder from '../../assets/rain-thunder.svg';

const Error = () => {

  const style = {
    margin: 'auto',
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    color: 'red',
    fontSize: '1.5rem'
  };

  const vectorStyle = {
    background: `url(${rainThunder}) no-repeat center center/cover`,
    display: 'block',
    width: '200px',
    height: '200px',
    filter: 'invert(1)',
  };

  return (
    <div style={style}>
        <i style={vectorStyle} />
        <p>Oops! Something went wrong.</p>
    </div>
  );
};

export default Error;
