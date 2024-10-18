import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faHeart, faBrain, faLungs, faBone, faTooth } from "@fortawesome/free-solid-svg-icons";

const specialtiesData = [
  {
    title: "Cardiology",
    description: "We provide top-notch cardiovascular care with a team of specialized doctors and advanced technology.",
    icon: faHeart,
  },
  {
    title: "Neurology",
    description: "Our expert neurologists treat disorders related to the brain and nervous system with cutting-edge treatments.",
    icon: faBrain,
  },
  {
    title: "Pulmonology",
    description: "We specialize in respiratory care, treating conditions affecting the lungs and respiratory system.",
    icon: faLungs,
  },
  {
    title: "Orthopedics",
    description: "Our orthopedic team provides treatment for bone, joint, and muscular disorders, ensuring fast recovery.",
    icon: faBone,
  },
  {
    title: "Dentistry",
    description: "Our dentistry department offers a range of services, from routine cleanings to advanced dental surgeries.",
    icon: faTooth,
  },
  {
    title: "General Medicine",
    description: "Our general practitioners offer a wide range of healthcare services to meet your everyday health needs.",
    icon: faUserMd,
  },
];

const Specialities = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Specialities</h2>
        <p className="text-lg text-gray-600 mt-4">
          We provide a wide range of specialized healthcare services to meet your specific needs.
        </p>
      </motion.div>

      {/* Specialities Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {specialtiesData.map((speciality, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
          >
            <FontAwesomeIcon icon={speciality.icon} size="3x" className="text-indigo-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{speciality.title}</h3>
            <p className="text-gray-600">{speciality.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Specialities;
