import { CircleListItemProps } from './types';
import styles from './ServiceCard.module.scss';

export const CircleListItem = ({ text, className = "", color = "violet" }: CircleListItemProps) => {
  // Obtenir la valeur de couleur basée sur le nom
  const colorValue = getColorVariable(color);
  
  return (
    <div className="flex items-center">
      <div 
        className={`
          flex items-center justify-center
          mr-4
          text-white rounded-full
          ${styles.circle}
          ${className || 'min-w-8 h-8'}
        `}
        style={{ 
          '--card-color': colorValue 
        } as React.CSSProperties}
      >
        ✓
      </div>
      <span className="text-white text-sm lg:text-base">{text}</span>
    </div>
  );
};

// Fonction utilitaire pour obtenir les valeurs de couleur
function getColorVariable(color: string): string {
  switch (color) {
    case 'blue':
      return 'rgba(64, 153, 211, 0.3)';
    case 'green':
      return 'rgba(64, 211, 111, 0.3)';
    case 'orange':
      return 'rgba(212, 175, 55, 0.5)';
    case 'red':
      return 'rgba(211, 64, 64, 0.3)';
    case 'violet':
    default:
      return 'rgba(89, 64, 211, 0.3)';
  }
}