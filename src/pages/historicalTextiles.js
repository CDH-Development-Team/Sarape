import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HistoricalSection from '../components/HistoricalTextiles/historicalTextiles.js';
import { sixObj, sixObjOne, sixObjTwo, sixObjThree} from '../components/HistoricalTextiles/historicalData';
import Section6 from '../components/Services/section6';
import FamilyPage from '../components/Services/section6Modals2.js';


const HistoricalTextiles = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
            <FamilyPage/>
            </React.Fragment>
    )
}

export default HistoricalTextiles;
