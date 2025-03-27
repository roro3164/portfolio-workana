"use client";
import React, { useEffect, useState } from "react";

type OverlayMessageProps = {
  /** true => l'overlay se lance (machine à écrire + fade out), false => caché */
  show: boolean;
  /** Callback quand l'overlay disparaît totalement (optionnel) */
  onOverlayFinish?: () => void;
};

/** 4 lignes, chacune positionnée en absolu autour de la ligne laser */
const LINES = [
  {
    text: "L'art du design",
    style: {
      top: "45%",
      left: "35%",
      transform: "translate(-50%, -50%)",
    },
    className: "text-4xl md:text-5xl font-bold",
  },
  {
    text: "La puissance du code",
    style: {
      top: "45%",
      left: "65%",
      transform: "translate(-50%, -50%)",
    },
    className: "text-4xl md:text-5xl font-bold",
  },
  {
    text: "Réunis",
    style: {
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    className: "text-5xl md:text-6xl font-extrabold",
  },
  {
    text: "Créons le site web unique qui propulsera votre succès",
    style: {
      bottom: "28%", // ~5% au-dessus si le bouton est à bottom: "23%"
      left: "0%",    // Aligne le texte pile sur la gauche (même que le bouton)
    },
    className: "text-2xl md:text-3xl font-medium max-w-[60vw] px-4",
  },
];

const OverlayMessage: React.FC<OverlayMessageProps> = ({ show, onOverlayFinish }) => {
  // Index de la ligne qu'on est en train de taper
  const [currentLine, setCurrentLine] = useState(0);
  // Texte déjà tapé pour la ligne en cours
  const [typedText, setTypedText] = useState("");
  // Indique si on enclenche le fade-out final
  const [isFadingOut, setIsFadingOut] = useState(false);
  // Indique si l'overlay est monté dans le DOM
  const [isMounted, setIsMounted] = useState(show);

  // (Re)lance la séquence si show repasse à true
  useEffect(() => {
    if (show) {
      setIsMounted(true);
      setCurrentLine(0);
      setTypedText("");
      setIsFadingOut(false);
    }
  }, [show]);

  // Effet "machine à écrire"
  useEffect(() => {
    if (!isMounted) return; // overlay non affiché => stop

    // Si on a fini toutes les lignes, on déclenche le fade-out
    if (currentLine >= LINES.length) {
      const fadeTimer = setTimeout(() => setIsFadingOut(true), 800);
      return () => clearTimeout(fadeTimer);
    }

    // Sinon, on tape la ligne `currentLine` caractère par caractère
    const lineText = LINES[currentLine].text;
    setTypedText("");
    let i = 0;

    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + lineText.charAt(i));
      i++;
      // Ligne finie ?
      if (i >= lineText.length) {
        clearInterval(typingInterval);
        // Pause avant la ligne suivante
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 700);
      }
    }, 60); // 60 ms / caractère

    return () => clearInterval(typingInterval);
  }, [currentLine, isMounted]);

  // Gestion du fade-out final
  useEffect(() => {
    if (isFadingOut) {
      const timer = setTimeout(() => {
        setIsMounted(false);
        onOverlayFinish?.(); // callback quand overlay disparu
      }, 1000); // durée fade-out
      return () => clearTimeout(timer);
    }
  }, [isFadingOut, onOverlayFinish]);

  // Si l'overlay n'est plus monté => on ne l'affiche pas
  if (!isMounted) return null;

  // Récupère la ligne en cours (ou la dernière si on a déjà tout tapé)
  const lineIndex = Math.min(currentLine, LINES.length - 1);
  const { text, style, className } = LINES[lineIndex];

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black bg-opacity-40
        transition-opacity duration-700
        ${isFadingOut ? "opacity-0" : "opacity-100"}
        pointer-events-none
      `}
    >
      {/* Conteneur relatif plein écran, pour positionner chaque texte en absolute */}
      <div className="relative w-full h-full font-jakarta text-white">
        {/* La ligne en cours de frappe */}
        <div
          style={{ position: "absolute", ...style }}
          className={`${className} transition-all`}
        >
          {typedText}
          {/* Curseur clignotant si on n'a pas terminé toutes les lignes */}
          {!isFadingOut && currentLine < LINES.length && (
            <span
              className="inline-block bg-white ml-1 animate-pulse"
              style={{ width: 2, height: "1.2em", verticalAlign: "middle" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OverlayMessage;
