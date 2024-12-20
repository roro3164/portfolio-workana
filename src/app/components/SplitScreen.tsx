"use client";


import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const SplitScreen: React.FC = () => {

  return (
    <div className="relative">
      {/* Partie gauche */}
      <div className="left"  >
        <LeftComponent />
      </div>
      
      {/* Partie droite */}
      <div className="right">
        <RightComponent />
      </div>
    </div>
  );
};

export default SplitScreen;
