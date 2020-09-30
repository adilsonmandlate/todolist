import React from "react";
import styles from "../styles/Input.module.css";

const Input = ({ label, error, register, ...rest }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error && styles.inputError}`}
        ref={register}
        {...rest}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

export default Input;
