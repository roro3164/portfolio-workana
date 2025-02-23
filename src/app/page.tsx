

import Header from "./components/Header/Header";
import SplitScreen from "./components/Main/SplitScreen";

import styles from "./components/Card/styles/card.module.scss";
import { FormCard } from "./components/Card/Form/FormContact";
import { Footer } from "./components/Footer/Footer";

import IntenseCursorLight from "./components/IntenseCursorLight";
import NeonWord from "./components/NeonWord";
import BaseCard from "./components/Card/BaseCard/BaseCard";
import CarouselCard, { CardProject } from "./components/Card/Carousel/CarouselCard";
import NormalCard from "./components/Card/NormalCard/NormalCard";
import { ServiceCard } from "./components/Card/ServiceCard/ServiceCard";



const projects = [
  {
    id: 1,
    imageProject: "/image/projects/MockUpSportclubpng.png",
    logoProject: "/image/projects/logoSportclub .svg",
    title: "Sport Club",
    description:
      "A passionate UI/UX Designer and Full-Stack Developer.  I design intuitive interfaces using Figma and Photoshop, and develop modern applications with C#, React, and ASP.NET. My goal is to combine design and technology to create projects that are both visually appealing and highly functional ",
  },
  {
    id: 2,
    imageProject: "/image/projects/mockUpLapin.png",
    logoProject: "/image/projects/LogoLapin.svg",
    title: "Lapin Project",
    description: "Description détaillée du projet Lapin...",
  },
  {
    id: 3,
    imageProject: "/image/projects/mockUpCrypto.png",
    logoProject: "/image/projects/logoCrypto.svg",
    title: "Crypto Platform",
    description: "Description détaillée du projet Crypto...",
  },
  {
    id: 4,
    imageProject: "/image/projects/mockUpEco.png",
    logoProject: "/image/projects/logoEco.svg",
    title: "Eco Project",
    description: "Description détaillée du projet Eco...",
  },
  {
    id: 5,
    imageProject: "/image/projects/mockUpAqui.png",
    logoProject: "/image/projects/logoAqui.svg",
    title: "Aqui Project",
    description: "Description détaillée du projet Aqui...",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-6">
        <Header></Header> 
      </div>
      
      <SplitScreen></SplitScreen>

     
{/* 
      <section className="flex flex-col gap-20 px-12 "> */}
      <section className=" flex flex-col mt-5 sm:mt-0 gap-5 sm:gap-20 sm:p-12 ">
        <IntenseCursorLight />

        <NormalCard
          title="About Me"
          imageAlign="right"
          internContent="Hi, I’m a passionate UI/UX Designer and Full-Stack Developer from the sunny south of France, based in Montpellier.
            I love creating intuitive and visually engaging designs with tools like Figma and Photoshop, while building modern and efficient applications using C#, React, and ASP.NET. My goal is to bridge design and technology to create solutions that are both practical and beautiful.

          Outside of work, I’m a big fan of traveling, discovering new places, and finding inspiration in different cultures. Whether it’s through exploring the latest tech trends or enjoying the Mediterranean lifestyle, I’m always looking for fresh ideas to bring into my projects."
          imageSrc="/image/pictures/photoAbout.png"
          // Mobile styles

          imageSizeMobile={{
            width: "230px",
            height: "230px",
          }}
          imageSizeDesktop={{
            width: "500px",
            height: "500px",
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

        <NeonWord word={"<html>"} position="mx-auto" />

        <NormalCard
          title="Developer Full-stack"
          internContent="I’m a full-stack developer who loves working with React and Next.js to create fast, dynamic, and user-friendly web applications. I also enjoy working with HTML, CSS, and JavaScript, and I’ve had the chance to explore Angular as well. On the backend, I build solid APIs with C# and ASP.NET. I’m always curious and excited to learn new technologies, making every project an opportunity to grow and deliver something awesome."
          imageSrc="/image/pictures/laptop.png"
          // Mobile styles

          imageAlign="left"
          imageSizeMobile={{
            width: "300px",
            height: "200px",
          }}
          imageSizeDesktop={{
            width: "550px",
            height: "400px",
          }}
          boxPaddings={{
            mobile: {
              top: "230px", // Pour l'espace au-dessus en mobile
            },
            desktop: {
              content: "400px", // Pour l'espace du côté du contenu en desktop
            },
          }}
        />

        <NeonWord word={"</div>"} position="pl-44" />

        <NormalCard
          title="UI/UX Designer"
          imageAlign="right"
          internContent="As a UI/UX designer, I thrive on collaborating with teams to bring innovative ideas to life. My approach combines creativity and strategy to design interfaces that are both intuitive and visually compelling. By leveraging tools like Figma and Photoshop, I deliver designs that leave a lasting impression."
          imageSrc="/image/pictures/chevalet.png"
          hasEaselAnimation={true}
          imageSizeMobile={{
            width: "450px",
            height: "450px",
          }}
          imageSizeDesktop={{
            width: "500px",
            height: "580px",
          }}
          boxPaddings={{
            mobile: {
              top: "470px", // Pour l'espace au-dessus en mobile
            },
            desktop: {
              content: "400px", // Pour l'espace du côté du contenu en desktop
            },
          }}
        />
        <NeonWord word="Tailwind" position="mx-auto " />

        <CarouselCard projects={projects} />
        
        <NeonWord word="Typescript" position=" pl-[70%]" />

        <BaseCard
          title="Services"
          titleAlignment="mx-auto"
          cardAlignment="mx-auto"
        >
          <div className={styles.internBox}>
            <div className={styles.containerCard}>
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
          </div>
        </BaseCard>
        <NeonWord word={"<section>"}  position="pl-[30%]" />
        <BaseCard
          title="Contact me"
          titleAlignment="mx-auto"
          cardAlignment="mx-auto"
        >
          <FormCard></FormCard>
        </BaseCard>
      </section>
      
        <Footer></Footer>
     
    </div>
  );
}
