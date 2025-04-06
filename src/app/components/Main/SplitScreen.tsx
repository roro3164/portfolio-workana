"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./ContactButton";
import { DesignerAnimation } from "./DesignerAnimation";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import HeroOverlay from "./HeroOverlay";

const SplitScreen: React.FC = () => {
  const [activeZone, setActiveZone] = useState<"left" | "right" | null>(null);
  // État pour assombrir le fond lors du hover sur le bouton
  const [dimOverlay, setDimOverlay] = useState(false);

  return (
    // Ce conteneur est en relative, ce qui permet à HeroOverlay (en absolute)
    // de se positionner par rapport à lui
    <div className="relative w-full">
      {/* Intégration de l'overlay dans SplitScreen */}
      <HeroOverlay />

      {/* Conteneur invisible pour conserver la hauteur */}
      <div className="invisible">
        <LeftComponent />
      </div>

      {/* Section gauche en fond */}
      <div className="absolute inset-0 bg-[#0F0E12]" style={{ zIndex: 1 }}>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <DesignerAnimation />
          </motion.div>
          <LeftComponent />
        </div>
      </div>

      {/* Section droite avec clip-path */}
      <div
        className="absolute inset-0 bg-[#0F0E12] transition-all duration-500"
        style={{
          clipPath:
            activeZone === "left"
              ? "inset(0 0 0 100%)"
              : activeZone === "right"
              ? "inset(0 0 0 0)"
              : "inset(0 0 0 50%)",
          zIndex: activeZone === "right" ? 5 : 2,
        }}
      >
        <RightComponent />
      </div>

      {/* Barre verticale (effet laser) */}
      <div
        className="absolute top-0 bottom-0 transition-all mt-5 duration-500 md:h-[560px]"
        style={{
          left:
            activeZone === "left"
              ? "100%"
              : activeZone === "right"
              ? "0"
              : "50%",
          transform: "translateX(-50%)",
          zIndex: 6,
          width: "2px",
          backgroundColor: "#6a5acd",
          boxShadow: `
            0 0 10px #4b0082,
            0 0 20px #1e90ff,
            0 0 30px #6a5acd,
            0 0 40px #4b0082,
            0 0 50px #1e90ff,
            0 0 70px #6a5acd
          `,
        }}
      >
        <div
          className="absolute w-full"
          style={{
            height: "25%",
            background:
              "linear-gradient(180deg, transparent, #6a5acd, #ffffff, #6a5acd, transparent)",
            boxShadow: "0 0 20px #bc13fe",
            animation: "laserMove 4s linear infinite",
            opacity: 0.8,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes laserMove {
          0% {
            top: 0;
          }
          50% {
            top: 75%;
          }
          100% {
            top: 0;
          }
        }
      `}</style>

      {/* Zones de hover gauche/droite */}
      <div
        className="absolute top-0 bottom-0 w-1/2 left-0 cursor-pointer"
        style={{ zIndex: 7 }}
        onMouseEnter={() => setActiveZone("left")}
        onMouseLeave={() => setActiveZone(null)}
      />
      <div
        className="absolute top-0 bottom-0 w-1/2 right-0 cursor-pointer"
        style={{ zIndex: 7 }}
        onMouseEnter={() => setActiveZone("right")}
        onMouseLeave={() => setActiveZone(null)}
      />

      {/* Overlay d'assombrissement supplémentaire (au hover sur le bouton) */}
      {dimOverlay && (
        <div
          className="absolute inset-0 bg-[#0F0E12] bg-opacity-50 transition-all duration-300 pointer-events-none"
          style={{ zIndex: 15 }}
        />
      )}

      {/* Bouton de contact */}
      <div className="absolute" style={{ zIndex: 20, bottom: "14%", left: "0%" }}>
        <a href="#contact">
          <motion.div
            onMouseEnter={() => setDimOverlay(true)}
            onMouseLeave={() => setDimOverlay(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ContactButton  title="button.demo"  icon = "/image/icons/gift.svg" className="w-[44vw] max-w-[500px] h-9 sm:h-auto text-base sm:text-xl lg:text-2xl"/>
          </motion.div>
        </a>
      </div>

      {/* Effet de gradient en bas */}
      <div className="absolute w-full bottom-0 md:bottom-16 -left-8 -right-8 h-16 bg-gradient-to-t from-[#0F0E12] via-[#0F0E12]/70 to-transparent z-10" />
    </div>
  );
};

export default SplitScreen;
