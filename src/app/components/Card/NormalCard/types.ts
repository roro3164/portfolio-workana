// Types utilitaires nécessaires pour NormalCard
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
  
  // Props de style spécifiques à NormalCard
  interface StyleProps {
    imageAlign?: "left" | "right";
    titleAlignment?: string;
    boxPaddings?: BoxPaddings;
    imageSizeMobile?: ImageSize;
    imageSizeDesktop?: ImageSize;
    cardAlignment?: string;
  }
  
  // Props principales de NormalCard
  export interface NormalCardProps extends StyleProps {
    title: string;
    internContent?: string;
    imageSrc?: string;
    hasEaselAnimation?: boolean;  
    children?: React.ReactNode;
  }