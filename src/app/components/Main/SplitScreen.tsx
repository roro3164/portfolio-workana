"use client";
import { DesignerAnimation } from "./DesignerAnimation";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const SplitScreen: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        {/* Élément fantôme pour définir la hauteur */}
        <div className="invisible">
        
          <LeftComponent />
        </div>
        
        <div className="left">
          <DesignerAnimation  />
          <LeftComponent />
        </div>
        
        <div className="right">
          
          <RightComponent />
        </div>
      </div>
    </div>
  )
};

export default SplitScreen;