import React, { Component } from 'react';

import './style.css'

import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';

class Setting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            range: '1'
        };
        this.isRange = this.isRange.bind(this);
        this.isSave = this.isSave.bind(this);
    }

    isRange(e) {
        let value = Number(e.target.value);
        this.setState({
            range: value
        })
    }

    isSave(){
        let arr = this.props.arrA;
        let newArr = this.props.arrB;
        for ( let j = 0; j < this.state.range; j++ ) {
            let rand = Math.floor(Math.random() * arr.length);
            newArr.push(arr[rand]);
            arr.splice(rand, 1);
        }
        this.props.actionSave(arr);
        this.props.actionSave(newArr);
        // console.log(arr);
    }

    render() {
        return (
            <section className='settings'>
                <div className='container'>
                    <h1>Setting</h1>
                    <div className='settings__box'>
                        <p>{this.state.range}</p>
                        <input onChange={this.isRange} value={this.state.range} type="range" className='range' min='1' max={this.props.arrA.length} step='1'/>
                        <button onClick={this.isSave}>Save</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arrA: state.data,
        arrB: state.dataRange
    }
};

export default connect (mapStateToProps, actions )(Setting);