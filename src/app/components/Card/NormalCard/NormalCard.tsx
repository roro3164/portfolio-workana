"use client";
import React from "react";
import Image from "next/image";
import { NormalCardProps } from "./types";
import { getCardClasses } from "./utils";
import EaselAnimation from "../EaselAnimation";
import styles from "./NormalCard.module.scss";
import { BaseCard } from "../BaseCard/BaseCard";
import { Hover } from "../hover/Hover";
import VioletHover from "../hover/VioletHover";
import LaptopGif from "../AnimationLaptop/laptopGif";

/**
 * On remet isLaptop, version courte,
 * pour remplacer <Image> par <LaptopGif>.
 */
interface ExtendedNormalCardProps extends NormalCardProps {
  isLaptop?: boolean;
}

const NormalCard: React.FC<ExtendedNormalCardProps> = ({
  title,
  internContent,
  imageSrc,
  imageAlign = "left",
  hasEaselAnimation = false,
  boxStyle = "default",
  hoverType = "purple",
  isLaptop = false,
  imagePositionMobile,
  imagePositionDesktop,
  imageSizeMobile,
  imageSizeDesktop,
  boxPaddings,
  customBreakpoint,
  ...rest
}) => {
  // Récupération de l'objet : { mobile, tablet, desktop }
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

  return (
    <BaseCard
      title={title}
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      <HoverComponent>
        <div className="bg-[#100E12] rounded-xl">
          {/* TEXT - mobile */}
          <div
            className={`${boxStyleClass} ${classes.mobile.visibility}`}
            style={classes.mobile.style}
          >
            <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              {internContent}
            </p>
          </div>

          {/* TEXT - tablet */}
          <div
            className={`${boxStyleClass} ${classes.tablet.visibility}`}
            style={classes.tablet.style}
          >
            <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              {internContent}
            </p>
          </div>

          {/* TEXT - desktop */}
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

      {/* IMAGE - mobile */}
      <div
        className={`${classes.mobile.imagePosition} ${classes.mobile.visibility}`}
        style={classes.mobile.imageStyle}
      >
        {isLaptop ? (
          <LaptopGif />
        ) : (
          <Image
            src={imageSrc}
            alt="Card decoration"
            width={600}
            height={400}
            className={`${styles.customShadow} w-full h-full object-contain hover:scale-110 transition-transform duration-300`}
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>

      {/* IMAGE - tablet */}
      <div
        className={`${classes.tablet.imagePosition} ${classes.tablet.visibility}`}
        style={classes.tablet.imageStyle}
      >
        {isLaptop ? (
          <LaptopGif />
        ) : (
          <Image
            src={imageSrc}
            alt="Card decoration"
            width={600}
            height={400}
            className={`${styles.customShadow} w-full h-full object-contain hover:scale-110 transition-transform duration-300`}
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>

      {/* IMAGE - desktop */}
      <div
        className={`${classes.desktop.imagePosition} ${classes.desktop.visibility}`}
        style={classes.desktop.imageStyle}
      >
        {isLaptop ? (
          <LaptopGif />
        ) : (
          <Image
            src={imageSrc}
            alt="Card decoration"
            width={600}
            height={400}
            className={`${styles.customShadow} w-full h-full object-contain`}
          />
        )}
        {hasEaselAnimation && <EaselAnimation />}
      </div>
    </BaseCard>
  );
};

export default NormalCard;
