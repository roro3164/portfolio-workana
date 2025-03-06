import React from "react";
import { NormalCardProps } from "./types";
import { getCardClasses } from "./utils";
import EaselAnimation from "../EaselAnimation";

import styles from "./NormalCard.module.scss";
import { BaseCard } from "../BaseCard/BaseCard";
import { Hover } from "../hover/Hover";
import VioletHover from "../hover/VioletHover";
import LaptopGif from "../AnimationLaptop/laptopGif";

const NormalCard = ({
  title,
  internContent,
  imageSrc,
  imageAlign = "left",
  hasEaselAnimation = false,
  boxStyle = "default",
  hoverType = "purple",

  // Props de style
  imagePositionMobile,
  imagePositionDesktop,
  imageSizeMobile,
  imageSizeDesktop,
  boxPaddings,

  // Prop pour le breakpoint (déjà gérée dans utils)
  customBreakpoint,

  ...rest
}: NormalCardProps) => {
  const classes = getCardClasses({
    imageAlign,
    boxPaddings,
    imageSizeMobile,
    imageSizeDesktop,
    imagePositionMobile,
    imagePositionDesktop,
    customBreakpoint,
    ...rest,
  });

  const boxStyleClass = boxStyle === "purple" ? styles.BoxPurple : styles.Box;
  const HoverComponent = hoverType === "purple" ? VioletHover : Hover;
  const isLaptop = title === "Developer Full-stack";

  return (
    <BaseCard
      title={title}
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      <HoverComponent>
        <div className="bg-[#100E12] rounded-xl">
          {/* Bloc de contenu Mobile */}
          <div
            className={`${boxStyleClass} ${classes.mobile.visibility} ${
              isLaptop ? styles.laptopCard : ""
            } ${isLaptop ? styles.textContainer : ""}`}
            style={classes.mobile.style}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              {internContent}
            </p>
          </div>

          {/* Bloc de contenu Desktop */}
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

      {/* Image Mobile */}
      <div
        className={`${classes.mobile.imagePosition} ${classes.mobile.visibility}`}
        style={classes.mobile.imageStyle}
      >
        {isLaptop ? (
          <LaptopGif />
        ) : (
          <img
            src={imageSrc}
            alt="Card decoration"
            className={`${styles.customShadow} w-full h-full object-contain hover:scale-110 transition-transform duration-300`}
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>

      {/* Image Desktop */}
      <div
        className={`${classes.desktop.imagePosition} ${classes.desktop.visibility}`}
        style={classes.desktop.imageStyle}
      >
        {isLaptop ? (
          <LaptopGif />
        ) : (
          <img
            src={imageSrc}
            alt="Card decoration"
            className={`${styles.customShadow} w-full h-full object-contain`}
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>
    </BaseCard>
  );
};

export default NormalCard;
