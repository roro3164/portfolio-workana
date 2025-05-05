"use client";
import React from "react";
import Image from "next/image";

export const DesignerAnimation = () => {
  return (
    <div className="absolute inset-0 w-full z-20 pointer-events-none">
      <div className="relative">
        {/* Texte "Designer" collé en haut à gauche */}
        <div className="absolute left-0 top-0">
          <h2
            className="font-brush text-white text-3xl sm:text-4xl md:text-5xl"
            style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.7)" }}
          >
            Designer
          </h2>
        </div>
        {/* Texte "ui/ux" directement sous "Designer" */}
        <div className="absolute left-0 top-10 md:top-16">
          <h2
            className="font-brush text-white text-3xl sm:text-4xl md:text-5xl"
            style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.7)" }}
          >
            ui/ux
          </h2>
        </div>
        {/* Main représentée par une balise Image, affichée seulement à partir de 1024px */}
        <div className="absolute top-28 left-20 hidden lg:block">
          <Image
            src="/image/pictures/hand.svg"
            alt="Main illustrant le design"
            width={140}
            height={160}
            className="w-28 sm:w-32 md:w-36 h-auto"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};
