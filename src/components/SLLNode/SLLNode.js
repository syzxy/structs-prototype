import React from "react";
import styles from "./SLLNode.module.css";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

export default function SLListNode({ children }) {
  return (
    <motion.div
      className={styles.container}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.divider}></span>
      <span className={styles.pointer}>
        <BsDot />
      </span>
    </motion.div>
  );
}
