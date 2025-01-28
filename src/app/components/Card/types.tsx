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
  titleAlignment?: string;
  boxPaddings?: BoxPaddings;
  imageSizeMobile?: ImageSize;
  imageSizeDesktop?: ImageSize;
 }
 
 // Props pour BaseCard
 export interface BaseCardProps {
  title: string;
  titleAlignment?: string;
  children?: React.ReactNode;

  
 }
 
 // Props pour la Card principale qui étend StyleProps
 export interface CardProps extends StyleProps {
  title: string;
  internContent?: string;
  imageSrc?: string;
  hasEaselAnimation?: boolean;  
  children?: React.ReactNode;
 }
 
 export interface CardServiceProps {
  title: string;
  description: string;
  listItems: string[];
}

export interface CircleListItemProps {
  text: string;
}

export interface ProjectCardProps {
  imageProject: string;
  logoProject: string;
}

// L'interface Project reste inchangée
export interface Project {
  id?: number;
  imageProject: string;
  logoProject: string;
  title?: string;
  description?: string;
}

