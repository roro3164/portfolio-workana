"use client";
import React, { useState, useEffect } from "react";

type HeroOverlayProps = {
  onOverlayFinish?: () => void;
};

export default function HeroOverlay({ onOverlayFinish }: HeroOverlayProps) {
  // Les deux premières lignes (disparaissent pendant l'animation)
  const linesFade = ["L'art du design", "Puissance du code"];
  // La troisième ligne (reste après l'animation)
  const linePersist =
    "Créons ensemble le site web qui propulsera votre succès";

  // Contrôle de l'overlay
  const [overlayVisible, setOverlayVisible] = useState(true);

  // Machine à écrire pour les lignes 1 et 2
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Une fois terminées les lignes 1 et 2, on passe à la 3e
  const [typingThirdLine, setTypingThirdLine] = useState(false);
  const [charIndex3, setCharIndex3] = useState(0);

  // Texte tapé pour les lignes 1 et 2
  const [typedTexts, setTypedTexts] = useState(["", ""]);

  // Pour gérer le fade-out final (lorsque les 2 premières lignes disparaissent)
  const [fadeOut, setFadeOut] = useState(false);

  // Blocage du scroll pendant que l'overlay est visible
  useEffect(() => {
    if (overlayVisible) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [overlayVisible]);

  // Machine à écrire
  useEffect(() => {
    if (!overlayVisible) return;

    if (!typingThirdLine) {
      // Traitement des lignes 1 et 2
      if (lineIndex >= linesFade.length) {
        setTypingThirdLine(true);
        return;
      }
      const currentLine = linesFade[lineIndex];
      if (charIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setTypedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[lineIndex] += currentLine[charIndex];
            return newTexts;
          });
          setCharIndex(charIndex + 1);
        }, 60);
        return () => clearTimeout(timer);
      } else {
        const pauseTimer = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 700);
        return () => clearTimeout(pauseTimer);
      }
    } else {
      // Traitement de la 3ème ligne
      if (charIndex3 < linePersist.length) {
        const timer = setTimeout(() => {
          setCharIndex3(charIndex3 + 1);
        }, 60);
        return () => clearTimeout(timer);
      } else {
        const fadeTimer = setTimeout(() => {
          setFadeOut(true);
        }, 800);
        return () => clearTimeout(fadeTimer);
      }
    }
  }, [overlayVisible, typingThirdLine, lineIndex, charIndex, charIndex3]);

  // Masquage final de l'overlay et callback une fois le fade-out terminé
  useEffect(() => {
    if (fadeOut) {
      const removeTimer = setTimeout(() => {
        setOverlayVisible(false);
        onOverlayFinish?.();
      }, 1000);
      return () => clearTimeout(removeTimer);
    }
  }, [fadeOut, onOverlayFinish]);

  // Si l'overlay est complètement masqué et qu'on n'est pas en train de taper la 3ème ligne, ne rien afficher
  if (!overlayVisible && !typingThirdLine) return null;

  // Style commun pour toutes les phrases
  const textStyleAllLines: React.CSSProperties = {
    color: "#fff",
    textShadow: `
      0 0 5px rgba(153, 23, 255, 0.8),
      0 0 10px rgba(153, 23, 255, 0.8)
    `,
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* Fond semi-transparent */}
      {overlayVisible && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15, 14, 18, 0.4)",
            transition: "opacity 700ms",
            opacity: fadeOut ? 0 : 1,
          }}
        />
      )}
  
      {/* Les deux premières lignes dans un bloc avec transition */}
      {overlayVisible && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 700ms",
            opacity: fadeOut ? 0 : 1,
          }}
        >
          {/* Ligne 1 (centre gauche) */}
          <h1
            className="font-jakarta italic text-4xl sm:text-4xl md:text-5xl font-bold"
            style={{
              ...textStyleAllLines,
              position: "absolute",
              top: "40%",
              left: "35%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {typedTexts[0]}
          </h1>
  
          {/* Ligne 2 (centre droite) */}
          <h1
            className="font-jakarta italic text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              ...textStyleAllLines,
              position: "absolute",
              top: "40%",
              left: "67%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {typedTexts[1]}
          </h1>
        </div>
      )}
  
      {/* Ligne 3, qui reste affichée */}
      <div
        style={{
          position: "absolute",
          bottom: "13%",
          left: "22.5%",
          transform: "translate(-50%, -50%)",
          width: "45%",
          textAlign: "left",
          ...textStyleAllLines,
        }}
      >
        <h2 className="font-jakarta italic text-2xl sm:text-3xl md:text-[39px] font-medium"
          style={{
            display: "block",
            height: "auto",
            minHeight: "3em", 
          }}>
          {linePersist.substring(0, charIndex3)}
        </h2>
      </div>
    </div>
  );
}
