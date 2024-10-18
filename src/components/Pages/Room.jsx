import React from 'react';
import StandardRoom from '../../assests/standard.jpg'
import DeluxRoom from '../../assests/delux.jpg'
import ICURoom from '../../assests/icu.jpg'
const roomsData = [
  {
    type: 'Standard Room',
    features: ['Single Bed', 'Attached Bathroom', 'Free Wi-Fi', 'Television'],
    price: 'NPR 2,000 per night',
    image: StandardRoom,
  },
  {
    type: 'Deluxe Room',
    features: ['Double Bed', 'Attached Bathroom', 'Free Wi-Fi', 'Television', 'Room Service'],
    price: 'NPR 3,500 per night',
    image: DeluxRoom,
  },
  {
    type: 'ICU Room',
    features: ['Intensive Care Unit', '24/7 Monitoring', 'Advanced Equipment', 'Private Nurse'],
    price: 'NPR 7,000 per night',
    image: ICURoom,
  },
  // Add more rooms as needed
];

const Room = () => {
  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Rooms</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {roomsData.map((room, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Room Image */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Room Type */}
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-2">{room.type}</h3>

            {/* Room Features */}
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {room.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Room Price */}
            <p className="text-center text-gray-800 font-bold">{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
