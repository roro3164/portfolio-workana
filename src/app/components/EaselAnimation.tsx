

"use client";
import React, { useState, useEffect } from 'react';

const WORDS = [
  "Prototyping",
  "Wireframing",
  "Accessibility Design", 
  "Design Systems"
];

const EaselAnimation = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const letterWidth = 15;

  useEffect(() => {
    if (currentLetterIndex < WORDS[currentWord].length) {
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
            key={word}
            className="word-container"
            style={{
              top: `${wordIndex * 45}px`,
              opacity: wordIndex <= currentWord ? 1 : 0
            }}
          >
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className={`letter ${char === ' ' ? 'space' : ''}`}
                style={{
                  opacity: wordIndex < currentWord || (wordIndex === currentWord && charIndex <= currentLetterIndex) ? 1 : 0,
                  ...(char === ' ' && { marginRight: '0.5rem' }) // Ajoute un espace pour les espaces
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
          src="/image/pictures/pincel.png" 
          alt="Brush" 
          className="brush"
          style={{
            left: `${(currentLetterIndex + 1) * letterWidth - 20}px`,
            top: `${currentWord * 45 - 20}px`,
            opacity: currentLetterIndex < WORDS[currentWord].length ? 1 : 0
          }}
        />
      )}

      <style jsx>{`
        .easel-animation {
          position: absolute;
          top: 48%;
          left: 50%;
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
          white-space: normal;
          line-height: 1.2;
          transition: opacity 0.3s;
        }

        .letter {
          font-family: 'Brush Script MT', cursive;
          font-size: 2.2rem;
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
          width: 40px;
          height: 100px;
          object-fit: contain;
          z-index: 2;
          transform: rotate(-25deg);
          transition: all 0.2s ease-out;
          animation: paintStroke 0.4s ease-in-out infinite;
        }

        @keyframes paintStroke {
          0% { transform: rotate(-25deg) translateY(0); }
          50% { transform: rotate(-25deg) translateY(2px); }
          100% { transform: rotate(-25deg) translateY(0); }
        }

        @media (max-width: 1024px) {
          .easel-animation {
            transform: translate(-50%, -55%);
          }
        }
      `}</style>
    </div>
  );
};

export default EaselAnimation;