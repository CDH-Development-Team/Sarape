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
                    <NavMenu >
                        <NavLinks to="/" style={{display:'flex', justifyContent: 'center', overflow: 'hidden'}}>
                            <NavDiv style={{textAlign: 'center'}}>
                                <NavP>WRAPPED IN COLOR</NavP>
                                <NavP2 style={{fontSize:"1.41rem"}}>LEGACIES OF THE MEXICAN SARAPE</NavP2>
                            </NavDiv>
                        </NavLinks>
                        <NavLinks></NavLinks>
                    </NavMenu>
                    <NavLinks to="/home" style={{ marginRight: '40px' }}>
                        <NavDiv style={{textAlign: "right",overflow:"hidden"}}>
                            <NavP2 style={{fontFamily: "myriad-pro"}}>About This Exhibit</NavP2>
                        </NavDiv>
                    </NavLinks>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar;
