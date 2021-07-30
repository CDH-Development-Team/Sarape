import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TourismSection from '../components/TourismSection/tourism.js';
import TourismHeader from '../components/TourismHeader/tourism.js';
import { tourismObjOne, tourismObjTwo, tourismObjThree, tourismObjFour } from '../components/TourismSection/Data';
import InfoSection from '../components/InfoSection';

const Tourism = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <TourismHeader {...tourismObjOne}/>
            {/* <TourismSection {...tourismObjOne}/> */}
            <TourismSection {...tourismObjTwo}/>
            <TourismSection {...tourismObjThree}/>
            <TourismSection {...tourismObjFour}/>
        </>
    )
}

export default Tourism;