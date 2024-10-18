import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({
  image,
  name,
  title,
  experience,
  consultationDays,
  recoveries,
  cabinNumber,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-72 h-auto mx-auto">
      {/* Doctor Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Doctor Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-500 mb-2">{title}</p>
        <p className="text-gray-700 text-sm mb-4">
          Experience: {experience} years
        </p>
        {/* <p className="text-gray-500">
          Consultation Days:{" "}
          {consultationDays.length > 0
            ? consultationDays.join(", ")
            : "Not available"}
        </p> */}

        {/* <p className="text-gray-700 text-sm mb-4">Successful Recoveries: {recoveries}</p>
        <p className="text-gray-700 text-sm mb-4">Cabin Number: {cabinNumber}</p> */}
      </div>

      {/* Buttons */}
      <div className="px-2 flex flex-col gap-2">
        <Link
          to="/book-appointment"
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Book Appointment
        </Link>
        <Link
          to="/doctor-profile"
          state={{
            image,
            name,
            title,
            experience,
            consultationDays,
            recoveries,
            cabinNumber,
          }}
          className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-4 py-2 rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
