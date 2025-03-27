import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">Dulen Eragoda</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Home</a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">About</a>
            <a href="#projects" className="block text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;