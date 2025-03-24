import React from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiJavascript, SiDocker, SiRedis } from 'react-icons/si';
import { AcademicCapIcon } from '@heroicons/react/24/outline'; // Heroicons for icons

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-4xl text-indigo-600" /> },
    { name: 'Java', icon: <FaJava className="text-4xl text-red-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-4xl text-blue-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: 'Django', icon: <SiDjango className="text-4xl text-green-800" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-700" /> },
    { name: 'SQL', icon: <FaDatabase className="text-4xl text-blue-700" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-4xl text-blue-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-4xl text-blue-500" /> },
    { name: 'Redis', icon: <SiRedis className="text-4xl text-red-600" /> },
  ];

  const coreSubjects = [
    { name: 'Operating Systems', icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> },
    { name: 'Computer Networks', icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> },
    { name: 'Object-Oriented Programming (OOP)', icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> },
    { name: 'Database Management Systems (DBMS)', icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> },
    { name: 'Data Structures and Algorithms', icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Core Subjects as Cards */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSubjects.map((subject, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
              >
                {subject.icon}
                <p className="mt-4 text-lg font-semibold text-gray-800 text-center">{subject.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
