// NormalCard.tsx
import React from "react";
import { NormalCardProps } from "./types";
import { getCardClasses } from "./utils";
import EaselAnimation from "../EaselAnimation"; 
import LaptopAnimation from "../LaptopAnimation";

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

  // Nouvelles props
  imagePositionMobile,
  imagePositionDesktop,

  ...styleProps
}: NormalCardProps) => {
  // On injecte tout dans getCardClasses
  const classes = getCardClasses({
    imageAlign,
    boxStyle,
    hoverType,
    imagePositionMobile,
    imagePositionDesktop,
    ...styleProps,
  });

  // Style de la box (purple ou default)
  const boxStyleClass = boxStyle === "purple" ? styles.BoxPurple : styles.Box;

  // Sélection du hover
  const HoverComponent = hoverType === "purple" ? VioletHover : Hover;

  return (
    <BaseCard
      title={title}
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      <HoverComponent>
        <div className="bg-[#100E12] rounded-xl">
          {/* Mobile Content */}
          <div
            className={`${boxStyleClass} ${classes.mobile.visibility}`}
            style={classes.mobile.style}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              {internContent}
            </p>
          </div>

          {/* Desktop Content */}
          <div
            className={`${boxStyleClass} ${classes.desktop.visibility}`}
            style={classes.desktop.style}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              {internContent}
            </p>
          </div>
        </div>
      </HoverComponent>

      {/* Mobile Image */}
      <div
        className={`${classes.mobile.imagePosition} ${classes.mobile.visibility}`}
        style={classes.mobile.imageStyle}
      >
        {title === "Developer Full-stack" ? (
          <LaptopAnimation />
        ) : (
          <img
            src={imageSrc}
            alt="Card decoration"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>

      {/* Desktop Image */}
      <div
        className={`${classes.desktop.imagePosition} ${classes.desktop.visibility}`}
        style={classes.desktop.imageStyle}
      >
        {title === "Developer Full-stack" ? (
          <LaptopAnimation />
        ) : (
          <img
            src={imageSrc}
            alt="Card decoration"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>
    </BaseCard>
  );
};

export default NormalCard;
