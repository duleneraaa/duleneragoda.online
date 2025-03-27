import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen relative text-gray-100">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;