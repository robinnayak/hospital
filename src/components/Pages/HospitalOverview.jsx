import React from "react";
import Founders from "./Founders";  // Adjust the path if necessary
import Services from "./Services";
import hospitalImage from "../../assests/hospital.jpg"; // Replace with actual image path

const HospitalOverview = () => {
  return (
    <div className="bg-gray-50">
      {/* Introduction Section */}
      <section className="bg-blue-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Hospital</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At our hospital, we believe in providing world-class healthcare services with a patient-first approach. 
            Our founders, with their extensive medical experience, established this institution to ensure that everyone 
            has access to quality healthcare. From routine check-ups to specialized treatments, we are here to serve you.
          </p>
        </div>
      </section>

      {/* Hospital Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <img 
            src={hospitalImage} 
            alt="Our Hospital" 
            className="w-full h-auto rounded-lg shadow-lg mb-8" 
          />
          <p className="text-lg text-gray-600 text-center leading-relaxed max-w-4xl">
            Our hospital is equipped with state-of-the-art facilities, ensuring that we provide the highest standards of care.
            We aim to make every patient’s experience comfortable and effective. Our team of experienced professionals is dedicated 
            to providing top-notch medical services across all departments.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <Founders />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <Services />
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h2>
        <p className="text-lg text-gray-600 mb-8">
          Visit us at our hospital location for all your medical needs.
        </p>
        <div className="relative h-96 w-full max-w-4xl mx-auto mb-8">
          {/* Google Maps Embed */}
          <iframe
            src="https://maps.google.com/maps?q=27.717245,85.323960&hl=es;z=14&amp;output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Hospital Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="https://maps.app.goo.gl/Z5sTsd965mbngj8L6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Get Directions
        </a>
      </section>
    </div>
  );
};

export default HospitalOverview;
