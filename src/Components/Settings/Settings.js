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
        console.log('сохраняем range', value)
        this.setState({
            range: value
        })
    }

    handleSave = () => {
        const arr = this.props.vocabulary;
        console.log('сработал handleSave',this.props, this.state);
        const wordsToLearn = [];
        for ( let i = 0; i < this.state.range; i++ ) {
            const rand = Math.floor(Math.random() * arr.length);
            console.log('выбираем случайный rand', rand)
            wordsToLearn.push(arr[rand]);
            arr.splice([rand], 1);
        }
        // alert(`Was added ${this.state.range} cards`); // - эта штука портит всё, никогда так не делай
        // кстати ты можешь расскоментировать этот alert и посмотреть что у тебя происходит :)
        console.log(wordsToLearn);
        console.log('запуск actions', wordsToLearn)
        if (wordsToLearn) {
            console.log('перед filterVocabulary')
            this.props.filterVocabulary(arr);
            console.log('перед addToStudyWords')
            this.props.addToStudyWords(wordsToLearn);
            // console.log(arr);
            // setState вызывает перерендер, страсывай локальный стейт только после того как сделал все нужные действия
            this.setState({range: '1'});
        }
    };

    setShow = () => {
        this.props.showingCards();
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
                            <input onChange={this.setShow} type="checkbox" checked={this.props.isShowingCards}/>
                        </label>
                        <button className='settings__button' onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('делаем пропсы на основе стейта в mapStateToProps', state)
    return {
        vocabulary: state.vocabulary,
        wordsToLearn: state.wordsToLearn,
        isShowingCards: state.isShowingCards
    }
};

export default connect (mapStateToProps, actions )(Setting);