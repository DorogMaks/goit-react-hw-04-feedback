import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';
import { Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const feedbackKeys = Object.keys(feedback);
  const feedbackValues = Object.values(feedback);

  const handleIncrement = evt => {
    const stateName = evt.target.name;

    switch (stateName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return feedbackValues.reduce((acc, value) => acc + value, 0);
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={feedbackKeys}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title={'Statistics'}>
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            feedback={feedback}
            options={feedbackKeys}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
};
