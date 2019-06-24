import React from 'react';

import './style.css';

import Sidebar from '../Sidebar/Sidebar';

import logo from '../../img/Goodword.png';


function Header() {
    return (
        <header className='header'>
            <Sidebar />
            <div className='header__inner'>
                <img className='header__logo'
                     src={logo}
                     alt="logo"/>
            </div>
        </header>
    );
}

export default Header;