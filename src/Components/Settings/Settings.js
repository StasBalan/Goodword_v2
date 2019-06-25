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

    handleSave = () => {
        const arr = this.props.vocabularyS;
        console.log(arr);
        const wordsToLearn = [];
        for ( let i = 0; i < this.state.range; i++ ) {
            const rand = Math.floor(Math.random() * arr.length);
            wordsToLearn.push(arr[rand]);
        }
        this.setState({range: '1'});
        alert(`Was added ${this.state.range} cards`);
        console.log(wordsToLearn);

        this.props.showingCards(this.setShow);
        this.props.filterVocabulary(wordsToLearn);
        this.props.addToStudyWords(wordsToLearn);
        // console.log(arr);
    };

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
                        <button className='settings__button' onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vocabularyS: state.vocabulary ? state.vocabulary : [],
        wordsToLearn: state.wordsToLearn ? state.wordsToLearn: [],
        isShowingCards: state.isShowingCards
    }
};

export default connect (mapStateToProps, actions )(Setting);