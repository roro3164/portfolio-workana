import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
 

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       

        {/* Navigation */}
        <div className={styles.sectionNav}>
          <ul>
          <li><a href="#seo">{t("footer.navigation.seo")}</a></li>
            <li><a href="#developer">{t("footer.navigation.developer")}</a></li>
            <li><a href="#designer">{t("footer.navigation.designer")}</a></li>
            <li><a href="#services">{t("footer.navigation.services")}</a></li>
            <li><a href="#projects">{t("footer.navigation.projects")}</a></li>
            <li><a href="#contact">{t("footer.navigation.contact")}</a></li>
          </ul>
        </div>

        
      </div>

      {/* Bas de page centré avec padding */}
      <div
        className={styles.footerBottom}
        style={{ textAlign: "center", padding: "1rem 0" }}
      >
        <p style={{ margin: 0, marginBottom: "1rem" }}>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        {/* Logo centré */}
        <Image
          src="/image/icons/logoCentre.svg"
          alt="Logo Romain DesignCode"
          width={160}
          height={160}
          style={{ display: "inline-block", marginTop: "1rem" }}
        />
      </div>
    </footer>
  );
};