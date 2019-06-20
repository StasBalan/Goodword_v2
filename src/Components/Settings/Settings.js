import React, { Component } from 'react';

import './style.css'

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';
import Sidebar from "../Sidebar/Sidebar";

class Setting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            range: '1',
            isChecked: false
        };
        this.isRange = this.isRange.bind(this);
        this.isSave = this.isSave.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.isChecked !== props.isShowingCards) {
            return {
                isChecked: props.isShowingCards
            };
        }
        return state;
    }



    isRange(e) {
        let value = Number(e.target.value);
        this.setState({
            range: value
        })
    }

    isSave() {
        let arr = this.props.arrA;
        let newArr = this.props.arrB;
        for ( let j = 0; j < this.state.range; j++ ) {
            let rand = Math.floor(Math.random() * arr.length);
            newArr.push(arr[rand]);
            arr.splice(rand, 1);
        }
        this.setState({range: '1'});
        alert(`Was added ${this.state.range} cards`);
        this.props.showingCards(this.setShow);
        this.props.actionSave(arr);
        this.props.actionSave(newArr);
        // console.log(arr);
    }

    setShow() {
        this.setState((state) => ({isChecked: !state.isChecked}));
    };


    render() {
        return (
            <section className='settings'>
                <Sidebar/>
                <div className='container'>
                    <div className='settings__box'>
                        <h1 className='settings__title'>Setting</h1>
                        <p className='settings__text'>Add some cards</p>
                        <p className='settings__count'>{this.state.range}</p>
                        <input onChange={this.isRange} value={this.state.range} type="range" className='range' min='1' max='12' step='1'/>
                        <label className='settings__checkbox'>Show cards on the main page
                            <input onClick={this.setShow.bind(this)} value={this.state.isChecked} type="checkbox"/>
                        </label>
                        <button className='settings__button' onClick={this.isSave}>Save</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arrA: state.data,
        arrB: state.dataRange,
        isShowingCards: state.isShowingCards
    }
};

export default connect (mapStateToProps, actions )(Setting);