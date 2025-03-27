import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 animate-gradient"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Background;