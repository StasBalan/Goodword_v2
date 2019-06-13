import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            srcImg: ''
        };
    }

    componentDidMount() {
        fetch(`https://api.unsplash.com/search/photos?client_id=3600e79e752283c702d8928b0abbac28e7b0bd1b3108dfdb1d4c091a2b46a01d&query=${this.props.title}`)
            .then((res) => res.json())
            .then((data) => this.setState({srcImg: data.results[0].urls.small}))
    }

    render() {
        let { showModal, closeModal, children } = this.props;
        return (
            ReactDOM.createPortal(
                <div className={showModal ? 'modal' : null} style={
                    {
                        background: showModal ? 'rgba(0,0,0,0.7)' : null,
                        position: showModal ? 'fixed' : null,
                        top: '0',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }
                }>
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