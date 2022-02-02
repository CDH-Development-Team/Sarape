import React from 'react';
import { FaBars } from "react-icons/fa"
import {Nav, NavbarContainer, MobileIcon, NavMenu, NavLinks, NavP, NavP2, NavDiv} from './NavbarElements';
import logo from "../../images/AZ-State-Museum-Logo_white copy.png";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                        <div style={{
                            justifySelf: 'flex-start',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        <a href="https://statemuseum.arizona.edu">
                        <img style={{height: '3rem', marginTop:'0.5rem'}} src={logo} alt="logo"/>
                        </a>
                        </div>
                    <NavMenu >
                        <NavLinks to="/" style={{display:'flex', justifyContent: 'center', overflow: 'hidden'}}>
                            <NavDiv style={{textAlign: 'center'}}>
                                <NavP>WRAPPED IN COLOR</NavP>
                                <NavP2 style={{fontSize:"1.41rem"}}>LEGACIES OF THE MEXICAN SARAPE</NavP2>
                            </NavDiv>
                        </NavLinks>
                        <NavLinks></NavLinks>
                    </NavMenu>
                    <NavLinks to="/credits" style={{ marginRight: '40px' }}>
                        <NavDiv style={{textAlign: "right",overflow:"hidden"}}>
                            <NavP2 style={{fontFamily: ""}}>About This Exhibit</NavP2>
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
