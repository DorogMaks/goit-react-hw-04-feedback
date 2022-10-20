import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  AdditionalStatistics,
  AdditionalStatisticsText,
} from './Statistics.styled';

export const Statistics = ({
  feedback,
  options,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        {options.map(feedbackKey => {
          return (
            <StatisticsItem key={feedbackKey}>
              <p>
                {feedbackKey}: {feedback[feedbackKey]}
              </p>
            </StatisticsItem>
          );
        })}
      </StatisticsList>

      <AdditionalStatistics>
        <AdditionalStatisticsText>Total: {total}</AdditionalStatisticsText>
        <AdditionalStatisticsText>
          Positive feedback: {positivePercentage}%
        </AdditionalStatisticsText>
      </AdditionalStatistics>
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
