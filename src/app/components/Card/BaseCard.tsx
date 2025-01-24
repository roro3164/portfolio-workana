import { BaseCardProps } from './types';
import styles from './styles/card.module.scss';


const BaseCard = ({ title, children, titleAlignment = '' }: BaseCardProps) => (
  <div className={styles.cardContainer}>
    <div className={styles.background}>
      <div className={styles.glass}>
      <div className={`${styles.titleBox} ${titleAlignment}`}>
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </div>
  </div>
);
export default BaseCard;