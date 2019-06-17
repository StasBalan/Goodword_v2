import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';

class Store extends Component{

    constructor(props) {
        super(props);
        this.state = {
            localArray: []
        };
        this.clearAll = this.clearAll.bind(this);
    }

    componentDidMount() {
        let newArr = JSON.parse(localStorage.getItem('localKey'));
        this.setState({
            localArray: newArr
        });
    }

    clearAll() {
        localStorage.clear();
        this.setState({localArray: []})
    }


    render () {
        let { localArray } = this.state;

        if(localArray.length !== 0) {
            var elem = localArray.map((el, index) => {
                return (
                    <li key={index} className='cards__item'>
                        <p>{el.title}</p>
                        <p>{el.disc}</p>
                    </li>
                );
            });
        }else {
            elem = <h3>Add something...</h3>
        }
        return (
            <section className='store'>
                <Sidebar/>
                <div className='container'>
                    <h1>Store</h1>
                   <ul className='cards__menu'>
                        {elem}
                    </ul>
                    <button onClick={this.clearAll}>clear</button>
                </div>
            </section>
        );
    }
}

export default Store;