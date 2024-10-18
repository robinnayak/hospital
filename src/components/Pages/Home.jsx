import React from "react";
import BannerImage from "../../assests/banner2.jpg"; // Example image import
import SectionImageFirst from "../../assests/beds.jpg";
import SectionImageSecond from "../../assests/leftimage.jpg";
import SectionImage from "../common/SectionImage";
import SectionDescription from "../common/SectionDescription";
import Banner from "../common/Banner";
import WhyChoose from "./WhyChoose";
import Specialists from "./Specialists";
import NewsNEvents from "./NewsNEvents";
import Testimonials from "./Testomonials";

const Home = () => {
  const description1 =
    "We offer a range of medical services designed to meet your healthcare needs. From general consultations to specialized treatments, we've got you covered.";
  const description2 =
    "Our team of highly trained doctors is ready to provide expert care and ensure you receive the best possible treatment for your health conditions.";

  return (
    <div>
      {/* Banner Section */}
      <Banner
        image={BannerImage}
        description="Welcome to our clinic! We provide top-notch medical services to take care of your health needs."
        buttonLabel="Book an Appointment"
        buttonLink="/book-appointment" // Adjust this to the correct route
      />

      {/* Section 1: Image on the left, Description on the right */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-24 gap-12 bg-gray-50">
        <SectionImage image={SectionImageFirst} />
        <SectionDescription
          description={description1}
          buttonLabel="Services"
          buttonLink="/services"
        />
      </div>

      {/* Why Choose Section */}
      <div className="py-16 px-6 lg:px-24 bg-white">
        <WhyChoose />
      </div>

      {/* Section 2: Description on the left, Image on the right */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-6 lg:px-24 gap-12 bg-gray-50">
        <SectionDescription
          description={description2}
          buttonLabel="Meet Our Doctors"
          buttonLink="/doctors"
        />
        <SectionImage image={SectionImageSecond} />
      </div>

      {/* Specialists Section */}
      <div className="py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Specialists
        </h2>
        <Specialists />
      </div>

      {/* News and Events Section */}
      <div className="py-16 px-6 lg:px-24 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Recent News & Events
        </h2>
        <NewsNEvents />
      </div>
      {/* News and Events Section */}
      <div className="py-16 px-6 lg:px-24 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Patients Say
        </h2>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
