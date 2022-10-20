import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(feedbackKey => {
        return (
          <li key={feedbackKey}>
            <Button type="button" name={feedbackKey} onClick={onLeaveFeedback}>
              {feedbackKey}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
