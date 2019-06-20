import React, { Component } from 'react';

import './style.css';

import Sidebar from '../Sidebar/Sidebar';

class Favorites extends Component {

    constructor(props) {
        super(props);
        this.clearAll = this.clearAll.bind(this);
        this.showCards = this.showCards.bind(this);
    }

    state = {
        localArray: []
    };

    showCards() {
        let newArr = JSON.parse(localStorage.getItem('localKey'));
        let arr = newArr ? newArr : {title: 'Add', disc: 'something'};
        this.setState({
            localArray: arr
        });
    }

    clearAll() {
        localStorage.clear();
        this.setState({localArray: []})
    }


    render () {
        let { localArray } = this.state;
        const elem = [];
        if(localArray.length) {
            elem.push(localArray.map((el, index) => {
                return (
                    <li key={index} className='cards__item'>
                        <p>{el.title}</p>
                        <p>{el.disc}</p>
                    </li>
                );
            }));
        }else {
            elem.push(<h3 className='store__text'>Add something...</h3>);
        }
        return (
            <section className='store'>
                <Sidebar/>
                <div className='container'>
                    <div className='store__inner'>
                        <h1 className='store__title'>Store</h1>
                        <button className='store__btn' onClick={this.clearAll}>Clear All</button>
                        <button className='store__btn' onClick={this.showCards}>Show Cards</button>
                    </div>
                   <ul className='cards__menu'>
                        {elem}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Favorites;