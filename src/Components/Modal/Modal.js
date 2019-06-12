import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class Modal extends Component {
    render() {
        let { showModal, closeModal, children } = this.props;
        return (
            ReactDOM.createPortal(
                <div className={showModal ? 'modal' : null} style={
                    {
                        background: showModal ? 'rgba(0,0,0,0.5)' : null,
                        position: showModal ? 'absolute' : null,
                        top: '0',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center'
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
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={closeModal}>CLOSE</button>
                    </div>
                </div>
            </div>, document.body)
        );
    }
}

export default Modal;