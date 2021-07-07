import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TourismSection from '../components/TourismSection/tourism.js';
import { tourismObjOne, tourismObjTwo, tourismObjThree, tourismObjFour } from '../components/TourismSection/Data';

const Tourism = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <TourismSection {...tourismObjOne}/>
            <TourismSection {...tourismObjTwo}/>
            <TourismSection {...tourismObjThree}/>
            <TourismSection {...tourismObjFour}/>
        </>
    )
}

export default Tourism;