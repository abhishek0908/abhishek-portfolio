import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const navbarRef = useRef(null);  // Reference for the navbar
  const connectRef = useRef(null); // Reference for the connect dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsConnectOpen(false);
  };

  const toggleConnectMenu = () => {
    setIsConnectOpen(!isConnectOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && !navbarRef.current.contains(event.target) &&
        connectRef.current && !connectRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsConnectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-4 fixed w-full z-10 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      ref={navbarRef}
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
            { name: "Resume", href: "https://drive.google.com/file/d/1yjWqxPhfdoD56PzY4OWWdn6aNuqPb5Ax/view?usp=sharing", isExternal: true },
            { name: "Connect", href: "#connect" },
          ].map((link, index) => (
            <li key={index} className="lg:inline-block">
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
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
