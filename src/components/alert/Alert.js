import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const Alert = ({message}) => {
  const [alert, setAlert] = useState(true);
  const style = {
    position: 'absolute',
    textAlign: 'center',
    background: '#ff8a8a',
    color: '#fff',
    padding: '0.5rem',
    top: '10px',
    left: '0',
    right: '0',
    zIndex: '10',
    borderRadius: '10px',
  };

  useEffect(() => {
    // Hide alert after 3 seconds
    return () => {
        setTimeout(() => setAlert(false), 3000);
    };
  }, [alert]);

  return (
    alert && (
    <div style={style}>
      <p>Oops! Something went wrong.</p>
      <p>{message}</p>
    </div>
    )
  )
};

Alert.propTypes = {
  message: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
};

export default Alert;
