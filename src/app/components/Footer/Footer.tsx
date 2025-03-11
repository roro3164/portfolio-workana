import React from "react";
import Image from "next/image"; // <-- Import du composant Image
import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Email */}
        <div className={styles.email}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/icons/mail.svg"
              alt="GitHub"
              width={24}     // Valeurs approximatives (à ajuster si besoin)
              height={24}
              className={styles.icon}
            />
            mornet.romain2@gmail.com
          </a>
        </div>

        {/* Navigation */}
        <div className={styles.sectionNav}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#developer">Developer</a>
            </li>
            <li>
              <a href="#designer">Designer</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className={styles.socialNetwork}>
          <ul>
            {/* GitHub */}
            <li className="relative">
              <a
                href="https://github.com/roro3164"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/icons/githubHover.svg"
                  alt="GitHub Hover"
                  width={24}
                  height={24}
                  className={`${styles.iconHover} absolute top-[10px] left-[11px] -z-1`}
                />
                <Image
                  src="/image/icons/gitHub.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                GitHub
              </a>
            </li>

            {/* LinkedIn */}
            <li className="relative">
              <a
                href="https://www.linkedin.com/in/romain-mornet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/icons/linkedinHover.svg"
                  alt="LinkedIn Hover"
                  width={24}
                  height={24}
                  className={`${styles.iconHover} absolute top-[8px] left-[12px] -z-1`}
                />
                <Image
                  src="/image/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                LinkedIn
              </a>
            </li>

            {/* Behance */}
            <li className="relative">
              <a
                href="https://www.behance.net/romainmornet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/icons/behanceHover.svg"
                  alt="Behance Hover"
                  width={24}
                  height={24}
                  className={`${styles.iconHover} absolute top-[19px] left-[12px] -z-1`}
                />
                <Image
                  src="/image/icons/behance.svg"
                  alt="Behance"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <p>© 2025 Romain Mornet. All rights reserved</p>
      </div>
    </footer>
  );
};
