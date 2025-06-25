import { ServiceCardProps } from "./types";
import styles from "./ServiceCard.module.scss";
import { CircleListItem } from "./CircleListItem";
import VioletHover from "../hover/VioletHover";

interface ExtendedServiceCardProps extends ServiceCardProps {
  disableHover?: boolean;
  width?: string; // Nouvelle prop pour la largeur
}

export const ServiceCard = ({
  title,
  description,
  listItems,
  prefix,
  color = "violet",
  disableHover = false,
  width, // Nouvelle prop
}: ExtendedServiceCardProps) => (
  <div 
    className={`transition-transform duration-400 hover:scale-105 ${
      width ? '' : 'w-[29%] min-w-[316px]'
    }`}
    style={width ? { width } : {}}
  >
    <VioletHover color={color} disabled={disableHover}>
      <div className="bg-[#100E12] rounded-xl">
        <div className={`rounded-xl h-[600px] flex flex-col p-6 gap-y-6 ${styles.glassCard}`}>
          
          <div
            className={`
              mx-auto text-center
              text-white text-2xl font-jakarta font-semibold
              py-2 px-10 w-full rounded-xl
              ${styles.titleBox}
            `}
            style={{ 
              '--card-color': getColorVariable(color) 
            } as React.CSSProperties}
          >
            <h3>{title}</h3>
          </div>
       
          <div
            className={`
              rounded-xl p-6 
              ${styles.internBox}
            `}
          >
            <p className="text-white text-center text-lg sm:text-xl italic">{description}</p>
          </div>

          <div className="flex flex-col gap-3">
            {prefix && <p className="text-white text-md my-2 font-jakarta font-bold">{prefix}</p>}
            {listItems.map((item, index) => (
              <CircleListItem key={index} text={item} color={color} />
            ))}
          </div>
        </div>
      </div>
    </VioletHover>
  </div>
);

function getColorVariable(color: string): string {
  switch (color) {
    case 'blue':
      return 'rgba(64, 153, 211, 0.3)';
    case 'green':
      return 'rgba(64, 211, 111, 0.3)';
    case 'yellow':
      return 'rgba(212, 175, 55, 0.5)';
    case 'orange':
      return 'rgba(255, 140, 0, 0.5)'; 
    case 'red':
      return 'rgba(211, 64, 64, 0.3)';
    case 'violet':
    default:
      return 'rgba(89, 64, 211, 0.3)';
  }
}