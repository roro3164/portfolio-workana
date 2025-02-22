"use client"
import { useState } from "react";
import Image from "next/image";
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex justify-between items-center h-10 lg:h-16 mb-2 ">     
      {/* Logo SVG remplaçant le texte avec effet de lueur */}
      <div className="h-6 lg:h-10 relative">
        <div className="absolute inset-0 filter blur-[6px] opacity-50">
          <Image
            src="/image/pictures/Fichier 3.svg"
            alt=""
            width={150}
            height={40}
            priority
            className="w-auto h-full"
          />
        </div>
        <Image
          src="/image/pictures/Fichier 3.svg"
          alt="ROMAIN DEV Logo"
          width={150}
          height={40}
          priority
          className="w-auto h-full relative"
        />
      </div>
      
      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex lg:gap-14 text-xl font-jakarta">
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#developer" className={styles.navLink}>Developer</a>
        <a href="#designer" className={styles.navLink}>Designer</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#service" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>

      {/* Bouton Hamburger pour Mobile */}
      <button 
        className="lg:hidden z-50" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Image
          src={menuOpen ? "/image/icons/close.svg" : "/image/icons/hamburger.svg"}
          alt={menuOpen ? "Close menu" : "Open menu"}
          width={24}
          height={24}
        />
      </button>

      {/* Menu Mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <nav className="flex flex-col items-center gap-6 py-20">
          <a href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>About</a>
          <a href="#developer" className={styles.mobileNavLink} onClick={toggleMenu}>Developer</a>
          <a href="#designer" className={styles.mobileNavLink} onClick={toggleMenu}>Designer</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projects</a>
          <a href="#service" className={styles.mobileNavLink} onClick={toggleMenu}>Services</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
