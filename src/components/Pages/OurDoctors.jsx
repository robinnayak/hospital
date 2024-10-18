import React, { useState } from "react";
import DoctorCard from "../common/DoctorCard";
import DRImage1 from "../../assests/drprofile1.jpg";
import DRImage2 from "../../assests/drprofile2.jpg";
import DRImage3 from "../../assests/drprofile3.jpg";

// Example doctor data (30 profiles)
const doctorData = [
  {
    image: DRImage1,
    name: "Dr. Sarah Johnson",
    title: "Cardiologist",
    experience: 12,
    consultationDays: ["Mon", "Wed", "Fri"],
    recoveries: 500,
    cabinNumber: "101",
  },
  {
    image: DRImage2,
    name: "Dr. Michael Smith",
    title: "Pediatrician",
    experience: 15,
    consultationDays: ["Tue", "Thu"],
    recoveries: 400,
    cabinNumber: "102",
  },
  {
    image: DRImage3,
    name: "Dr. Emily White",
    title: "Dermatologist",
    experience: 8,
    consultationDays: ["Mon", "Wed"],
    recoveries: 350,
    cabinNumber: "103",
  },
  {
    image: DRImage1,
    name: "Dr. David Miller",
    title: "Orthopedic Surgeon",
    experience: 20,
    consultationDays: ["Mon", "Fri"],
    recoveries: 700,
    cabinNumber: "104",
  },
  {
    image: DRImage2,
    name: "Dr. Julia Brown",
    title: "Neurologist",
    experience: 10,
    consultationDays: ["Tue", "Thu"],
    recoveries: 600,
    cabinNumber: "105",
  },
  {
    image: DRImage3,
    name: "Dr. John Carter",
    title: "General Practitioner",
    experience: 5,
    consultationDays: ["Mon", "Wed"],
    recoveries: 300,
    cabinNumber: "106",
  },
  {
    image: DRImage1,
    name: "Dr. Olivia Davis",
    title: "Ophthalmologist",
    experience: 18,
    consultationDays: ["Tue", "Thu"],
    recoveries: 450,
    cabinNumber: "107",
  },
  {
    image: DRImage2,
    name: "Dr. William Anderson",
    title: "Urologist",
    experience: 7,
    consultationDays: ["Mon", "Fri"],
    recoveries: 380,
    cabinNumber: "108",
  },
  {
    image: DRImage3,
    name: "Dr. Lucas Taylor",
    title: "Gastroenterologist",
    experience: 22,
    consultationDays: ["Wed", "Fri"],
    recoveries: 500,
    cabinNumber: "109",
  },
  {
    image: DRImage1,
    name: "Dr. Alice Williams",
    title: "Pulmonologist",
    experience: 9,
    consultationDays: ["Mon", "Fri"],
    recoveries: 490,
    cabinNumber: "110",
  },
  {
    image: DRImage2,
    name: "Dr. Ryan Thomas",
    title: "Oncologist",
    experience: 13,
    consultationDays: ["Mon", "Wed", "Fri"],
    recoveries: 650,
    cabinNumber: "111",
  },
  {
    image: DRImage3,
    name: "Dr. Chloe Wilson",
    title: "Rheumatologist",
    experience: 16,
    consultationDays: ["Tue", "Thu"],
    recoveries: 410,
    cabinNumber: "112",
  },
  {
    image: DRImage1,
    name: "Dr. Daniel Martin",
    title: "Anesthesiologist",
    experience: 21,
    consultationDays: ["Mon", "Wed"],
    recoveries: 550,
    cabinNumber: "113",
  },
  {
    image: DRImage2,
    name: "Dr. Ava Scott",
    title: "Radiologist",
    experience: 14,
    consultationDays: ["Tue", "Thu"],
    recoveries: 580,
    cabinNumber: "114",
  },
  {
    image: DRImage1,
    name: "Dr. Sophia Rodriguez",
    title: "Endocrinologist",
    experience: 11,
    consultationDays: ["Mon", "Fri"],
    recoveries: 400,
    cabinNumber: "115",
  },
  {
    image: DRImage2,
    name: "Dr. James Green",
    title: "Hematologist",
    experience: 19,
    consultationDays: ["Wed", "Fri"],
    recoveries: 470,
    cabinNumber: "116",
  },
  {
    image: DRImage3,
    name: "Dr. Grace Campbell",
    title: "Allergist",
    experience: 17,
    consultationDays: ["Mon", "Wed"],
    recoveries: 520,
    cabinNumber: "117",
  },
  {
    image: DRImage1,
    name: "Dr. Jackson Young",
    title: "Nephrologist",
    experience: 23,
    consultationDays: ["Tue", "Thu"],
    recoveries: 680,
    cabinNumber: "118",
  },
  {
    image: DRImage2,
    name: "Dr. Lila Morgan",
    title: "Gynecologist",
    experience: 12,
    consultationDays: ["Mon", "Wed"],
    recoveries: 490,
    cabinNumber: "119",
  },
  {
    image: DRImage3,
    name: "Dr. Ethan Hughes",
    title: "Psychiatrist",
    experience: 15,
    consultationDays: ["Tue", "Fri"],
    recoveries: 550,
    cabinNumber: "120",
  },
  {
    image: DRImage1,
    name: "Dr. Harper Mitchell",
    title: "Cardiologist",
    experience: 10,
    consultationDays: ["Mon", "Thu"],
    recoveries: 610,
    cabinNumber: "121",
  },
  {
    image: DRImage2,
    name: "Dr. Benjamin Lee",
    title: "Pediatrician",
    experience: 8,
    consultationDays: ["Tue", "Thu"],
    recoveries: 460,
    cabinNumber: "122",
  },
  {
    image: DRImage3,
    name: "Dr. Aria Turner",
    title: "Geriatric Specialist",
    experience: 20,
    consultationDays: ["Mon", "Wed"],
    recoveries: 530,
    cabinNumber: "123",
  },
  {
    image: DRImage1,
    name: "Dr. Lily Harris",
    title: "ENT Specialist",
    experience: 18,
    consultationDays: ["Wed", "Fri"],
    recoveries: 440,
    cabinNumber: "124",
  },
  {
    image: DRImage2,
    name: "Dr. Noah Lewis",
    title: "Infectious Disease Specialist",
    experience: 25,
    consultationDays: ["Mon", "Thu"],
    recoveries: 620,
    cabinNumber: "125",
  },
  {
    image: DRImage3,
    name: "Dr. Mia Clark",
    title: "Pulmonologist",
    experience: 7,
    consultationDays: ["Tue", "Thu"],
    recoveries: 410,
    cabinNumber: "126",
  },
  {
    image: DRImage1,
    name: "Dr. Elijah Walker",
    title: "Ophthalmologist",
    experience: 22,
    consultationDays: ["Mon", "Wed"],
    recoveries: 590,
    cabinNumber: "127",
  },
  {
    image: DRImage2,
    name: "Dr. Amelia Hall",
    title: "Dermatologist",
    experience: 6,
    consultationDays: ["Tue", "Fri"],
    recoveries: 380,
    cabinNumber: "128",
  },
  {
    image: DRImage1,
    name: "Dr. Henry King",
    title: "Orthopedic Surgeon",
    experience: 17,
    consultationDays: ["Mon", "Thu"],
    recoveries: 520,
    cabinNumber: "129",
  },
  {
    image: DRImage3,
    name: "Dr. Zoey Adams",
    title: "Neurologist",
    experience: 24,
    consultationDays: ["Wed", "Fri"],
    recoveries: 640,
    cabinNumber: "130",
  },
];

const OurDoctors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctorData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our Doctors
      </h2>

      {/* Search Field */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for doctors by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Doctor Profiles Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            image={doctor.image}
            name={doctor.name}
            title={doctor.title}
            experience={doctor.experience}
            consultationDays={doctor.consultationDays}
            recoveries={doctor.recoveries}
            cabinNumber={doctor.cabinNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
