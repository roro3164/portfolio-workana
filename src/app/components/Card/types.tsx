// types.ts

// Types de base
interface ImageSize {
  width: string;
  height: string;
 }
 
 interface BoxPaddings {
  mobile?: {
    top?: string;
  };
  desktop?: {
    content?: string;
  };
 }
 
 // Props pour les styles
 export interface StyleProps {
  imageAlign?: "left" | "right" ;
  boxPaddings?: BoxPaddings;
  imageSizeMobile?: ImageSize;
  imageSizeDesktop?: ImageSize;
 }
 
 // Props pour BaseCard
 export interface BaseCardProps {
  title: string;
  children: React.ReactNode;
 }
 
 // Props pour la Card principale qui étend StyleProps
 export interface CardProps extends StyleProps {
  title: string;
  internContent: string;
  imageSrc: string;
  hasEaselAnimation?: boolean;
 }
 
 // Props pour les sous-composants
 export interface CardContentProps {
  contentClass: string;
  style: React.CSSProperties;
  content: string;
 }
 
 export interface CardImageProps {
  imageClass: string;
  style: React.CSSProperties;
  imageSrc: string;
  hasEaselAnimation: boolean;
 }