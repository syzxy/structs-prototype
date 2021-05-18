import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Arrow.module.css";

const Arrow = () => {
  return (
    <div className={styles.container}>
      <BsArrowRight className={styles.arrow} />
    </div>
  );
};

export default Arrow;
