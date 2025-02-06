import { StyleProps } from '../types';

// utils.ts
export const getCardClasses = ({ imageAlign, boxPaddings, imageSizeMobile, imageSizeDesktop }: StyleProps) => {
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
      imagePosition: "absolute ",
      imageStyle: {
        width: imageSizeMobile?.width,
        height: imageSizeMobile?.height,
        top: "15%"
      }
    },

    // Logique desktop
    desktop: {
      visibility: "hidden lg:block",
      style: {
        paddingLeft: imageAlign === "left" ? boxPaddings?.desktop?.content : undefined,
        paddingRight: imageAlign === "right" ? boxPaddings?.desktop?.content : undefined
      },
      imagePosition: `absolute ${
        imageAlign === "right" ? "right-[-8rem]" : "left-[-8rem]"
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