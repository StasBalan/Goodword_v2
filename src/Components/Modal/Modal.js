import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';

var classNames = require('classnames');


class Modal extends Component {

    state = {
        srcImg: ''
    };

    componentDidMount() {
        const myClientId = process.env.REACT_APP_MY_API_KEY;
        let url = `https://api.unsplash.com/search/photos?client_id=${myClientId}&query=${this.props.title}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => this.setState({srcImg: data.results[0].urls.small}))
    }

    setToStore = () => {
        let {children, title, dataLocalStorage} = this.props;
        let childrenItem = children.props.children;
        // let arr = JSON.parse(localStorage.getItem('localKey')) || [];
        let array = [];
        let object = {
            title: title,
            disc: childrenItem,
            isFavorites: true
        };

        array.push(object);
        console.log(object);

        this.props.saveInLocalStorage(array);
        console.log(this.props.dataLocalStorage);
        // arr.push(obj);
        // localStorage.setItem('localKey', JSON.stringify(arr));
    };


    render() {
        let {showModal, closeModal, children, title} = this.props;
        var testClass = classNames('modal-mainClass', {
            'modal-extraClass': showModal
        });
        return (
            ReactDOM.createPortal(
                <div className={testClass}>
                    <div className='modal-wrapper'
                         style={{
                             transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
                             opacity: showModal ? '1' : '0'
                         }}>
                        <div className="modal-header">
                            <h3>{`${title}`.toUpperCase()[0] + `${this.props.title}`.slice(1)}</h3>
                            <button onClick={this.setToStore}
                                    className='favorites-btn'>
                                <i className={this.state.isFavorites ? "fas fa-heart" : "far fa-heart"}/>
                            </button>
                            <span className="close-modal-btn"
                                  onClick={closeModal}>
                                ×
                            </span>
                        </div>
                        <div className="modal-body">
                            {children}
                            <img src={this.state.srcImg}
                                 alt=""/>
                        </div>
                    </div>
                </div>, document.body)
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataLocalStorage: state.dataLocalStorage
    }
};

export default connect (mapStateToProps, actions)(Modal);