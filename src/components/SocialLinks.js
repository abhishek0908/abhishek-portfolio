import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <footer id="connect" className="py-20 bg-blue-100 text-white">
      <div className="container mx-auto text-center px-4 sm:px-8">
        {/* Introductory line or title above the cards */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-8 text-blue-500">
          Let's Connect and Collaborate!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-12 mx-4 sm:mx-0">
          Feel free to reach out through these platforms and stay connected with my work!
        </p>

        {/* Grid for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 justify-center place-items-center">

          {/* Connect with Me Card */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm p-6 sm:p-8 hover:scale-105 transition-all">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
              Connect with Me
            </h2>
            <div className="flex justify-center gap-6 sm:gap-8">
              <a
                href="https://www.linkedin.com/in/abhishek-udiya-87452618b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl sm:text-4xl hover:text-blue-300 transition-all transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/abhishek_udiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-3xl sm:text-4xl hover:text-blue-300 transition-all transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:abhishekudiya09@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                className="text-3xl sm:text-4xl hover:text-blue-300 transition-all transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Coding Platforms Card */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm p-6 sm:p-8 hover:scale-105 transition-all">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
              Coding Platforms
            </h2>
            <div className="flex justify-center gap-6 sm:gap-8">
              <a
                href="https://github.com/abhishek0908"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-3xl sm:text-4xl hover:text-blue-300 transition-all transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/abhish0908/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-3xl sm:text-4xl hover:text-blue-300 transition-all transform hover:scale-110"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;
