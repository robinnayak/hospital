import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure state and provide default values
  const {
    image = "",
    name = "Doctor Name",
    title = "Doctor Title",
    experience = 0,
    consultationDays = [],
    recoveries = 0,
    cabinNumber = "N/A" // Add cabin number with a default value
  } = location.state || {};

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Doctor Profile Image and Info */}
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        <img 
          src={image} 
          alt={name} 
          className="w-48 h-48 object-cover rounded-full mb-4 lg:mb-0 lg:mr-8"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{name}</h2>
          <p className="text-xl text-gray-600">{title}</p>
          <p className="mt-4 text-gray-500">{experience} years of experience</p>
          <p className="mt-2 text-gray-500">Available on: {consultationDays.length ? consultationDays.join(", ") : "N/A"}</p>
          <p className="mt-2 text-gray-500">{recoveries}+ successful recoveries</p>
          <p className="mt-2 text-gray-500"><strong>Cabin Number:</strong> {cabinNumber}</p>
        </div>
      </div>

      {/* Additional Doctor Info */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900">About {name}</h3>
        <p className="mt-4 text-gray-600">
          Dr. {name} is a highly experienced {title} who has been practicing for over {experience} years. 
          With numerous successful cases, Dr. {name} specializes in providing high-quality medical care 
          and ensuring the best outcomes for patients.
        </p>
        <p className="mt-4 text-gray-600">
          Consultations are available on {consultationDays.length ? consultationDays.join(", ") : "N/A"}. Dr. {name} has a track record of 
          {recoveries} successful recoveries and is well-regarded by patients for their expertise and dedication.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/book-appointment")} // Navigate to book appointment page
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Book Appointment
        </button>
      </div>
      
    </div>
  );
};

export default DoctorProfile;
