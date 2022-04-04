import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FamilyPage from "../components/Services/section7.js";
import Footer from "../components/Footer";

const Section7Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FamilyPage />
      <Footer />
    </React.Fragment>
  );
};

export default Section7Home;
