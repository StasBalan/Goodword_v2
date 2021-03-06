import React, { Component } from 'react';

import './style.css'

import Header from "../Header/Header";
import CardsItems from "../Cards-items/Cards-items";

import { connect } from 'react-redux';
import * as actions from "../../actions/Actions";


class Home extends Component{

    state = {
        motivationText: ``,
        isFetching: true
    };

    componentDidMount() {
        fetch(`https://api.adviceslip.com/advice`)
            .then((er) => er.json())
            .then((data) => this.setState({motivationText: data.slip.advice, isFetching: false}));
    }

    render() {
        let { isFetching, motivationText } = this.state;
        let { isShowingCards } = this.props;
        return (
            <>
                <section className='section__home section-home'>
                    <Header />
                        <h1 className='section__title'>Motivation</h1>
                        <div className='section-home__inner'>
                            { isFetching ?
                                <div id="cube-loader">
                                    <div className="caption">
                                        <div className="cube-loader">
                                            <div className="cube loader-1"/>
                                            <div className="cube loader-2"/>
                                            <div className="cube loader-4"/>
                                            <div className="cube loader-3"/>
                                        </div>
                                    </div>
                                 </div>
                                : <p className='section__text'>{motivationText}</p> }
                        </div>
                </section>
                { isShowingCards ? <CardsItems/> : null }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShowingCards: state.isShowingCards
    }
};

export default connect (mapStateToProps, actions)(Home);
