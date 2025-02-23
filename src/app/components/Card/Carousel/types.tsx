export interface ProjectCardProps {
    imageProject: string;
    logoProject: string;
  }
  
  export interface Project {
    id?: number;
    imageProject?: string;
    logoProject?: string;
    title?: string;
    description?: string;
  }
  
  export interface ProjectCarouselProps {
    projects: Project[];
  }
  
  export interface AnimatedCardProps {
    style: React.CSSProperties;
    isActive?: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    children: React.ReactNode;
  }