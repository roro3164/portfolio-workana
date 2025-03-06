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

  // Largeur pour le pinceau (à chaque lettre on avance de 15px)
  const letterWidth = 15;

  // lineSpacing pour séparer les lignes : 60 (desktop), 30 (mobile)
  const [lineSpacing, setLineSpacing] = useState(60);

  // Au montage ou au resize, on ajuste lineSpacing
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1023) {
        setLineSpacing(40);  // plus compact en mobile
      } else {
        setLineSpacing(60);  // espacement standard
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation : incrémente currentLetterIndex, puis passe au mot suivant, etc.
  useEffect(() => {
    const wordLength = WORDS[currentWord].length;

    if (currentLetterIndex < wordLength) {
      const timer = setTimeout(() => {
        setCurrentLetterIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      const nextWordTimer = setTimeout(() => {
        if (currentWord < WORDS.length - 1) {
          setCurrentWord(prev => prev + 1);
          setCurrentLetterIndex(-1);
        } else {
          // on reboucle au début
          setCurrentWord(0);
          setCurrentLetterIndex(-1);
        }
      }, 1000);
      return () => clearTimeout(nextWordTimer);
    }
  }, [currentLetterIndex, currentWord]);

  return (
    <div className="easel-animation">
      <div className="writing-area">
        {WORDS.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className="word-container"
            style={{
              // On utilise lineSpacing pour espacer verticalement
              top: `${wordIndex * lineSpacing}px`,
              opacity: wordIndex <= currentWord ? 1 : 0,
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={`letter ${char === " " ? "space" : ""}`}
                style={{
                  opacity:
                    wordIndex < currentWord ||
                    (wordIndex === currentWord && charIndex <= currentLetterIndex)
                      ? 1
                      : 0,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Le pinceau : suit le currentLetterIndex et currentWord * lineSpacing */}
      {currentWord < WORDS.length && (
        <img
          src="/image/pictures/pincel.png"
          alt="Brush"
          className="brush"
          style={{
            left: `${(currentLetterIndex + 1) * letterWidth + 30}px`,
            top: `${currentWord * lineSpacing + 10}px`,
            opacity: currentLetterIndex < WORDS[currentWord].length ? 1 : 0,
          }}
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
          transition: opacity 0.3s;
        }

        .letter {
          font-family: "Brush Script MT", cursive;
          font-size: 2.5rem;
          color: #000;
          text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
          display: inline-block;
          transition: opacity 0.2s;
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
          transition: all 0.2s ease-out;
          animation: paintStroke 0.4s ease-in-out infinite;
        }

        @keyframes paintStroke {
          0% {
            transform: rotate(-15deg) translateY(0);
          }
          50% {
            transform: rotate(-15deg) translateY(2px);
          }
          100% {
            transform: rotate(-15deg) translateY(0);
          }
        }

        /* Ta media query pour repositionner .easel-animation en dessous de 1024px */
        @media (max-width: 1024px) {
          .easel-animation {
            top: 54%;
            left: 61%;
          }

          .letter {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
