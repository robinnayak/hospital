// DoctorSelection.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";

const doctors = {
  "OPD Operation": ["Dr. Smith", "Dr. Johnson"],
  "Eye Check-up": ["Dr. Williams", "Dr. Taylor"],
  "Dental Care": ["Dr. Brown", "Dr. Davis"],
};

const DoctorSelection = ({ service, onSelectDoctor }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Select a Doctor for {service}
      </h2>
      <ul className="space-y-4">
        {doctors[service]?.map((doctor) => (
          <li
            key={doctor}
            onClick={() => onSelectDoctor(doctor)}
            className="flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <span className="text-lg font-medium">{doctor}</span>
            <FontAwesomeIcon icon={faUserMd} size="lg" className="text-green-500" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSelection;
