
import { CircleListItemProps } from './types';
import styles from './ServiceCard.module.scss';

export const CircleListItem = ({ text, className = "" }: CircleListItemProps) => (
  <div className="flex items-center">
    <div className={`
      flex items-center justify-center
      min-w-8 h-8 mr-4
      text-white rounded-full
      ${styles.circle}
      ${className}
    `}>
      ✓
    </div>
    <span className="text-white text-sm lg:text-base">{text}</span>
  </div>
);