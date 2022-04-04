import React from "react";
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";


const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
            <translateAlert style={{position: 'absolute', top:'2vh', width: '100%', textAlign: 'center', fontSize:'2vh'}}>
                To change your language click the google translate icon on the above search bar
                </translateAlert>
                <SidebarMenu>
                    <SidebarLink to="/sarape" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/intro" onClick={toggle}>
                        Introduction
                    </SidebarLink>          
                    <SidebarLink to="/geography" onClick={toggle}>
                        History and Geography
                    </SidebarLink>
                    {/*<SidebarLink to="/history" onClick={toggle}>
                        History
    </SidebarLink>*/}
                    <SidebarLink to="/porfirio" onClick={toggle}>
                        Porfirio Gutiérrez
                    </SidebarLink>        
                    <SidebarLink to="/section5Family" onClick={toggle}>
                        Family and Philosophy
                    </SidebarLink>
                    <SidebarLink to="/dyeing" onClick={toggle}>
                        Natural Dyeing
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
                    <SidebarLink to="/media" onClick={toggle}>
                        Films/Games/More
                    </SidebarLink>                                    
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
