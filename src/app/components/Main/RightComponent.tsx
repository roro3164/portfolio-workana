"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import NeonBackground from "./NeonBackground";

const RightComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[620px]">
      <div 
        className="relative w-full h-auto md:h-[90%]"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        }}
      >
        {/* Neon background behind everything */}
        <div className="absolute left-0 right-0 top-16 sm:top-10 bottom-0 z-0">
          <NeonBackground />
        </div>

        {/* Portrait image */}
        <motion.div
          className="relative z-10 w-full h-auto md:h-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
            src="/image/pictures/portraitDev.webp"
            alt="portrait dev"
            className="w-full h-auto md:h-full object-contain"
            width={1200}
            height={800}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RightComponent;