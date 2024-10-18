import React from "react";

const WhyChoose = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Why Choose [Hospital Name]
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold transition-transform transform hover:scale-105 duration-300">
            24/7
          </div>
          <div className="mt-2">Emergency Services</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold transition-transform transform hover:scale-105 duration-300">
            50+
          </div>
          <div className="mt-2">Doctors</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold transition-transform transform hover:scale-105 duration-300">
            100
          </div>
          <div className="mt-2">Beds</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold transition-transform transform hover:scale-105 duration-300">
            10
          </div>
          <div className="mt-2">Ambulances</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold transition-transform transform hover:scale-105 duration-300">
            95%
          </div>
          <div className="mt-2">Recovery Rate</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
