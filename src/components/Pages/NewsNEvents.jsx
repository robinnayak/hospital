// NewsNEvents.jsx
import React from "react";
import Slider from "react-slick";
import NewsItem from "../common/newsnevent/NewsItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsEventsData = [
  {
    title: "Free Health Camp",
    date: "October 1, 2024",
    description: "Our hospital organized a free health camp offering consultations and minor treatments.",
  },
  {
    title: "New MRI Machine",
    date: "September 20, 2024",
    description: "We recently installed a state-of-the-art MRI machine, offering advanced diagnostic services.",
  },
  {
    title: "Blood Donation Drive",
    date: "September 15, 2024",
    description: "We successfully conducted a blood donation drive, with over 200 participants donating blood.",
  },
  {
    title: "COVID-19 Vaccination Drive",
    date: "August 30, 2024",
    description: "Our hospital ran a successful vaccination drive, administering over 1000 doses.",
  },
  {
    title: "Annual Health Expo",
    date: "August 15, 2024",
    description: "We hosted our annual health expo, attracting thousands of visitors for health screenings and seminars.",
  },
];

const NewsNEvents = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Auto-slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden p-4">
      <Slider {...sliderSettings}>
        {newsEventsData.map((news, index) => (
          <div key={index}>
            <NewsItem
              title={news.title}
              date={news.date}
              description={news.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsNEvents;
