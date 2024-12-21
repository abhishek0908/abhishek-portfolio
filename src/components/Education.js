import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-indigo-600">Education</span>
        </h2>
        <div className="space-y-10">
          {/* NIT Karnataka */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <AcademicCapIcon className="w-10 h-10 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                National Institute of Technology Karnataka
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Masters of Computer Applications
              </p>
            </div>
          </div>

          {/* University of Delhi */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <AcademicCapIcon className="w-10 h-10 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">University of Delhi</h3>
              <p className="text-lg text-gray-700 mt-2">
                Bachelors of Science in Electronics (Hons.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
