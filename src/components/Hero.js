import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiRedis, SiGraphql } from 'react-icons/si';

const Hero = () => {
  // Animation variants for floating icons
  const floatAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 0.6, y: [0, -15, 0] }, // Floating effect
  };

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Icons */}
      <motion.div
        className="absolute top-16 left-20 text-blue-400"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror" }}
      >
        <FaReact className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16 text-green-500"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 1 }}
      >
        <FaNodeJs className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 text-yellow-300"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 2 }}
      >
        <FaPython className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-1/4 text-red-500"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 3 }}
      >
        <FaDatabase className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute top-24 right-1/3 text-blue-300"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 1.5 }}
      >
        <FaDocker className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-12 text-indigo-400"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 2.5 }}
      >
        <SiKubernetes className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-1/3 text-orange-400"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 3.5 }}
      >
        <FaAws className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-12 text-purple-400"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 4 }}
      >
        <SiRedis className="text-4xl sm:text-6xl" />
      </motion.div>

      <motion.div
        className="absolute top-28 left-1/4 text-pink-400"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", delay: 4.5 }}
      >
        <SiGraphql className="text-4xl sm:text-6xl" />
      </motion.div>

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
        A passionate <span className="font-medium text-yellow-300">Software Engineer</span> crafting robust and scalable solutions.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
  href="#about"
  className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-semibold text-md sm:text-lg shadow-lg flex items-center transition"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Learn More About Me
  <ArrowDownIcon className="w-5 sm:w-6 h-5 sm:h-6 ml-2" />
</motion.a>

    </motion.section>
  );
};

export default Hero;
