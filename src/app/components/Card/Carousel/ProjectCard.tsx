import { Project } from "./types";
import styles from './Carousel.module.scss';
import Image from "next/image";

interface ProjectCardProps extends Project {
  imageOpacity?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageProject, 
  logoProject, 
  imageOpacity = 1
}) => (
    <div className={styles.glassCardProject}>
        <div className={styles.imageContainer}>
        <Image
          src={imageProject}
          alt="project preview"
          width={800}
          height={600}
          style={{ 
            opacity: imageOpacity,
            transition: 'opacity 0.7s ease-in-out'
          }}
        />
        </div>
        <div className={styles.boxBottomCard}>
            <img 
                src={logoProject} 
                alt="project logo"
                style={{ 
                  opacity: imageOpacity,
                  transition: 'opacity 0.7s ease-in-out'
                }}
            />
        </div>
    </div>
);