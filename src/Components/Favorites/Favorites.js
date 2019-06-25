import React, { Component } from 'react';

import './style.css';

import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import * as actions from "../../actions/Actions";


class Favorites extends Component {

    // state = {
    //     localArray: []
    // };
    //
    // showCards = () => {
    //     this.setState({
    //         localArray: this.props.dataLocalStorage
    //     });
    // };
    //
    // clearAll = () => {
    //     this.setState({localArray: []})
    // };

    render () {
        // let { localArray } = this.state;
        let { dataLocalStorage } = this.props;
        const elements = [];
        if(dataLocalStorage) {
            elements.push(dataLocalStorage.map((el, index) => {
                return (
                    <li key={index}
                        className='cards__item'>
                        <p>{el.title}</p>
                        <p>{el.disc}</p>
                    </li>
                );
            }));
        }else {
            elements.push(<h3 className='store__text'>Add something...</h3>);
        }
        return (
            <section className='store'>
                <Sidebar/>
                <div className='container'>
                    <div className='store__inner'>
                        <h1 className='store__title'>Store</h1>
                        {/*<button className='store__btn'*/}
                                {/*onClick={this.clearAll}>*/}
                            {/*Clear All*/}
                        {/*</button>*/}
                        {/*<button className='store__btn'*/}
                                {/*onClick={this.showCards}>*/}
                            {/*Show Cards*/}
                        {/*</button>*/}
                    </div>
                    {/*{ dataLocalStorage.length ? <ul className='cards__menu'>*/}
                        {/*{elements}*/}
                    {/*</ul> : <h1> asd</h1>}*/}
                    <ul className='cards__menu'>
                        {elements}
                    </ul>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataLocalStorage: state.dataLocalStorage
    }
};

export default connect (mapStateToProps, actions)(Favorites);