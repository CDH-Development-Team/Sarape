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
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/geography" onClick={toggle}>
                        Geography
                    </SidebarLink>
                    <SidebarLink to="/history" onClick={toggle}>
                        History
                    </SidebarLink>
                    <SidebarLink to="/porfirio" onClick={toggle}>
                        Porfirio
                    </SidebarLink>        
                    <SidebarLink to="/section5Family" onClick={toggle}>
                        Family
                    </SidebarLink>
                    <SidebarLink to="/dyeing" onClick={toggle}>
                        Dyeing
                    </SidebarLink>
                    <SidebarLink to="/historicalTextiles" onClick={toggle}>
                        Historical Textiles
                    </SidebarLink>  
                    <SidebarLink to="/section7" onClick={toggle}>
                        Saltillo Influences
                    </SidebarLink> 
                    <SidebarLink to="/tourism" onClick={toggle}>
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
