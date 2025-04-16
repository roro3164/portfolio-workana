import { ServiceCard } from "./ServiceCard";
import "../../../../../i18n";
import { useTranslation } from "react-i18next"; 
import ContactButton from "../../Main/ContactButton";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  const { t } = useTranslation("page");
  
  // Récupérer les tableaux explicitement et s'assurer qu'ils sont bien typés
  const starterItems = t("services.starter.items", { returnObjects: true }) as string[];
  const proItems = t("services.pro.items", { returnObjects: true }) as string[];
  const premiumItems = t("services.premium.items", { returnObjects: true }) as string[];
  
  return (
    <section id="services" className="text-white">
    
      <div className="mx-auto flex flex-col gap-y-8"> 
      <motion.div  
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="text-center flex flex-col gap-y-6">
          <h3 className="transition-heading text-3xl font-bold ">{t("services.intro")}</h3>
          <p className="text-xl lg:text-2xl font-bold">{t("services.subtitle")}</p>
          <p className=" italic text-xl lg:text-3xl font-bold ">{t("services.promo")}</p>
        </div>
        </motion.div>
        
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
            color="orange" // La couleur violette d'origine pour la troisième carte
          />
        </div>
        
        <div className="">
          <h3 className="text-center text-2xl font-bold mb-6">{t("services.cta.title")}</h3>
          <a href="#contact">
            <ContactButton 
               title="button.demo"
               icon = "/image/icons/gift.svg"
               iconWidth={28}
               className="mx-auto :w-auto min-w-[280px] px-6 text-xl lg:text-2xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
};