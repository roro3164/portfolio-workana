"use client";

import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import SplitScreen from "./components/Main/SplitScreen";
import { FormCard } from "./components/Card/Form/FormContact";
import { Footer } from "./components/Footer/Footer";
import IntenseCursorLight from "./components/IntenseCursorLight";
import NeonWord from "./components/NeonWord";
import CarouselCard from "./components/Card/Carousel/CarouselCard";
import NormalCard from "./components/Card/NormalCard/NormalCard";
import { ServiceCard } from "./components/Card/ServiceCard/ServiceCard";
import BaseCard from "./components/Card/BaseCard/BaseCard";
import { projects } from "./components/Card/Carousel/projectsData";
import HeroOverlay from "./components/Main/HeroOverlay";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="mb-6">
          <motion.div
            className="home"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 13.5, duration: 1 }}
          >
            <Header />
          </motion.div>
        </div>
        
          <HeroOverlay></HeroOverlay>
        <SplitScreen></SplitScreen>

    
      </div> 
    
      <section className="sectionCard flex flex-col mt-5 sm:mt-0 gap-5 sm:gap-36 sm:p-12 ">
        <IntenseCursorLight />

        <motion.div
          initial={{ opacity: 0, y: 50 }} // Part de 50px plus bas et invisible
          animate={{ opacity: 1, y: 0 }} // Monte à 0 (position normale) et devient visible
          transition={{
            delay: 14, // Commence après 13s
            duration: 1, // Animation de 2s
            ease: "easeOut",
          }}
        >
          <section id="about">
            <NormalCard
              title="About Me"
              imageAlign="right"
              internContent="Hi, I’m a passionate UI/UX Designer and Full-Stack Developer from the sunny south of France, based in Montpellier.
            I love creating intuitive and visually engaging designs with tools like Figma and Photoshop, while building modern and efficient applications using C#, React, and ASP.NET. My goal is to bridge design and technology to create solutions that are both practical and beautiful.

          Outside of work, I’m a big fan of traveling, discovering new places, and finding inspiration in different cultures. Whether it’s through exploring the latest tech trends or enjoying the Mediterranean lifestyle, I’m always looking for fresh ideas to bring into my projects."
              imageSrc="/image/pictures/photoAbout.png"
              boxStyle="purple"
              hoverType="white"
              // Mobile styles

              imageSizeMobile={{
                width: "230px",
                height: "230px",
              }}
              imageSizeDesktop={{
                width: "500px",
                height: "500px",
              }}
              imagePositionDesktop={{
                right: "-5%",
              }}
              boxPaddings={{
                mobile: {
                  top: "240px",
                },
                desktop: {
                  content: "400px", // Pour l'espace du côté du contenu en desktop
                },
              }}
            />
          </section>
        </motion.div>

        <NeonWord word={"<html>"} position="mx-auto" />

        <section id="developer">
          <NormalCard
            title="Developer Full-stack"
            internContent="I’m a full-stack developer who loves working with React and Next.js to create fast, dynamic, and user-friendly web applications. I also enjoy working with HTML, CSS, and JavaScript, and I’ve had the chance to explore Angular as well. On the backend, I build solid APIs with C# and ASP.NET. I’m always curious and excited to learn new technologies, making every project an opportunity to grow and deliver something awesome."
            imageSrc="/image/pictures/laptop.png"
            imageAlign="left"
            // Mobile styles

            imagePositionMobile={{
              top: "0%",
              left: "50%",
            }}
            // Desktop
            imageSizeDesktop={{
              width: "1000px",
              height: "1000px",
            }}
            imagePositionDesktop={{
              top: "100%",
              left: "-12%",
            }}
            boxPaddings={{
              mobile: {
                top: "", // Pour l'espace au-dessus en mobile
              },
              desktop: {
                content: "720px", // Pour l'espace du côté du contenu en desktop
              },
            }}
          ></NormalCard>
        </section>

        <NeonWord word={"</div>"} position="pl-44" />

        <section id="designer">
          <NormalCard
            title="UI/UX Designer"
            imageAlign="right"
            internContent="As a UI/UX designer, I thrive on collaborating with teams to bring innovative ideas to life. My approach combines creativity and strategy to design interfaces that are both intuitive and visually compelling. By leveraging tools like Figma and Photoshop, I deliver designs that leave a lasting impression."
            imageSrc="/image/pictures/chevalet.png"
            hasEaselAnimation={true}
            imageSizeMobile={{
              width: "300px",
              height: "450px",
            }}
            imageSizeDesktop={{
              width: "680px",
              height: "680px",
            }}
            boxPaddings={{
              mobile: {
                top: "500px", // Pour l'espace au-dessus en mobile
              },
              desktop: {
                content: "450px", // Pour l'espace du côté du contenu en desktop
              },
            }}
          />
        </section>
        <NeonWord word="Tailwind" position="mx-auto " />

        <section id="projects">
          <CarouselCard projects={projects} />
        </section>

        <NeonWord word="Typescript" position=" pl-[70%]" />

        <section id="services">
          <BaseCard
            title="Services"
            titleAlignment="mx-auto"
            cardAlignment="mx-auto"
          >
            <div className="flex justify-between items-center flex-col gap-10 xl:flex-row">
              <ServiceCard
                title="UI/UX Design"
                description="I design intuitive and visually appealing user experiences tailored to your needs."
                listItems={[
                  "Wireframes and mockups on Figma",
                  "Interactive prototypes",
                  "Custom graphic design with Photoshop",
                  "User-centered design",
                ]}
              />

              <ServiceCard
                title="Development"
                description="I turn your designs into modern and high-performing websites."
                listItems={[
                  "Responsive integration for mobile, tablet, and desktop",
                  "Modern visual effects and animations",
                  "Optimization for fast and reliable performance",
                  "Cross-browser compatibility",
                ]}
              />

              <ServiceCard
                title="Complete Website"
                description="I offer turnkey solutions, from design to deployment."
                listItems={[
                  "Landing pages to maximize your conversions",
                  "Modern visual effects and animations",
                  "SEO optimization and fast loading speed",
                  "Hosting, maintenance, and updates included",
                ]}
              />
            </div>
          </BaseCard>
        </section>

        <NeonWord word={"<section>"} position="pl-[30%]" />

        <section id="contact">
          <BaseCard
            title="Contact"
            titleAlignment="mx-auto"
            cardAlignment="mx-auto"
          >
            <FormCard></FormCard>
          </BaseCard>
        </section>
      </section>

      <Footer></Footer>
    </div>
  );
}
