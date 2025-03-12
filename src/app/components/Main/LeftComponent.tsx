"use client";
import { motion } from "framer-motion";
import React from "react";

const LeftComponent: React.FC = () => {
  return (
    <div className="relative w-full md:h-[650px] ">
      <div 
        className="w-full h-[90%] bg-center xl:bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('image/pictures/bgDesign0.webp')",
        }}
      >
        <motion.img
          className="relative z-0 w-full h-full object-contain"
          src="/image/pictures/portraitDesign.webp"
          alt="portrait design"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 1.5 }}
        />
      </div>
    </div>
  );
};

export default LeftComponent;
