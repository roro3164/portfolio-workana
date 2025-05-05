"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import NeonBackground from "./NeonBackground";

const RightComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[650px]">
      <div className="relative w-full h-[90%]">
        {/* Neon background behind everything */}
        <div className="absolute left-0 right-0 top-16 sm:top-10 bottom-0 z-0">
          <NeonBackground />
        </div>

        {/* Portrait image */}
        <motion.div
          className="relative z-10 w-full h-full"
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
            className="w-full h-full object-contain"
            width={1200}
            height={800}
            priority
          />
        </motion.div>

        {/* H2 texts on top-right */}
        <motion.div
          className="absolute top-4 right-4 z-20 text-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h2 className="font-courier mb-2 lg:mb-6 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
            Developer
          </h2>
          <h2 className="font-courier text-white text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
            Web
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default RightComponent;
