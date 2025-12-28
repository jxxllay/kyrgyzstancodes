import React from "react";
import styles from "./buttonPrimary.module.css";

const ButtonPrimary = ({ children, onClick, className = "" }) => {
  return (
    <button className={`${styles.button} ${styles[className] || className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
