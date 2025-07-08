"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Fonction de scroll personnalisée
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Ajuste selon ton header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false); // Ferme le menu mobile
    // Petit délai pour laisser les animations se terminer
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const getCurrentFlag = () => {
    const shortLang = i18n.language?.substring(0, 2);
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
              alt="Romain DesignCode"
              width={150}
              height={40}
              className="w-auto h-full"
            />
          </div>
          <Image
            src="/image/icons/logo2.svg"
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
            <div className="xl:hidden z-50">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-6 flex flex-col justify-center items-center focus:outline-none group"
                aria-label={
                  menuOpen ? t("header.closeMenu") : t("header.openMenu")
                }
              >
                <span
                  className={`absolute block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
                    menuOpen
                      ? "rotate-45 opacity-100"
                      : "rotate-0 translate-y-[-8px] opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out group-active:scale-90 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
                    menuOpen
                      ? "-rotate-45 opacity-100"
                      : "rotate-0 translate-y-[8px] opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* NAV DESKTOP (cachée en mobile) : en ligne */}
          <nav className="hidden xl:flex xl:gap-14 text-xl font-jakarta">
            <button onClick={() => handleNavClick('seo')} className={styles.navLink}>
              {t("header.seo")}
            </button>
            <button onClick={() => handleNavClick('developer')} className={styles.navLink}>
              {t("header.developer")}
            </button>
            <button onClick={() => handleNavClick('designer')} className={styles.navLink}>
              {t("header.designer")}
            </button>
            <button onClick={() => handleNavClick('services')} className={styles.navLink}>
              {t("header.services")}
            </button>
            <button onClick={() => handleNavClick('projects')} className={styles.navLink}>
              {t("header.projects")}
            </button>
            <button onClick={() => handleNavClick('contact')} className={styles.navLink}>
              {t("header.contact")}
            </button>
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
          <button
            onClick={() => handleNavClick('seo')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.seo")}
          </button>
          <button
            onClick={() => handleNavClick('developer')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.developer")}
          </button>
          <button
            onClick={() => handleNavClick('designer')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.designer")}
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.services")}
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.projects")}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
          >
            {t("header.contact")}
          </button>
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