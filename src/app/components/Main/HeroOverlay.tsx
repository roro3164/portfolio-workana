"use client";
import React, { useState, useEffect } from "react";

// 1) On définit le tableau en dehors du composant
const PHRASES = [
  "Creation",
  "Innovation",
  "Development",
  "\"I build ultra-modern design & code for attractive websites.\""
];

export default function HeroOverlay({
  onOverlayFinish,
}: {
  onOverlayFinish?: () => void;
}) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Bloque le scroll quand l'overlay est visible
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  // Tape le texte lettre par lettre
  useEffect(() => {
    if (!showOverlay) return;

    const textTimer = setTimeout(() => {
      // On tape la phrase en cours
      if (charIndex < PHRASES[textIndex].length) {
        setCharIndex(charIndex + 1);
      } 
      // Si la phrase est finie, on passe à la suivante
      else if (textIndex < PHRASES.length - 1) {
        setTimeout(() => {
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 1000);
      } 
      // Si c'était la dernière phrase, on attend et on fade-out
      else {
        setTimeout(() => {
          setFadeOut(true);
        }, 2500);
      }
    }, 80);

    return () => clearTimeout(textTimer);
  }, [charIndex, textIndex, showOverlay]);

  // Gère le fade-out
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  // Quand l'overlay disparaît, on déclenche le callback
  useEffect(() => {
    if (!showOverlay) {
      onOverlayFinish?.();
    }
  }, [showOverlay, onOverlayFinish]);

  if (!showOverlay) return null;

  return (
    <div
      className="
        fixed inset-0
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0F0E12] via-[#0F0E12] to-[#0F0E12]/90
        text-white font-jakarta
        z-50 overflow-hidden
        pointer-events-auto
      "
      style={{
        // Transition plus courte (1.5s) au lieu de 3s
        transition:
          "opacity 1500ms cubic-bezier(0.33,1,0.68,1), " +
          "transform 1500ms cubic-bezier(0.33,1,0.68,1)",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.1)" : "scale(1)",
      }}
    >
      <div className="relative text-center max-w-5xl px-6">
        {/* Décorations en blobs de couleur */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-r from-[#1e90ff] to-transparent rounded-full blur-3xl opacity-30" />

        {PHRASES.map((phrase, idx) => {
          // Choix du gradient selon l'index
          let gradientClasses = "";
          if (idx === 0) {
            gradientClasses = "bg-gradient-to-r from-[#1e90ff] to-white";
          } else if (idx === 1) {
            gradientClasses = "bg-gradient-to-r from-[#8b5cf6] to-white";
          } else if (idx === 2) {
            gradientClasses = "bg-gradient-to-r from-white to-white/80";
          } else if (idx === 3) {
            gradientClasses = "bg-gradient-to-r from-gray-100 to-gray-400";
          }

          return (
            <h1
              key={idx}
              className={`
                font-bold tracking-wide
                ${
                  idx === PHRASES.length - 1 
                    ? "text-7xl italic mt-10 leading-tight" 
                    : "text-6xl"
                }
                ${
                  idx === textIndex
                    ? "opacity-100 h-auto"
                    : idx < textIndex
                      ? "opacity-50 h-auto text-4xl mb-3" 
                      : "opacity-0 h-0 overflow-hidden"
                }
                ${idx === textIndex && idx < PHRASES.length - 1 ? "mb-6" : ""}
                text-transparent bg-clip-text
                ${gradientClasses}
                drop-shadow-sm
              `}
              style={{
                transition: fadeOut
                  ? "transform 1500ms cubic-bezier(0.33,1,0.68,1), opacity 1500ms cubic-bezier(0.33,1,0.68,1)"
                  : "transform 400ms ease-out, opacity 400ms ease-out",
                transform: fadeOut ? "translateY(2rem)" : "translateY(0)",
              }}
            >
              {idx < textIndex ? phrase : phrase.substring(0, charIndex)}
              {/* Curseur clignotant */}
              {idx === textIndex && !fadeOut && (
                <span className="inline-block w-2 h-14 bg-gradient-to-b from-[#1e90ff] to-[#8b5cf6] ml-1 animate-pulse"></span>
              )}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
