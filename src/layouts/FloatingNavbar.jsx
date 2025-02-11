// !EN SON
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  BiGlobe,
  BiHeart,
  BiMenu,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
// import logoCut from "../assets/img/logo-cut.png";
import logo from "../assets/img/logo.png";

export const FloatingNavbar = ({ navItems, className }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("AZ");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="h-16"></div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-x-0 top-0 h-16 flex justify-between items-center px-4 lg:px-8 bg-white dark:bg-black shadow-md z-[5000] ${className}`}
        >
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-black dark:text-white">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>

          {/* Menü */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((navItem, idx) => (
              <Link
                key={idx}
                to={navItem.link}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-white"
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          {/* Sağ Taraf */}
          <div className="flex items-center space-x-4">
            <IoCarSport className="w-6 h-6 text-black dark:text-white cursor-pointer" />
            <BiHeart className="w-6 h-6 text-black dark:text-white cursor-pointer" />
            <BiUser className="w-6 h-6 text-black dark:text-white cursor-pointer" />

            {/* Hamburger Menü */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <BiMenu className="w-6 h-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobil Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 bg-white dark:bg-black shadow-lg p-4 rounded-lg z-[5000] flex flex-col space-y-4"
          >
            {/* Dark Mode Toggle */}
            <button
              className="flex items-center space-x-2"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <BiSun className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <BiMoon className="w-5 h-5 text-black dark:text-white" />
              )}
              <span className="text-black dark:text-white">Dark Mode</span>
            </button>

            {/* Dil Seçimi */}
            <div className="flex items-center space-x-2">
              <BiGlobe className="w-5 h-5 text-black dark:text-white" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-black text-black dark:text-white border p-1 rounded-md"
              >
                <option className="bg-black text-white" value="AZ">
                  AZ
                </option>
                <option className="bg-black text-white" value="EN">
                  EN
                </option>
              </select>
            </div>

            {/* Menü Linkleri */}
            <div className="flex flex-col space-y-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  to={navItem.link}
                  className="xl:hidden lg:hidden text-neutral-600 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-white"
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
