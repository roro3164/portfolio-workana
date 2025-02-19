"use client";
import ContactButton from "./ContactButton";
import { DesignerAnimation } from "./DesignerAnimation";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import styles from "./main.module.scss"; 

const SplitScreen: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Conteneur invisible pour définir la hauteur */}
      <div className="invisible">
        <LeftComponent />
      </div>

      {/* Section gauche */}
      <div className={styles.left}>
        <DesignerAnimation />
        <LeftComponent />
        <ContactButton />
   
      </div>

 

      {/* Section droite */}
      <div className={styles.right}>
        <RightComponent />
      </div>

      {/* Effet de gradient en bas */}
      <div className="absolute bottom-16 -left-8 -right-8 h-12 bg-gradient-to-t from-[#0F0E12] via-[#0F0E12]/70 to-transparent z-10"></div>
    </div>
  );
};

export default SplitScreen;
