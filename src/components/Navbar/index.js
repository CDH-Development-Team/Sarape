import React from 'react';
import { FaBars } from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import logo from "../../images/logo.png"

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img style={{height: 2.2+"em"}} src={logo} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                History & Geography
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">
                                Porfirio Gutierrez
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">
                                Family & Philosophy
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">
                                Natural Dyeing
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tourism">
                                Tourism
                            </NavLinks>
                        </NavItem>
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
