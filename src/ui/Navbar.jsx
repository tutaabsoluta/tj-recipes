import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center">
        <RxHamburgerMenu
          color="white"
          cursor="pointer"
          className="w-[25px] h-[20px]"
        />
        <img 
            src="Logo.png" 
            alt="Company Logo" 
            className="w-[212px] h-[67px]"             
        />
        <FiSearch
          color="white"
          cursor="pointer"
          className="w-[25px] h-[20px]"
        />
      </div>
    </nav>
  );
};
