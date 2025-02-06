// import logo from "../assets/img/logo.png";
import logoNoBg from "../assets/img/logo-no-bg.png";
import { FiSearch } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMoonSharp } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { ImHeart } from "react-icons/im";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="container flex items-center justify-between space-y-3 py-4">
      <div className="w-[10%] h-[25%]">
        <img src={logoNoBg} alt="logo" className="size-full object-cover " />
      </div>

      <ul className="flex items-center space-x-8 font-orbitron text-xl font-medium mx-auto">
        <li>
          <a href="#" className="my-text-color hover-underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="my-text-color hover-underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="my-text-color hover-underline">
            Cars
          </a>
        </li>
        <li>
          <a href="#" className="my-text-color hover-underline">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="my-text-color hover-underline">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <ImSun className="text-xl text-yellow-500 cursor-pointer transform transition-all duration-300 hover:scale-125" />
          {/* <IoMoonSharp className="text-xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" /> */}
          <select name="" id="" className="outline-none">
            <option value="EN">EN</option>
            <option value="AZ">AZ</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <IoCarSport className="text-2xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />
          <ImHeart className="text-xl text-red-800 cursor-pointer transform transition-all duration-300 hover:scale-125" />
          <FaRegCircleUser className="text-xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Header;
