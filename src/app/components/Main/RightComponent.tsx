"use client";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Part de 50px plus bas et invisible
            animate={{ opacity: 1, y: 0 }} // Monte à 0 (position normale) et devient visible
            transition={{
              delay: 14, // Commence après 13s
              duration: 2, // Animation de 2s
              ease: "easeOut",
            }}
          >
            <h2 className="font-mono text-white text-right  text-[12px] sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
              {"<h2>"}Developer{"</h2>"}
            </h2>
          </motion.div>

          <NeonBackground />
        </div>
      </div>
      {/* Image portrait */}
    </div>
  );
};

export default RightComponent;
