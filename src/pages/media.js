import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Thumbnail from "../components/Media";
import {
  homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix
} from "../components/Media/Data";
import Footer from "../components/Footer";
const Media = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Thumbnail {...homeObjOne} />
      <Thumbnail {...homeObjTwo} />
      <Thumbnail {...homeObjThree} />
      <Thumbnail {...homeObjFour} />
      <Thumbnail {...homeObjFive} />
      <Thumbnail {...homeObjSix} />
      <Footer />
    </>
  );
};

export default Media;
