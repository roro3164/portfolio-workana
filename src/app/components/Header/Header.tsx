"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);       // Pour le menu mobile
  const [langMenuOpen, setLangMenuOpen] = useState(false); // Pour le sélecteur de langue
  const { t, i18n } = useTranslation();

  // Ouvre/ferme le menu mobile (hamburger)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Ouvre/ferme le petit menu de langues
  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  // Change la langue et referme le menu de langues
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  // Retourne l'icône du drapeau selon la langue active
  const getCurrentFlag = () => {
    const shortLang = i18n.language?.substring(0, 2); // "fr-FR" → "fr"
    switch (shortLang) {
      case "fr":
        return "/image/icons/frenchFlag.svg";
      case "es":
        return "/image/icons/spanishFlag.svg";
      case "en":
      default:
        return "/image/icons/englishFlag.svg";
    }
  };
  
  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className="
          relative 
          flex justify-between
          items-start
          h-10 lg:h-16
          mb-8 lg:mb-14
          text-white 
          
        "
      >
        {/* LOGO À GAUCHE */}
        <div className="relative h-6 lg:h-10">
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

        {/* CONTENEUR À DROITE : en colonne */}
        <div className="flex flex-col items-end w-auto gap-4">
          {/* Ligne du haut : Drapeau (et hamburger en mobile) */}
          <div className="flex items-center gap-4">
            {/* Bouton du drapeau */}
            <button
              onClick={toggleLangMenu}
              className="
                relative 
                flex items-center 
                px-2 py-2
                rounded
               bg-white/10 hover:bg-white/20 
                transition-colors
                focus:outline-none
              "
            >
              <Image
                src={getCurrentFlag()}
                alt="Drapeau langue active"
                width={24}
                height={24}
                className="rounded"
              />
            </button>

            {/* Bouton Hamburger (visible seulement en mobile) */}
            <div className="lg:hidden z-50">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none group"
                aria-label={
                  menuOpen ? t("header.closeMenu") : t("header.openMenu")
                }
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
          </div>

          {/* NAV DESKTOP (cachée en mobile) : en ligne */}
          <nav className="hidden lg:flex lg:gap-14 text-xl font-jakarta">
            <a href="#developer" className={styles.navLink}>
              {t("header.developer")}
            </a>
            <a href="#designer" className={styles.navLink}>
              {t("header.designer")}
            </a>
            <a href="#services" className={styles.navLink}>
              {t("header.services")}
            </a>
            <a href="#projects" className={styles.navLink}>
              {t("header.projects")}
            </a>
            <a href="#contact" className={styles.navLink}>
              {t("header.contact")}
            </a>
          </nav>
        </div>
      </header>

      {/* MENU MOBILE (plein écran) */}
      <div
        className={`
          lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-40
          transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
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

      {/* OVERLAY & PETIT MENU DE LANGUES */}
      {langMenuOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex justify-end items-start
            pt-14 pr-12   
            bg-black/40
            backdrop-blur-sm
          "
          onClick={() => setLangMenuOpen(false)}
        >
          {/* Petit panneau de sélection de langue */}
          <div
            className="
              bg-gray-900/90 
              text-white
              rounded
              p-3
              flex flex-col gap-2
              backdrop-blur-sm
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex items-center gap-2 hover:bg-[#8b5cf630] px-2 py-1 rounded text-sm"
              onClick={() => changeLanguage("fr")}
            >
              <Image
                src="/image/icons/frenchFlag.svg"
                alt="FR"
                width={20}
                height={20}
                className="rounded"
              />
              FR
            </button>
            <button
              className="flex items-center gap-2 hover:bg-[#8b5cf630] px-2 py-1 rounded text-sm"
              onClick={() => changeLanguage("es")}
            >
              <Image
                src="/image/icons/spanishFlag.svg"
                alt="ES"
                width={20}
                height={20}
                className="rounded"
              />
              ES
            </button>
            <button
              className="flex items-center gap-2 hover:bg-[#8b5cf630] px-2 py-1 rounded text-sm"
              onClick={() => changeLanguage("en")}
            >
              <Image
                src="/image/icons/englishFlag.svg"
                alt="EN"
                width={20}
                height={20}
                className="rounded"
              />
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
