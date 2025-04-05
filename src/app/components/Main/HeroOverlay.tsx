"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type HeroOverlayProps = {
  onOverlayFinish?: () => void;
};

export default function HeroOverlay({ onOverlayFinish }: HeroOverlayProps) {
  const { t } = useTranslation("page");

  // Traductions
  const linesFade = [t("sentences.first"), t("sentences.second")];
  const linePersist = t("sentences.third");

  const [overlayVisible, setOverlayVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingThirdLine, setTypingThirdLine] = useState(false);
  const [charIndex3, setCharIndex3] = useState(0);
  const [typedTexts, setTypedTexts] = useState(["", ""]);
  const [fadeOut, setFadeOut] = useState(false);

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

  useEffect(() => {
    if (!overlayVisible) return;

    if (!typingThirdLine) {
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

  useEffect(() => {
    if (fadeOut) {
      const removeTimer = setTimeout(() => {
        setOverlayVisible(false);
        onOverlayFinish?.();
      }, 1000);
      return () => clearTimeout(removeTimer);
    }
  }, [fadeOut, onOverlayFinish]);

  if (!overlayVisible && !typingThirdLine) return null;

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

      {overlayVisible && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 700ms",
            opacity: fadeOut ? 0 : 1,
          }}
        >
          <h1
            className="font-jakarta italic text-[15px] sm:text-2xl md:text-4xl font-bold"
            style={{
              ...textStyleAllLines,
              position: "absolute",
              top: "35%",
              left: "35%",
              width: "45%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {typedTexts[0]}
          </h1>
          <h1
            className="font-jakarta italic text-[15px] sm:text-2xl md:text-4xl font-bold"
            style={{
              ...textStyleAllLines,
              position: "absolute",
              top: "35%",
              left: "80%",
              width: "45%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {typedTexts[1]}
          </h1>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "23%",
          transform: "translateX(-50%)",
          width: "45%",
          textAlign: "left",
          ...textStyleAllLines,
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
          {linePersist.substring(0, charIndex3)}
        </h2>
      </div>
    </div>
  );
}
