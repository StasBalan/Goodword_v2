import React, { Component } from 'react';

import './style.css';

import Sidebar from '../Sidebar/Sidebar';

import logo from '../../img/Goodword.png'

class Header extends Component {



    render() {
        return (
            <header className='header'>
                    <div className='header__inner'>
                        <img className='header__logo' src={logo} alt=""/>
                        <Sidebar />
                    </div>
            </header>
        );
    }
}

export default Header;