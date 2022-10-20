import PropTypes from 'prop-types';

export const Statistics = ({
  feedback,
  options,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {options.map(feedbackKey => {
          return (
            <li key={feedbackKey}>
              <p>
                {feedbackKey}: {feedback[feedbackKey]}
              </p>
            </li>
          );
        })}
      </ul>

      <div>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
