import React from 'react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Hi, I'm Dulen Eragoda
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Computer Science Undergraduate at IIT
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;