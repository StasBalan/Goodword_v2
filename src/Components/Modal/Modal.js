import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

var classNames = require('classnames');

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            srcImg: ''
        };
    }

    componentDidMount() {
        const myClientId = process.env.REACT_APP_MY_API_KEY;
        let url = `https://api.unsplash.com/search/photos?client_id=${myClientId}&query=${this.props.title}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => this.setState({srcImg: data.results[0].urls.small}))
    }

    render() {
        let { showModal, closeModal, children } = this.props;
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
                        <h3>{`${this.props.title}`.toUpperCase()[0] + `${this.props.title}`.slice(1)}</h3>
                        <span className="close-modal-btn" onClick={closeModal}>×</span>
                    </div>
                    <div className="modal-body">
                        {children}
                        <img src={this.state.srcImg} alt=""/>
                    </div>
                </div>
            </div>, document.body)
        );
    }
}

export default Modal;