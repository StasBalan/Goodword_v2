import React, { Component } from 'react';

import Modal from "../Modal/Modal";

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';


class CardsItems extends Component{

    state = {
        array: [],
        textArray: [],
        isFetching: true,
        isShowing: false,
        modalText: '',
        modalDisc: '',
    };

    componentDidMount = () => {
        let wordsToLearn = this.props.wordsToLearn;
        const key = process.env.REACT_APP_MY_SECOND_API_KEY;
        wordsToLearn.forEach((el) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${key}`)
                .then((res) => res.json())
                .then((data) => this.fetchingFunc(data));
        });
    };

    fetchingFunc = (arr) => {
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

    openModalHandler = (text) => {
        this.setState({
            isShowing: true,
            modalText: text.title,
            modalDisc: text.disc
        });
    };

    closeModalHandler = () => {
        this.setState({isShowing: false});
    };

    render() {
        let { textArray, modalText, modalDisc, isShowing } = this.state;
        const elements = textArray.map((text, index) => {
            return (
                <li onClick={() => this.openModalHandler(text)}
                    key={index}
                    className='cards__item'>
                    <h3>{text.title}</h3>
                    <p>{text.disc}</p>
                </li>
            );
        });

        return (
            <>
                <ul className='cards__menu'>
                    {elements}
                </ul>
                {this.state.isShowing ?
                    <Modal title={modalText}
                           showModal={isShowing}
                           closeModal={this.closeModalHandler}>
                        <p>{modalDisc}</p>
                    </Modal>
                    : null}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wordsToLearn: state.wordsToLearn
    }
};

export default connect (mapStateToProps, actions)(CardsItems);