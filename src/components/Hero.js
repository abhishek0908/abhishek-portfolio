import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span className="text-yellow-300">Abhishek Udiya</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl lg:text-2xl font-light max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A passionate <span className="font-medium text-yellow-300">Software Engineer</span> crafting elegant and scalable solutions.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#about"
        className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-semibold text-md sm:text-lg shadow-lg flex items-center transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Learn More About Me
        <ArrowDownIcon className="w-5 sm:w-6 h-5 sm:h-6 ml-2" />
      </motion.a>
    </motion.section>
  );
};

export default Hero;
