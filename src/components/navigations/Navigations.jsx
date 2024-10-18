import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import OurDoctors from "../Pages/OurDoctors";
import FeeStructure from "../Pages/FeeStructure";
import BookAnAppointment from "../Pages/BookAnAppointment";
import PageNotFound from './PageNotFound'
import DoctorProfile from "../Pages/DoctorProfile";
import Testimonials from "../Pages/Testomonials";
import Emergency from "../Pages/Emergency";
import Specialities from "../Pages/Specialities";
import HospitalOverview from "../Pages/HospitalOverview";
import Pharmacy from "../Pages/Pharmacy";
import Room from "../Pages/Room";
import TeamMembers from "../Pages/TeamMembers";
const Navigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<OurDoctors />} />
      <Route path="/fee-structure" element={<FeeStructure />} />
      <Route path="/book-appointment" element={<BookAnAppointment />} />
      <Route path="/doctor-profile" element={<DoctorProfile />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/specialities" element={<Specialities />} />
      <Route path="/overview" element={<HospitalOverview />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/rooms" element={<Room />} />
      <Route path="/teams" element={<TeamMembers />} />

      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
};

export default Navigations;
