import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class Feedback extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };



  countTotalFeedback = () => {
 return Object.keys(this.state).reduce((acc, elem) => {
   return acc + this.state[elem]
 },0)
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFb = this.state.good;

    const perGood = `${(goodFb/total * 100).toFixed(2)}%`;
    if (perGood ==="NaN%"){
      return "0%"
    }
    return perGood;
  }

  render() {
    const {good ,neutral ,bad} =this.state;
    return(
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions  options={["good","neutral","bad"]} onLeaveFeedback={this.handleLeaveFeedback}/>
        </Section>
        <Section title={"Staticks"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    )
  }
}

export default Feedback;
