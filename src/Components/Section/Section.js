import React from "react";
import PropTypes from "prop-types";
import s from "../Feedback/Feedback.module.css";

export default function Section({ title, children }) {
  return (
    <>
      {title && <h1 className={s.header}>{title}</h1>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
