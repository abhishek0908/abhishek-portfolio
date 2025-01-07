import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Work <span className="text-indigo-600">Experience</span>
        </h2>
        <div className="space-y-12">
          {/* Videonetics */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <BriefcaseIcon className="w-10 h-10 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Videonetics | Senior Engineer
              </h3>
              <p className="text-lg text-gray-700 mb-4">August 2024 - Present</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>
                  Created a gRPC microservice in Python to expose an image processing algorithm, implementing over 
                  <span className="font-semibold text-indigo-600"> 84+ RPC calls</span> from scratch.
                </li>
                <li>
                  Designed and implemented a job-tracking system with 
                  <span className="font-semibold text-indigo-600"> Redis integration</span> to allow users to efficiently monitor 
                  image processing task progress.
                </li>
                <li>
                  Followed the <span className="font-semibold text-indigo-600">Singleton design pattern</span> and other best practices 
                  for scalable, maintainable code.
                </li>
                <li>
                  Contributed to the backend server in <span className="font-semibold text-indigo-600">Node.js</span> by implementing 
                  an authentication system and developing various APIs.
                </li>
                <li>
                  Developed workflows for deploying the microservice on <span className="font-semibold"><span className="font-semibold text-indigo-600">in-house server</span></span>.
                </li>
                <li>
                  Collaborated with ML Engineers to integrate an advanced heatmap generation algorithm into a new microservice using gRPC.
                </li>
              </ul>
            </div>
          </div>

          {/* Karbon Business */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <BriefcaseIcon className="w-10 h-10 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Karbon Business | Software Engineer Intern
              </h3>
              <p className="text-lg text-gray-700 mb-4">February 2024 - August 2024</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>
                  Created a micro-service that generates Business Resolution (BR) documents, integrating features and 
                  handling edge cases using the <span className="font-semibold text-indigo-600">Django framework</span> and 
                  <span className="font-semibold text-indigo-600"> WeasyPrint library</span>.
                </li>
                <li>
                  Designed an automated pipeline to streamline the process of data dumping between databases, 
                  improving <span className="font-semibold text-indigo-600">efficiency</span> and <span className="font-semibold text-indigo-600">data integrity</span>.
                </li>
                <li>
                  Created APIs to deliver insightful data on top merchants and sectors, and integrated caching 
                  mechanisms using <span className="font-semibold text-indigo-600">Redis</span> to optimize response time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
