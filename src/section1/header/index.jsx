import React from 'react';
// import logo from '../../asset/logo.png';
import banner from '../../asset/banner-1.png';
import './style.css';
import styled from 'styled-components';

import Content from '../content';

const Header = () => {
    return (
        <div>
            <div className="box_container">
                <div className="content">
                    <div className='title'>
                        <p>HELLO, WE ARE FINCORP</p>
                        <h1>Insurance<br/> made easy.</h1>
                        <Button>Get your free Quote</Button>
                    </div>
                    <div className='image'>
                        <img src={banner} alt="banner" />
                    </div>
                <div className="desc">
                    <h2>A new take on insurance</h2>
                    <p>Great for individuals ans business</p>
                </div>
                </div>
            </div>
            <Content />
        </div>
    )
}

export const Button = styled.button`
    border-radius: 4px;
    background-image: linear-gradient(to bottom right, #f38135, #eb4f93);
    white-space: nowrap;
    padding: 1rem;
    color: #fff;
    font-size: 1.5rel;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all .3s ease-out;
        background-image: linear-gradient(to bottom right, #eb4f93, #f38135);
    }
`;

export default Header;





