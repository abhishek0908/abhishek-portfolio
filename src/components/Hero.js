import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiMongodb, SiBootstrap } from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: <FaPython className="text-5xl text-indigo-600" /> },
  { name: 'Java', icon: <FaJava className="text-5xl text-red-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-5xl text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-5xl text-blue-600" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-500" /> },
  { name: 'Django', icon: <SiDjango className="text-5xl text-green-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-700" /> },
  { name: 'SQL', icon: <FaDatabase className="text-5xl text-blue-700" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-5xl text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3 className="text-5xl text-blue-500" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-5xl text-purple-600" /> },
];

const Hero = () => {
  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 1.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transformOrigin: 'center',
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span className="text-yellow-300">Abhishek Udiya</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl lg:text-2xl font-light max-w-xl text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A passionate <span className="font-medium text-yellow-300">Software Engineer</span> crafting elegant and scalable solutions.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#about"
        className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-semibold text-md sm:text-lg shadow-lg flex items-center transition relative z-10"
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
