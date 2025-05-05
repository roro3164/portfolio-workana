"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type HeroOverlayProps = {
  onOverlayFinish?: () => void;
};

export default function HeroOverlay({ onOverlayFinish }: HeroOverlayProps) {
  const { t } = useTranslation("page");
  const linePersist = t("hero.sentence");

  const [charIndex, setCharIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  // Démarre l'animation après 1s
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    if (charIndex < linePersist.length) {
      const timer = setTimeout(() => setCharIndex(idx => idx + 1), 80);
      return () => clearTimeout(timer);
    } else {
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
    <div className="absolute inset-0 pointer-events-none z-10">
      <div
        className="absolute bottom-[12%] md:bottom-[14%] text-left"
        style={textStyle}
      >
        {/* H1 statique masqué pour SEO */}
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          {linePersist}
        </h1>

        {/* H1 animé */}
        <h1
          className="font-jakarta italic text-lg sm:text-3xl md:text-[39px] font-medium block min-h-[3.5em] leading-[1.3]"
        >
          {linePersist.substring(0, charIndex)}
        </h1>
      </div>
    </div>
  );
}
