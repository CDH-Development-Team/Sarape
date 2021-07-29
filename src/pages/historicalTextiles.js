import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HistoricalSection from '../components/Section7/section7index';
import { sixObj, sixObjOne, sixObjTwo, sixObjThree} from '../components/HistoricalTextiles/historicalData';
import Section6 from '../components/Services/section6';


const HistoricalTextiles = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <br></br>
            <br></br>
            <Section6 />
            <HistoricalSection {...sixObj}/>
            <HistoricalSection {...sixObjOne}/>
            <HistoricalSection {...sixObjTwo}/>
            <HistoricalSection {...sixObjThree}/>
        </>
    )
}

export default HistoricalTextiles;
