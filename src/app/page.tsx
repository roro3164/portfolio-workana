"use client";

import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import SplitScreen from "./components/Main/SplitScreen";
import { FormCard } from "./components/Card/Form/FormContact";
import { Footer } from "./components/Footer/Footer";
import IntenseCursorLight from "./components/IntenseCursorLight";
import CarouselCard from "./components/Card/Carousel/CarouselCard";
import NormalCard from "./components/Card/NormalCard/NormalCard";
import BaseCard from "./components/Card/BaseCard/BaseCard";
import "../../i18n"; 
import { useTranslation } from "react-i18next";
import { Project } from "./components/Card/Carousel/types";
import { ServicesSection } from "./components/Card/ServiceCard/ServicesSection";


export default function Page() {
  // On indique qu'on veut utiliser les namespaces "page" et "dataProjects"
  const { t } = useTranslation(["page", "dataProjects"]);

  // On récupère le tableau de projets depuis dataProjects.json
  // grâce à la clé "projects" dans le namespace "dataProjects"
  const projects = t("projects", {
    ns: "dataProjects",
    returnObjects: true,
  }) as Project[];

  return (
    <div>
      <div className="home">
        <div className="mb-6">
          <motion.div
            className="home"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Header />
          </motion.div>
        </div>

        <SplitScreen />

        <section className="sectionCard flex flex-col  ">
          <IntenseCursorLight />

          {/* Section DEVELOPER */}
          <section id="developer" className="z-50">
            <NormalCard
              // Pour afficher le GIF du laptop
              isLaptop={true}
              title={t("developer.title")}
              internContent={t("developer.content")}
              imageSrc="/image/pictures/laptop.png"
              imageAlign="right"
              imagePositionMobile={{ top: "0%", left: "50%" }}
              imageSizeDesktop={{ width: "1000px", height: "1000px" }}
              imagePositionDesktop={{ top: "128%", right: "-10%" }}
              boxPaddings={{
                mobile: { top: "160px" },
                tablet: { top: "410px" },
                desktop: { content: "720px" },
              }}
            />
          </section>

          {/* Section DESIGNER */}
          <section id="designer" className="lg:mb-40 lg:mt-32">
            <NormalCard
              title={t("designer.title")}
              imageAlign="left"
              internContent={t("designer.content")}
              imageSrc="/image/pictures/chevalet.webp"
              hasEaselAnimation={true}
              imageSizeMobile={{ width: "300px", height: "450px" }}
              imageSizeDesktop={{ width: "680px", height: "680px" }}
              boxPaddings={{
                mobile: { top: "500px" },
                tablet: { top: "500px" },
                desktop: { content: "450px" },
              }}
            />
          </section>
          <h3 className="transition-heading text-right">Transformez vos idées en expériences web percutantes.</h3>


          {/* Section SERVICES */}
          <section id="services">
            <BaseCard
            title={t("services.title")}
              titleAlignment="mx-auto"
              cardAlignment="mx-auto"
            >
             
                <ServicesSection />
            </BaseCard>
          </section>

          <h3 className="transition-heading">Des réalisations qui parlent delles-mêmes.</h3>

          {/* Section PROJECTS */}
          <section id="projects">
            {/* On transmet le tableau de projets récupéré via i18n */}
            <CarouselCard projects={projects} />
          </section>
          
          <h3 className="transition-heading text-center">Prêt à concrétiser votre vision ? Discutons de votre projet maintenant.</h3>
  
          {/* Section CONTACT */}
          <section id="contact">
            <BaseCard
           
              titleAlignment="mx-auto"
              cardAlignment="mx-auto"
            >
              <FormCard />
            </BaseCard>
          </section>
        </section>

        <Footer />
      </div>
    </div>
  );
}
