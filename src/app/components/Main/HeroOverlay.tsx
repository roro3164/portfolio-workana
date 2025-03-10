"use client";
import React, { useState, useEffect } from "react";

export default function HeroOverlay({
  onOverlayFinish,
}: {
  onOverlayFinish?: () => void;
}) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const phrases = [
    "Creation",
    "Innovation",
    "Development",
    "\"I build ultra-modern design & code for attractive websites.\""
  ];

  /**
   * 1) Bloquer le scroll tant que l'overlay est visible
   */
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      // Dès que l'overlay est retiré, on rétablit le scroll
      document.body.style.overflow = "";
    }

    // Nettoyage si le composant se démonte
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  /**
   * 2) Frappe lettre par lettre
   */
  useEffect(() => {
    if (!showOverlay) return;

    const textTimer = setTimeout(() => {
      if (charIndex < phrases[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else if (textIndex < phrases.length - 1) {
        // Pause avant la phrase suivante
        setTimeout(() => {
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 1000);
      } else {
        // Sur la dernière phrase, attendre 2,5 s puis lancer le fade-out
        setTimeout(() => {
          setFadeOut(true);
        }, 2500);
      }
    }, 80);

    return () => clearTimeout(textTimer);
  }, [charIndex, textIndex, showOverlay]);

  /**
   * 3) Gestion du fade-out (3 s)
   */
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        // Après 3 s, on retire l'overlay du DOM
        setShowOverlay(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  /**
   * 4) Quand l'overlay est retiré, onOverlayFinish (s'il existe)
   */
  useEffect(() => {
    if (!showOverlay) {
      onOverlayFinish?.();
    }
  }, [showOverlay, onOverlayFinish]);

  /**
   * 5) Si l'overlay est retiré, on ne rend rien
   */
  if (!showOverlay) return null;

  return (
    <div
      className="
        fixed inset-0
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0F0E12] via-[#0F0E12] to-[#0F0E12]/90
        text-white text-poppins
        z-50 overflow-hidden
        pointer-events-auto
      "
      style={{
        // Transition de 3 s pour le fade-out
        transition:
          "opacity 3000ms cubic-bezier(0.33,1,0.68,1), " +
          "transform 3000ms cubic-bezier(0.33,1,0.68,1), " +
          "filter 3000ms cubic-bezier(0.33,1,0.68,1)",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.1)" : "scale(1)",
        filter: fadeOut ? "blur(8px)" : "none"
      }}
    >
      <div className="relative text-center max-w-5xl px-6">
        {/* Taches de couleurs décoratives */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-r from-[#1e90ff] to-transparent rounded-full blur-3xl opacity-30" />

        {phrases.map((phrase, idx) => {
          // Choix du gradient
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
                font-normal tracking-wide
                ${
                  idx === phrases.length - 1 
                    ? "text-7xl italic mt-10 leading-tight" 
                    : "text-6xl"
                }
                ${
                  idx === textIndex
                    ? "opacity-100 h-auto"
                    : idx < textIndex
                      ? "opacity-40 h-auto text-4xl mb-3"
                      : "opacity-0 h-0 overflow-hidden"
                }
                ${idx === textIndex && idx < phrases.length - 1 ? "mb-6" : ""}
                text-transparent bg-clip-text
                ${gradientClasses}
              `}
              style={{
                // Transition plus courte (0,5 s) pour la frappe / le switch de phrase
                transition: fadeOut
                  ? "transform 3000ms cubic-bezier(0.33,1,0.68,1), " +
                    "filter 3000ms cubic-bezier(0.33,1,0.68,1), " +
                    "opacity 3000ms cubic-bezier(0.33,1,0.68,1)"
                  : "transform 500ms ease-out, opacity 500ms ease-out",
                transform: fadeOut ? "translateY(2rem) scale(1.05)" : "translateY(0)",
                filter: fadeOut ? "blur(4px)" : "none"
              }}
            >
              {idx < textIndex ? phrase : phrase.substring(0, charIndex)}
              {/* Curseur clignotant si on tape encore */}
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
