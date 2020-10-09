import styled from 'styled-components'
import { Link as LinkRouter} from 'react-router-dom'

export const Nav = styled.nav`
    background: gray;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
    z-index: 1;
`

export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;    
`