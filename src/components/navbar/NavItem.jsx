import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, to, onClick }) => {
  return (
    <li className="px-4 py-2">
      <Link
        to={to}
        className="flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base lg:text-lg"
        onClick={onClick} // Call the function to close the menu
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
