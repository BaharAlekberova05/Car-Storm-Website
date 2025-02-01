import logo from "../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMoonSharp } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { ImHeart } from "react-icons/im";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex flex-col space-y-3 py-4">
      <div className="container flex items-center justify-between">
        <div className="w-[10%]">
          <img src={logo} alt="logo" className="size-full object-cover" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="border border-gray-500 rounded-full outline-none px-5 py-1 placeholder:text-gray-500 placeholder:italic placeholder:font-medium"
          />
          <FiSearch className="absolute top-2 right-2 text-gray-600 font-medium" />
        </div>

        <div className="flex items-center space-x-4">
          <ImSun className="text-xl text-yellow-500 cursor-pointer" />
          {/* <IoMoonSharp className="text-xl text-black cursor-pointer" /> */}
          <select name="" id="" className="outline-none">
            <option value="EN">EN</option>
            <option value="AZ">AZ</option>
          </select>
        </div>
      </div>

      <hr className="text-gray-300" />

      <div className="container flex items-center justify-between">
        <ul className="flex items-center space-x-8 font-orbitron text-xl font-medium mx-auto">
          <li>
            <a href="#" className="my-text-color">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="my-text-color">
              About
            </a>
          </li>
          <li>
            <a href="#" className="my-text-color">
              Cars
            </a>
          </li>
          <li>
            <a href="#" className="my-text-color">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="my-text-color">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <IoCarSport className="text-2xl text-black cursor-pointer" />
          <ImHeart className="text-xl text-red-800 cursor-pointer" />
          <FaRegCircleUser className="text-xl text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
