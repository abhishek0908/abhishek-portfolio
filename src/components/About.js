import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/media/Abhishek.png" // Referencing image from the public/media folder
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
            Hello! I'm <span className="font-semibold text-indigo-600">Abhishek Udiya</span>, a passionate 
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
            I am passionate about working with <span className="font-semibold text-indigo-600">Software Engineering</span>, 
             and modern frameworks to build solutions that address real-world challenges.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              Let's Connect
            </a>
            <a
              href="/media/Abhishek_Udiya_Resume.pdf" // Referencing PDF from the public/media folder
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              View My Resume
            </a>
            <a
              href="/media/Abhishek_Udiya_Resume.pdf" // Referencing PDF from the public/media folder
              download="Abhishek_Udiya_Resume.pdf" // The name the file will have when downloaded
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
