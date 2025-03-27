"use client";

import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import SplitScreen from "./components/Main/SplitScreen";
import { FormCard } from "./components/Card/Form/FormContact";
import { Footer } from "./components/Footer/Footer";
import IntenseCursorLight from "./components/IntenseCursorLight";
import CarouselCard from "./components/Card/Carousel/CarouselCard";
import NormalCard from "./components/Card/NormalCard/NormalCard";
import { ServiceCard } from "./components/Card/ServiceCard/ServiceCard";
import BaseCard from "./components/Card/BaseCard/BaseCard";
import "../../i18n"; 
import { useTranslation } from "react-i18next";
import { Project } from "./components/Card/Carousel/types";


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

        <section className="sectionCard flex flex-col mt-5 sm:mt-0 gap-5 sm:gap-36 sm:p-12 ">
          <IntenseCursorLight />

          {/* Section ABOUT */}
          <section id="about">
            <NormalCard
              title={t("about.title")}
              internContent={t("about.content")}
              imageSrc="/image/pictures/photoAbout.webp"
              imageAlign="right"
              boxStyle="purple"
              hoverType="white"
              imageSizeMobile={{ width: "230px", height: "230px" }}
              imageSizeDesktop={{ width: "500px", height: "500px" }}
              imagePositionDesktop={{ right: "-5%" }}
              boxPaddings={{
                mobile: { top: "240px" },
                desktop: { content: "400px" },
              }}
            />
          </section>

          {/* Section DEVELOPER */}
          <section id="developer">
            <NormalCard
              // Pour afficher le GIF du laptop
              isLaptop={true}
              title={t("developer.title")}
              internContent={t("developer.content")}
              imageSrc="/image/pictures/laptop.png"
              imageAlign="left"
              imagePositionMobile={{ top: "0%", left: "50%" }}
              imageSizeDesktop={{ width: "1000px", height: "1000px" }}
              imagePositionDesktop={{ top: "100%", left: "-12%" }}
              boxPaddings={{
                mobile: { top: "170px" },
                desktop: { content: "720px" },
              }}
            />
          </section>

          {/* Section DESIGNER */}
          <section id="designer" className="lg:mb-40 lg:mt-32">
            <NormalCard
              title={t("designer.title")}
              imageAlign="right"
              internContent={t("designer.content")}
              imageSrc="/image/pictures/chevalet.webp"
              hasEaselAnimation={true}
              imageSizeMobile={{ width: "300px", height: "450px" }}
              imageSizeDesktop={{ width: "680px", height: "680px" }}
              boxPaddings={{
                mobile: { top: "500px" },
                desktop: { content: "450px" },
              }}
            />
          </section>

          {/* Section PROJECTS */}
          <section id="projects">
            {/* On transmet le tableau de projets récupéré via i18n */}
            <CarouselCard projects={projects} />
          </section>

          {/* Section SERVICES */}
          <section id="services">
            <BaseCard
              title={t("services.title")}
              titleAlignment="mx-auto"
              cardAlignment="mx-auto"
            >
              <div className="flex justify-between items-center flex-col gap-10 xl:flex-row">
                <ServiceCard
                  title={t("services.uiux.title")}
                  description={t("services.uiux.description")}
                  listItems={[
                    t("services.uiux.items.0"),
                    t("services.uiux.items.1"),
                    t("services.uiux.items.2"),
                    t("services.uiux.items.3"),
                  ]}
                />

                <ServiceCard
                  title={t("services.development.title")}
                  description={t("services.development.description")}
                  listItems={[
                    t("services.development.items.0"),
                    t("services.development.items.1"),
                    t("services.development.items.2"),
                    t("services.development.items.3"),
                  ]}
                />

                <ServiceCard
                  title={t("services.website.title")}
                  description={t("services.website.description")}
                  listItems={[
                    t("services.website.items.0"),
                    t("services.website.items.1"),
                    t("services.website.items.2"),
                    t("services.website.items.3"),
                  ]}
                />
              </div>
            </BaseCard>
          </section>

          {/* Section CONTACT */}
          <section id="contact">
            <BaseCard
              title={t("contactForm.title")}
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
