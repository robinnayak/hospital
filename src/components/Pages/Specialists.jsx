import React from 'react';
import doctorImage1 from '../../assests/drprofile1.jpg'; // Example doctor images
import doctorImage2 from '../../assests/drprofile2.jpg';
import doctorImage3 from '../../assests/drprofile3.jpg';
import DoctorCard from '../common/DoctorCard';

const Specialists = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 bg-gray-50">
      {/* Example Doctor Cards */}
      <DoctorCard 
        image={doctorImage1} 
        name="Dr. John Doe" 
        title="Sr. Consultant Cardiologist & Physician"
        experience="15 years"
        consultationDays={["Monday", "Wednesday", "Friday"]}
        recoveries={320}
        cabinNumber={"A206"}
      />
      <DoctorCard 
        image={doctorImage2} 
        name="Dr. Jane Smith" 
        title="Pediatric Specialist"
        experience="10 years"
        consultationDays={["Tuesday", "Thursday"]}
        recoveries={220}
        cabinNumber={"A207"}

      />
      <DoctorCard 
        image={doctorImage3} 
        name="Dr. Sarah Wilson" 
        title="Dermatologist"
        experience="12 years"
        consultationDays={["Monday", "Thursday", "Saturday"]}
        recoveries={280}
        cabinNumber={"A208"}

      />
      <DoctorCard 
        image={doctorImage1} 
        name="Dr. John Doe" 
        title="Sr. Consultant Cardiologist & Physician"
        experience="15 years"
        consultationDays={["Monday", "Wednesday", "Friday"]}
        recoveries={320}
        cabinNumber={"A209"}

      />
      <DoctorCard 
        image={doctorImage2} 
        name="Dr. Jane Smith" 
        title="Pediatric Specialist"
        experience="10 years"
        consultationDays={["Tuesday", "Thursday"]}
        recoveries={220}
        cabinNumber={"A210"}

      />
      <DoctorCard 
        image={doctorImage3} 
        name="Dr. Sarah Wilson" 
        title="Dermatologist"
        experience="12 years"
        consultationDays={["Monday", "Thursday", "Saturday"]}
        recoveries={280}
        cabinNumber={"A211"}

      />
    </div>
  );
};

export default Specialists;
