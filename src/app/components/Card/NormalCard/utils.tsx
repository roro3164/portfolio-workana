import { StyleProps } from '../types';

// utils.ts
export const getCardClasses = ({ 
  imageAlign, 
  boxPaddings, 
  imageSizeMobile, 
  imageSizeDesktop,
  boxStyle, // Nouvelle prop, pas utilisée ici mais transmise pour la cohérence
  hoverType  // Nouvelle prop, pas utilisée ici mais transmise pour la cohérence
}: StyleProps) => {
  return {
    // Logique d'alignement pour le titre
    titleAlignment: imageAlign === "right" 
      ? "mx-auto lg:mr-auto lg:ml-0"
      : "mx-auto lg:ml-auto lg:mr-0",

    cardAlignement: imageAlign === "right" 
      ? "mx-auto lg:mr-auto lg:ml-0"
      : "mx-auto lg:ml-auto lg:mr-0",
    
    // Logique mobile
    mobile: {
      visibility: "block lg:hidden",
      style: {
        paddingTop: boxPaddings?.mobile?.top
      },
      imagePosition: "absolute left-1/2 transform -translate-x-1/2", // Centrage horizontal
      imageStyle: {
        width: imageSizeMobile?.width,
        height: imageSizeMobile?.height,
        top: "0%"
      }
    },

    // Logique desktop
    desktop: {
      visibility: "hidden lg:block",
      style: {
        paddingLeft: imageAlign === "left" ? boxPaddings?.desktop?.content : undefined,
        paddingRight: imageAlign === "right" ? boxPaddings?.desktop?.content : undefined
      },
      imagePosition: `absolute z-10 ${
        imageAlign === "right" ? "right-[-8rem]" : "left-[-4rem]"
      }`,
      imageStyle: {
        width: imageSizeDesktop?.width,
        height: imageSizeDesktop?.height,
        top: "50%",
        transform: "translateY(-50%)"
      }
    }
  };
};