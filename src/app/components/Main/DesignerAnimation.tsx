"use client";
import React, { useState, useEffect } from "react";

const WORDS = ["Designer", "ui/ux"];

export const DesignerAnimation = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const letterWidth = 15;

  useEffect(() => {
    if (currentLetterIndex < WORDS[currentWord].length) {
      const timer = setTimeout(() => {
        setCurrentLetterIndex((prev) => prev + 1);
      }, 300); // Changé de 200 à 400 pour ralentir l'animation
      return () => clearTimeout(timer);
    } else if (currentWord < WORDS.length - 1) {
      // Continue au prochain mot seulement si ce n'est pas le dernier
      const nextWordTimer = setTimeout(() => {
        setCurrentWord((prev) => prev + 1);
        setCurrentLetterIndex(-1);
      }, 1000);
      return () => clearTimeout(nextWordTimer);
    }
    // Supprimé le else qui réinitialisait à 0
  }, [currentLetterIndex, currentWord]);

  return (
    <div className="easel-animation z-10">
      <div className="writing-area">
        {WORDS.map((word, wordIndex) => (
          <div
            key={word}
            className="word-container"
            style={{
              top: `${wordIndex * (window.innerWidth < 640 ? 15 : 55)}px`,
              opacity: wordIndex <= currentWord ? 1 : 0,
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={`letter ${
                  char === " " ? "space" : ""
                } text-white text-sm sm:text-base lg:text-5xl`}
                style={{
                  opacity:
                    wordIndex < currentWord ||
                    (wordIndex === currentWord &&
                      charIndex <= currentLetterIndex)
                      ? 1
                      : 0,
                  ...(char === " " && { marginRight: "0.5rem" }), // Ajoute un espace pour les espaces
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {currentWord < WORDS.length && (
        <img
          src="/image/pictures/hand.svg"
          alt="Brush"
          className="brush"
          style={{
            left: `${(currentLetterIndex + 1) * letterWidth - 90}px`,
            top: `${currentWord * 45 - 20}px`,
            opacity: currentLetterIndex < WORDS[currentWord].length ? 1 : 0,
          }}
        />
      )}

      <style jsx>{`
        .easel-animation {
          position: absolute;
          top: 0%;
          left: 6%;
          transform: none; /* Enlève le transform qui affectait le positionnement */
          width: 250px;
          z-index: 20;
          pointer-events: none;

          .writing-area {
            position: relative;
            width: 100%;
            height: 200px;
            padding: 0.5rem;
          }

          .word-container {
            position: absolute;
            left: 0;
            white-space: normal;
            line-height: 1.2;
            transition: opacity 0.3s;
          }

          .letter {
            font-family: "Brush Script MT", cursive;

            text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
            display: inline-block;
            transition: opacity 0.2s;
          }

          .space {
            margin-right: 0.5rem;
          }

          .brush {
            position: absolute;
            width: 180px;
            height: 300px;
            object-fit: contain;
            z-index: 2;
            transform: rotate(-15deg);
            transition: all 0.2s ease-out;
            animation: paintStroke 0.4s ease-in-out infinite;
          }

          @keyframes paintStroke {
            0% {
              transform: rotate(-25deg) translateY(0);
            }
            50% {
              transform: rotate(-25deg) translateY(2px);
            }
            100% {
              transform: rotate(-25deg) translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};
