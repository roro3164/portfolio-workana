

"use client";

import React, { useState, useEffect } from "react";

interface NeonWordProps {
  word: string;
  position?: string;
  className?: string;
  minFlickerDelay?: number;
  maxFlickerDelay?: number;
}

export const NeonWord: React.FC<NeonWordProps> = ({
  word,
  position,
  className,
  minFlickerDelay = 3000, // Délai min plus long (3 secondes)
  maxFlickerDelay = 8000  // Délai max plus long (8 secondes)
}) => {
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    // Fonction pour générer un délai aléatoire
    const getRandomDelay = () => 
      Math.random() * (maxFlickerDelay - minFlickerDelay) + minFlickerDelay;
    
    // Configure l'effet de clignotement
    const flickerTimer = setTimeout(() => {
      setIsDimmed(prev => !prev);
    }, getRandomDelay());
    
    // Nettoie le timer lors du démontage du composant
    return () => clearTimeout(flickerTimer);
  }, [isDimmed, minFlickerDelay, maxFlickerDelay]);

  return (
    <span
      className={`neon-word ${isDimmed ? "dimmed" : ""} ${position || ""} ${className || ""}`}
    >
      {word}
    </span>
  );
};

export default NeonWord;