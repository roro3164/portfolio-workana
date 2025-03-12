"use client";
import { motion } from "framer-motion";
import React from "react";
import NeonBackground from "./NeonBackground";

const RightComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[650px]">
      <div className="relative w-full h-[90%]">
        {/* Portrait dev (réduction de durée, pas de delay) */}
        <motion.img
          className="relative z-0 w-full h-full object-contain"
          src="/image/pictures/portraitDev.webp"
          alt="portrait dev"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8, // Au lieu de 1.5s
            ease: "easeOut",
          }}
        />

        {/* Texte "Developer" et NeonBackground */}
        <div className="absolute -z-10 inset-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              // Pas de delay
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h2 className="font-mono text-white text-right text-[12px] sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
              {"<h2>"}Developer{"</h2>"}
            </h2>
          </motion.div>

          <NeonBackground />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
