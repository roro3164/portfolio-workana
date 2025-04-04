import { ServiceCard } from "./ServiceCard";
import "../../../../../i18n";
import { useTranslation } from "react-i18next"; 
import ContactButton from "../../Main/ContactButton";

export const ServicesSection = () => {
  const { t } = useTranslation("page");
  
  // Récupérer les tableaux explicitement et s'assurer qu'ils sont bien typés
  const starterItems = t("services.starter.items", { returnObjects: true }) as string[];
  const proItems = t("services.pro.items", { returnObjects: true }) as string[];
  const premiumItems = t("services.premium.items", { returnObjects: true }) as string[];
  
  return (
    <section id="services" className=" text-white">
      <div className="container mx-auto px-4 flex flex-col gap-y-8"> 
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">{t("services.intro")}</h3>
          <p className="text-lg mb-4">{t("services.subtitle")}</p>
          <p className="text-2xl font-bold mb-6">{t("services.promo")}</p>
        </div>
        
        <div className="flex justify-between items-center flex-col gap-10 xl:flex-row">
          <ServiceCard
            title={t("services.starter.title")}
            description={t("services.starter.description")}
            listItems={starterItems}
            color="green"
          />
          
          <ServiceCard
            title={t("services.pro.title")}
            description={t("services.pro.description")}
            prefix={t("services.pro.prefix")}
            listItems={proItems}
            color="blue" // Couleur bleue pour la deuxième carte
          />
          
          <ServiceCard
            title={t("services.premium.title")}
            description={t("services.premium.description")}
            prefix={t("services.premium.prefix")}
            listItems={premiumItems}
            color="violet" // La couleur violette d'origine pour la troisième carte
          />
        </div>
        
        <div className="">
          <h3 className="text-center text-2xl font-bold mb-6">{t("services.cta.title")}</h3>
          <ContactButton 
             title="button.text" 
             className="mx-auto w-auto min-w-[280px] px-6" 
          />
        </div>
      </div>
    </section>
  );
};