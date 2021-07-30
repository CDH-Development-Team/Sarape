import React from 'react';
import {Link} from "react-router-dom";
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink BrowserRouter="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink Link="/geography" onClick={toggle}>
                        Geography
                    </SidebarLink>
                    <SidebarLink to="/history" onClick={toggle}>
                        History
                    </SidebarLink>
                    <SidebarLink to="/porifirio" onClick={toggle}>
                        Porifirio
                    </SidebarLink>        
                    <SidebarLink to="/dyeing" onClick={toggle}>
                        Dyeing
                    </SidebarLink>
                    <SidebarLink to="/family" onClick={toggle}>
                        Family
                    </SidebarLink>
                    <SidebarLink to="/sarapeStyles" onClick={toggle}>
                        Sarape Styles
                    </SidebarLink>  
                    <SidebarLink to="/section7" onClick={toggle}>
                        Saltillo Influences
                    </SidebarLink> 
                    <SidebarLink href="/tourism" onClick={toggle}>
                        Tourism
                    </SidebarLink>
                    <SidebarLink to="/credits" onClick={toggle}>
                        Credits
                    </SidebarLink>                                                      
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
