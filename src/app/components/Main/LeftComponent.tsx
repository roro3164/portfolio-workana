"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const LeftComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[650px]">
      <div className="w-full h-[90%] relative">
        {/* Image d'arrière-plan (Next.js) */}
        <Image
          src="/image/pictures/bgDesign0.webp"
          alt="background design"
          className="w-full h-full object-cover xl:object-top object-center"
          width={1200}      // Ajustez selon vos besoins, 1000 -> 1200 px
          height={800}
          priority          // Gardez si vous jugez l'arrière-plan comme LCP
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {/* Portrait avec animation (réduction de durée) */}
        <motion.img
          className="relative z-10 w-full h-full object-contain"
          src="/image/pictures/portraitDesign.webp"
          alt="portrait design"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            // Pas de delay
            duration: 0.8,  // Réduit de 1.5s à 0.8s
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};

export default LeftComponent;
