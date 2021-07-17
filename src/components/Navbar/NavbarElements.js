import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";


export const Nav = styled.nav`
    background: rgba(173, 0, 66,1);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 100%;
    
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    margin: 0 auto;
`;

export const MobileIcon = styled.div`
    color: #fff;
    margin: auto 0;

    // @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    // }
`;

export const NavMenu = styled.div`
    height: 100%;
    width: 40rem;
    font-size: 2.0rem;
    padding-right: 0px;
    margin-right: 140px; 
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:768px){
        display: none;
    }
`;

export const NavItem = styled.div`
    height: 100px;
    width: 40rem;
    font-size: 0.2rem;
    padding-right: 0px;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:768px){
        display: none;
    }

`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        
    }
`;

export const NavP = styled.div`
    font-size: 40px;
`;

export const NavP2 = styled.div`
    font-size: 22px;
    margin-right: 4rem;
`;

export const NavDiv = styled.div`
    margin: 0 auto;
`;
