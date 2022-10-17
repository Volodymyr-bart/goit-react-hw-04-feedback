import { ListOptions, OptionsItem } from './Statistics.styled';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  total,
  bad,
  positivePercentage,
}) => {
  return (
    <ListOptions>
      <OptionsItem>Good: {good}</OptionsItem>
      <OptionsItem>Neutral: {neutral}</OptionsItem>
      <OptionsItem>Bad: {bad}</OptionsItem>
      <OptionsItem>Total: {total}</OptionsItem>
      <OptionsItem>Percent: {positivePercentage}%</OptionsItem>
    </ListOptions>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
