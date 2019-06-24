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

    componentDidMount = () => {
        let dataRange = this.props.dataRange;
        const key = process.env.REACT_APP_MY_SECOND_API_KEY;
        dataRange.forEach((el) => {
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

const mapStateToProps = (state) => {
    return {
        dataRange: state.dataRange
    }
};

export default connect (mapStateToProps, actions)(Cards);