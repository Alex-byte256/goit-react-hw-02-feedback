import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';


class Statistics extends Component {
  render() {
    return(
      <ul>
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad: {this.props.bad}</li>
        <li>Total: {this.props.total}</li>
        <li>Positive feedback: {this.props.positivePercentage}</li>
      </ul>
    )
  }
}

FeedbackOptions.propTypes = {
 good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
}

export default Statistics;
