import React from 'react';
import DoctorCard from '../common/DoctorCard';

const GroupTeamMembers = ({ teamName, doctors }) => {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-center text-gray-900 mb-8">{teamName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            image={doctor.image}
            name={doctor.name}
            title={doctor.title}
            experience={doctor.experience}
            cabinNumber={doctor.cabinNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupTeamMembers;
