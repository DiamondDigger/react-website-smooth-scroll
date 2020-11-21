import React, {useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {IconContext} from 'react-icons/lib'
import useScroll from '../useScroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const {linkProps} = useScroll()
  const {toggleIcon} = useScroll()

  const changeNav = () => {

    setScrollNav(() => {
      if (window.scrollY >= 80) {
        return true 
      } else {
        return false
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)

    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  })

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleIcon}>dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" {...linkProps}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" {...linkProps}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" {...linkProps}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" {...linkProps}>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
