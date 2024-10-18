// ServiceSelection.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faEye, faTooth } from "@fortawesome/free-solid-svg-icons";

const services = [
  { name: "OPD Operation", icon: faStethoscope },
  { name: "Eye Check-up", icon: faEye },
  { name: "Dental Care", icon: faTooth },
];

const ServiceSelection = ({ onSelectService }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Select a Service</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.name}
            onClick={() => onSelectService(service.name)}
            className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <span className="text-lg font-medium">{service.name}</span>
            <FontAwesomeIcon icon={service.icon} size="lg" className="text-blue-500" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;
