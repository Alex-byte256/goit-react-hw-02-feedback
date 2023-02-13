import { Component } from 'react';
import css from './Feedback.module.css'

class Feedback extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
      })
    )
  }

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
      })
    )
  }

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
      })
    )
  }

  countTotalFeedback = () => {
 return Object.keys(this.state).reduce((acc, el) => {
   return acc + this.state[el]
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
    const {good ,neutral ,bad} =this.state
    return(
      <div>
        <h2>Please leave feedback</h2>
        <ul className={css.buttonList}>
        <li> <button onClick={this.addGoodFeedback}>Good</button></li>
         <li><button onClick={this.addNeutralFeedback} >Neutral</button></li>
       <li> <button onClick={this.addBadFeedback}>Bad</button></li>
        </ul>
        <h2>Staticks</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    )
  }
}

export default Feedback;
