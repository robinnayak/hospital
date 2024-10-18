// AppointmentSummary.jsx
import React from "react";
import { motion } from "framer-motion"; // For animation

const AppointmentSummary = ({ service, doctor, date, time, inquiryNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Appointment Summary
      </h2>

      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          <span className="font-semibold">Service:</span> {service}
        </p>
        <p>
          <span className="font-semibold">Doctor:</span> {doctor}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold">Inquiry Number:</span> {inquiryNumber}
        </p>
      </div>

      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow-lg text-center">
          <p>Thank you for booking with us!</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppointmentSummary;
