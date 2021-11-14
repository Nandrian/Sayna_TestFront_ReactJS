import React, { useState } from 'react';
import logo from '../../../asset/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value={{ color: '#505050' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <img src={logo} alt="Logotype" />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>For you & family</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/for-business'>For Business</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;