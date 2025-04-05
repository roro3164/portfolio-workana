"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./VioletHover.module.scss";

interface VioletHoverProps {
  children: ReactNode;
  className?: string;
  color?: string; // Nouvelle propriété
}

export const VioletHover: React.FC<VioletHoverProps> = ({
  children,
  className = "",
  color = "violet" // Valeur par défaut
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

  // Obtenir les valeurs de couleur pour l'animation
  const { primary, secondary, shadow } = getHoverColors(color);

  return (
    <div
      ref={elementRef}
      className={`${styles.cardContainer} ${
        isVisible ? styles.visible : ""
      } ${className}`}
      style={{ 
        '--hover-shadow': shadow 
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden -z-10">
        <div
          className={`${styles.animationContainer} ${
            isVisible ? styles.active : ""
          }`}
          style={{ 
            '--hover-color-primary': primary,
            '--hover-color-secondary': secondary
          } as React.CSSProperties}
        />
      </div>

      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

// Fonction utilitaire pour obtenir les valeurs de couleur d'effet de survol
function getHoverColors(color: string): { primary: string; secondary: string; shadow: string } {
  switch (color) {
    case 'blue':
      return {
        primary: 'rgba(59, 130, 246, 0.9)',
        secondary: 'rgba(37, 99, 235, 0.8)',
        shadow: '#3b82f680'
      };
    case 'green':
      return {
        primary: 'rgba(34, 197, 94, 0.9)',
        secondary: 'rgba(22, 163, 74, 0.8)',
        shadow: '#22c55e80'
      };
    case 'orange':
      return {
        primary: 'rgba(212, 175, 55, 0.9)',
        secondary: 'rgba(184, 151, 46, 0.8)',
        shadow: '#d4af3780'
      };
    case 'red':
      return {
        primary: 'rgba(239, 68, 68, 0.9)',
        secondary: 'rgba(220, 38, 38, 0.8)',
        shadow: '#ef444480'
      };
    case 'violet':
    default:
      return {
        primary: 'rgba(139, 92, 246, 0.9)',
        secondary: 'rgba(124, 58, 237, 0.8)',
        shadow: '#8b5cf680'
      };
  }
}

export default VioletHover;