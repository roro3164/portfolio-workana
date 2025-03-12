"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Hover.module.scss";

interface HoverProps {
  children: ReactNode;
  className?: string;
}

export const Hover: React.FC<HoverProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // On stocke la valeur actuelle du ref dans une variable locale
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    // On observe 'currentElement' plutôt que 'elementRef.current'
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup : on utilise la même variable 'currentElement'
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.cardContainer} ${isVisible ? styles.visible : ""} ${className}`}
    >
      <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden -z-10">
        <div
          className={`${styles.animationContainer} ${
            isVisible ? styles.active : ""
          }`}
        />
      </div>

      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default Hover;
