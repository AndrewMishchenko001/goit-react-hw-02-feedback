import React from "react";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map((option) => (
      <button
        className={s.button}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
