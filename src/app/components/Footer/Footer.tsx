import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  // Votre defaultNS est "page", donc on peut se contenter de useTranslation()
  // ou faire useTranslation(["page"]) si vous préférez.
  const { t } = useTranslation();

  // Fonction pour faire défiler jusqu'au formulaire de contact
  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Lien e-mail -> fait défiler vers la section contact */}
        <div className={styles.email}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContactForm();
            }}
          >
            <Image
              src="/image/icons/mail.svg"
              alt="Email"
              width={24}
              height={24}
              className={styles.icon}
            />
            mornet.romain2@gmail.com
          </a>
        </div>

        {/* Navigation : on va chercher "footer.navigation.*" dans page.json */}
        <div className={styles.sectionNav}>
          <ul>
            <li>
              <a href="#developer">{t("footer.navigation.developer")}</a>
            </li>
            <li>
              <a href="#designer">{t("footer.navigation.designer")}</a>
            </li>
            <li>
              <a href="#projects">{t("footer.navigation.projects")}</a>
            </li>
            <li>
              <a href="#services">{t("footer.navigation.services")}</a>
            </li>
            <li>
              <a href="#contact">{t("footer.navigation.contact")}</a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux : on va chercher "footer.social.*" dans page.json */}
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
                {t("footer.social.github")}
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
                {t("footer.social.linkedin")}
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
                {t("footer.social.behance")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className={styles.footerBottom}>
        {/* On va chercher "footer" -> "copyright" */}
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};
