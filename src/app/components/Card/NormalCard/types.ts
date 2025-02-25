// Définition des props de style existantes
export interface StyleProps {
    imageAlign?: "left" | "right";
    boxPaddings?: {
      mobile?: {
        top?: string;
      };
      desktop?: {
        content?: string;
      };
    };
    imageSizeMobile?: {
      width?: string;
      height?: string;
    };
    imageSizeDesktop?: {
      width?: string;
      height?: string;
    };
    // Nouvelles options de style
    boxStyle?: "default" | "purple";
    hoverType?: "white" | "purple";
  }
  
  // Définition des props pour NormalCard
  export interface NormalCardProps {
    title: string;
    internContent: string;
    imageSrc?: string;
    imageAlign?: "left" | "right";
    hasEaselAnimation?: boolean;
    boxStyle?: "default" | "purple";
    hoverType?: "purple" | "white";
    boxPaddings?: StyleProps["boxPaddings"];
    imageSizeMobile?: StyleProps["imageSizeMobile"];
    imageSizeDesktop?: StyleProps["imageSizeDesktop"];
  }