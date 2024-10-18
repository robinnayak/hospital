import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle item click and close the dropdown
  const handleItemClick = () => {
    setIsOpen(false); // Close dropdown when an item is clicked
  };

  return (
    <div className="relative inline-block">
      {/* Button to toggle the dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-500 focus:outline-none"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {label}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} z-50`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={handleItemClick} // Close dropdown on item click
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
