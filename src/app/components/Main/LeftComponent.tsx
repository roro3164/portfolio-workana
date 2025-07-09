"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const LeftComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[620px]">
      <div 
        className="w-full h-auto md:h-[90%] relative"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        }}
      >
        {/* Image d'arrière-plan (Next.js) */}
        <Image
          src="/image/pictures/bgDesign.png"
          alt="background design"
          className="w-full h-full object-contain 2xl:object-cover xl:object-top object-center"
          width={1200}
          height={800}
          priority
          style={{ position: "absolute", top: 0, left: 0 }}
        />

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
            src="/image/pictures/portraitDesign.webp"
            alt="portrait design"
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

export default LeftComponent;