import Image from "next/image";
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-10 lg:h-24 mb-2">     
      <h1 className={styles.gradientText}>
  ROMAIN<span className={styles.violetDev}>DEV</span>
</h1>
      

      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex lg:gap-20 lg:mb-2 text-3xl text-2xl font-jakarta" >
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#skills" className={styles.navLink}>Skills</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#service" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
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
