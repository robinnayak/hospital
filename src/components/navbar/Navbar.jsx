import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUserMd, faPhone, faCalendarCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import LogoImage from "../../assests/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Logo src={LogoImage} alt="Company Logo" />

      {/* Hamburger icon for mobile view */}
      <button
        className="block lg:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Menu Items */}
      <ul
        className={`flex-col items-center lg:flex-row lg:flex lg:space-x-4 transition-all duration-500 ease-in-out absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent z-10 lg:z-auto lg:opacity-100 ${
          isOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        <NavItem icon={faHome} label="Home" to="/" onClick={closeMenu} />
        <Dropdown
          label="Services"
          items={[
            <NavItem key="fee-structure" label="Fee Structure" to="/fee-structure" onClick={closeMenu} />,
            <NavItem key="services-offered" label="Services Offered" to="/services" onClick={closeMenu} />,
          ]}
        />
        <NavItem icon={faUserMd} label="Doctors" to="/doctors" onClick={closeMenu} />
        <NavItem icon={faUserMd} label="Doctors Team" to="/teams" onClick={closeMenu} />
        <NavItem icon={faInfoCircle} label="About" to="/about" onClick={closeMenu} />
        <NavItem icon={faPhone} label="Contact" to="/contact" onClick={closeMenu} />
        <NavItem icon={faCalendarCheck} label="Book Appointment" to="/book-appointment" onClick={closeMenu} />
      </ul>
    </nav>
  );
};

export default Navbar;
