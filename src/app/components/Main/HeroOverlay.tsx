"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type HeroOverlayProps = {
  onOverlayFinish?: () => void;
};

export default function HeroOverlay({ onOverlayFinish }: HeroOverlayProps) {
  const { t } = useTranslation("page");

  // Uniquement la troisième phrase
  const linePersist = t("hero.sentence");

  const [charIndex, setCharIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Démarrer l'animation après un délai
    const startDelay = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // 1.5 secondes de délai avant de commencer

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    if (charIndex < linePersist.length) {
      const timer = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 80); // Animation plus lente (100ms au lieu de 60ms)
      return () => clearTimeout(timer);
    } else {
      // Animation terminée
      onOverlayFinish?.();
    }
  }, [charIndex, linePersist, onOverlayFinish, startAnimation]);

  const textStyle: React.CSSProperties = {
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
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "23%",
          transform: "translateX(-50%)",
          width: "45%",
          textAlign: "left",
          ...textStyle,
        }}
      >
        <h2
          className="font-jakarta italic text-[15px] sm:text-3xl md:text-[39px] font-medium"
          style={{
            display: "block",
            minHeight: "3.5em",
            lineHeight: "1.3",
          }}
        >
          {linePersist.substring(0, charIndex)}
        </h2>
      </div>
    </div>
  );
}