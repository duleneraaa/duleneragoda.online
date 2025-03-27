import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 ring-1 ring-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Project 1</h3>
            <p className="text-gray-300">Description of your first project</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 ring-1 ring-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Project 2</h3>
            <p className="text-gray-300">Description of your second project</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 ring-1 ring-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Project 3</h3>
            <p className="text-gray-300">Description of your third project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;