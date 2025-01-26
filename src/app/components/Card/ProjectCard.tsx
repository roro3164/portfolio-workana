import { ProjectCardProps } from "./types";
import styles from './styles/card.module.scss';


export const ProjectCard = ({imageProject, logoProject}: ProjectCardProps) => (
    <div className={styles.glassCard}>
         <div className={styles.boxCard}>
            <img src={logoProject} alt="logo project" className="" /> 
        </div>
        <div>
            <img src={imageProject} alt="image project" className="" />  
        </div>
       
    </div>
);