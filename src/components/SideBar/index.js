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

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon isOpen={isOpen} onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' isOpen={isOpen} onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='discover' isOpen={isOpen} onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to='services' isOpen={isOpen} onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='signup' isOpen={isOpen} onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn to='/signin' isOpen={isOpen} onClick={toggle}>Sign In</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
