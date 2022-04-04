import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TourismHeader from '../components/TourismHeader/tourism.js';
import { tourismObjOne } from '../components/TourismSection/Data';
import Footer from "../components/Footer";

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
            <Footer />
        </>
    )
}

export default Tourism;