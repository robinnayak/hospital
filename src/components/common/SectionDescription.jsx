import React from 'react';

const SectionDescription = ({ description, buttonLink, buttonLabel }) => {
  return (
    <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-12 mt-8 lg:mt-0">
      {/* Bubble graphics in the background */}
      <div className="absolute inset-0 z-0">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-30 absolute -top-8 left-8 animate-spin"></div> {/* Adjusted opacity */}
        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 absolute bottom-8 right-8 animate-bounce"></div> {/* Adjusted opacity */}
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full opacity-30 absolute top-24 right-12 animate-pulse"></div> {/* Adjusted opacity */}
      </div>
      {/* Content */}
      <div className="relative z-10">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl lg:text-2xl mb-4 text-center lg:text-left animate-fade-in">
          {description}
        </p>
        <a
          href={buttonLink}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition duration-300"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default SectionDescription;
