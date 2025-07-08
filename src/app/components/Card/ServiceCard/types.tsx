export interface CircleListItemProps {
  text: string;
  className?: string;
  color?: string;
  textClassName?: string; // Nouvelle prop pour personnaliser le texte
  spacing?: 'sm' | 'md' | 'lg'; // Nouvelle prop pour l'espacement
}

// Types pour le ServiceCard
export interface ServiceCardProps {
  title: string;
  description: string;
  listItems: string[];
  prefix?: string;
  color: string;
}