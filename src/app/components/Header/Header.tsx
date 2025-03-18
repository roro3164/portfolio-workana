"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour changer de langue
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="relative flex justify-between items-center h-10 lg:h-16 mb-16 ">
      <div className="h-6 lg:h-10 relative">
        <div className="absolute inset-0 filter blur-[6px] opacity-50">
          <Image
            src="/image/icons/logo.svg"
            alt=""
            width={150}
            height={40}
            className="w-auto h-full"
          />
        </div>
        <Image
          src="/image/icons/logo.svg"
          alt="ROMAIN DEV Logo"
          width={150}
          height={40}
          className="w-auto h-14 lg:h-20 relative"
        />
      </div>

      {/* Sélecteur de langue */}
      <div className="absolute top-0 right-0 mt-2 mr-20 lg:mr-2 flex gap-2">
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-2 py-1 text-sm rounded ${
            i18n.language === "fr" ? "bg-white/20" : ""
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`px-2 py-1 text-sm rounded ${
            i18n.language === "es" ? "bg-white/20" : ""
          }`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-2 py-1 text-sm rounded ${
            i18n.language === "en" ? "bg-white/20" : ""
          }`}
        >
          EN
        </button>
      </div>

      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex lg:gap-14 text-xl font-jakarta">
        <a href="#about" className={styles.navLink}>
          {t("header.about")}
        </a>
        <a href="#developer" className={styles.navLink}>
          {t("header.developer")}
        </a>
        <a href="#designer" className={styles.navLink}>
          {t("header.designer")}
        </a>
        <a href="#projects" className={styles.navLink}>
          {t("header.projects")}
        </a>
        <a href="#services" className={styles.navLink}>
          {t("header.services")}
        </a>
        <a href="#contact" className={styles.navLink}>
          {t("header.contact")}
        </a>
      </nav>

      {/* Bouton Hamburger pour Mobile */}
      <div className="lg:hidden z-50">
        <button
          onClick={toggleMenu}
          className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none group"
          aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
        >
          <span
            className={`block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen
                ? "rotate-45 translate-y-2.5 opacity-100"
                : "rotate-0 translate-y-0 opacity-100"
            }`}
          />
          <span
            className={`block w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen
                ? "-rotate-45 -translate-y-2.5 opacity-100"
                : "rotate-0 translate-y-0 opacity-100"
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-40 transition-transform duration-500 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#about"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.about")}
          </a>
          <a
            href="#developer"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.developer")}
          </a>
          <a
            href="#designer"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.designer")}
          </a>
          <a
            href="#projects"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.projects")}
          </a>
          <a
            href="#services"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.services")}
          </a>
          <a
            href="#contact"
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            {t("header.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
