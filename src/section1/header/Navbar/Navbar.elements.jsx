import styled from "styled-components";
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom';

// Navigation Bar
export const Nav = styled.nav`
    /* background-color: red; */
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

// Navigation Container
export const NavbarContainer = styled(Container)`
    display: flex;
    height: 80px;

    ${Container}
`;

// Navigation Logo
export const NavLogo = styled(Link)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

// Navigation on Mobile
export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

// Navigation Menu UL
export const NavMenu = styled.ul`
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media scree and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background: #101522;
    }
`;

// Navigation Menu LI
export const NavItem = styled.li`
    display: flex;
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #101522;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

// Navigation link
export const NavLinks = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all .3s ease;
        }
    }
`;