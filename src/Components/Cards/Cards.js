import React, { Component } from 'react';

import './style.css';

import Sidebar from '../Sidebar/Sidebar';
import CardsItems from '../Cards-items/Cards-items';

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';


class Cards extends Component{

    state = {
        isFetching: true
    };

    componentDidMount() {
        const wordsToLearn = this.props.wordsToLearn;
        const key = process.env.REACT_APP_MY_SECOND_API_KEY;
        wordsToLearn.forEach((el) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${key}`)
                .then(() => this.setState({ isFetching: false }));
        });
    };

    render() {
        let { isFetching } = this.state;

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
                                  </div>
                        : <CardsItems />}
                </div>
            </section>
        );
    }
}

Cards.defaultProps = {
    wordsToLearn: []
};

const mapStateToProps = (state) => {
    return {
        wordsToLearn: state.wordsToLearn
    }
};

export default connect (mapStateToProps, actions)(Cards);