import React from 'react';
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/geography" onClick={toggle}>
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
                    <SidebarLink to="/sarapeSyles" onClick={toggle}>
                        Sarape Styles
                    </SidebarLink>  
                    <SidebarLink to="/saltillo" onClick={toggle}>
                        Saltillo Influences
                    </SidebarLink> 
                    <SidebarLink href="/tourism" onClick={toggle}>
                        Tourism
                    </SidebarLink> <br />
                    <SidebarLink to="/credits" onClick={toggle}>
                        Credits
                    </SidebarLink>                                                      
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
