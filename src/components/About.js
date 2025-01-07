import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
  <img
    src="/media/Abhishek.png" // Referencing image from the public/media folder
    alt="Abhishek Udiya"
    className="rounded-xl shadow-lg w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover transition-transform transform hover:scale-105"
  />
</div>



        {/* Text Section */}
        <div className="text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 text-center">
  About <span className="text-indigo-600">Me</span>
</h2>

          <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8">
            Hello! I'm <span className="font-semibold text-indigo-600">Abhishek Udiya</span>, a passionate 
            <span className="font-semibold text-indigo-600"> Software Engineer</span> with expertise in developing scalable 
            <span className="font-semibold"> microservices</span> and full-stack applications.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mt-4">
            I earned my <span className="font-semibold text-indigo-600">Masters of Computer Applications</span> from the prestigious 
            National Institute of Technology Karnataka and my <span className="font-semibold text-indigo-600"> Bachelors of Science in Electronics (Hons.)</span> 
            from the University of Delhi.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mt-4">
            With nearly a year of hands-on experience in the tech industry, I have contributed to impactful projects:
          </p>
          <ul className="list-disc ml-6 text-gray-700 text-base sm:text-lg leading-7 sm:leading-8 mt-4">
            <li>
              As a <span className="font-semibold text-indigo-600">Senior Engineer</span> at Videonetics, I developed high-performance 
              gRPC microservices, implemented job-tracking systems with Redis, and contributed to authentication systems in Node.js.
            </li>
            <li>
              During my tenure as a <span className="font-semibold text-indigo-600">Software Engineer Intern</span> at Karbon Business, 
              I created microservices for document generation, automated data pipelines, and optimized API responses using Redis caching.
            </li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mt-4">
            I am passionate about working with <span className="font-semibold text-indigo-600">Software Engineering</span>, 
            and modern frameworks to build solutions that address real-world challenges.
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/abhishek-udiya-87452618b/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gray-800 text-white text-base sm:text-lg font-medium rounded-lg shadow-md hover:bg-gray-700 transition text-center"
  >
    Let's Connect
  </a>
  <a
    href="/media/Abhishek_Udiya_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition text-center"
  >
    View Resume
  </a>
  <a
    href="/media/Abhishek_Udiya_Resume.pdf"
    download="Abhishek_Udiya_Resume.pdf"
    className="px-6 py-3 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition text-center"
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
