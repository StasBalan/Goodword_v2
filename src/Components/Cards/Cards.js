import React, { Component } from 'react';

import './style.css';

import Modal from '../Modal/Modal';
import Sidebar from '../Sidebar/Sidebar';

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';

class Cards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            textArray: [],
            isFetching: true,
            isShowing: false,
            modalText: '',
            modalDisc: '',
        };
    }

    componentDidMount() {
        let arr = this.props.arrB;
        var key = process.env.REACT_APP_MY_SECOND_API_KEY;
        arr.forEach((el) =>{
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${key}`)
                .then((res) => res.json())
                .then((data) => this.bar(data));
        });
    }

    bar = (arr) => {
        let newArr = this.state.array;
        newArr.push(arr[0]);
        // console.log(newArr);
        let textArray = [];
        newArr.forEach(el => {
            textArray.push({title: el.meta.stems[0], disc: el.shortdef[0]});
        });
        this.setState({
            textArray: textArray,
            isFetching: false
        });
        // console.log(newArr);
        // console.log(this.state.bar)
    };

    openModalHandler(text) {
        this.setState({
            isShowing: true,
            modalText: text.title,
            modalDisc: text.disc
        });
    }

    closeModalHandler() {
        this.setState({isShowing: false});
    }

    render() {
        let { textArray, isFetching } = this.state;
        const elements = textArray.map((text, index) => {
            return (
                <li onClick={() => this.openModalHandler(text)} key={index} className='cards__item'>
                    <h3>{text.title}</h3>
                    <p>{text.disc}</p>
                </li>
            );
        });

        return (
            <section className='cards'>
                <Sidebar />
                <div className='container'>
                    {isFetching ? <div id="cube-loader">
                            <div className="caption">
                                <div className="cube-loader">
                                    <div className="cube loader-1"/>
                                    <div className="cube loader-2"/>
                                    <div className="cube loader-4"/>
                                    <div className="cube loader-3"/>
                                </div>
                            </div>
                        </div> :
                        <ul className='cards__menu'>
                            {elements}
                        </ul>}
                    {this.state.isShowing ?
                        <Modal
                        title={this.state.modalText}
                        showModal={this.state.isShowing}
                        closeModal={this.closeModalHandler.bind(this)}>
                        <p>{this.state.modalDisc}</p>
                    </Modal> : null}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arrB: state.dataRange
    }
};

export default connect (mapStateToProps, actions)(Cards);