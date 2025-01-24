import { CircleListItemProps } from "./types";
import styles from './styles/card.module.scss';

export const CircleListItem = ({ text }: CircleListItemProps) => (
    <div className=" flex items-center">
      <div className={styles.circle}>✓</div>
      <span className="text-white">{text}</span>
    </div>
  );
  