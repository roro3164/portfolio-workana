import { ServiceCard } from "./ServiceCard";
import { ServiceCardProps } from "./types";
import styles from "./ServiceCard.module.scss";
import VioletHover from "../hover/VioletHover";
import "../../../../../i18n";
import { useTranslation } from "react-i18next";

interface ServicePackProps {
  title: string;
  description: string;
  prefix?: string;
  proCard: Omit<ServiceCardProps, 'color'>;
  strategieCard: Omit<ServiceCardProps, 'color'>;
  color?: string;
}

export const ServicePack = ({
  title,
  description,
  proCard,
  strategieCard,
  color = "yellow",
}: ServicePackProps) => {
  const { t } = useTranslation("page");

  return (
    <div className="w-full min-w-[316px] transition-transform duration-400 hover:scale-105">
      <VioletHover color={color}>
        <div className="bg-[#100E12] rounded-xl">
          <div className={`rounded-xl min-h-[600px] flex flex-col p-8 gap-y-10 ${styles.glassCard}`}>
          <div className="text-right mt-2 mb-2">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
          🔥 OFFRE RECOMMANDÉE
</span>
            </div>
            
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

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
  <div className="flex-shrink-0">
    <ServiceCard
      title={proCard.title}
      description={proCard.description}
      prefix={proCard.prefix}
      listItems={proCard.listItems}
      color="blue"
      disableHover={true}
      width="w-full lg:w-[45%] max-w-[400px] mx-auto" 
    />
  </div>

  <div>
    <span className="text-7xl">+</span>
  </div>
  
  <div className="flex-shrink-0">
    <ServiceCard
      title={strategieCard.title}
      description={strategieCard.description}
      prefix={strategieCard.prefix}
      listItems={strategieCard.listItems}
      color="orange"
      disableHover={true}
      width="w-full lg:w-[45%] max-w-[400px] mx-auto" 
    />
  </div>
</div>

            <div className="text-center">
              <h4 className="text-amber-400 text-2xl font-bold">{t("services.pack.explication.title")}</h4>
              
            </div>

            <div className="text-center">
              <h4 className="text-amber-400 text-xl font-bold mb-4">{t("services.pack.pour.title")}</h4>
              <p className="text-white text-lg">
                {t("services.pack.pour.content")}
              </p>
            </div>
          </div>
        </div>
      </VioletHover>
    </div>
  );
};

function getColorVariable(color: string): string {
  switch (color) {
    case 'blue':
      return 'rgba(64, 153, 211, 0.3)';
    case 'green':
      return 'rgba(64, 211, 111, 0.3)';
    case 'yellow':
      return 'rgba(255, 193, 37, 0.5)';
    case 'orange':
      return 'rgba(255, 140, 0, 0.5)';
    case 'red':
      return 'rgba(211, 64, 64, 0.3)';
    case 'violet':
    default:
      return 'rgba(89, 64, 211, 0.3)';
  }
}