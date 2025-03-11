"use client";
import React, { useState, useEffect, useRef } from "react";

const WORDS = ["Designer", "ui/ux"];

export const DesignerAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1) Au montage, on lance un timer de 14s avant de commencer l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 14000);

    return () => clearTimeout(timer);
  }, []);

  // Calcul des dimensions responsive ajusté
  const getResponsiveValues = () => {
    if (windowWidth < 640) {
      // Mobile
      return {
        letterWidth: 12,
        wordSpacing: 30,
        brushSize: { width: 100, height: 160 },
        brushOffset: { x: -100, y: -12 },
        containerMaxWidth: 250,
        fontSize: 22,
      };
    } else if (windowWidth < 1024) {
      // Tablette
      return {
        letterWidth: 16,
        wordSpacing: 50,
        brushSize: { width: 150, height: 250 },
        brushOffset: { x: -130, y: -18 },
        containerMaxWidth: 350,
        fontSize: 36,
      };
    } else {
      // Desktop
      return {
        letterWidth: 20,
        wordSpacing: 70,
        brushSize: { width: 200, height: 320 },
        brushOffset: { x: -180, y: -25 },
        containerMaxWidth: 450,
        fontSize: 48,
      };
    }
  };

  // Effet pour mesurer la largeur de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Initialiser la largeur au chargement

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2) Animation pour taper le texte, uniquement si "startAnimation" est true
  useEffect(() => {
    // Si on n'a pas encore démarré l'animation, on ne fait rien
    if (!startAnimation) return;

    // Si on est en train de taper un mot
    if (currentLetterIndex < WORDS[currentWord].length) {
      const timer = setTimeout(() => {
        setCurrentLetterIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } 
    // Si on a fini un mot et qu'il en reste un autre
    else if (currentWord < WORDS.length - 1) {
      const nextWordTimer = setTimeout(() => {
        setCurrentWord((prev) => prev + 1);
        setCurrentLetterIndex(-1);
      }, 1000);
      return () => clearTimeout(nextWordTimer);
    }
  }, [startAnimation, currentLetterIndex, currentWord]);

  const { letterWidth, wordSpacing, brushSize, brushOffset, containerMaxWidth, fontSize } =
    getResponsiveValues();

  return (
    <div
      className="easel-animation z-10"
      ref={containerRef}
      style={{ maxWidth: `${containerMaxWidth}px` }}
    >
      <div className="writing-area">
        {WORDS.map((word, wordIndex) => (
          <div
            key={word}
            className="word-container"
            style={{
              top: `${wordIndex * wordSpacing}px`,
              opacity: wordIndex <= currentWord ? 1 : 0,
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="letter"
                style={{
                  fontSize: `${fontSize}px`,
                  opacity:
                    wordIndex < currentWord ||
                    (wordIndex === currentWord && charIndex <= currentLetterIndex)
                      ? 1
                      : 0,
                  ...(char === " " && { marginRight: "0.5rem" }),
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* 3) Affichage du "pinceau" (brush) uniquement si l'animation est démarrée */}
      {startAnimation && currentWord < WORDS.length && (
        <img
          src="/image/pictures/hand.svg"
          alt="Brush"
          className="brush"
          style={{
            left: `${(currentLetterIndex + 1) * letterWidth + brushOffset.x}px`,
            top: `${currentWord * wordSpacing + brushOffset.y}px`,
            opacity: currentLetterIndex < WORDS[currentWord].length ? 1 : 0,
            width: `${brushSize.width}px`,
            height: `${brushSize.height}px`,
          }}
        />
      )}

      <style jsx>{`
        .easel-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 20;
          pointer-events: none;

          .writing-area {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 120px;
            padding-left: 2px;
            
            @media (min-width: 640px) {
              min-height: 180px;
            }
            
            @media (min-width: 1024px) {
              min-height: 220px;
            }
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
            color: white;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
            display: inline-block;
            transition: opacity 0.2s;
          }

          .brush {
            position: absolute;
            object-fit: contain;
            z-index: 2;
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
