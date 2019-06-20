import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';

class CardsItems extends Component{
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

    render() {
        let { textArray } = this.state;
        const elements = textArray.map((text, index) => {
            return (
                <li onClick={() => this.openModalHandler(text)} key={index} className='cards__item'>
                    <h3>{text.title}</h3>
                    <p>{text.disc}</p>
                </li>
            );
        });

        return (
            <ul className='cards__menu'>
                {elements}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arrB: state.dataRange
    }
};

export default connect (mapStateToProps, actions)(CardsItems);