import React from 'react';
import './style.css';

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
                        <li className='header__item header-item'>Home</li>
                        <li className='header__item header-item'>Card</li>
                        <li className='header__item header-item'>Word</li>
                        <li className='header__item header-item'>Setting</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;