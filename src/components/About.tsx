import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Coding"
              className="rounded-lg shadow-lg ring-1 ring-gray-800"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at the Informatics Institute of Technology (IIT),
              affiliated with the University of Westminster. I'm constantly learning and exploring new
              technologies to expand my skillset and create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;