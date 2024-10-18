import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faPhoneAlt, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Emergency = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Main Section */}
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Emergency Services</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our hospital is available 24/7 to handle any kind of medical emergency. We are fully equipped with modern
          technology and expert doctors to ensure you receive the best care when it matters most.
        </p>
      </motion.div>

      {/* Emergency Info */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Ambulance Service */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <FontAwesomeIcon icon={faAmbulance} size="3x" className="text-red-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Ambulance Service</h3>
          <p className="text-gray-600">
            Our ambulance service is available 24/7, providing fast and efficient transportation in any emergency
            situation.
          </p>
          <p className="mt-4 text-lg text-red-500 font-semibold">Call: +977-9803111111</p>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Emergency Contact</h3>
          <p className="text-gray-600">
            In case of an emergency, please call our 24/7 emergency hotline, and our team will assist you immediately.
          </p>
          <p className="mt-4 text-lg text-blue-500 font-semibold">Hotline: +977-01-5970032</p>
        </motion.div>

        {/* Emergency Care */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <FontAwesomeIcon icon={faHeartbeat} size="3x" className="text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Critical Care Unit</h3>
          <p className="text-gray-600">
            Our Critical Care Unit is equipped with the latest technology and staffed by highly trained specialists.
          </p>
          <p className="mt-4 text-lg text-green-500 font-semibold">Always Open for Emergencies</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Emergency;
