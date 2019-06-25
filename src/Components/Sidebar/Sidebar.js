import React, { Component } from "react";

import './style.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../../actions/Actions";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widthSidebar: '0',
            listArray: [
                    {title: 'Home', route: '/'},
                    {title: 'Cards', route: '/cards'},
                    {title: 'Settings', route: '/settings'},
                    {title: 'Favorites', route: '/store'}
                ]
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({widthSidebar: '300px'})
    }

    handleClose() {
        this.setState({widthSidebar: '0'})
    }

    render() {
        let { listArray } = this.state;
        const elementsSidebar = listArray.map((item, index) => {
            return (
                <li key={index} className='header__item header-item'>
                    <Link to={item.route} className='header-item__link'>{item.title}</Link>
                </li>
            );
        });
        return (
            <div>
                <span className='burger' onClick={this.handleOpen}>&#9776;</span>
                <ul className='header__menu' style={{width: this.state.widthSidebar}}>
                    <span className='close-btn' onClick={this.handleClose}>&#xd7;</span>
                    {elementsSidebar}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      dataRange: state.dataRange
  }
};

export default connect (mapStateToProps, actions)(Sidebar);