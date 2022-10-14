import PropTypes from 'prop-types';
import { TitleNotification } from './Notification.styled';
export const Notification = ({ message }) => {
  return <TitleNotification>{message}</TitleNotification>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
