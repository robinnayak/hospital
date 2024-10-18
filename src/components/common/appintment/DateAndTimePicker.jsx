// DateAndTimePicker.jsx
import React, { useState } from "react";

const DateAndTimePicker = ({ onDateTimeSelect }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateTimeSubmit = () => {
    if (date && time) {
      onDateTimeSelect({ date, time });
    } else {
      alert("Please select both date and time.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Select Date and Time
      </h2>
      <div className="space-y-4">
        {/* Date Picker */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
          />
        </div>

        {/* Time Picker */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleDateTimeSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DateAndTimePicker;
