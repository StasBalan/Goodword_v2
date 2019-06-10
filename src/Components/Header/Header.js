import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

function Header(){
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <h1 className='header__title'>
                        <span className='header__title-black'>G</span>
                        <span className='header__title-red'>O</span>
                        <span className='header__title-black'>O</span>
                        <span className='header__title-red'>D</span>
                        <span className='header__title-black'>W</span>
                        <span className='header__title-red'>O</span>
                        <span className='header__title-black'>R</span>
                        <span className='header__title-red'>D</span>
                    </h1>
                    <ul className='header__menu'>
                        <li className='header__item header-item'><Link to='/' className='header-item__link'>Home</Link></li>
                        <li className='header__item header-item'><Link to='/card' className='header-item__link'>Card</Link></li>
                        <li className='header__item header-item'><Link to='/word' className='header-item__link'>Word</Link></li>
                        <li className='header__item header-item'><Link to='/setting' className='header-item__link'>Setting</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;