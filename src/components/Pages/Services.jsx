import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faAmbulance,
  faSyringe,
  faBaby,
  faChild,
  faTooth,
  faVial,
  faPills,
  faXRay,
  faHeartbeat,
  faBone,
  faUser,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  { icon: faStethoscope, title: "General Practice", description: "Comprehensive health care services for individuals and families." },
  { icon: faAmbulance, title: "Emergency Care", description: "24/7 emergency medical services to handle critical situations." },
  { icon: faSyringe, title: "Surgery", description: "Expert surgical procedures for a variety of medical needs." },
  { icon: faBaby, title: "Maternity Care", description: "Comprehensive maternity services from prenatal to postnatal care." },
  { icon: faChild, title: "Pediatrics", description: "Medical care for infants, children, and adolescents." },
  { icon: faTooth, title: "Dental Care", description: "Expert dental services for all ages, from cleanings to surgeries." },
  { icon: faVial, title: "Laboratory Services", description: "Accurate lab testing and diagnostics for a range of conditions." },
  { icon: faPills, title: "Pharmacy", description: "Comprehensive pharmacy services with a wide range of medications." },
  { icon: faXRay, title: "X-rays & Ultrasounds", description: "Advanced imaging services for accurate diagnosis." },
  { icon: faHeartbeat, title: "Cardiology", description: "Heart health services, including screenings and treatments." },
  { icon: faBone, title: "Orthopedics", description: "Expert care for musculoskeletal conditions and injuries." },
  { icon: faUser, title: "Dermatology", description: "Comprehensive skin care and treatment for all conditions." },
  { icon: faBrain, title: "Mental Health Services", description: "Support for mental well-being through therapy and treatment." },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-4xl text-blue-500"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Services;
