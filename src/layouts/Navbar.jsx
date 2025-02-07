import logoNoBg from "../assets/img/logo-cut.png";
import { FiSearch } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMoonOutline } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiHeart } from "react-icons/pi";

import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`container flex items-center justify-between py-5.5`}
    >
      <div className="w-[10%]">
        <img src={logoNoBg} alt="logo" className="size-full object-cover" />
      </div>

      <ul className="flex items-center justify-center space-x-8 text-xl font-medium mx-auto">
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

      <div className="flex items-center space-x-4">
        <div className="flex relative">
          <input
            type="text"
            className="w-[75%] ml-auto border border-gray-400 rounded-full outline-none pl-10 pr-2 py-0.5 text-md shadow-md shadow-gray-200 placeholder:text-lg"
            placeholder="Search"
          />
          <FiSearch className="text-xl text-gray-700 absolute left-20 top-1" />
        </div>

        <IoCarSport className="text-2xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />
        <PiHeart className="text-2xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />
        <FaRegCircleUser className="text-xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />

        {darkMode ? (
          <IoMoonOutline className="text-xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125" />
        ) : (
          <ImSun
            className="text-xl text-black cursor-pointer transform transition-all duration-300 hover:scale-125"
            onClick={toggleDarkMode}
          />
        )}

        <select name="" id="" className="outline-none">
          <option value="EN">EN</option>
          <option value="AZ">AZ</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
