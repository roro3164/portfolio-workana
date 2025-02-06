import Image from "next/image";
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-10 lg:h-24 mb-2 lg:mb-0">
      {/* Logo */}
     
      <h1 className={styles.gradientText}>
  ROMAIN<span className={styles.violetDev}>DEV</span>
</h1>
      

      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex lg:gap-20 lg:mb-8 text-3xl text-2xl " style={{ fontFamily: "'Montserrat A1'" }}>
        <a href="#about" className="text-white hover:text-gray-400">About</a>
        <a href="#skills" className="text-white hover:text-gray-400">Skills</a>
        <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
        <a href="#service" className="text-white hover:text-gray-400">Services</a>
        <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
      </nav>

      {/* Bouton Hamburger pour Mobile */}
      <Image
        className="lg:hidden"
        src="/image/icons/hamburger.svg"
        alt="menu"
        width={30}
        height={30}
      />
    </header>
  );
};

export default Header;
