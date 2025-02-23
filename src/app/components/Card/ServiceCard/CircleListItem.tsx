// src/app/components/Card/ServiceCard/CircleListItem.tsx
import { CircleListItemProps } from './types';
import styles from './ServiceCard.module.scss';

export const CircleListItem = ({ text }: CircleListItemProps) => (
  <div className="flex items-center">
    <div className={`
      flex items-center justify-center
      min-w-8 h-8 mr-4
      text-white rounded-full
      ${styles.circle}
    `}>
      ✓
    </div>
    <span className="text-white">{text}</span>
  </div>
);