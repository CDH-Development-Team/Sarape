<<<<<<< HEAD
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import History from '../components/History';

const GeographyPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <History/>
        </>
    )
}

export default GeographyPage;
=======
import React from 'react';
import { FaBars } from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavP, NavP2, NavDiv} from './NavbarElements';
import logo from "../../images/logo.png";
>>>>>>> e79c00c2326d013ce9ff2d6433cf1fedadd644cc
