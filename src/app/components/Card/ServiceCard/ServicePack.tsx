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
    <div className="w-full min-w-[320px] transition-transform duration-400 hover:scale-105">
      <VioletHover color={color}>
        <div className="bg-[#100E12] rounded-xl">
          <div className={`rounded-xl min-h-[600px] flex flex-col p-4 sm:p-6 lg:p-8 gap-y-6 lg:gap-y-10 ${styles.glassCard}`}>
            {/* Banner */}
            <div className="text-right mt-2 mb-2">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm sm:text-base lg:text-xl font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                {t("services.pack.banner")}
              </span>
            </div>
            
            {/* Titre */}
            <div
              className={`
                mx-auto text-center
                text-white text-lg sm:text-xl lg:text-2xl font-jakarta font-semibold
                py-2 px-4 sm:px-6 lg:px-10 w-full rounded-xl
                ${styles.titleBox}
              `}
              style={{ 
                '--card-color': getColorVariable(color) 
              } as React.CSSProperties}
            >
              <h3 className="break-words">{title}</h3>
            </div>
         
            {/* Description */}
            <div className={`rounded-xl p-4 sm:p-6 ${styles.internBox}`}>
              <p className="text-white text-center text-base sm:text-lg lg:text-xl italic leading-relaxed">
                {description}
              </p>
            </div>

            {/* Section des cartes - Layout unique responsive */}
            <div className="flex flex-col lg:flex-row  justify-center items-center gap-4 lg:gap-6">
              {/* Première carte */}
              <div className="w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[400px] max-w-[320px] mx-auto sm:mx-0">
                <ServiceCard
                  title={proCard.title}
                  description={proCard.description}
                  prefix={proCard.prefix}
                  listItems={proCard.listItems}
                  color="blue"
                  disableHover={true}
                  width="100%"
                />
              </div>

              {/* Séparateur + */}
              <div className="flex-shrink-0 ">
                <span className="text-white text-7xl font-bold">+</span>
              </div>
              
              {/* Deuxième carte */}
              <div className="w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[400px] max-w-[320px] mx-auto sm:mx-0">
                <ServiceCard
                  title={strategieCard.title}
                  description={strategieCard.description}
                  prefix={strategieCard.prefix}
                  listItems={strategieCard.listItems}
                  color="orange"
                  disableHover={true}
                  width="100%"
                />
              </div>
            </div>

            {/* Explication */}
            <div className="text-center px-2">
              <h4 className="text-amber-400 text-xl lg:text-2xl font-bold break-words">
                {t("services.pack.explication.title")}
              </h4>
            </div>

            {/* Pour qui */}
            <div className="text-center px-2">
              <h4 className="text-amber-400 text-lg lg:text-xl font-bold mb-3 lg:mb-4 break-words">
                {t("services.pack.pour.title")}
              </h4>
              <p className="text-white text-base lg:text-lg leading-relaxed">
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