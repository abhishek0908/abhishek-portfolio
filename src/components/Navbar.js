import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close the menu after clicking on a link
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
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
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-8 fixed lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none z-20`}
        >
          {[
            { name: 'About', href: '#about' },
            { name: 'Education', href: '#education' },
            { name: 'Experience', href: '#experience' },
            { name: 'Projects', href: '#projects' },
            { name: 'Skills', href: '#skills' },
            { name: 'Connect', href: '#connect' },
          ].map((link, index) => (
            <li key={index} className="lg:inline-block">
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-lg font-semibold text-center py-2 hover:text-yellow-300 transition-all lg:py-0"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Download Button */}
        <motion.a
          href="/media/Abhishek_Udiya_Resume.pdf"
          download
          className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
          onClick={handleDownload}
          aria-label="Download CV"
          animate={{
            scale: isDownloading ? 1.1 : 1,
            opacity: isDownloading ? 0.8 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="flex items-center">
            Download CV
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              animate={{
                rotate: isDownloading ? 360 : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
