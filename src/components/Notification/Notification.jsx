import PropTypes from 'prop-types';
import { Info } from './Notification.styled';

const Notification = ({ message }) => {
  return <Info>{message}</Info>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
