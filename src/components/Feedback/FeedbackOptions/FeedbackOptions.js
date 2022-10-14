import PropTypes from 'prop-types';
import { ListButton, ListItem, Button } from './FeedbackOption.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ListButton>
      {keys.map(key => (
        <ListItem key={key}>
          <Button onClick={() => onLeaveFeedback(key)}>{key}</Button>
        </ListItem>
      ))}
    </ListButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
