import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://storage.googleapis.com/rivve-web-trial/A45A2458-7BDF-498D-816C-3A93A67438ED_1_105_c.jpeg"
              alt="Coding"
              className=" rounded-lg shadow-lg ring-1 ring-gray-800"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at the Informatics Institute of Technology (IIT),
              affiliated with the University of Westminster. I'm constantly learning and exploring new
              technologies to expand my skillset and create innovative solutions.<br></br><br></br>
              With hands-on experience in software development, web design, and cloud computing, I've worked on projects ranging from a real-time event ticketing system to a hostel marketplace, contributing both on the front and back end. My expertise spans Java, Python, React, and cloud services like Microsoft Azure, and I thrive in both independent and team-based environments.
<br></br><br></br>
Beyond coding, I have a strong background in leadership and event coordination, having served as the President of the Ananda College Photographic Art Society. Whether it's leading a team, designing a UI, or optimizing a database, I bring enthusiasm, adaptability, and a problem-solving mindset to everything I do.

I'm always eager to connect with like-minded individuals, collaborate on exciting projects, and push the boundaries of what technology can achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;