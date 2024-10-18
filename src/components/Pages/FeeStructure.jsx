import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  { icon: faStethoscope, title: "General Practice", description: "Comprehensive health care services for individuals and families.", fee: "1,500 NPR" },
  { icon: faAmbulance, title: "Emergency Care", description: "24/7 emergency medical services to handle critical situations.", fee: "3,000 NPR" },
  { icon: faSyringe, title: "Surgery", description: "Expert surgical procedures for a variety of medical needs.", fee: "15,000 NPR" },
  { icon: faBaby, title: "Maternity Care", description: "Comprehensive maternity services from prenatal to postnatal care.", fee: "25,000 NPR" },
  { icon: faChild, title: "Pediatrics", description: "Medical care for infants, children, and adolescents.", fee: "2,000 NPR" },
  { icon: faTooth, title: "Dental Care", description: "Expert dental services for all ages, from cleanings to surgeries.", fee: "4,500 NPR" },
  { icon: faVial, title: "Laboratory Services", description: "Accurate lab testing and diagnostics for a range of conditions.", fee: "1,200 NPR" },
  { icon: faPills, title: "Pharmacy", description: "Comprehensive pharmacy services with a wide range of medications.", fee: "Varies" },
  { icon: faXRay, title: "X-rays & Ultrasounds", description: "Advanced imaging services for accurate diagnosis.", fee: "2,500 NPR" },
  { icon: faHeartbeat, title: "Cardiology", description: "Heart health services, including screenings and treatments.", fee: "5,000 NPR" },
  { icon: faBone, title: "Orthopedics", description: "Expert care for musculoskeletal conditions and injuries.", fee: "6,000 NPR" },
  { icon: faUser, title: "Dermatology", description: "Comprehensive skin care and treatment for all conditions.", fee: "3,500 NPR" },
  { icon: faBrain, title: "Mental Health Services", description: "Support for mental well-being through therapy and treatment.", fee: "2,800 NPR" },
];

const FeeStructure = () => {
  return (
    <div className="bg-gray-50">
      {/* Fee Table */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Fee Structure
        </h3>
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">Service</th>
              <th className="px-4 py-2 border border-gray-200">Fee (NPR)</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-200">{service.title}</td>
                <td className="px-4 py-2 border border-gray-200">{service.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default FeeStructure;
