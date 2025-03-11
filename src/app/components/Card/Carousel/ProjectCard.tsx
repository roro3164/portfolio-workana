import { Project } from "./types";
import styles from './Carousel.module.scss';
import Image from "next/image";

export const ProjectCard: React.FC<Project> = ({imageProject, logoProject}) => (
    <div className={styles.glassCardProject}>
        <div className={styles.imageContainer}>
        <Image
          src={imageProject}
          alt="project preview"
          width={800}      // Indique une taille "de base"
          height={600}     // (ex: ratio 4:3)
        
        />
        </div>
        <div className={styles.boxBottomCard}>
            <img 
                src={logoProject} 
                alt="project logo" 
                
            />
        </div>
    </div>
);