import { PropTypes } from 'prop-types';

const Alert = ({message}) => {
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{message}</p>
    </div>
  )
};

Alert.propTypes = {
  message: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
};

export default Alert;
