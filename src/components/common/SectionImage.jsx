import React from 'react';

const SectionImage = ({ image }) => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={image}
        alt="Banner"
        className="max-w-full h-auto lg:h-96 rounded-md shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
  );
};

export default SectionImage;
