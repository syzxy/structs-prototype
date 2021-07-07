import React from "react";
import styles from "./Grid.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Grid = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};

export default Grid;
