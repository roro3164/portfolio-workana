// NormalCard/types.ts
import React from "react";

export interface StyleProps {
  imageAlign?: "left" | "right";
  boxStyle?: "default" | "purple";
  hoverType?: "white" | "purple";

  // Tailles de l’image (mobile/desktop)
  imageSizeMobile?: {
    width?: string;
    height?: string;
  };
  imageSizeDesktop?: {
    width?: string;
    height?: string;
  };

  // Paddings (mobile/desktop)
  boxPaddings?: {
    mobile?: {
      top?: string;
    };
    desktop?: {
      content?: string;
    };
  };
 // Nouvelle prop pour le breakpoint custom
 customBreakpoint?: string; // ex: "md", "xl", etc.
  /**
   * Objets de style pour affiner la position de l'image
   * en mobile et desktop, par exemple top, left, transform, etc.
   */
  imagePositionMobile?: React.CSSProperties;
  imagePositionDesktop?: React.CSSProperties;
}

export interface NormalCardProps extends StyleProps {
  title: string;
  internContent?: string;
  imageSrc: string;
  hasEaselAnimation?: boolean;
}