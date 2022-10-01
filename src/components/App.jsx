import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  incrementFeedback = e => {
    const stateKey = e.currentTarget.dataset.set;
    console.log('stateKey', stateKey);
    console.log('prevState', this.state);
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });

    console.log('state', this.state);
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    const total = good + neutral + bad;
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
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </div>
        <div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      </>
    );
  }
}
