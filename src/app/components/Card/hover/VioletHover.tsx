
import React, { ReactNode } from "react";
import styles from "./VioletHover.module.scss";

interface VioletHoverProps {
  children: ReactNode;
  className?: string;
}

export const VioletHover: React.FC<VioletHoverProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      {/* Container pour l'animation de bordure */}
      <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden -z-10">
        <div className={styles.animationContainer}></div>
      </div>
      
      {/* Contenu */}
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};

export default VioletHover;
