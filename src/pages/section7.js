import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Section7 from '../components/Section7/section7index';
import { sevenObj, sevenObjOne, sevenObjTwo, sevenObjThree, sevenObjFour, sevenObjFive, sevenObjSix, sevenObjSeven} from '../components/Section7/section7-data';
import ServicesSeven from '../components/Services/section7';
import Services from '../components/Services';
import FamilyPage from '../pages/section7Modals.js';

const Section7Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
            <FamilyPage/>
    )
}

export default Section7Home;
