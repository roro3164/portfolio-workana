"use client";
import { motion } from "framer-motion";
import React from "react";

const LeftComponent: React.FC = () => {
  return (
    //conteneur principal
    <div className="relative w-full md:h-[650px] ">
      {/* Background et portrait dans le même div */}
      <div 
        className="w-full h-[90%] bg-center xl:bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('image/pictures/bgDesign0.png')",
         
        }}
      >
        <motion.img
        className="relative z-0 w-full h-full object-contain"
        src="/image/pictures/portraitDesign.png"
        alt="portrait design"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 14.2, duration: 1.5 }}
      />
      </div>
    </div>
  );
};

export default LeftComponent;