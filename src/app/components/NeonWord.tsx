"use client";

import React, { useEffect} from "react";

interface NeonWordProps {
  word: string;
  position?: string;
  className?: string;
}

export const NeonWord: React.FC<NeonWordProps> = ({ word, position, className }) => {

    useEffect(() => {
        const flicker = (word: HTMLElement) => {
          const delay = Math.random() * 2000 + 1000; // 1 à 3 secondes
          setTimeout(() => {
            word.classList.toggle("dimmed");
            flicker(word);
          }, delay);
        };
    
        const wordElements = document.querySelectorAll(
          ".neon-word"
        ) as NodeListOf<HTMLElement>;
        wordElements.forEach((word) => flicker(word));
      }, []);

  return (
    <span
        className={`neon-word ${position || ""} ${className || ""}`}
    >
      {word}
    </span>
  );
};

export default NeonWord;