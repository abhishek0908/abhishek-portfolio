import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-4 fixed w-full z-10 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:justify-center">
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          {[
            { name: "About", href: "#about" },
            { name: "Education", href: "#education" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
          ].map((link, index) => (
            <li key={index} className="lg:inline-block">
              <a
                href={link.href}
                onClick={closeMenu} // Close the menu on click
                className="block text-lg font-semibold text-center py-2 hover:text-yellow-300 transition-all lg:py-0"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
