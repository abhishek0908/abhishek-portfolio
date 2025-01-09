import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay with a timeout, reset animation after 1 second
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000); // Adjust this delay to match your download process
  };

  const isMobile = window.innerWidth <= 768; 
  const style = {
    borderRadius: isMobile ? "0" : "30px",
    padding: isMobile ? "0" : "15px", // No padding on mobile
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
      className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-4 fixed w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      ref={navbarRef}
    >
      <div style={{ display: 'flex' }}>
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
            style={style}
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 lg:bg-transparent p-4 lg:p-0 lg:shadow-none`}
          >
            {[
              { name: "About", href: "#about" },
              { name: "Education", href: "#education" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
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

        {/* Download Button with Animation */}
        <motion.a
          href="/media/Abhishek_Udiya_Resume.pdf"
          download
          className="bg-yellow-500 text-black py-2 px-6 mr-8 rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
          onClick={handleDownload} // Trigger animation on click
          animate={{
            scale: isDownloading ? 1.1 : 1,
            opacity: isDownloading ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="mr-2 text-xs sm:text-sm">Download Resume</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
