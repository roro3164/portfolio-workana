import { CSSProperties } from "react";
import { StyleProps } from "./types";

export const getCardClasses = ({
  imageAlign,
  boxPaddings,
  imageSizeMobile,
  imageSizeDesktop,
  imagePositionMobile,
  imagePositionDesktop,

  // Notre nouvelle prop
  customBreakpoint,
}: StyleProps) => {
  // Si la prop n'est pas définie, on met 'lg'
  const breakpoint = customBreakpoint || "lg";

  const defaultDesktopPosition: CSSProperties = {
    top: "50%",
    transform: "translateY(-50%)",
  };

  const defaultMobilePosition: CSSProperties = {
    top: "0%",
  };

  const desktopImageStyle: CSSProperties = {
    width: imageSizeDesktop?.width,
    height: imageSizeDesktop?.height,
    ...defaultDesktopPosition,
    ...imagePositionDesktop,
  };

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

    // --- Mobile ---
    mobile: {
      // block jusqu'à breakpoint, puis hidden
      visibility: `block ${breakpoint}:hidden`,
      style: {
        paddingTop: boxPaddings?.mobile?.top,
      },
      imagePosition: "absolute left-1/2 transform -translate-x-1/2",
      imageStyle: mobileImageStyle,
    },

    // --- Desktop ---
    desktop: {
      // hidden jusqu'à breakpoint, puis block
      visibility: `hidden ${breakpoint}:block`,
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
