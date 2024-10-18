import React from "react";
import Testo1 from "../../assests/testo1.jpg";
import Testo2 from "../../assests/testo2.jpg";
const testimonialsData = [
  {
    name: "John Doe",
    feedback:
      "The doctors and staff were incredibly attentive and took great care of me during my treatment. Highly recommended!",
    image: Testo1, // You can replace this with actual image URLs
  },
  {
    name: "Jane Smith",
    feedback:
      "I had a wonderful experience during my eye check-up. The staff made me feel comfortable and the process was smooth.",
    image: Testo2,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-6 lg:px-24 bg-white">
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Testimonials;
