import React from "react";
import { DesignerAnimation } from "./designerAnimation";

const LeftComponent: React.FC = () => {
  return (
    <div className="w-full ">
      <div
        className="relative h-[30vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/pictures/bgDesign2.svg')",
        }}
      >
        {/* Dégradé en haut */}
        <div
          className="absolute top-0 left-0 w-full h-8 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #0F0E12, transparent)",
            zIndex: 30,
          }}
        ></div>

        {/* Contenu principal */}
        <div className="flex justify-center items-center h-full relative z-20 ">
          <img
            className="max-h-full max-w-full object-contain block"
            src="/image/pictures/portraitDesign.png"
            alt="portrait"
          />
        </div>

        {/* Dégradé en bas */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0F0E12, transparent)",
            zIndex: 30,
          }}
        ></div>

        <div>
          <DesignerAnimation />
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
