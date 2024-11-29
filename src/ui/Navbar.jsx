import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const onSearch = () => {
    navigate("/search");
  };

  const onHome = () => {
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 darkBlue/80 backdrop-blur-sm z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto py-4 px-8 xl:px-0">
        <div className="flex justify-between items-center">
          <RxHamburgerMenu
            color="white"
            cursor="pointer"
            className="w-[25px] h-[20px]"
          />
          <img
            src="Logo.webp"
            alt="Company Logo"
            className="w-[212px] h-[67px] hidden md:block"
            onClick={ onHome }
          />
          <FiSearch
            color="white"
            cursor="pointer"
            className="w-[25px] h-[20px]"
            onClick={ onSearch }
          />
        </div>
      </div>
    </nav>
  );
};
