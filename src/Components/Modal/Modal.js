import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/Actions';

var classNames = require('classnames');


class Modal extends Component {

    state = {
        srcImg: '',
        isFavorites: false,
        obj: {
            title: this.props.title,
            disc: this.props.children.props.children,
            isFavorites: true
        }
    };

    componentDidMount() {
        const myClientId = process.env.REACT_APP_MY_API_KEY;
        let url = `https://api.unsplash.com/search/photos?client_id=${myClientId}&query=${this.props.title}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => this.setState({srcImg: data.results[0].urls.small}))
    }

    componentDidUpdate(props) {
        // console.log(props.favorites.isFavorites);
        console.log(props.favorites.title);
        if (this.state.isFavorites !== this.state.obj.isFavorites) {
            this.setState({isFavorites: !this.state.isFavorites});
        }
    }


    setToStore = () => {
        let {children, title, favorites} = this.props;
        let childrenItem = children.props.children;
        // let arr = JSON.parse(localStorage.getItem('localKey')) || [];
        let array = [];
        // let object = {
        //     title: title,
        //     disc: childrenItem,
        //     isFavorites: true
        // };
        this.setState((state) => ({isFavorites: !state.isFavorites}));
        array.push(this.state.obj);
        this.props.saveInLocalStorage(array);
        console.log(array);

        console.log(this.props.favorites);
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
                            {/*<input onChange={this.setToStore} type="checkbox" checked={this.props.isFavorites}/>*/}
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
        favorites: state.favorites || [],
    }
};

export default connect (mapStateToProps, actions)(Modal);