import React from 'react'
import {
    SidebarContainer, 
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink, 
    SidebarBtn, 
    SideBtnWrap,
    Icon, 
    CloseIcon
} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn to='/signin'>Sign In</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
