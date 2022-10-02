import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  incrementFeedback = e => {
    const stateKey = e.currentTarget.dataset.set;

    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    const feedbackValues = Object.values(this.state);
    const total = feedbackValues.reduce((acc, value) => acc + value, 0);
    return total;
  };

  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) return 0;

    const positiveFeedback = good / totalFeedback;
    const positiveFeedbackPercentage = (positiveFeedback * 100).toFixed(0);

    return Number(positiveFeedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const stateKey = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKey}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        {total === 0 ? (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
