import { CardImageProps } from '../types';
import EaselAnimation from '../../EaselAnimation';

export const CardImage = ({ imageClass, style, imageSrc, hasEaselAnimation }: CardImageProps) => (
  <div className={imageClass} style={style}>
    <img
      src={imageSrc}
      alt="Card decoration"
      className="w-full h-full object-contain"
    />
    {hasEaselAnimation && <EaselAnimation />}
  </div>
);