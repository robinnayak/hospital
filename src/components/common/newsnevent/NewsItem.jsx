// NewsItem.jsx
import React from "react";

const NewsItem = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default NewsItem;
