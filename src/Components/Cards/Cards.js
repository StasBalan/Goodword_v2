import React, { Component } from 'react';

import './style.css';

import Modal from '../Modal/Modal';

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
        arr.forEach((el) =>{
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=b94e78e4-8545-4c28-bd32-2b331aede418`)
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
                <div className='container'>
                    {isFetching ? <h1>Add some settings</h1> :
                        <ul className='cards__menu'>
                            {elements}
                        </ul>}
                    <Modal
                        title={this.state.modalText}
                        className="modal"
                        showModal={this.state.isShowing}
                        closeModal={this.closeModalHandler.bind(this)}>
                        <p>{this.state.modalDisc}</p>
                    </Modal>
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