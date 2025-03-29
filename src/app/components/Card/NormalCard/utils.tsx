import { CSSProperties } from "react";
import { StyleProps } from "./types";

export const getCardClasses = ({
  imageAlign,
  boxPaddings,
  imageSizeMobile,
  imageSizeDesktop,
  imagePositionMobile,
  imagePositionDesktop,
}: StyleProps) => {

  const defaultDesktopPosition: CSSProperties = {
    top: "50%",
    transform: "translateY(-50%)",
  };

  const defaultMobilePosition: CSSProperties = {
    top: "0%",
  };

  // Styles d'image desktop
  const desktopImageStyle: CSSProperties = {
    width: imageSizeDesktop?.width,
    height: imageSizeDesktop?.height,
    ...defaultDesktopPosition,
    ...imagePositionDesktop,
  };

  // Styles d'image mobile/tablet
  const mobileImageStyle: CSSProperties = {
    width: imageSizeMobile?.width,
    height: imageSizeMobile?.height,
    ...defaultMobilePosition,
    ...imagePositionMobile,
  };

  return {
    titleAlignment:
      imageAlign === "right"
        ? "mx-auto lg:mr-auto lg:ml-0"
        : "mx-auto lg:ml-auto lg:mr-0",

    cardAlignement:
      imageAlign === "right"
        ? "mx-auto lg:mr-auto lg:ml-0"
        : "mx-auto lg:ml-auto lg:mr-0",

    // --- Mobile (<640px) ---
    mobile: {
      visibility: "block sm:hidden", // visible en dessous de 640px
      style: {
        paddingTop: boxPaddings?.mobile?.top,
      },
      imagePosition: "absolute left-1/2 transform -translate-x-1/2",
      imageStyle: mobileImageStyle,
    },

    // --- Tablet (640px – 1280px) ---
    tablet: {
      visibility: "hidden sm:block xl:hidden", // visible de 640px à 1279px
      style: {
        paddingTop: boxPaddings?.tablet?.top,
      },
      imagePosition: "absolute left-1/2 transform -translate-x-1/2",
      imageStyle: mobileImageStyle, // on réutilise le même style "mobile"
    },

    // --- Desktop (≥1280px) ---
    desktop: {
      visibility: "hidden xl:block",
      style: {
        paddingLeft:
          imageAlign === "left" ? boxPaddings?.desktop?.content : undefined,
        paddingRight:
          imageAlign === "right" ? boxPaddings?.desktop?.content : undefined,
      },
      imagePosition: `absolute z-10 ${
        imageAlign === "right" ? "right-[-6rem]" : "left-[-8rem]"
      }`,
      imageStyle: desktopImageStyle,
    },
  };
};
