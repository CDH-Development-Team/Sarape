import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from "../components/Footer";
import HeroSection1 from '../components/HeroSection1';

const SigninPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection1 />
            <Services />
            <InfoSection {...homeObjFour}/>
            {/* <InfoSection {...homeObjFive}/>             */}
        </>
    )
}

export default SigninPage;
