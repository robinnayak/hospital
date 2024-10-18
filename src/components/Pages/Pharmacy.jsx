import React from 'react';

const Pharmacy = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Pharmacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Pharmacy
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We provide a wide range of medications and healthcare products, ensuring you receive the right treatment. Our pharmacists are here to help you with expert advice and personalized care.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Prescription Medications</h3>
            <p className="text-center text-gray-600">We stock a wide range of prescription medications for all healthcare needs.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Over-the-Counter Products</h3>
            <p className="text-center text-gray-600">Offering a variety of over-the-counter products, including pain relief, cold, and allergy medications.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Personalized Consultations</h3>
            <p className="text-center text-gray-600">Our pharmacists provide personalized consultations to ensure you understand your treatment.</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Location</h3>
          <div className="flex justify-center">
            <iframe
              src="https://maps.google.com/maps?q=27.7172,85.3240&z=15&output=embed"
              width="100%"
              height="450"
              allowFullScreen
              title="Pharmacy Location"
              className="border-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
