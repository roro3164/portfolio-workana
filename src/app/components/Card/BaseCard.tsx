"use client";
import React from "react";
import { motion } from "framer-motion";
import { BaseCardProps } from "./types";
import styles from "./styles/card.module.scss";

export const BaseCard = ({
  title,
  children,
  titleAlignment = "",
  cardAlignment = "",
}: BaseCardProps) => (
  <div className={`${styles.cardContainer} ${cardAlignment}`}>
    <div className={styles.hiddenContainer}>
      <div className={styles.animationContainer}></div>
    </div>
    
    <div className={styles.background}>
      <motion.div
        className={styles.glass}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <motion.div
          className={`${styles.titleBox} ${titleAlignment}`}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>{title}</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, x: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default BaseCard;