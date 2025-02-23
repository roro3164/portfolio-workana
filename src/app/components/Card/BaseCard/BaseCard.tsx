"use client";
import React from "react";
import { motion } from "framer-motion";
import { BaseCardProps } from "../types";
import styles from "./BaseCard.module.scss"; // Nouveau fichier réduit

export const BaseCard = ({
  title,
  children,
  titleAlignment = "",
  cardAlignment = "",
}: BaseCardProps) => (
  <div
    className={`
      relative w-full p-1 
      transition-transform duration-600 hover:scale-105
      ${cardAlignment}
      ${styles.cardContainer} 
    `}
  >
    {/* Container pour l'animation de bordure */}
    <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden -z-10">
      <div className={styles.animationContainer}></div>
    </div>

    {/* Background */}
    <div className="rounded-lg bg-[#1A181E] border border-white/25">
      <motion.div
        className={`
          rounded-lg p-4 sm:p-6 md:p-8 lg:p-10
          bg-gradient-to-b from-white/20 to-transparent
          border border-white/30 shadow-2xl
          ${styles.glass}
        `}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {/* Title */}
        <motion.div
          className={`
            w-fit mb-6 sm:mb-7 md:mb-8 py-1 px-6 sm:px-7 md:px-8
            text-white text-lg sm:text-xl md:text-2xl font-jakarta font-semibold
            rounded-lg
            ${styles.titleBox}
            ${titleAlignment}
          `}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>{title}</h3>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full text-sm sm:text-base md:text-lg lg:text-xl"
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
