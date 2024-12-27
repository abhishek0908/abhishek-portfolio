import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projectList = [
    {
      name: "Almabase - Connecting Alumni with Students",
      technologies: "HTML, CSS, JavaScript, Python, Django",
      date: "May 2023",
      description: [
        "A web application aimed at helping over 6000 students annually enhance their career opportunities through insights and resources shared by alumni.",
        "Developed onboarding capabilities to support over 2000 new students yearly, providing access to job postings, interview experiences, academic content, and comprehensive alumni information.",
        "Integrated email notification feature to improve user engagement with timely job posting notifications.",
        "Implemented Google authentication for seamless sign-in and enhanced account security.",
      ],
      link: "https://github.com/abhishek0908/almabaseProject/tree/master",
    },
    {
      name: "Digivote - Digital Voting System",
      technologies: "Blockchain, Ganache, Metamask, Solidity, Truffle",
      date: "October 2022",
      description: [
        "Developed a sophisticated prototype for a Digital Voting System, leveraging Blockchain Technology to ensure secure and tamper-proof voting.",
        "Collaborated with a team of 2 members with a major focus on building smart contracts.",
        "Conducted a live demonstration of the voting system with a small test group consisting of 2 individuals.",
      ],
      link: "https://github.com/abhishek0908/Digivote/tree/master/DigiVote", // Replace with actual link
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Project Header */}
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="w-10 h-10 text-indigo-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
              </div>

              {/* Project Details */}
              <p className="text-sm text-gray-600 mb-4">{project.date}</p>
              <p className="text-sm text-gray-600 font-semibold mb-2">
                Technologies: <span className="text-indigo-600">{project.technologies}</span>
              </p>
              <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
