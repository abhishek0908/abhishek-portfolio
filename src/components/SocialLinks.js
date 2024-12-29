import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    {
      href: 'https://github.com/abhishek0908',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/abhishek-udiya-87452618b/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://twitter.com/abhishek_udiya',
      icon: <FaTwitter />,
      label: 'Twitter',
    },
    {
      href: 'mailto:abhishekudiya09@gmail.com',
      icon: <FaEnvelope />,
      label: 'Gmail',
    },
  ];

  return (
    <footer id = "connect" className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 py-8 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* <p className="mt-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Abhishek Udiya. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default SocialLinks;
