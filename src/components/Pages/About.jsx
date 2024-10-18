import React from "react";
import Founders from "./Founders";

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hospital Description */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">About Our Hospital</h2>
          <p className="mt-4 text-gray-600">
            Established in 1980, our hospital has been a beacon of health care,
            providing world-class medical services to patients locally and
            internationally. We specialize in a range of services including cardiology,
            maternity care, pediatrics, and more, with a focus on compassionate care
            and cutting-edge medical technology.
          </p>
        </div>
      <Founders/>

      
        
      </div>
    </div>
  );
};

export default About;
