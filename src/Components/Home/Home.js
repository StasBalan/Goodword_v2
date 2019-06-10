import React, { Component } from 'react';
import './style.css'

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
                <div className='container'>
                    <div className='section-home__inner'>
                        { this.state.isFetching ? <div className='loader' /> : <h1 className='section__title'>{this.state.data}</h1> }
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;