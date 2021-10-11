import PropTypes from "prop-types";
import s from "../Feedback/Feedback.module.css";

const Notification = ({ message }) => {
  return <h2 className={s.text}>{message}</h2>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
