"use client";
import { motion } from "framer-motion";
import React from "react";

const RightComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[650px]">
      <div className="relative w-full h-[90%]">
        <motion.img
          className="relative z-0 w-full h-full object-contain"
          src="/image/pictures/portraitDev.webp"
          alt="portrait dev"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 1.5 }}
        />

        <div className="absolute -z-10 inset-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h2 className="font-mono text-white text-right text-[12px] sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
              {"<h2>"}Developer{"</h2>"}
            </h2>
          </motion.div>

        
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
