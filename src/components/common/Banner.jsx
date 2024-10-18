import React from "react";

const Banner = ({ image, description, buttonLabel, buttonLink }) => {
  return (
    <div className="relative w-full h-[85vh] bg-gray-100"> {/* Reduced height to 80% */}
      {/* Background Image */}
      <div className="absolute inset-0 animate-fade-in">
        <img
          src={image}
          alt="Banner"
          className="object-cover w-full h-full opacity-60" // Make image cover the entire area with transparency
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 lg:px-12 animate-slide-up">
        {/* Description Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-3xl lg:text-5xl font-bold mb-6">
            {description}
          </p>
          <a
            href={buttonLink}
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-blue-600 transition-all duration-300 ease-in-out"
            style={{ marginLeft: "0" }} // Button aligned to the left
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
