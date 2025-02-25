import { NormalCardProps } from "./types";
import { getCardClasses } from "./utils";
import EaselAnimation from "../../Main/EaselAnimation";

import styles from "./NormalCard.module.scss";
import { BaseCard } from "../BaseCard/BaseCard";
import { Hover } from "../hover/Hover";
import VioletHover from "../hover/VioletHover";

const NormalCard = ({
  title,
  internContent,
  imageSrc,
  imageAlign = "left",
  hasEaselAnimation = false,
  boxStyle = "default",
  hoverType = "purple",
  ...styleProps
}: NormalCardProps) => {
  // Transmettre toutes les props de style à getCardClasses, y compris imageAlign
  const classes = getCardClasses({
    imageAlign, 
    boxStyle,
    hoverType,
    ...styleProps
  });

  // Déterminer la classe de style en fonction de boxStyle
  const boxStyleClass = boxStyle === "purple" ? styles.BoxPurple : styles.Box;

  // Composant de Hover à utiliser
  const HoverComponent = hoverType === "purple" ? VioletHover : Hover;

  return (
    <BaseCard
      title={title}
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      {/* Mobile Content */}
      <div className={` ${classes.mobile.visibility}`} style={classes.mobile.style}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
          {internContent}
        </p>
      </div>

      {/* Desktop Content with Hover Effect */}
      <HoverComponent>
        <div className="bg-[#100E12] rounded-xl">
          <div className={`${boxStyleClass} ${classes.desktop.visibility}`} style={classes.desktop.style}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            {internContent}
          </p>
        </div>
        </div>
       
      </HoverComponent>

      {/* Mobile Image */}
      <div className={`${classes.mobile.imagePosition} ${classes.mobile.visibility}`} style={classes.mobile.imageStyle}>
        <img 
          src={imageSrc} 
          alt="Card decoration" 
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" 
        />
        {hasEaselAnimation && <EaselAnimation />}
      </div>

      {/* Desktop Image */}
      <div className={`${classes.desktop.imagePosition} ${classes.desktop.visibility}`} style={classes.desktop.imageStyle}>
        <img 
          src={imageSrc} 
          alt="Card decoration" 
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" 
        />
        {hasEaselAnimation && <EaselAnimation />}
      </div>
    </BaseCard>
  );
};

export default NormalCard;