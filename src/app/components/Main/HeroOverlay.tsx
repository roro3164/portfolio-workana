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

  // Block scroll while overlay is visible
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

  // Type text letter by letter
  useEffect(() => {
    if (!showOverlay) return;

    const textTimer = setTimeout(() => {
      if (charIndex < phrases[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else if (textIndex < phrases.length - 1) {
        // Pause before next phrase
        setTimeout(() => {
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 1000);
      } else {
        // On last phrase, wait then fade-out
        setTimeout(() => {
          setFadeOut(true);
        }, 2500);
      }
    }, 80);

    return () => clearTimeout(textTimer);
  }, [charIndex, textIndex, showOverlay]);

  // Handle fade-out (reduced from 3s to 1.5s for better performance)
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  // After overlay is removed, trigger callback
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
        // Reduced transition time from 3s to 1.5s for better performance
        transition:
          "opacity 1500ms cubic-bezier(0.33,1,0.68,1), " +
          "transform 1500ms cubic-bezier(0.33,1,0.68,1)",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.1)" : "scale(1)",
        // Removed filter blur for better performance
      }}
    >
      <div className="relative text-center max-w-5xl px-6">
        {/* Color blobs decorations */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-r from-[#1e90ff] to-transparent rounded-full blur-3xl opacity-30" />

        {phrases.map((phrase, idx) => {
          // Choose gradient
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
                  idx === phrases.length - 1 
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
                ${idx === textIndex && idx < phrases.length - 1 ? "mb-6" : ""}
                text-transparent bg-clip-text
                ${gradientClasses}
                drop-shadow-sm
              `}
              style={{
                // Shorter transition (0.4s) for phrase switching
                transition: fadeOut
                  ? "transform 1500ms cubic-bezier(0.33,1,0.68,1), " +
                    "opacity 1500ms cubic-bezier(0.33,1,0.68,1)"
                  : "transform 400ms ease-out, opacity 400ms ease-out",
                transform: fadeOut ? "translateY(2rem)" : "translateY(0)",
                // Removed filter blur for better performance
              }}
            >
              {idx < textIndex ? phrase : phrase.substring(0, charIndex)}
              {/* Blinking cursor while typing */}
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