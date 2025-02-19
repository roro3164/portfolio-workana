"use client";

import React from "react";
import NeonBackground from "./NeonBackground";


const RightComponent: React.FC = () => {
  return (
    //conteneur principal - même structure que LeftComponent
    <div className="relative w-full md:h-[650px]">
      
      {/* Conteneur principal pour l'image et le background */}
      <div className="relative w-full h-[90%]">
    
        
      <img
          className="w-full h-full object-contain "
          src="/image/pictures/portraitDev.png"
          alt="portrait dev"
        />
        {/* Background neon */}
        <div className="absolute -z-10 inset-0 ;">
        <h2 className="font-mono text-white  text-right  text-sm sm:text-base lg:text-3xl">
             {"<h2>"}Developer{"</h2>"}
           </h2>
        
          <NeonBackground />
        </div>
      </div>
       {/* Image portrait */}
       
    </div>
  );
};

export default RightComponent;