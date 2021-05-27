import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Arrow.module.css";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Arrow = () => {
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      <BsArrowRight className={styles.arrow} />
    </motion.div>
  );
};

export default Arrow;
