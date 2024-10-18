import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/emergency" className="hover:underline">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="/pharmacy" className="hover:underline">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="/rooms" className="hover:underline">
                  Rooms
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Academic & Overview Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <ul className="space-y-2">
              <li>
                <a href="/overview" className="hover:underline">
                  Hospital Overview
                </a>
              </li>
              <li>
                <a href="/specialities" className="hover:underline">
                  Specialities
                </a>
              </li>
              <li>
                <a href="/teams" className="hover:underline">
                  Teams
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="py-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Mirchaiya, Nepal
            </p>
            <p className="py-1">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a
                href="mailto:info@mirchiyahospital.com"
                className="hover:underline"
              >
                info@mirchiyahospital.com
              </a>
            </p>
            <p className="py-1">
              <FontAwesomeIcon icon={faPhone} /> WhatsApp / Viber:{" "}
              <a href="tel:+977-9800000000" className="hover:underline">
                +977-9800000000
              </a>
            </p>
            <p className="py-1">
              <FontAwesomeIcon icon={faPhone} /> 24/7 Customer Hotline:{" "}
              <a href="tel:+977-01-5912345" className="hover:underline">
                +977-01-5912345
              </a>
            </p>
            <p className="py-1">
              <FontAwesomeIcon icon={faAmbulance} /> Helicopter & Air Ambulance:{" "}
              <a href="tel:+977-9801234567" className="hover:underline">
                +977-9801234567
              </a>
            </p>
            <p className="py-1">
              <FontAwesomeIcon icon={faAmbulance} /> Ambulance:{" "}
              <a href="tel:+977-9801111111" className="hover:underline">
                +977-9801111111
              </a>{" "}
              /{" "}
              <a href="tel:+977-9802222222" className="hover:underline">
                +977-9802222222
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 Samit Hospital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
