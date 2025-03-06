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
    <header className="relative flex justify-between items-center h-10 lg:h-16 mb-16 ">     
      {/* Logo SVG remplaçant le texte avec effet de lueur */}
      <div className="h-6 lg:h-10 relative">
        <div className="absolute inset-0 filter blur-[6px] opacity-50">
          <Image
            src="/image/icons/logo.svg"
            alt=""
            width={150}
            height={40}
            priority
            className="w-auto h-full"
          />
        </div>
        <Image
          src="/image/icons/logo.svg"
          alt="ROMAIN DEV Logo"
          width={150}
          height={40}
          priority
          className="w-auto h-14 lg:h-20 relative"
        />
      </div>
      
      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex lg:gap-14 text-xl font-jakarta">
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#developer" className={styles.navLink}>Developer</a>
        <a href="#designer" className={styles.navLink}>Designer</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>

      {/* Bouton Hamburger pour Mobile */}
      <div className="lg:hidden z-50">
        <button 
          onClick={toggleMenu} 
          className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none group"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span 
            className={`block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen 
                ? 'rotate-45 translate-y-2.5 opacity-100' 
                : 'rotate-0 translate-y-0 opacity-100'
            }`} 
          />
          <span 
            className={`block w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`block w-full h-[3px] bg-white rounded-full transform transition-all duration-300 ease-in-out group-active:scale-90 ${
              menuOpen 
                ? '-rotate-45 -translate-y-2.5 opacity-100' 
                : 'rotate-0 translate-y-0 opacity-100'
            }`} 
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-40 transition-transform duration-500 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a 
            href="#about" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#developer" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            Developer
          </a>
          <a 
            href="#designer" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            Designer
          </a>
          <a 
            href="#projects" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#services" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-white text-2xl transform transition-transform duration-300 active:scale-95"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;