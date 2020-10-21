import React from 'react'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>                
                    <SidebarLink>About<SidebarLink>
                    <SidebarLink>Discover</SidebarLink>
                    <SidebarLink>Services</SidebarLink>
                    <SidebarLink>Sign Up</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute>Sign In</SidebarRoute>       
            </SideBtnWrap>    
        </SidebarContainer>  
    )
}

export default Sidebar
