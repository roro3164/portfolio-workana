import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/image/icons/logo1.svg"
          alt="logo"
          width={80} // Taille par défaut pour petits écrans
          height={80}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
      </div>

      {/* Menu pour Desktop */}
      <nav className="hidden lg:flex gap-20 text-2xl">
        <a href="#home" className="text-white hover:text-gray-400">Home</a>
        <a href="#about" className="text-white hover:text-gray-400">About</a>
        <a href="#skill" className="text-white hover:text-gray-400">Skill</a>
        <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
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
