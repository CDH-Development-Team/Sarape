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
                    <SidebarLink to="about" onClick={toggle}>
                        Section 1
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Section 2
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Section 3
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Section 4
                    </SidebarLink>        
                    <SidebarLink to="discover1" onClick={toggle}>
                        Section 5
                    </SidebarLink>
                    <SidebarLink to="services1" onClick={toggle}>
                        Section 6
                    </SidebarLink>
                    <SidebarLink to="signup1" onClick={toggle}>
                        Section 7
                    </SidebarLink>                                                      
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
