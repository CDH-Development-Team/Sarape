import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InfoSection2 from "../components/InfoSection2";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection2/Data";
import Services from "../components/Services";

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
    </>
  );
};

export default About;
