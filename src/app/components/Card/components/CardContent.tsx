import styles from '../styles/Card.module.css';
import { CardContentProps } from '../types';

export const CardContent = ({ contentClass, style, content }: CardContentProps) => (
  <div className={`${styles.internBox} ${contentClass}`} style={style}>
    <p className="text-white font-poppins text-xl">{content}</p>
  </div>
);