import React from 'react';
import { FaBars } from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavP, NavP2, NavDiv} from './NavbarElements';
import logo from "../../images/AZ-State-Museum-Logo_white copy.png";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img style={{height: 2+"em"}} src={logo} alt="logo"/>
                    </NavLogo>
                    <NavMenu>
                        <NavLinks to="/index">
                            <NavDiv>
                                <NavP>WRAPPED IN COLOR</NavP>
                                <NavP2>LEGACIES OF THE MEXICAN SARAPE</NavP2>
                            </NavDiv>
                        </NavLinks>
                        <NavLinks to="/signin">
                            <NavDiv style={{padding: "6.5rem",textAlign: "right"}}>
                                <NavP2 style={{fontFamily: "myriad-pro"}}>About This Exhibit</NavP2>
                            </NavDiv>
                        </NavLinks>
                    </NavMenu>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar;
