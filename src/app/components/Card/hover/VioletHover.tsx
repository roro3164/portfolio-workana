"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./VioletHover.module.scss";

interface VioletHoverProps {
  children: ReactNode;
  className?: string;
}

export const VioletHover: React.FC<VioletHoverProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.cardContainer} ${
        isVisible ? styles.visible : ""
      } ${className}`}
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

export default VioletHover;
