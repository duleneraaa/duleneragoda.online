import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Rivve Software Development Project</h3>
          <p className="text-gray-400 mb-4">Hostel Marketplace in Sri Lanka - www.rivvelk.com</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Independently developed the marketing website using React</li>
            <li>Contributed to enhancing the online presence of the platform</li>
            <li>Contributed developing Frontend using React on main project</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Real-Time Event Ticketing System</h3>
          <p className="text-gray-400 mb-4">University Project</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Developed using Java CLI, React, and Spring Boot</li>
            <li>Enabled real-time ticket management for events and logging</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Airplane Seat Management System</h3>
          <p className="text-gray-400 mb-4">University Project</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Built using Java to handle seat selection, pricing, and cancellations</li>
            <li>Improved efficiency in airline reservation tracking</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">SDG Themed Website</h3>
          <p className="text-gray-400 mb-4">University Project</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Designed a collaborative website using HTML, CSS, and JavaScript</li>
            <li>Focused on raising awareness of a UN Sustainable Development Goal</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;