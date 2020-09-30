import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ type = "button", main, children, ...rest }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${main && styles.main}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
