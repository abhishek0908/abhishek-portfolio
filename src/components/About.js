import React from 'react';
import profileImage from '../media/Abhishek.png'; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Abhishek Udiya"
            className="rounded-xl shadow-lg w-64 h-64 sm:w-80 sm:h-80 object-cover transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center md:text-left text-gray-800 mb-6">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-8">
            Hello! I'm <span className="font-semibold text-indigo-600">Abhishek Udiya</span>, a motivated 
            <span className="font-semibold text-indigo-600"> Software Engineer</span> with expertise in developing scalable 
            <span className="font-semibold"> microservices</span> and full-stack applications.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-8 mt-4">
            I earned my <span className="font-semibold text-indigo-600">Masters of Computer Applications</span> from the prestigious 
            National Institute of Technology Karnataka and my <span className="font-semibold text-indigo-600"> Bachelors of Science in Electronics (Hons.) </span> 
             from the University of Delhi.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-8 mt-4">
            With nearly a year of hands-on experience in the tech industry, I have contributed to impactful projects:
          </p>
          <ul className="list-disc ml-5 text-gray-700 text-lg sm:text-xl leading-8 mt-4">
            <li>
              As a <span className="font-semibold text-indigo-600">Senior Engineer</span> at Videonetics, I developed high-performance 
              gRPC microservices, implemented job-tracking systems with Redis, and contributed to authentication systems in Node.js.
            </li>
            <li>
              During my tenure as a <span className="font-semibold text-indigo-600">Software Engineer Intern</span> at Karbon Business, 
              I created microservices for document generation, automated data pipelines, and optimized API responses using Redis caching.
            </li>
          </ul>
          <p className="text-lg sm:text-xl text-gray-700 leading-8 mt-4">
            I am passionate about working with  <span className="font-semibold text-indigo-600">Software Engineering</span>, 
             and modern frameworks to build solutions that address real-world challenges.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-500 transition"
            >
              Explore My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
