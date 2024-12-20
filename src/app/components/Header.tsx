import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between mr-6">
      <Image src="/image/icons/logo1.svg" alt="logo" width={100} height={100} />
      <Image className="" src="/image/icons/hamburger.svg" alt="menu" width={30} height={30} />
    </div>
  );
};

export default Header;