"use client";
import React, { useEffect, useState } from "react";

const WORDS = [
  "Prototyping",
  "Wireframing",
  "Accessibility Design",
  "Design Systems",
];

export default function EaselAnimation() {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);

  // Largeur approximative pour chaque lettre (peut ajuster pour correspondre au font)
  const letterWidth = 12;

  // Espacement entre les lignes : 60px desktop, 40px mobile
  const [lineSpacing, setLineSpacing] = useState(60);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function handleResize() {
      const desktop = window.innerWidth > 1023;
      setLineSpacing(desktop ? 60 : 40);
      setIsDesktop(desktop);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const wordLength = WORDS[currentWord].length;
    if (currentLetterIndex < wordLength) {
      const timer = setTimeout(() => setCurrentLetterIndex(idx => idx + 1), 180);
      return () => clearTimeout(timer);
    }
    const nextTimer = setTimeout(() => {
      setCurrentWord(w => (w < WORDS.length - 1 ? w + 1 : 0));
      setCurrentLetterIndex(-1);
    }, 1000);
    return () => clearTimeout(nextTimer);
  }, [currentLetterIndex, currentWord]);

  // Calcul du décalage du pinceau (décalage supplémentaire en desktop)
  const baseLeft = Math.max(0, currentLetterIndex) * letterWidth + 10;
  const extraOffset = isDesktop ? 30 : 0;
  const brushLeft = baseLeft + extraOffset;
  const brushTop = currentWord * lineSpacing;

  return (
    <div className="easel-animation">
      <div className="writing-area">
        {WORDS.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className="word-container"
            style={{ top: `${wordIndex * lineSpacing}px`, opacity: wordIndex <= currentWord ? 1 : 0 }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={char === " " ? "letter space" : "letter"}
                style={{ opacity: wordIndex < currentWord || charIndex <= currentLetterIndex ? 1 : 0 }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Pinceau suit lettre en cours, avec offset desktop uniquement */}
      {currentLetterIndex >= 0 && currentLetterIndex < WORDS[currentWord].length && (
        <img
          src="/image/pictures/pincel.webp"
          alt="Brush"
          className="brush"
          style={{ left: `${brushLeft}px`, top: `${brushTop}px` }}
        />
      )}

      <style jsx>{`
        .easel-animation {
          position: absolute;
          top: 44%;
          left: 49%;
          transform: translate(-50%, -60%);
          width: 250px;
          z-index: 20;
          pointer-events: none;
        }
        .writing-area {
          position: relative;
          width: 100%;
          height: 200px;
          padding: 0.5rem;
        }
        .word-container {
          position: absolute;
          left: 0;
          white-space: nowrap;
          text-align: left;
          transition: opacity 0.3s ease-in;
        }
        .letter {
          font-family: "Brush Script MT", cursive;
          font-size: 2.5rem;
          color: #000;
          text-shadow: 1px 1px 1px rgba(255,255,255,0.5);
          display: inline-block;
          transition: opacity 0.15s ease-out;
        }
        .space {
          margin-right: 0.5rem;
        }
        .brush {
          position: absolute;
          width: 100px;
          height: 150px;
          object-fit: contain;
          z-index: 2;
          transform: rotate(-15deg);
          transition: left 0.15s ease-out, top 0.15s ease-out;
          animation: paintStroke 0.4s ease-in-out infinite;
        }
        @keyframes paintStroke {
          0%,100% { transform: rotate(-15deg) translateY(0); }
          50% { transform: rotate(-15deg) translateY(2px); }
        }
        @media (max-width: 1280px) {
          .easel-animation { top: 54%; left: 56%; }
          .letter { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}
