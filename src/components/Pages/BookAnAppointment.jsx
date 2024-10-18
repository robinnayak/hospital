// BookAnAppointment.jsx
import React, { useState } from "react";
import ServiceSelection from "../common/appintment/ServiceSelection";
import DoctorSelection from "../common/appintment/DoctorSelection";
import DateAndTimePicker from "../common/appintment/DateAndTimePicker";
import AppointmentSummary from "../common/appintment/AppointmentSummary";

const BookAnAppointment = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [dateTime, setDateTime] = useState({});
  const inquiryNumber = Math.floor(Math.random() * 1000000); // Generate an inquiry number

  return (
    <div className="book-an-appointment">
      {!selectedService && (
        <ServiceSelection onSelectService={setSelectedService} />
      )}
      {selectedService && !selectedDoctor && (
        <DoctorSelection
          service={selectedService}
          onSelectDoctor={setSelectedDoctor}
        />
      )}
      {selectedDoctor && !dateTime.date && (
        <DateAndTimePicker onDateTimeSelect={setDateTime} />
      )}
      {dateTime.date && (
        <AppointmentSummary
          service={selectedService}
          doctor={selectedDoctor}
          date={dateTime.date}
          time={dateTime.time}
          inquiryNumber={inquiryNumber}
        />
      )}
      
    </div>
  );
};

export default BookAnAppointment;
