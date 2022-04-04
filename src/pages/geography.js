import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Geography from "../components/Geography";
import History from "../components/History";
import Footer from "../components/Footer";

const GeographyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Geography />
      <History />
      <Footer />
    </>
  );
};

export default GeographyPage;
