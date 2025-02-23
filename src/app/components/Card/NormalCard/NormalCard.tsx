import { NormalCardProps } from "./types";
import { getCardClasses } from "./utils";
import EaselAnimation from "../../EaselAnimation";
import BaseCard from "../BaseCard/BaseCard";
import styles from "./NormalCard.module.scss";

const NormalCard = ({
  title,
  internContent,
  imageSrc,
  imageAlign = "left",
  hasEaselAnimation = false,
  ...styleProps
}: NormalCardProps) => {
  const classes = getCardClasses({ imageAlign, ...styleProps });

  return (
    <BaseCard
      title={title}
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      {/* Mobile Content */}
      <div className={`${styles.internBox} ${classes.mobile.visibility}`} style={classes.mobile.style}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
          {internContent}
        </p>
      </div>

      {/* Desktop Content */}
      <div className={`${styles.internBox} ${classes.desktop.visibility}`} style={classes.desktop.style}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
          {internContent}
        </p>
      </div>

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
