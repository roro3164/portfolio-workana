"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./VioletHover.module.scss";

interface VioletHoverProps {
  children: ReactNode;
  className?: string;
}

export const VioletHover: React.FC<VioletHoverProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Met à jour l'état dans les deux cas
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.7, // Déclenchement à 30% de visibilité (corrigé)
        rootMargin: "0px", // Ajusté pour une détection plus naturelle
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`${styles.cardContainer} ${isVisible ? styles.visible : ''} ${className}`}
    >
      <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden -z-10">
        {/* Animation liée uniquement à isVisible */}
        <div className={`${styles.animationContainer} ${isVisible ? styles.active : ''}`}></div>
      </div>
      
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};

export default VioletHover;