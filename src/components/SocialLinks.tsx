import React from 'react';
import { Github, Instagram, Facebook, Mail, Phone, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center space-x-6">
        <a 
          href="https://github.com/duleneraaa" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Github size={24} />
        </a>

        <a 
          href="https://www.linkedin.com/in/dulenera/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://instagram.com/dulen.nn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Instagram size={24} />
        </a>
        <a 
          href="https://facebook.com/dulen.eragoda1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Facebook size={24} />
        </a>
        <a 
          href="mailto:dulener@gmail.com"
          className="text-gray-400 hover:text-red-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Mail size={24} />
        </a>
        <a 
          href="tel:+94766992535"
          className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;