import React from 'react'
import DoctorCard from "../common/DoctorCard"; // Adjust import path as necessary
import founderImage1 from "../../assests/founder1.jpg"; // Example founder images
import founderImage2 from "../../assests/founder2.jpg";
import founderImage3 from "../../assests/founder3.jpg";

const Founders = () => {
  return (
    <div className="bg-gray-50 py-12">

    {/* Founders Section */}
    <h3 className="text-3xl font-semibold text-center text-gray-900 mb-8">
    Meet Our Founders
  </h3>

  <div className="flex flex-wrap justify-center gap-8">
    <DoctorCard 
      image={founderImage1} 
      name="Dr. Richard Miles" 
      title="Founder & Chief Surgeon" 
      experience={40} 
      consultationDays={["Mon", "Wed", "Fri"]} 
      recoveries={5000} 
      cabinNumber="101"
    />
    <DoctorCard 
      image={founderImage2} 
      name="Dr. Emily Brown" 
      title="Co-Founder & Pediatric Specialist" 
      experience={35} 
      consultationDays={["Tue", "Thu"]} 
      recoveries={4500} 
      cabinNumber="102"
    />
    <DoctorCard 
      image={founderImage3} 
      name="Dr. Michael Thompson" 
      title="Co-Founder & Cardiologist" 
      experience={38} 
      consultationDays={["Mon", "Fri"]} 
      recoveries={5200} 
      cabinNumber="103"
    />
  </div>
  </div>
  
  )
}

export default Founders