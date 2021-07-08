import React from 'react';
import { FaBars } from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavP, NavP2, NavDiv} from './NavbarElements';
import logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img style={{height: 2+"em"}} src={logo} alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem> */}
                            <NavLinks to="/index">
                                <NavDiv>
                                    <NavP>WRAPPED IN COLOR</NavP>
                                    <NavP2>LEGACIES OF THE MEXICAN SARAPE</NavP2>
                                </NavDiv>
                            </NavLinks>
                        {/* </NavItem> */}
                        {/* <NavItem>
                            <NavLinks to="discover">
                            Toolkit
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">
                            History & Geography
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">
                            Contact
                            </NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar;
