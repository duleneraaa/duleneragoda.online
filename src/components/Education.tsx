import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">B.Sc.(Hons) Computer Science</h3>
          <p className="text-gray-400">Informatics Institute of Technology affiliated with the University of Westminster</p>
          <p className="text-gray-500">2023 - Present</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Local G.C.E.(A/L) - Mathematics, ICT, Physics &  Local G.C.E.(O/L)</h3>
          <p className="text-gray-400">Ananda College, Colombo 10</p>
          <p className="text-gray-500">Primary and Higher Education</p>
        </div>
      </div>
    </section>
  );
};

export default Education;