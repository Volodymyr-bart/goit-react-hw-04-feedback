import PropTypes from 'prop-types';
import { ListButton, ListItem, Button } from './FeedbackOption.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(key => (
        <ListItem key={key}>
          <Button
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </Button>
        </ListItem>
      ))}
    </ListButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
