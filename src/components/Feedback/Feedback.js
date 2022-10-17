// import PropTypes from 'prop-types';

// import React, { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const options = ['good', 'neutral', 'bad'];

  const positivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const updateAmountFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={updateAmountFeedback}
        />
      </Section>
      <Section title="Statistics"></Section>

      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={positivePercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
