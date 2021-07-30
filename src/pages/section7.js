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
        <>
<<<<<<< HEAD
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <ServicesSeven/>
            <Section7 {...sevenObj}/>
            <Section7 {...sevenObjOne}/>
            <Section7 {...sevenObjTwo}/>
            <Section7 {...sevenObjThree}/>
            <Section7 {...sevenObjFour}/>
            <Section7 {...sevenObjFive}/>
            <Section7 {...sevenObjSix}/>
            <Section7 {...sevenObjSeven}/>
=======

            <FamilyPage/>

>>>>>>> 7f28e4e81ff36b3effadf7d1e35fc6acb3ad657e
        </>
    )
}

export default Section7Home;
