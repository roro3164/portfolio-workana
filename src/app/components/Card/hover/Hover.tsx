"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Hover.module.scss";

interface HoverProps {
  children: ReactNode;
  className?: string;
}

export const Hover: React.FC<HoverProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.9,
        rootMargin: "0px"
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
        <div className={`${styles.animationContainer} ${isVisible ? styles.active : ''}`}></div>
      </div>
      
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};

export default Hover;