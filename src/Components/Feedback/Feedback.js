import { Component } from "react";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (item) => {
    this.setState((prevState) => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    // const positivePercentage = this.countPositiveFeedbackPercentage(
    //   good,
    //   total
    // );
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={this.state}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No one reported yet"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;
