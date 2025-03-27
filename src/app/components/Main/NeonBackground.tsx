"use client";

import React, { useEffect } from "react";

const NeonBackground: React.FC = () => {
  useEffect(() => {
    const flicker = (word: HTMLElement) => {
      const delay = Math.random() * 2000 + 1000; // 1 à 3 secondes
      setTimeout(() => {
        word.classList.toggle("dimmed");
        flicker(word);
      }, delay);
    };

    const wordElements = document.querySelectorAll(
      ".neon-word"
    ) as NodeListOf<HTMLElement>;
    wordElements.forEach((word) => flicker(word));
  }, []);

  return (
    <div className="grid grid-rows-4  h-[85%] w-full  translate-y-4 sm:translate-y-20 lg:translate-y-28">
      
      {/* Première ligne */}
      <div className="grid grid-cols-5 gap-x-4 justify-items-center ">

        <span className="neon-word">{"<html>"}</span>
        <span className="neon-word">{"React"}</span>
        <span className="neon-word">{"<div>"}</span>
        <span className="neon-word">{"React"}</span>
        <span className="neon-word">{"<div>"}</span>
        
   
      </div>

      {/* Deuxième ligne */}
      <div className="grid grid-cols-6 gap-x-4 justify-items-center">
        <span className="neon-word">{"<script>"}</span>
        <span className="neon-word">{"Node.js"}</span>
        <span className="neon-word">{"<footer>"}</span>
        <span className="neon-word">{"SQL"}</span>
        <span className="neon-word">{"<section>"}</span>
        <span className="neon-word">{"Docker"}</span>
      </div>

      {/* Troisième ligne */}
      <div className="grid grid-cols-5 gap-x-4 justify-items-center">
        <span className="neon-word">{""}</span>
        <span className="neon-word">{""}</span>
        <span className="neon-word">{"C#"}</span>
        <span className="neon-word">{"HTML5"}</span>
        <span className="neon-word">{"<header>"}</span>
      </div>

      {/* Quatrième ligne */}
      <div className="grid grid-cols-6 gap-x-4 justify-items-center">
        <span className="neon-word">{"<h1>"}</span>
        <span className="neon-word">{"API"}</span>
        <span className="neon-word">{"Git"}</span>
        <span className="neon-word">{"<main>"}</span>
        <span className="neon-word">{"TypeScript"}</span>
        <span className="neon-word">{"</div>"}</span>
      </div>
    </div>
  );
};

export default NeonBackground;
