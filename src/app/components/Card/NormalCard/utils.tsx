// utils.ts
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
  /**
   * Valeurs par défaut pour le positionnement en desktop et mobile.
   * Tu peux les ajuster selon ton besoin.
   */
  const defaultDesktopPosition: CSSProperties = {
    top: "50%",
    transform: "translateY(-50%)",
  };

  const defaultMobilePosition: CSSProperties = {
    top: "0%",
  };

  /**
   * Fusion de la taille de l'image (width/height) avec le positionnement par défaut,
   * puis écrasement par l'objet de styles custom si défini (imagePositionDesktop ou Mobile).
   */
  const desktopImageStyle: CSSProperties = {
    width: imageSizeDesktop?.width,
    height: imageSizeDesktop?.height,
    ...defaultDesktopPosition,
    ...imagePositionDesktop, // Écrase ou complète la position si tu passes un objet en props
  };

  const mobileImageStyle: CSSProperties = {
    width: imageSizeMobile?.width,
    height: imageSizeMobile?.height,
    ...defaultMobilePosition,
    ...imagePositionMobile,
  };

  return {
    // --- Alignements du titre et de la card ---
    titleAlignment:
      imageAlign === "right"
        ? "mx-auto lg:mr-auto lg:ml-0"
        : "mx-auto lg:ml-auto lg:mr-0",

    cardAlignement:
      imageAlign === "right"
        ? "mx-auto lg:mr-auto lg:ml-0"
        : "mx-auto lg:ml-auto lg:mr-0",

    // --- Logique Mobile ---
    mobile: {
      visibility: "block lg:hidden", 
      style: {
        // Padding au-dessus du texte
        paddingTop: boxPaddings?.mobile?.top,
      },
      // Position par défaut : centrage horizontal
      imagePosition: "absolute left-1/2 transform -translate-x-1/2", 
      imageStyle: mobileImageStyle,
    },

    // --- Logique Desktop ---
    desktop: {
      visibility: "hidden lg:block",
      style: {
        // Espace laissé pour le contenu
        paddingLeft: imageAlign === "left" ? boxPaddings?.desktop?.content : undefined,
        paddingRight: imageAlign === "right" ? boxPaddings?.desktop?.content : undefined,
      },
      // Décalage horizontal par défaut sur la gauche/droite : -8rem
      imagePosition: `absolute z-10 ${
        imageAlign === "right" ? "right-[-8rem]" : "left-[-8rem]"
      }`,
      imageStyle: desktopImageStyle,
    },
  };
};
