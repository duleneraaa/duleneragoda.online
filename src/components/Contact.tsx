import React from 'react';
import { Mail, Phone } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            Feel free to reach out to me for collaborations or just to say hi!
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">
              <Mail className="inline mr-2" size={20} />
              dulener@gmail.com
            </p>
            <p className="text-gray-300">
              <Phone className="inline mr-2" size={20} />
              +94 766992535
            </p>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;