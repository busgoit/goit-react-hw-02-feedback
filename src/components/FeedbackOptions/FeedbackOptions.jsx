import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          data-set={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
