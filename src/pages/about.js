import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InfoSection2 from "../components/InfoSection2";
import {
  homeObjOne,
} from "../components/InfoSection2/Data";
import Footer from "../components/Footer";
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection2 {...homeObjOne} />
      <Footer />
    </>
  );
};

export default About;
