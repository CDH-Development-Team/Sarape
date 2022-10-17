import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TourismHeader from '../components/TourismHeader/tourism.js';
import { tourismObjOne } from '../components/TourismSection/Data';
import ModalVideo from 'react-modal-video'
import Footer from "../components/Footer";

const Tourism = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [vidOpen, setVidOpen] = useState(false);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={vidOpen} videoId="-5AkIHdKZz4" onClose={() => setVidOpen(false)} />
			    <button className="btn-primary" style={{height:"2rem", marginLeft:'11rem', fontSize:"1.2rem"}} onClick={()=> setVidOpen(true)}>Listen to the Curator</button>
		    </React.Fragment>
            <TourismHeader {...tourismObjOne}/>
            <Footer />
        </>
    )
}

export default Tourism;