import React, { ReactNode } from "react";
import styles from "./Hover.module.scss";

interface HoverProps {
  children: ReactNode;
  className?: string;
}

export const Hover: React.FC<HoverProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      {/* Container pour l'animation de bordure */}
      <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden -z-10">
        <div className={styles.animationContainer}></div>
      </div>
      
      {/* Contenu avec arrière-plan qui devient opaque au hover */}
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};

export default Hover;