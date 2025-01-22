import BaseCard from "./components/Card/BaseCard";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import SplitScreen from "./components/SplitScreen";
import styles from "./components/Card/styles/card.module.css";
import { Service } from "./components/Services";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div
        className=" right-5 text-right font-mono"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        <h1 className="text-white text-base sm:text-3xl lg:text-4xl">
          {"<h1>"}Romain Mornet{"</h1>"}
        </h1>
      </div>

      <SplitScreen />

      <section>
        <Card
          title="About Me"
          imageAlign="right"
          internContent="Hi, I’m a passionate UI/UX Designer and Full-Stack Developer from the sunny south of France, based in Montpellier.
            I love creating intuitive and visually engaging designs with tools like Figma and Photoshop, while building modern and efficient applications using C#, React, and ASP.NET. My goal is to bridge design and technology to create solutions that are both practical and beautiful.

          Outside of work, I’m a big fan of traveling, discovering new places, and finding inspiration in different cultures. Whether it’s through exploring the latest tech trends or enjoying the Mediterranean lifestyle, I’m always looking for fresh ideas to bring into my projects."
          imageSrc="/image/pictures/photoAbout.png"
          // Mobile styles

          imageSizeMobile={{
            width: "200px",
            height: "300px",
          }}
          imageSizeDesktop={{
            width: "500px",
            height: "500px",
          }}
          boxPaddings={{
            mobile: {
              top: "128px", // Pour l'espace au-dessus en mobile
            },
            desktop: {
              content: "400px", // Pour l'espace du côté du contenu en desktop
            },
          }}
        />

        <Card
          title="Developer Full-stack"
          internContent="I’m a full-stack developer who loves working with React and Next.js to create fast, dynamic, and user-friendly web applications. I also enjoy working with HTML, CSS, and JavaScript, and I’ve had the chance to explore Angular as well. On the backend, I build solid APIs with C# and ASP.NET. I’m always curious and excited to learn new technologies, making every project an opportunity to grow and deliver something awesome."
          imageSrc="/image/pictures/laptop.png"
          // Mobile styles

          imageAlign="left"
          imageSizeMobile={{
            width: "200px",
            height: "300px",
          }}
          imageSizeDesktop={{
            width: "600px",
            height: "400px",
          }}
          boxPaddings={{
            mobile: {
              top: "128px", // Pour l'espace au-dessus en mobile
            },
            desktop: {
              content: "400px", // Pour l'espace du côté du contenu en desktop
            },
          }}
        />

        <Card
          title="Designer UI/UX"
          imageAlign="right"
          internContent="As a UI/UX designer, I thrive on collaborating with teams to bring innovative ideas to life. My approach combines creativity and strategy to design interfaces that are both intuitive and visually compelling. By leveraging tools like Figma and Photoshop, I deliver designs that leave a lasting impression."
          imageSrc="/image/pictures/chevalet.png"
          hasEaselAnimation={true}
          imageSizeMobile={{
            width: "500px",
            height: "500px",
          }}
          imageSizeDesktop={{
            width: "500px",
            height: "700px",
          }}
          boxPaddings={{
            mobile: {
              top: "128px", // Pour l'espace au-dessus en mobile
            },
            desktop: {
              content: "400px", // Pour l'espace du côté du contenu en desktop
            },
          }}
        />

        <BaseCard title="Services">
          <div className={styles.internBox}>
            <Service />
          </div>
        </BaseCard>
      </section>
    </div>
  );
}
