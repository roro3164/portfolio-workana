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
  const { t } = useTranslation(["page", "dataProjects"]);

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

        <section className="sectionCard flex flex-col gap-y-10 lg:gap-y-20 ">
          <IntenseCursorLight />

          {/* Section DEVELOPER */}
          <section id="developer" className="z-10 ">
            <NormalCard
              isLaptop={true}
              title={t("developer.title")}
              internContent={t("developer.content")
                .split("\n\n")
                .map((p: string, i: number) => (
                  <p key={i} className="mb-4">
                    {p}
                  </p>
                ))}
              imageSrc="/image/pictures/laptop.png"
              imageAlign="right"
              imagePositionMobile={{ top: "0%", left: "50%" }}
              imageSizeDesktop={{ width: "1000px", height: "1000px" }}
              imagePositionDesktop={{ top: "100%", right: "-10%" }}
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
              internContent={t("designer.content")
                .split("\n\n")
                .map((p: string, i: number) => (
                  <p key={i} className="mb-4">
                    {p}
                  </p>
                ))}
              imageSrc="/image/pictures/chevalet.webp"
              hasEaselAnimation={true}
              imageSizeMobile={{ width: "480px", height: "480px" }}
              imageSizeDesktop={{ width: "720px", height: "720px" }}
              imagePositionDesktop={{ top: "40%", right: "" }}
              boxPaddings={{
                mobile: { top: "500px" },
                tablet: { top: "500px" },
                desktop: { content: "450px" },
              }}
            />
          </section>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="transition-heading text-center italic">
              {t("transition.services")}
            </h4>
          </motion.div>

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

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="transition-heading italic">{t("transition.projects")}</h4>
          </motion.div>
          {/* Section PROJECTS */}
          <section id="projects">
            <CarouselCard projects={projects} />
          </section>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="transition-heading italic text-center">
              {t("transition.contact")}
            </h4>
          </motion.div>

          {/* Section CONTACT */}
          <section id="contact">
            <FormCard />
          </section>
        </section>

        <Footer />
      </div>
    </div>
  );
}
