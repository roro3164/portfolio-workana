"use client";

import React from "react";
import NeonBackground from "./NeonBackground";

const RightComponent: React.FC = () => {
  return (
    <div
      className="w-full"
    
    >
      <div className="relative h-[30vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] ">
        <div className="absolute inset-0 ">
          <div
            className="absolute top-6 right-2 font-mono"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <h2 className="text-white text-sm sm:text-base lg:text-3xl">
              {"<h2>"}Developer{"</h2>"}
            </h2>
          </div>
          <NeonBackground />
        </div>

        <div
          className="absolute top-0 left-0 w-full h-8 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to bottom, #0F0E12, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-8 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to top, #0F0E12, transparent)",
          }}
        />

        <div className="relative flex justify-center items-center h-full">
          <img
            className="max-h-full  object-contain block"
            src="/image/pictures/portraitDev.png"
            alt="portrait dev"
          />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
