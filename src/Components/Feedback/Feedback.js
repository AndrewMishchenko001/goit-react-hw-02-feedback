import { Component } from "react";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions";
import s from "./Feedback.module.css";

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

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={this.state}
          />
        </Section>
        <Section title="Statistics" className={s.statistics}>
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
      </div>
    );
  }
}
export default Feedback;
