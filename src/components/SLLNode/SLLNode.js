import React, { useState, useEffect } from "react";
import styles from "./SLLNode.module.css";
import { BsDot } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: [1.2, 1],
    transition: {
      type: "spring",
      stiffness: 900,
      damping: 30,
      mass: 1,
    },
  },
  hidden: { opacity: 0, x: -100 },
  exit: { opacity: 0, scale: 1.2 },
  tapped: { opacity: 1, scale: 0.85 },
};

export default function SLListNode({ children, onDeletNode }) {
  const [showButton, setShowButton] = useState(false);

  const deleteNode = () => {
    onDeletNode();
  };

  return (
    <motion.div
      layout
      className={styles.container}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileTap="tapped"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <motion.span layout className={styles.text}>
        {children}
      </motion.span>
      <motion.span layout className={styles.divider}></motion.span>
      <motion.span layout className={styles.pointer}>
        <BsDot />
      </motion.span>
      <motion.button
        className={clsx(
          styles.btn,
          showButton ? styles.visible : styles.hidden
        )}
        onClick={deleteNode}
      >
        <MdCancel />
      </motion.button>
    </motion.div>
  );
}
