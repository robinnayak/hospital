import React from 'react';
import GroupTeamMembers from './GroupTeamMembers';
import DRImage1 from '../../assests/drprofile1.jpg';
import DRImage2 from '../../assests/drprofile2.jpg';
import DRImage3 from '../../assests/drprofile3.jpg';

// Categorizing doctors by service teams
const teams = {
  'General Practice': [
    { image: DRImage1, name: 'Dr. John Carter', title: 'General Practitioner', experience: 5, cabinNumber: '106' },
    { image: DRImage1, name: 'Dr. John Carter', title: 'General Practitioner', experience: 5, cabinNumber: '106' },
    { image: DRImage1, name: 'Dr. John Carter', title: 'General Practitioner', experience: 5, cabinNumber: '106' },
  ],
  'Emergency Care': [
    { image: DRImage2, name: 'Dr. David Miller', title: 'Orthopedic Surgeon', experience: 20, cabinNumber: '104' },
    { image: DRImage2, name: 'Dr. David Miller', title: 'Orthopedic Surgeon', experience: 20, cabinNumber: '104' },
    { image: DRImage2, name: 'Dr. David Miller', title: 'Orthopedic Surgeon', experience: 20, cabinNumber: '104' },
  ],
  'Surgery': [
    { image: DRImage3, name: 'Dr. Lucas Taylor', title: 'Gastroenterologist', experience: 22, cabinNumber: '109' },
    { image: DRImage1, name: 'Dr. Henry King', title: 'Orthopedic Surgeon', experience: 17, cabinNumber: '129' },
  ],
  'Maternity Care': [
    { image: DRImage2, name: 'Dr. Julia Brown', title: 'Neurologist', experience: 10, cabinNumber: '105' },
  ],
  'Pediatrics': [
    { image: DRImage3, name: 'Dr. Michael Smith', title: 'Pediatrician', experience: 15, cabinNumber: '102' },
    { image: DRImage2, name: 'Dr. Benjamin Lee', title: 'Pediatrician', experience: 8, cabinNumber: '122' },
  ],
  'Dental Care': [
    { image: DRImage1, name: 'Dr. Olivia Davis', title: 'Ophthalmologist', experience: 18, cabinNumber: '107' },
    { image: DRImage1, name: 'Dr. Olivia Davis', title: 'Ophthalmologist', experience: 18, cabinNumber: '107' },
  ],
  'Laboratory Services': [
    { image: DRImage2, name: 'Dr. Ava Scott', title: 'Radiologist', experience: 14, cabinNumber: '114' },
    { image: DRImage2, name: 'Dr. Ava Scott', title: 'Radiologist', experience: 14, cabinNumber: '114' },
    { image: DRImage2, name: 'Dr. Ava Scott', title: 'Radiologist', experience: 14, cabinNumber: '114' },
    { image: DRImage2, name: 'Dr. Ava Scott', title: 'Radiologist', experience: 14, cabinNumber: '114' },
  ],
  'Pharmacy': [
    { image: DRImage1, name: 'Dr. Ryan Thomas', title: 'Oncologist', experience: 13, cabinNumber: '111' },
    { image: DRImage1, name: 'Dr. Ryan Thomas', title: 'Oncologist', experience: 13, cabinNumber: '111' },
  ],
  'X-rays & Ultrasounds': [
    { image: DRImage2, name: 'Dr. Amelia Hall', title: 'Dermatologist', experience: 6, cabinNumber: '128' },
    { image: DRImage2, name: 'Dr. Amelia Hall', title: 'Dermatologist', experience: 6, cabinNumber: '128' },
    { image: DRImage2, name: 'Dr. Amelia Hall', title: 'Dermatologist', experience: 6, cabinNumber: '128' },
    { image: DRImage2, name: 'Dr. Amelia Hall', title: 'Dermatologist', experience: 6, cabinNumber: '128' },
    { image: DRImage2, name: 'Dr. Amelia Hall', title: 'Dermatologist', experience: 6, cabinNumber: '128' },
  ],
  'Cardiology': [
    { image: DRImage3, name: 'Dr. Sarah Johnson', title: 'Cardiologist', experience: 12, cabinNumber: '101' },
  ],
  'Orthopedics': [
    { image: DRImage1, name: 'Dr. Jackson Young', title: 'Nephrologist', experience: 23, cabinNumber: '118' },
    { image: DRImage1, name: 'Dr. Jackson Young', title: 'Nephrologist', experience: 23, cabinNumber: '118' },
    { image: DRImage1, name: 'Dr. Jackson Young', title: 'Nephrologist', experience: 23, cabinNumber: '118' },
  ],
  'Dermatology': [
    { image: DRImage2, name: 'Dr. Emily White', title: 'Dermatologist', experience: 8, cabinNumber: '103' },
    { image: DRImage2, name: 'Dr. Emily White', title: 'Dermatologist', experience: 8, cabinNumber: '103' },
    { image: DRImage2, name: 'Dr. Emily White', title: 'Dermatologist', experience: 8, cabinNumber: '103' },
    { image: DRImage2, name: 'Dr. Emily White', title: 'Dermatologist', experience: 8, cabinNumber: '103' },
  ],
  'Mental Health Services': [
    { image: DRImage3, name: 'Dr. Ethan Hughes', title: 'Psychiatrist', experience: 15, cabinNumber: '120' },
    { image: DRImage3, name: 'Dr. Ethan Hughes', title: 'Psychiatrist', experience: 15, cabinNumber: '120' },
    { image: DRImage3, name: 'Dr. Ethan Hughes', title: 'Psychiatrist', experience: 15, cabinNumber: '120' },
    { image: DRImage3, name: 'Dr. Ethan Hughes', title: 'Psychiatrist', experience: 15, cabinNumber: '120' },
  ],
};

const TeamMembers = () => {
  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Doctor Teams</h2>
      {Object.keys(teams).map((team, index) => (
        <GroupTeamMembers key={index} teamName={team} doctors={teams[team]} />
      ))}
    </div>
  );
};

export default TeamMembers;
