import React, { Component } from 'react';

import './style.css';

class Modal extends Component {
    render() {
        let { showModal, closeModal, children } = this.props;
        return (
            <div className='modal'>
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
            </div>
        );
    }
}

export default Modal;