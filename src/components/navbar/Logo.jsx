import React from "react";

const Logo = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-auto lg:h-16 object-contain" // Adjust logo size responsively and maintain aspect ratio
    />
  );
};

export default Logo;
