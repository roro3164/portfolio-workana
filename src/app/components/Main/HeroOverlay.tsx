"use client";
import React, { useState, useEffect } from "react";

// Tableau des phrases à afficher
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
  const [isMobile, setIsMobile] = useState(false);

  // Détection du mobile (largeur < 640px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Bloque le scroll tant que l'overlay est visible
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

  // Animation type "machine à écrire" pour le texte
  useEffect(() => {
    if (!showOverlay) return;

    const textTimer = setTimeout(() => {
      // On affiche progressivement la phrase en cours
      if (charIndex < PHRASES[textIndex].length) {
        setCharIndex(charIndex + 1);
      } 
      // Passage à la phrase suivante
      else if (textIndex < PHRASES.length - 1) {
        setTimeout(() => {
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 1000);
      } 
      // Dernière phrase terminée, déclenchement du fade-out
      else {
        setTimeout(() => {
          setFadeOut(true);
        }, 2500);
      }
    }, 80);

    return () => clearTimeout(textTimer);
  }, [charIndex, textIndex, showOverlay]);

  // Gère le fade-out et la disparition de l'overlay
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  // Déclenche le callback quand l'overlay disparaît
  useEffect(() => {
    if (!showOverlay) {
      onOverlayFinish?.();
    }
  }, [showOverlay, onOverlayFinish]);

  if (!showOverlay) return null;

  return (
    <div
      className="
        hero-overlay fixed inset-0
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0F0E12] via-[#0F0E12] to-[#0F0E12]/90
        text-white font-jakarta
        z-50 overflow-hidden
        pointer-events-auto
      "
      style={{
        transition:
          "opacity 1500ms cubic-bezier(0.33,1,0.68,1), transform 1500ms cubic-bezier(0.33,1,0.68,1)",
        opacity: fadeOut ? 0 : 1,
        // Sur mobile, on évite le scale pour ne pas “zoomer”
        transform: isMobile
          ? (fadeOut ? "translateY(2rem)" : "translateY(0)")
          : (fadeOut ? "scale(1.1)" : "scale(1)"),
      }}
    >
      <div className="relative text-center max-w-5xl px-4 sm:px-6">
        {/* Blobs décoratifs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-r from-[#1e90ff] to-transparent rounded-full blur-3xl opacity-30" />

        {PHRASES.map((phrase, idx) => {
          // Choix du gradient en fonction de l'index
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

          // Ajuster la taille du texte selon l'index et l'écran
          // - Les premières phrases sont plus petites en mobile
          // - La dernière phrase est un peu plus grande
          const textSizeClasses = idx === PHRASES.length - 1
            ? "text-3xl sm:text-5xl md:text-7xl italic leading-tight mt-4 sm:mt-10"
            : "text-2xl sm:text-4xl md:text-6xl";

          return (
            <h1
              key={idx}
              className={`
                font-bold tracking-wide
                ${textSizeClasses}
                ${
                  idx === textIndex
                    ? "opacity-100 h-auto"
                    : idx < textIndex
                      ? "opacity-50 h-auto text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
                      : "opacity-0 h-0 overflow-hidden"
                }
                ${idx === textIndex && idx < PHRASES.length - 1 ? "mb-4 sm:mb-6" : ""}
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
                <span
                  className="inline-block w-2 ml-1 bg-gradient-to-b from-[#1e90ff] to-[#8b5cf6] 
                             animate-pulse
                             h-5 sm:h-8 md:h-14 align-middle"
                  style={{ verticalAlign: "middle" }}
                />
              )}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
