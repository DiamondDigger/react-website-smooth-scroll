import styled from 'styled-components'

export const Nav = styled.nav`
    background: #000;
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