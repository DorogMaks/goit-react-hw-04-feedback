import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const stateName = evt.target.name;
    this.setState(prevState => {
      return { [stateName]: prevState[stateName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const feedbackKeys = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={feedbackKeys}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            feedback={this.state}
            options={feedbackKeys}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
