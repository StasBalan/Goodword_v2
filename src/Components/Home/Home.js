import React, { Component } from 'react';
import './style.css'

import Header from "../Header/Header";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: ``,
            isFetching: true
        };
    }


    componentDidMount() {
        fetch(`https://api.adviceslip.com/advice`)
            .then((er) => er.json())
            .then((data) => this.setState({data: data.slip.advice, isFetching: false}));
    }

    render() {
        return (
            <section className='section__home section-home'>
                <Header />
                    <h1 className='section__title'>Motivation</h1>
                    <div className='section-home__inner'>
                        { this.state.isFetching ?
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
                            : <p className='section__text'>{this.state.data}</p> }
                    </div>

            </section>
        );
    }
}

export default Home;