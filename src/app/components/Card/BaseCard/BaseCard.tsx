"use client";
import React from "react";
import { motion } from "framer-motion";
import { BaseCardProps } from "./types";
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
    
      ${cardAlignment} 
    `}
  >
    {/* Title */}
    <motion.div
      className={`
            w-fit mb-6 sm:mb-7 md:mb-8 py-1  
            text-white text-2xl sm:text-3xl md:text-4xl font-jakarta font-semibold
            rounded-lg
            ${styles.titleGradient}}
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
        className=" w-full text-sm sm:text-base md:text-lg lg:text-xl "
        initial={{ opacity: 0, y: 20, x: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
      </div>
      
  

);

export default BaseCard;
